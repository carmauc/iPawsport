import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'
import SectionTitle from './SectionTitle'

const testimonials = [
	{
		text: 'Ya aterrizamos en Canada. Muchísimas gracias por todo; cuando regresemos, te contactaremos nuevamente. Un abrazo.',
		name: 'Carolina Burgos Vega',
		location: 'Canadá',
		image: 'https://ext.same-assets.com/2620247170/1305898996.jpeg',
	},
	{
		text: 'Excelente servicio, nos fue muy bien muy agradecidos 😁',
		name: 'Jhonatan Munera',
		location: 'EEUU',
		image: 'https://ext.same-assets.com/2620247170/3910762127.jpeg',
	},
	{
		text: 'Muchas gracias por darle seguimiento a mi gatita, el doctor fue muy atento! Estoy muy feliz de saber que podré viajar con ella y de que estará muy bien 😍🐱✈️',
		name: 'Ingrid Catalina Usuga',
		location: 'México',
		image: 'https://ext.same-assets.com/2620247170/2383920242.jpeg',
	},
	{
		text: 'Súper agradecida por los trámites que hiciste con mi perro para poderlo traerlo acá conmigo, cuando estábamos a distancia. Tú muy profesional y experto con todo lo correspondiente. Mil y mil gracias.',
		name: 'Natalia Restrepo',
		location: 'EEUU',
		image: 'https://ext.same-assets.com/2620247170/1353612486.jpeg',
	},
]

const Testimonials = () => {
	const { t } = useTranslation()
	const [currentIndex, setCurrentIndex] = useState(0)
	const [paused, setPaused] = useState(false)

	useEffect(() => {
		if (paused) return undefined

		const interval = setInterval(() => {
			setCurrentIndex(prev => (prev + 1) % testimonials.length)
		}, 6000)

		return () => clearInterval(interval)
	}, [paused])

	const goTo = index => {
		setCurrentIndex((index + testimonials.length) % testimonials.length)
	}

	const testimonial = testimonials[currentIndex]

	return (
		<section
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			onFocusCapture={() => setPaused(true)}
			onBlurCapture={event => {
				if (!event.currentTarget.contains(event.relatedTarget)) {
					setPaused(false)
				}
			}}
			aria-label={translateText(t, 'Testimonios de clientes')}>
			<div className='container mx-auto px-6'>
				{/* Header */}
				<SectionTitle
					text1={translateText(t, 'Opiniones de nuestros clientes')}
					text2={translateText(t, 'La confianza de nuestras familias')}
					text3={translateText(
						t,
						'Historias reales de familias que confiaron en nosotros para viajar con sus mascotas.',
					)}
				/>

				{/* <div className="flex justify-center items-center gap-1.5 mt-6">
            <span className="inline-block w-12 h-1 bg-primary rounded-full" />
            <span className="inline-block w-3 h-1 bg-primary/60 rounded-full" />
            <span className="inline-block w-1.5 h-1 bg-primary/30 rounded-full" />
          </div> */}

				{/* Testimonial card */}
				<div className='max-w-5xl mx-auto mt-12 md:mt-16'>
					<div className='relative px-6 md:px-16 '>
						{/* Stars */}
						<div
							className='flex justify-center gap-1 mt-2'
							aria-label={translateText(t, '5 estrellas')}>
							{[1, 2, 3, 4, 5].map(star => (
								<svg
									key={star}
									className='w-5 h-5 text-amber-400 fill-current'
									viewBox='0 0 20 20'
									aria-hidden='true'>
									<path d='M10 1.5l2.6 5.3 5.9.9-4.25 4.15 1 5.85L10 14.95l-5.25 2.75 1-5.85L1.5 7.7l5.9-.9L10 1.5z' />
								</svg>
							))}
						</div>

						{/* Review */}
						<div
							key={currentIndex}
							aria-live='polite'
							aria-atomic='true'
							className='mx-auto w-full flex-col items-center text-center'>
							{/* Texto de la reseña */}
							<div className='flex h-[100px] w-full shrink-0 items-center justify-center overflow-y-auto px-2'>
								<p className='text-center text-base leading-relaxed text-gray-700'>
									{translateText(t, testimonial.text)}
								</p>
							</div>

							<div className='flex h-[100px] shrink-0 flex-col items-center justify-start'>
								<img
									src={testimonial.image}
									alt={testimonial.name}
									loading='lazy'
									className='h-16 w-16 shrink-0 rounded-full border-2 border-primary/20 object-cover shadow-sm'
									onError={event => {
										event.currentTarget.style.visibility = 'hidden'
									}}
								/>
								<p className='mt-4 font-semibold text-primary-dark'>
									{testimonial.name}
								</p>

								<span className='mt-1 text-sm text-gray-500'>
									{translateText(t, testimonial.location)}
								</span>
							</div>
						</div>

						{/* Navigation */}
						<div className='flex items-center justify-center gap-5 mt-10'>
							<button
								type='button'
								onClick={() => goTo(currentIndex - 1)}
								aria-label={translateText(t, 'Testimonio anterior')}
								className='w-11 h-11 flex items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'>
								<svg
									className='w-5 h-5'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15 19l-7-7 7-7'
									/>
								</svg>
							</button>

							{/* Pagination dots */}
							<div className='flex items-center gap-2'>
								{testimonials.map((item, index) => (
									<button
										key={item.name}
										type='button'
										onClick={() => goTo(index)}
										aria-label={translateText(
											t,
											`Ir al testimonio ${index + 1}`,
										)}
										aria-current={currentIndex === index ? 'true' : undefined}
										className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
											currentIndex === index
												? 'w-7 bg-primary'
												: 'w-2 bg-primary/25 hover:bg-primary/50'
										}`}
									/>
								))}
							</div>

							<button
								type='button'
								onClick={() => goTo(currentIndex + 1)}
								aria-label={translateText(t, 'Testimonio siguiente')}
								className='w-11 h-11 flex items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'>
								<svg
									className='w-5 h-5'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M9 5l7 7-7 7'
									/>
								</svg>
							</button>
						</div>

						{/* Counter
            <p className="text-center text-xs text-gray-400 mt-5">
              {currentIndex + 1} / {testimonials.length}
            </p> */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
