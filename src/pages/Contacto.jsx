import { useEffect, useRef, useState } from 'react'
import {
	ArrowUpRight,
	Clock3,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
} from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'
import api from '../api/api'

const emailAddress = 'info@ipawsport.com'

const services = [
	'Certificado CEXGAN',
	'Pasaporte europeo',
	'Serología de rabia',
	'Vacunación',
	'Microchip',
	'Requisitos del destino',
	'Otra consulta',
]

const createChallenge = () => {
	const first = Math.floor(Math.random() * 9) + 1
	const second = Math.floor(Math.random() * 9) + 1
	return { first, second, answer: first + second }
}

const revealTransition = {
	duration: 0.6,
	ease: [0.22, 1, 0.36, 1],
}

const Reveal = ({ children, className = '', delay = 0 }) => {
	const prefersReducedMotion = useReducedMotion()

	return (
		<motion.div
			initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={
				prefersReducedMotion ? { duration: 0 } : { ...revealTransition, delay }
			}
			className={className}>
			{children}
		</motion.div>
	)
}

const inputClassName =
	'mt-2 w-full rounded-md border border-[#DCE7E3] bg-white px-4 py-3 text-base text-[#103E38] outline-none transition-colors placeholder:text-slate-400 hover:border-[#A7BCBA] focus-visible:border-[#18A192] focus-visible:ring-2 focus-visible:ring-[#18A192]/20'

const ContactField = ({
	id,
	label,
	required = false,
	className = '',
	children,
}) => (
	<div className={className}>
		<label htmlFor={id} className='text-sm font-medium text-[#103E38]'>
			{label}
			{required && <span aria-hidden='true'> *</span>}
		</label>
		{children}
	</div>
)

