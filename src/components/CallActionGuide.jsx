import Reveal from './Reveal'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'

const CallActionGuide = () => {
	const { t } = useTranslation()
	return (
		<section className='relative overflow-hidden bg-gradient-to-br from-primary-dark to-[#147F76] py-12 md:py-14'>
			{/* Decoración */}
			<div className='pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/5' />
			<div className='pointer-events-none absolute -bottom-32 -left-24 h-64 w-64 rounded-full border border-white/5' />

			<div className='relative mx-auto max-w-6xl px-5 md:px-8'>
				<Reveal direction='bottom' delay={0.1} duration={0.8} distance='40px'>
					<div className='flex flex-col items-center justify-between gap-7 md:flex-row'>
						{/* Texto */}
						<div className='max-w-2xl text-center md:text-left'>
							<span className='text-xs font-semibold uppercase tracking-[0.18em] text-primary-light'>
								{translateText(t, '¿Listo para viajar con tu mascota?')}
							</span>

							<h2 className='mt-2 text-2xl font-semibold leading-tight text-white md:text-3xl'>
								{translateText(t, 'Estamos aquí para ayudarte.')}
							</h2>

							<p className='mt-3 text-sm leading-6 text-white/65 md:text-base'>
								{translateText(
									t,
									'Somos veterinarios con experiencia en certificados sanitarios, trámites CEXGAN y documentación necesaria para viajar con mascotas al extranjero.',
								)}
							</p>

							<p className='mt-4 text-xs font-medium text-white/80'>
								{translateText(
									t,
									'Contacta con nosotros sin compromiso y resuelve tus dudas.',
								)}{' '}
								<span className='ml-1 text-primary-light'>
									{translateText(
										t,
										'Respondemos en menos de 24 horas laborables.',
									)}
								</span>
							</p>
						</div>

						{/* Botones */}
						<div className='flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row md:flex-col lg:flex-row'>
							<a
								href={`https://wa.me/34672363701?text=${encodeURIComponent(translateText(t, 'Hola, quiero información para viajar con mi mascota'))}`}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20'>
								{translateText(t, 'Consultar mi viaje')}

								<svg
									className='h-4 w-4'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='1.8'>
									<path
										d='M5 12h14m-6-6 6 6-6 6'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</a>

							<a
								href='mailto:info@ipawsport.com'
								className='inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10'>
								{translateText(t, 'Contactar por email')}
							</a>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	)
}

export default CallActionGuide
