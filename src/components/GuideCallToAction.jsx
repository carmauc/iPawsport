import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import { translateText } from '../i18n/translate'

const GuideCallToAction = () => {
	const { t } = useTranslation()

	return (
		<section
			id='guia'
			className='mb-12 bg-primary-lighter py-12 text-center md:py-16'>
			<div id='features' className='mx-auto max-w-6xl px-4 md:px-16 lg:px-24'>
				<SectionTitle
					text1={translateText(t, 'Tu guía de viaje')}
					text2={translateText(
						t,
						'Todo lo que necesitas saber antes de viajar con tu mascota',
					)}
					text3={translateText(
						t,
						'Descubre nuestra guía práctica con consejos y recomendaciones para preparar la documentación y viajar con tu mascota de forma segura y sin imprevistos.',
					)}
				/>
			</div>

			<Link
				to='/guia'
				className='mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-primary-dark'>
				{translateText(t, 'Descubrir la guía de viaje')}

				<svg
					className='h-5 w-5'
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
			</Link>
		</section>
	)
}

export default GuideCallToAction