const Contacto = () => {
	const { t, i18n } = useTranslation()
	const tr = text => translateText(t, text)

	const formRef = useRef(null)
	const honeypotRef = useRef(null)
	const submitLockRef = useRef(false)

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		destination: '',
		travelDate: '',
		petType: '',
		service: '',
		message: '',
		privacyAccepted: false,
	})

	const [challenge, setChallenge] = useState(createChallenge)
	const [challengeAnswer, setChallengeAnswer] = useState('')
	const [challengeError, setChallengeError] = useState('')
	const [status, setStatus] = useState({ type: '', message: '' })
	const [isSubmitting, setIsSubmitting] = useState(false)

	useEffect(() => {
		const previousTitle = document.title
		const description = document.querySelector('meta[name="description"]')
		const previousDescription = description?.content
		const descriptionTag = description || document.createElement('meta')

		document.title = translateText(t, 'Contacto | iPawsport')
		descriptionTag.name = 'description'
		descriptionTag.content = translateText(
			t,
			'Cuéntanos el destino y la fecha de tu viaje. iPawsport te orienta sobre documentación y preparación veterinaria para viajar con tu mascota.',
		)

		if (!description) {
			document.head.appendChild(descriptionTag)
		}

		return () => {
			document.title = previousTitle

			if (description) {
				description.content = previousDescription
			} else {
				descriptionTag.remove()
			}
		}
	}, [i18n.language, t])

	const updateField = event => {
		const { name, value, checked, type } = event.target

		setFormData(current => ({
			...current,
			[name]: type === 'checkbox' ? checked : value,
		}))

		if (status.type === 'error') {
			setStatus({ type: '', message: '' })
		}
	}

	const handleSubmit = async event => {
		event.preventDefault()

		if (submitLockRef.current) return

		setStatus({ type: '', message: '' })
		setChallengeError('')

		if (!formRef.current?.reportValidity()) return

		if (honeypotRef.current?.value) {
			setStatus({
				type: 'error',
				message:
					'No se pudo procesar la consulta. Revisa los datos e inténtalo de nuevo.',
			})
			return
		}

		if (Number(challengeAnswer) !== challenge.answer) {
			setChallengeError('La respuesta no es correcta. Vuelve a intentarlo.')
			return
		}

		submitLockRef.current = true
		setIsSubmitting(true)

		try {
			await api.enviarFormulario(formData)

			setStatus({
				type: 'success',
				message:
					'Hemos recibido tu consulta. Gracias por contactar con iPawsport.',
			})

			setFormData({
				name: '',
				email: '',
				phone: '',
				destination: '',
				travelDate: '',
				petType: '',
				service: '',
				message: '',
				privacyAccepted: false,
			})

			setChallengeAnswer('')
			setChallenge(createChallenge())
		} catch (error) {
			setStatus({
				type: 'error',
				message:
					error?.message ||
					'No se pudo enviar la consulta. Tus datos siguen en el formulario; inténtalo de nuevo o contáctanos por email o WhatsApp.',
			})
		} finally {
			submitLockRef.current = false
			setIsSubmitting(false)
		}
	}

	return (
		<div>
			<section className='border-y border-[#DCE7E3] bg-[#F7F9F8] py-14 sm:py-20'>
				<div className='mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10'>
					<Reveal className='lg:sticky lg:top-28 lg:self-start'>
						<p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#137F74] sm:text-sm'>
							{tr('Contacto')}
						</p>

						<h2 className='mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#103E38] sm:text-4xl'>
							{tr('Hablemos de tu próximo viaje')}
						</h2>

						<p className='mt-4 max-w-lg text-base leading-7 text-slate-600'>
							{tr(
								'Te ayudamos a identificar los trámites y requisitos veterinarios que necesitas según tu destino.',
							)}
						</p>

						<a
							href='https://wa.me/34672363701'
							target='_blank'
							rel='noopener noreferrer'
							className='mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#18A192] px-5 py-4 text-base font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#137F74] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#103E38] focus-visible:ring-offset-2 sm:w-auto'>
							<MessageCircle size={21} aria-hidden='true' />
							<span>{tr('Escríbenos por WhatsApp')}</span>
							<ArrowUpRight size={18} aria-hidden='true' />
						</a>

						<div className='mt-8 space-y-3'>
							<a
								href={`mailto:${emailAddress}`}
								className='group flex items-center gap-4 rounded-xl border border-[#DCE7E3] bg-white p-4 transition-colors hover:border-[#A7BCBA] hover:bg-[#F0F7F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18A192]'>
								<span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E8F5F2] text-[#137F74]'>
									<Mail size={20} aria-hidden='true' />
								</span>
								<span className='min-w-0 flex-1'>
									<span className='block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500'>
										{tr('Correo electrónico')}
									</span>
									<span className='mt-1 block break-words text-sm font-medium text-[#103E38] transition-colors group-hover:text-[#137F74] sm:text-base'>
										{emailAddress}
									</span>
								</span>
								<ArrowUpRight
									size={17}
									className='shrink-0 text-slate-400'
									aria-hidden='true'
								/>
							</a>

							<a
								href='tel:+34672363701'
								className='group flex items-center gap-4 rounded-xl border border-[#DCE7E3] bg-white p-4 transition-colors hover:border-[#A7BCBA] hover:bg-[#F0F7F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18A192]'>
								<span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E8F5F2] text-[#137F74]'>
									<Phone size={20} aria-hidden='true' />
								</span>
								<span className='min-w-0 flex-1'>
									<span className='block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500'>
										{tr('Teléfono')}
									</span>
									<span className='mt-1 block text-sm font-medium text-[#103E38] transition-colors group-hover:text-[#137F74] sm:text-base'>
										+34 672 36 37 01
									</span>
								</span>
								<ArrowUpRight
									size={17}
									className='shrink-0 text-slate-400'
									aria-hidden='true'
								/>
							</a>

							<div className='flex items-center gap-4 rounded-xl border border-[#DCE7E3] bg-white p-4'>
								<span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E8F5F2] text-[#137F74]'>
									<Clock3 size={20} aria-hidden='true' />
								</span>
								<span>
									<span className='block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500'>
										{tr('Tiempo de respuesta')}
									</span>
									<span className='mt-1 block text-sm font-medium text-[#103E38] sm:text-base'>
										{tr('Menos de 24 horas laborables')}
									</span>
								</span>
							</div>
						</div>

						<div className='mt-6 flex gap-3 rounded-xl border border-[#DCE7E3] bg-[#EDF6F3] p-4'>
							<MapPin
								size={20}
								className='mt-0.5 shrink-0 text-[#137F74]'
								aria-hidden='true'
							/>
							<div>
								<p className='text-sm font-semibold text-[#103E38]'>
									{tr('Servicio en Barcelona')}
								</p>
								<p className='mt-1 text-sm leading-6 text-slate-600'>
									{tr(
										'Consulta la disponibilidad de atención en Barcelona y alrededores.',
									)}
								</p>
							</div>
						</div>

						<p className='mt-4 border-l-2 border-[#18A192] pl-4 text-sm leading-6 text-slate-600'>
							{tr(
								'iPawsport gestiona documentación y preparación veterinaria. No ofrecemos transporte, vuelos ni traslados para mascotas.',
							)}
						</p>
					</Reveal>

					<Reveal delay={0.08}>
						<div className='border-t border-[#DCE7E3] pt-6 sm:pt-8'>
							<div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
								<div>
									<h2 className='text-2xl font-semibold text-[#103E38] sm:text-3xl'>
										{tr('Cuéntanos los detalles')}
									</h2>
									<p className='mt-2 text-sm text-slate-600'>
										{tr('Te responderemos con orientación adaptada a tu caso.')}
									</p>
								</div>
								<p className='text-xs text-slate-500'>
									<span aria-hidden='true'>*</span> {tr('Campos obligatorios')}
								</p>
							</div>

							<form
								id='contact-form'
								ref={formRef}
								onSubmit={handleSubmit}
								className='mt-7 scroll-mt-28 space-y-6'>
								<div className='grid gap-x-5 gap-y-5 sm:grid-cols-2'>
									<ContactField
										id='contact-name'
										label={tr('Nombre y apellidos')}
										required>
										<input
											id='contact-name'
											name='name'
											type='text'
											autoComplete='name'
											required
											maxLength={120}
											value={formData.name}
											onChange={updateField}
											className={inputClassName}
										/>
									</ContactField>

									<ContactField
										id='contact-email'
										label={tr('Correo electrónico')}
										required>
										<input
											id='contact-email'
											name='email'
											type='email'
											autoComplete='email'
											required
											maxLength={254}
											value={formData.email}
											onChange={updateField}
											className={inputClassName}
										/>
									</ContactField>

									<ContactField
										id='contact-phone'
										label={tr('Teléfono o WhatsApp')}>
										<input
											id='contact-phone'
											name='phone'
											type='tel'
											autoComplete='tel'
											maxLength={40}
											placeholder={tr('Opcional')}
											value={formData.phone}
											onChange={updateField}
											className={inputClassName}
										/>
									</ContactField>

									<ContactField
										id='contact-destination'
										label={tr('Destino del viaje')}
										required>
										<input
											id='contact-destination'
											name='destination'
											type='text'
											autoComplete='off'
											required
											maxLength={120}
											placeholder={tr('País o ciudad')}
											value={formData.destination}
											onChange={updateField}
											className={inputClassName}
										/>
									</ContactField>

									<ContactField
										id='contact-date'
										label={tr('Fecha prevista del viaje')}
										required>
										<input
											id='contact-date'
											name='travelDate'
											type='date'
											required
											value={formData.travelDate}
											onChange={updateField}
											className={inputClassName}
										/>
									</ContactField>

									<ContactField
										id='contact-pet'
										label={tr('Tipo de mascota')}
										required>
										<select
											id='contact-pet'
											name='petType'
											required
											value={formData.petType}
											onChange={updateField}
											className={inputClassName}>
											<option value='' disabled>
												{tr('Selecciona una opción')}
											</option>
											<option value='perro'>{tr('Perro')}</option>
											<option value='gato'>{tr('Gato')}</option>
											<option value='otro'>{tr('Otro')}</option>
										</select>
									</ContactField>

									<ContactField
										id='contact-service'
										label={tr('Servicio que necesitas')}
										required
										className='sm:col-span-2'>
										<select
											id='contact-service'
											name='service'
											required
											value={formData.service}
											onChange={updateField}
											className={inputClassName}>
											<option value='' disabled>
												{tr('Selecciona el motivo de tu consulta')}
											</option>
											{services.map(service => (
												<option key={service} value={service}>
													{tr(service)}
												</option>
											))}
										</select>
									</ContactField>

									<ContactField
										id='contact-message'
										label={tr('Mensaje o detalles del viaje')}
										required
										className='sm:col-span-2'>
										<textarea
											id='contact-message'
											name='message'
											required
											minLength={10}
											maxLength={3000}
											rows={5}
											placeholder={tr(
												'Cuéntanos lo que ya sabes del viaje y las dudas que tienes.',
											)}
											value={formData.message}
											onChange={updateField}
											className={`${inputClassName} resize-y`}
										/>
									</ContactField>
								</div>

								<div className='border-t border-[#DCE7E3] pt-5'>
									<label
										htmlFor='contact-challenge'
										className='text-sm font-medium text-[#103E38]'>
										{t(
											'Verificación antispam: ¿cuánto es {{first}} + {{second}}?',
											{
												ns: 'content',
												first: challenge.first,
												second: challenge.second,
												keySeparator: false,
											},
										)}{' '}
										<span aria-hidden='true'>*</span>
									</label>

									<input
										id='contact-challenge'
										name='challengeAnswer'
										type='number'
										inputMode='numeric'
										required
										value={challengeAnswer}
										onChange={event => {
											setChallengeAnswer(event.target.value)
											setChallengeError('')
										}}
										aria-invalid={Boolean(challengeError)}
										aria-describedby={
											challengeError ? 'challenge-error' : undefined
										}
										className={`${inputClassName} max-w-40`}
									/>

									{challengeError && (
										<p
											id='challenge-error'
											className='mt-2 text-sm text-red-700'
											role='alert'>
											{tr(challengeError)}
										</p>
									)}
								</div>

								<div className='space-y-3'>
									<label
										htmlFor='contact-privacy'
										className='flex items-start gap-3 text-sm leading-6 text-slate-600'>
										<input
											id='contact-privacy'
											name='privacyAccepted'
											type='checkbox'
											required
											checked={formData.privacyAccepted}
											onChange={updateField}
											className='mt-1 h-4 w-4 shrink-0 accent-[#18A192] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18A192] focus-visible:ring-offset-2'
										/>
										<span>
											{tr(
												'Acepto que iPawsport utilice mis datos para responder a esta consulta.',
											)}{' '}
											<a
												href='/politica-de-privacidad'
												className='font-medium text-[#137F74] underline decoration-[#A7BCBA] underline-offset-4 transition-colors hover:text-[#103E38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18A192]'>
												{tr('Consultar la política de privacidad')}
											</a>
											.
										</span>
									</label>
								</div>

								<div
									className='absolute -left-[10000px] top-auto h-px w-px overflow-hidden'
									aria-hidden='true'>
									<label htmlFor='contact-website'>
										{tr('Deja este campo vacío')}
									</label>
									<input
										id='contact-website'
										ref={honeypotRef}
										name='website'
										type='text'
										tabIndex={-1}
										autoComplete='off'
									/>
								</div>

								{status.message && (
									<p
										className={`border-l-2 px-4 py-3 text-sm leading-6 ${
											status.type === 'success'
												? 'border-[#18A192] bg-[#18A192]/5 text-[#103E38]'
												: 'border-red-700 bg-red-50 text-red-800'
										}`}
										role={status.type === 'success' ? 'status' : 'alert'}
										aria-live={
											status.type === 'success' ? 'polite' : 'assertive'
										}>
										{tr(status.message)}
									</p>
								)}

								<button
									type='submit'
									disabled={isSubmitting}
									className='inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#18A192] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#137F74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#103E38] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 sm:w-auto'>
									{isSubmitting
										? tr('Enviando consulta…')
										: tr('Enviar mi consulta')}
								</button>
							</form>
						</div>
					</Reveal>
				</div>
			</section>
		</div>
	)
}

export default Contacto
