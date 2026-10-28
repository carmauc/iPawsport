import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'

const servicesGeneral = [
	{
		icon: 'https://ext.same-assets.com/2620247170/1137120596.svg',
		title: 'CEXGAN',
		description:
			'Gestionamos el certificado oficial para viajar fuera de la Unión Europea.',
	},
	{
		icon: 'https://ext.same-assets.com/2620247170/63566163.svg',
		title: 'Pasaporte Europeo',
		description: 'Preparamos y actualizamos el pasaporte de tu mascota.',
	},
	{
		icon: 'https://ext.same-assets.com/2620247170/2034196141.svg',
		title: 'Vacunas y requisitos',
		description: 'Revisamos vacunas, microchip y requisitos según tu destino.',
	},
]

const Features = () => {
	const { t } = useTranslation()

	return (
		<section
			id='features'
			className='bg-primary-lighter px-4 py-16 md:px-16 lg:px-24 xl:px-32'>
			<SectionTitle
				text1={translateText(t, 'Enfoque integral')}
				text2={translateText(t, 'Preparamos cada detalle de tu viaje')}
				text3={translateText(
					t,
					'Un servicio profesional pensado para que tú y tu mascota viajéis preparados y con tranquilidad.',
				)}
			/>

			<div className='mx-auto mt-16 grid max-w-5xl grid-cols-1 items-stretch gap-6 px-2 sm:grid-cols-2 lg:grid-cols-3'>
				{servicesGeneral.map((service, index) => (
					<div key={service.title} className='group h-full w-full'>
						<Reveal direction='bottom' delay={index * 0.4} duration={1}>
							{/* Borde degradado */}
							<div className='h-full rounded-[13px] bg-gradient-to-br from-primary to-[#147F76] p-[2px] shadow-lg'>
								{/* Interior de la tarjeta */}
								<div className='flex min-h-[220px] h-full flex-col items-start rounded-[11px] bg-primary-card p-5 transition-colors duration-300 group-hover:bg-primary-dark'>
									{/* Icono */}
									<div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#18AA9C]/20 bg-[#18AA9C]/10 transition-all duration-300 group-hover:border-[#18AA9C]/50 group-hover:bg-[#18AA9C]/20'>
										<img
											src={service.icon}
											alt=''
											aria-hidden='true'
											className='h-8 w-8 object-contain brightness-0 invert'
										/>
									</div>

									{/* Título */}
									<h3 className='mt-4 min-h-[24px] text-base font-semibold uppercase leading-6 text-white'>
										{translateText(t, service.title)}
									</h3>

									{/* Descripción */}
									<p className='mt-2 line-clamp-3 text-sm leading-5 text-slate-200'>
										{translateText(t, service.description)}
									</p>
								</div>
							</div>
						</Reveal>
					</div>
				))}
			</div>
		</section>
	)
}

export default Features
