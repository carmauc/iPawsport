import Reveal from '../Reveal'
import DetailedServices from '../DetailedServices'
import SectionTitle from '../SectionTitle'
import petCareImage from '../../assets/Experiencia.png'
import documentsImage from '../../assets/Gestion.png'
import { useTranslation } from 'react-i18next'
import { translateText } from '../../i18n/translate'

const mainServices = [
	{
		eyebrow: 'Viajes fuera de la Unión Europea',
		title: 'Certificado CEXGAN',
		description:
			'Gestionamos el Certificado Oficial de Exportación emitido por el Ministerio de Agricultura, Pesca y Alimentación para acreditar que tu mascota cumple los requisitos de entrada del país de destino.',
		image: documentsImage,
		imageAlt:
			'Pasaporte europeo y documentación veterinaria para viajar con mascotas',
		items: [
			'Revisión veterinaria y orientación personalizada',
			'Certificado de salud CVS cuando se requiera',
			'Preparación y seguimiento de la solicitud',
		],
	},
	{
		eyebrow: 'Viajes dentro de la Unión Europea',
		title: 'Pasaporte Europeo',
		description:
			'Preparamos el pasaporte europeo para que tu compañero pueda viajar contigo por la Unión Europea cumpliendo los requisitos de identificación y salud.',
		image: petCareImage,
		imageAlt: 'Veterinaria atendiendo a una mascota antes de su viaje',
		items: [
			'Identificación mediante microchip',
			'Revisión de vacunas y cartilla sanitaria',
			'Orientación sobre los requisitos del trayecto',
		],
	},
]

const ServicesFeactures = () => {
	const { t } = useTranslation()
	return (
		<>
			{/* SERVICIOS PRINCIPALES */}
			<section
				id='servicios-principales'
				className='mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<Reveal
					direction='bottom'
					delay={0.03}
					duration={1}
					distance='60px'
					className='max-w-3xl'>
					<SectionTitle
						text1='Servicios especializados'
						text2='Cada viaje tiene sus propios requisitos'
						text3='Te acompañamos desde la primera consulta hasta la preparación
            final, con una gestión clara y adaptada a tu mascota y a tu
            destino.'
						align='left'
					/>
				</Reveal>

				<div className='mt-16 space-y-20 md:mt-24 md:space-y-28'>
					{mainServices.map((service, index) => (
						<Reveal
							key={service.title}
							direction={index === 0 ? 'left' : 'right'}
							duration={1}
							distance='70px'>
							<article className='grid items-center gap-10 md:grid-cols-2 md:gap-16'>
								{/* IMAGEN */}
								<div
									className={`overflow-hidden rounded-3xl bg-[#F1F5F4] ${
										index === 1 ? 'md:order-2' : ''
									}`}>
									<img
										src={service.image}
										alt={translateText(t, service.imageAlt)}
										className='aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]'
										loading='lazy'
									/>
								</div>

								{/* CONTENIDO */}
								<div className={index === 1 ? 'md:order-1' : ''}>
									<span className='text-xs font-semibold uppercase tracking-[0.18em] text-primary'>
										{translateText(t, service.eyebrow)}
									</span>

									<h3 className='mt-4 text-3xl font-semibold leading-tight text-primary-dark md:text-4xl'>
										{translateText(t, service.title)}
									</h3>

									<p className='mt-5 text-base leading-7 text-slate-600 md:text-lg'>
										{translateText(t, service.description)}
									</p>

									<ul className='mt-7 divide-y divide-primary/15 border-y border-primary/15'>
										{service.items.map(item => (
											<li
												key={item}
												className='flex items-center gap-3 py-3 text-sm text-slate-700 md:text-base'>
												<span className='flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-lighter text-primary'>
													<svg
														className='h-3 w-3'
														viewBox='0 0 24 24'
														fill='none'
														stroke='currentColor'
														strokeWidth='2'>
														<path
															d='m5 12 4 4L19 6'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
												</span>

												{translateText(t, item)}
											</li>
										))}
									</ul>
								</div>
							</article>
						</Reveal>
					))}
				</div>
			</section>

			{/* PREPARACIÓN VETERINARIA */}
			<div className='mx-auto max-w-6xl px-5 md:px-8'>
				<Reveal className='max-w-3xl'>
					<p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
						{translateText(t, 'Atención integral')}
					</p>

					<h2 className='mt-4 text-3xl font-semibold text-primary-dark md:text-5xl'>
						{translateText(t, 'También nos ocupamos de')}
					</h2>
				</Reveal>
				<DetailedServices excludeFirst={2} />
			</div>
		</>
	)
}

export default ServicesFeactures
