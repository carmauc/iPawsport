import hero from '..//assets/Hero.png'
import Letters from './Letters'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'

const Hero = () => {
	const { t } = useTranslation()
	return (
		// <section
		//   id="inicio"
		//   className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
		//     style={{
		//     backgroundImage: `linear-gradient(to right, rgba(16, 62, 56, 0.85), rgba(24, 161, 146, 0.6)), url(${hero}')`
		//   }}

		// >
		<section
			id='inicio'
			className='relative min-h-[600px] flex items-center overflow-hidden'>
			<img
				src={hero}
				alt={translateText(t, 'Imagen principal de iPawsport')}
				className='absolute inset-0 w-full h-full object-cover'
			/>

			{/* <div className="absolute inset-0 bg-gradient-to-r from-[#103E38]/85 to-[#18A192]/60" /> */}
			<div className='absolute top-4 right-6 md:right-8'>
				<h1 className='text-white font-source text-3xl font-light tracking-wide'>
					iPawsport
				</h1>
			</div>

			<div className='relative z-10 w-full'>
				{/* Brand Overlay */}

				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20'>
					<div className='max-w-2xl'>
						<h1 className=' text-2xl flex flex-wrap font-semi-bold sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight'>
							<Letters
								text={`${translateText(t, 'Documentación para viajar con')}`}
								delay={0.08}
							/>{' '}
							<Letters
								text={`${translateText(t, 'mascotas al extranjero')}`}
								delay={0.08}
							/>
						</h1>

						<p className='text-xl text-white/90 mb-8 font-light'>
							{translateText(t, 'Todo lo que tu Mascota Necesita para Viajar')}
						</p>

						<a
							href={`https://api.whatsapp.com/send?phone=34672363701&text=${encodeURIComponent(translateText(t, 'Hola iPawsport, quiero información para viajar con mi mascota'))}`}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-dark rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105 shadow-lg'>
							<svg className='w-5 h-5' viewBox='0 0 24 24' fill='currentColor'>
								<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
							</svg>
							{translateText(t, 'Contáctanos')}
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
