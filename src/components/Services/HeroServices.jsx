import travelHero from '../../assets/Hero copia.webp'
import Letters from '../Letters'
import { useTranslation } from 'react-i18next'
import { translateText } from '../../i18n/translate'

const HeroServices = () => {
	const { t } = useTranslation()
	return (
		<div>
			<section className='relative isolate flex min-h-[34rem] items-center overflow-hidden bg-primary-dark md:min-h-[40rem]'>
				<img
					src={travelHero}
					alt={translateText(
						t,
						'Perro preparado para viajar con su pasaporte y equipaje',
					)}
					className='absolute inset-0 -z-20 h-full w-full object-cover object-center'
				/>
				<div className='absolute inset-0 -z-10 bg-gradient-to-r from-primary-dark/90 via-primary-dark/65 to-primary-dark/10' />

				<div className='mx-auto w-full max-w-6xl px-5 py-20 md:px-8'>
					<div className='max-w-2xl text-white'>
						<p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-light'>
							<Letters
								text={translateText(t, 'Atención veterinaria y documentación')}
								delay={0.08}
							/>
						</p>
						<h1 className='mt-5 text-4xl font-semibold leading-tight md:text-5xl'>
							<Letters
								text={translateText(t, 'Servicios para viajar juntos')}
								delay={0.08}
							/>
						</h1>
						<p className='mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl'>
							{translateText(
								t,
								'Gestionamos certificados, vacunas y documentación oficial para que tu mascota viaje segura y conforme a los requisitos de cada destino.',
							)}
						</p>
						<a
							href='#servicios-principales'
							className='mt-8 inline-flex items-center border-b border-primary-light pb-2 text-sm font-semibold text-white transition-colors hover:text-primary-light'>
							{translateText(t, 'Descubrir nuestros servicios')}
							<span aria-hidden='true' className='ml-3 text-lg'>
								↓
							</span>
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}

export default HeroServices
