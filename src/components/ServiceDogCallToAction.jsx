import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'
import { PawPrint } from 'lucide-react'
const ServiceDogCallToAction = () => {
	const { t } = useTranslation()

	return (
		<section className='bg-primary-lighter py-12 md:py-16'>
			<div className='mx-auto max-w-4xl px-4'>
				<div className='relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-dark to-[#147F76] p-7 text-white md:p-10'>
					{/* Decoración de fondo */}
					<div className='pointer-events-none absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full border border-white/10' />
					<div className='pointer-events-none absolute -right-8 -top-8 -z-10 h-40 w-40 rounded-full border border-white/10' />

					<div className='mx-auto max-w-2xl text-center'>
						{/* Icono de perro */}
						<div className='mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10'>
							<PawPrint
								className='h-7 w-7 text-primary-light'
								strokeWidth={1.7}
								aria-hidden='true'
							/>
						</div>
						{/* Etiqueta */}
						<span className='text-xs font-semibold uppercase tracking-[0.2em] text-primary-light'>
							{translateText(t, 'Service Dog')}
						</span>

						<h2 className='mt-4 text-3xl font-semibold leading-tight md:text-4xl'>
							{translateText(
								t,
								'¿Buscas información sobre perros de asistencia?',
							)}
						</h2>

						<p className='mx-auto mt-5 max-w-xl leading-7 text-white/80'>
							{translateText(
								t,
								'Te ponemos en contacto con uno de nuestros colaboradores especializados en perros de asistencia para que conozcas las opciones disponibles y recibas información sobre el proceso.',
							)}
						</p>

						{/* Botón */}
						<a
							href='https://servicesdogsspain.es/'
							target='_blank'
							rel='noopener noreferrer'
							className='mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#147F76]'>
							{translateText(t, 'Descubrir el servicio')}

							<svg
								className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1.8'
								aria-hidden='true'>
								<path
									d='M7 17 17 7M7 7h10v10'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</a>

						{/* Aclaración de colaboración */}
						<p className='mt-5 text-xs leading-5 text-white/60'>
							{translateText(
								t,
								'Servicio ofrecido por una empresa colaboradora.',
							)}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ServiceDogCallToAction
