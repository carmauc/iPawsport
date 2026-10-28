import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'
import SectionTitle from './SectionTitle'

const STATS = [
	{
		id: 'tramites',
		label: 'Trámites Gestionados (100+)',
		target: 100,
		suffix: '+',
	},
	{
		id: 'serologias',
		label: 'Serologías Realizadas',
		target: 500,
		suffix: '+',
	},
	{
		id: 'certificaciones',
		label: 'Certificaciones Service Dog',
		target: 50,
		suffix: '+',
	},
]

const ANIMATION_DURATION = 3000

const Stats = () => {
	const { t } = useTranslation()
	const sectionRef = useRef(null)
	const [counts, setCounts] = useState(() => STATS.map(() => 0))
	const [hasAnimated, setHasAnimated] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setHasAnimated(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.3 },
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		if (!hasAnimated) return

		const startTime = performance.now()
		let animationFrame

		const animate = currentTime => {
			const elapsed = currentTime - startTime
			const progress = Math.min(elapsed / ANIMATION_DURATION, 1)
			const eased = 1 - Math.pow(1 - progress, 3)

			setCounts(STATS.map(stat => Math.floor(stat.target * eased)))

			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate)
			} else {
				setCounts(STATS.map(stat => stat.target))
			}
		}

		animationFrame = requestAnimationFrame(animate)
		return () => cancelAnimationFrame(animationFrame)
	}, [hasAnimated])

	return (
		<section ref={sectionRef}>
			{/* <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8"> */}
			<div className='max-w-4xl mx-auto text-center'>
				<div id='stats' className='mx-auto max-w-6xl px-4 md:px-16 lg:px-24'>
					<SectionTitle
						text2={translateText(t, 'Nuestra experiencia en números')}
						text3={translateText(
							t,
							'Años de dedicación ayudando a mascotas y sus familias a viajar con seguridad.',
						)}
					/>
				</div>
			</div>

			<div className='pb-12 mt-6 sm:pb-16'>
				<div className='relative'>
					<div className='relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8'>
						<div className='max-w-5xl mx-auto'>
							<dl className=' bg-transparent sm:grid sm:grid-cols-3'>
								{STATS.map((stat, index) => (
									<div
										key={stat.id}
										className={`flex flex-col p-6 text-center border-gray-100 sm:border-0 ${
											index === 0
												? 'border-b sm:border-r'
												: index === 1
													? 'border-t border-b sm:border-l sm:border-r'
													: 'border-t sm:border-l'
										}`}>
										<dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
											{translateText(t, stat.label)}
										</dt>
										<dd className='order-1 text-5xl font-medium leading-none text-primary'>
											{counts[index]}
											{stat.suffix}
										</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Stats
