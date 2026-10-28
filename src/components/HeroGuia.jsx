import Reveal from './Reveal'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'

const HeroGuia = () => {
	const { t } = useTranslation()
	const requirements = [
		'Pasaporte o documentación del animal',
		'Vacunas actualizadas y revisión veterinaria',
		'Desparasitación interna y externa',
		'Certificado sanitario del país de origen o destino',
		'Seguro y permiso para la entrada en el país',
	]

	return (
		<section className='relative overflow-hidden'>
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(24,170,156,0.14),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(16,62,56,0.08),_transparent_34%)]' />

			<div className='relative max-w-6xl mx-auto px-4 py-16 md:py-24'>
				<div className='grid items-center gap-10 md:grid-cols-2'>
					<Reveal
						direction='top'
						duration={1.5}
						distance='100px'
						className='max-w-xl'>
						<span className='inline-flex items-center rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-medium text-primary-dark shadow-sm backdrop-blur-sm'>
							{translateText(t, 'Guía completa')}
						</span>

						<h1 className='mt-6 text-4xl font-bold leading-tight text-primary-dark md:text-6xl'>
							{translateText(t, 'Viajar con Mascotas')}
						</h1>

						<p className='mt-5 text-lg leading-relaxed text-slate-700'>
							{translateText(
								t,
								'Viajar o mudarse al extranjero con tu mascota puede ser sencillo y seguro. En iPawsport te guiamos paso a paso con el veterinario, la documentación y el viaje, para que tú y tu compañero peludo lleguen tranquilos y sin estrés.',
							)}
						</p>

						<div className='mt-8 flex flex-wrap gap-4'>
							<a
								href={`https://api.whatsapp.com/send?phone=34672363701&text=${encodeURIComponent(translateText(t, 'Hola iPawsport'))}`}
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary-dark'>
								{translateText(t, 'Solicitar presupuesto')}
							</a>
							<a
								href='mailto:info@ipawsport.com'
								className='inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-6 py-3 text-base font-semibold text-primary-dark transition-colors hover:border-primary hover:text-primary'>
								Hablar con un especialista
							</a>
						</div>

						<div className='mt-10 grid gap-4 sm:grid-cols-3'>
							{[
								[
									translateText(t, '4 pasos'),
									translateText(t, 'para una gestión tranquila'),
								],
								[
									translateText(t, '0 estrés'),
									translateText(t, 'sin dudas ni papeleo desordenado'),
								],
								[
									translateText(t, 'Atención'),
									translateText(t, 'personalizada para cada mascota'),
								],
							].map(([title, text], index) => (
								<div
									key={index}
									className='rounded-2xl border border-primary/10 bg-white/70 p-4 shadow-sm backdrop-blur-sm'>
									<p className='text-lg font-semibold text-primary-dark'>
										{title}
									</p>
									<p className='text-sm text-slate-600'>{text}</p>
								</div>
							))}
						</div>
					</Reveal>

					<Reveal
						direction='right'
						duration={1.5}
						distance='100px'
						className='relative'>
						<div className='rounded-[2rem] border border-primary/10 bg-white p-6 shadow-[0_30px_80px_rgba(16,62,56,0.12)]'>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-sm uppercase tracking-[0.2em] text-primary'>
										{translateText(t, 'Checklist')}
									</p>
									<h2 className='mt-2 text-2xl font-semibold text-primary-dark'>
										{translateText(t, 'Documentación esencial')}
									</h2>
								</div>
								<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-2xl'>
									🐾
								</div>
							</div>

							<div className='mt-8 space-y-4'>
								{requirements.map(item => (
									<div
										key={item}
										className='flex items-start gap-3 rounded-2xl bg-primary-lighter p-3'>
										<div className='mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white'>
											✔
										</div>
										<p className='text-sm text-slate-700'>
											{translateText(t, item)}
										</p>
									</div>
								))}
							</div>

							<div className='mt-8 rounded-2xl bg-gradient-to-br from-primary to-[#147F76] p-5 text-white'>
								<p className='text-sm uppercase tracking-[0.2em] text-primary-light'>
									{translateText(t, 'Tu viaje empieza aquí')}
								</p>
								<p className='mt-3 text-3xl font-semibold'>
									{translateText(t, 'Sin complicaciones')}
								</p>
								<p className='mt-2 text-sm text-slate-200'>
									{translateText(
										t,
										'Te acompañamos desde la consulta hasta la salida para que la preparación sea clara y segura.',
									)}
								</p>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	)
}

export default HeroGuia
