import Reveal from './Reveal'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'
import SectionTitle from './SectionTitle'

const detailedServices = [
	{
		icon: 'https://ext.same-assets.com/2620247170/661816935.svg',
		title: 'Certificado CEXGAN',
		description:
			'¿Viajas fuera de la Unión Europea con tu mascota? No te preocupes: gestionamos el Certificado Oficial de Exportación para que tu mascota cumpla todos los requisitos.',
		highlight: '',
		reverse: false,
	},
	{
		icon: 'https://ext.same-assets.com/2620247170/1572173526.svg',
		title: 'Pasaporte',
		description: 'Gestionamos la emisión del ',
		highlight: 'Pasaporte Europeo para Mascotas',
		afterHighlight: ', indispensable para viajar con tu peludo.',
		reverse: true,
	},
	{
		icon: 'https://ext.same-assets.com/2620247170/3910927874.svg',
		title: 'Vacunas',
		description: 'Te ayudamos a poner al día las ',
		highlight: 'vacunas, desparasitación,',
		afterHighlight: ' y demás requisitos clave para viajar sin problemas.',
		reverse: false,
	},
	{
		icon: 'https://ext.same-assets.com/2620247170/3105304379.svg',
		title: 'Implantación de Microchip',
		description:
			'Prepara a tu mascota para viajar con total seguridad gracias a nuestro servicio de implantación de microchip y su registro.',
		highlight: '',
		reverse: true,
	},
	{
		icon: 'https://ext.same-assets.com/2620247170/3507389095.svg',
		title: 'Serología de Rabia',
		description: 'Gestionamos la determinación de anticuerpos contra la ',
		highlight: 'rabia',
		afterHighlight:
			', en colaboración con laboratorios IDEXX, referentes internacionales por su calidad y fiabilidad diagnóstica.',
		reverse: false,
	},
	{
		icon: 'https://ext.same-assets.com/2620247170/144759615.svg',
		title: 'Requisitos',
		description:
			'Te asesoramos sobre los requisitos veterinarios de tu destino y revisamos toda la documentación de tu mascota para que viajes con total tranquilidad.',
		highlight: '',
		reverse: true,
	},
]

const DetailedServices = ({ excludeFirst = 0 }) => {
	const { t } = useTranslation()
	return (
		<section className='mb-12 bg-primary-lighter text-center pb-12'>
			<div
				id='services'
				className='mx-auto max-w-6xl px-4 md:px-16 lg:px-24 pb-16'>
				{excludeFirst < 2 && (
					<SectionTitle
						text1={translateText(t, 'Nuestros servicios')}
						text2={translateText(
							t,
							'Cada viaje empieza con una buena preparación',
						)}
						text3={translateText(
							t,
							'Viajar con tu mascota a otro país puede plantear muchas dudas. Te ofrecemos asesoramiento veterinario especializado y soluciones adaptadas a tu destino para que sepas qué necesitas y cómo prepararlo.',
						)}
					/>
				)}
			</div>

			<div className='max-w-4xl mx-auto px-4 space-y-8'>
				{detailedServices.slice(excludeFirst).map((service, index) => (
					<Reveal
						key={index}
						direction={index % 2 === 0 ? 'left' : 'right'}
						duration={2}
						distance='100px'>
						<div
							className={`
                flex flex-col md:flex-row
                items-stretch
                bg-white
                rounded-xl
                overflow-hidden
                shadow-md
                hover:shadow-lg
                transition-shadow
                ${service.reverse ? 'md:flex-row-reverse' : ''}
              `}>
							{/* Icon Container */}
							<div className='w-full md:w-1/3 bg-gradient-to-br from-primary to-[#147F76] flex items-center justify-center p-8'>
								<img
									src={service.icon}
									alt={translateText(t, service.title)}
									className='w-24 h-24 filter brightness-0 invert'
								/>
							</div>

							{/* Content */}
							<div className='flex-1 p-6 flex flex-col justify-center'>
								<h3 className='text-2xl font-playfair text-primary mb-3'>
									{translateText(t, service.title)}
								</h3>

								<p className='text-gray-600 leading-relaxed'>
									{translateText(t, service.description)}

									{service.highlight && (
										<span className='font-semibold text-primary-dark'>
											{translateText(t, service.highlight)}
										</span>
									)}

									{translateText(t, service.afterHighlight)}
								</p>
							</div>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	)
}

export default DetailedServices
