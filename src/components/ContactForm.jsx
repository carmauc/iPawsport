import { useMemo, useState } from 'react'

const generateCaptcha = () => {
	const a = Math.floor(Math.random() * 9) + 1
	const b = Math.floor(Math.random() * 9) + 1
	return { a, b, answer: a + b }
}

const fieldClassName =
	'w-full px-4 py-3 bg-white rounded-lg border-2 border-white/80 text-gray-700 placeholder-gray-400 resize-none transition-all duration-200 outline-none hover:border-primary-light focus:border-primary focus:ring-2 focus:ring-primary/30 focus:shadow-[0_0_0_3px_rgba(24,161,146,0.15)]'

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})
	const [captchaInput, setCaptchaInput] = useState('')
	const [captcha, setCaptcha] = useState(generateCaptcha)
	const [errors, setErrors] = useState({})
	const [submitted, setSubmitted] = useState(false)

	const captchaLabel = useMemo(
		() => `¿Cuánto es ${captcha.a} + ${captcha.b}?`,
		[captcha.a, captcha.b],
	)

	const updateField = field => e => {
		setFormData(prev => ({ ...prev, [field]: e.target.value }))
		if (errors[field]) {
			setErrors(prev => ({ ...prev, [field]: '' }))
		}
	}

	const validate = () => {
		const nextErrors = {}

		if (!formData.name.trim()) {
			nextErrors.name = 'Indica tu nombre'
		}
		if (!formData.email.trim()) {
			nextErrors.email = 'Indica tu correo'
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			nextErrors.email = 'Correo no válido'
		}
		if (!formData.message.trim()) {
			nextErrors.message = 'Escribe tu mensaje'
		}
		if (!captchaInput.trim()) {
			nextErrors.captcha = 'Resuelve la verificación'
		} else if (Number(captchaInput) !== captcha.answer) {
			nextErrors.captcha = 'Respuesta incorrecta'
		}

		setErrors(nextErrors)
		return Object.keys(nextErrors).length === 0
	}

	const handleSubmit = e => {
		e.preventDefault()
		setSubmitted(false)

		if (!validate()) return

		const body = encodeURIComponent(
			`Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone || 'No indicado'}\n\n${formData.message}`,
		)
		window.open(
			`mailto:info@ipawsport.com?subject=Contacto web&body=${body}`,
			'_blank',
		)

		setSubmitted(true)
		setFormData({ name: '', email: '', phone: '', message: '' })
		setCaptchaInput('')
		setCaptcha(generateCaptcha())
	}

	const refreshCaptcha = () => {
		setCaptcha(generateCaptcha())
		setCaptchaInput('')
		setErrors(prev => ({ ...prev, captcha: '' }))
	}

	return (
		<section
			id='contacto'
			className='py-16 bg-gradient-to-br from-primary-dark to-primary'>
			<div className='max-w-xl mx-auto px-4'>
				<div className='text-center mb-8'>
					<h2 className='text-2xl md:text-3xl font-playfair text-white mb-2'>
						Contacto
					</h2>
					<p className='text-white/85 text-sm'>
						Cuéntanos qué necesitas y te responderemos lo antes posible
					</p>
				</div>

				<form onSubmit={handleSubmit} className='space-y-4' noValidate>
					<div>
						<label htmlFor='contact-name' className='sr-only'>
							Nombre
						</label>
						<input
							id='contact-name'
							type='text'
							placeholder='Nombre *'
							value={formData.name}
							onChange={updateField('name')}
							className={fieldClassName}
							autoComplete='name'
						/>
						{errors.name && (
							<p className='mt-1 text-sm text-red-200' role='alert'>
								{errors.name}
							</p>
						)}
					</div>

					<div>
						<label htmlFor='contact-email' className='sr-only'>
							Email
						</label>
						<input
							id='contact-email'
							type='email'
							placeholder='Email *'
							value={formData.email}
							onChange={updateField('email')}
							className={fieldClassName}
							autoComplete='email'
						/>
						{errors.email && (
							<p className='mt-1 text-sm text-red-200' role='alert'>
								{errors.email}
							</p>
						)}
					</div>

					<div>
						<label htmlFor='contact-phone' className='sr-only'>
							Teléfono
						</label>
						<input
							id='contact-phone'
							type='tel'
							placeholder='Teléfono'
							value={formData.phone}
							onChange={updateField('phone')}
							className={fieldClassName}
							autoComplete='tel'
						/>
					</div>

					<div>
						<label htmlFor='contact-message' className='sr-only'>
							Mensaje
						</label>
						<textarea
							id='contact-message'
							placeholder='Mensaje *'
							rows={5}
							value={formData.message}
							onChange={updateField('message')}
							className={fieldClassName}
						/>
						{errors.message && (
							<p className='mt-1 text-sm text-red-200' role='alert'>
								{errors.message}
							</p>
						)}
					</div>

					{/* Captcha: sustituir este bloque por reCAPTCHA/hCaptcha si lo integras en producción */}
					<div
						className='rounded-lg border-2 border-dashed border-white/40 bg-white/10 p-4 space-y-3'
						aria-label='Verificación anti-spam'>
						<div className='flex items-center justify-between gap-3'>
							<label
								htmlFor='contact-captcha'
								className='text-white text-sm font-medium'>
								{captchaLabel}
							</label>
							<button
								type='button'
								onClick={refreshCaptcha}
								className='text-xs text-white/80 hover:text-white underline shrink-0'
								aria-label='Generar otra operación'>
								Cambiar
							</button>
						</div>
						<input
							id='contact-captcha'
							type='number'
							inputMode='numeric'
							placeholder='Tu respuesta'
							value={captchaInput}
							onChange={e => {
								setCaptchaInput(e.target.value)
								if (errors.captcha) {
									setErrors(prev => ({ ...prev, captcha: '' }))
								}
							}}
							className={fieldClassName}
						/>
						{errors.captcha && (
							<p className='text-sm text-red-200' role='alert'>
								{errors.captcha}
							</p>
						)}
					</div>

					{submitted && (
						<p
							className='text-center text-sm text-white bg-white/15 rounded-lg py-3 px-4'
							role='status'>
							Mensaje preparado. Revisa tu cliente de correo para enviarlo.
						</p>
					)}

					<div className='flex justify-center pt-2'>
						<button
							type='submit'
							className='px-12 py-3.5 bg-white text-primary-dark rounded-full font-medium hover:bg-primary-lighter hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary'>
							Enviar
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default ContactForm
