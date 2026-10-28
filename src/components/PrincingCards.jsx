import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, useMotionValue, animate } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'

const pricingPlans = [
	{
		title: 'Certificado CEXGAN + Revisión Veterinaria',
		description:
			'Tramita tu documento oficial emitido por el Ministerio de Agricultura, Pesca y Alimentación de España que acredita que una mascota puede viajar fuera de la UE',
		price: 140,
		features: [
			{ text: 'Revisión Veterinaria', included: true },
			{ text: 'Certificado de salud CVS (Si se requiere)', included: true },
			{ text: 'Seguimiento de Solicitudes', included: true },
		],
	},
	{
		title: 'Anticuerpos de Rabia',
		description:
			'Tramita el certificado de anticuerpos de rabia. Gracias a nuestro convenio con los laboratorios IDEXX, garantizamos un proceso ágil, fiable y con resultados reconocidos internacionalmente',
		price: 180,
		features: [
			{ text: 'Obtención de Muestras', included: true },
			{ text: 'Seguimiento de Solicitudes', included: true },
			{ text: 'Gastos de Desplazamiento', included: false },
		],
	},
	{
		title: 'Implantación de Microchip',
		description:
			'Servicio que incluye la implantación del microchip homologado. Un trámite rápido y seguro que garantiza la correcta identificación de tu mascota y el cumplimiento de la normativa vigente.',
		price: 120,
		features: [
			{ text: 'Cartilla de Vacunación de Catalunya', included: true },
			{ text: 'Alta AIAC', included: true },
			{ text: 'Microchip ISO 11784/11785.', included: true },
		],
	},
	{
		title: 'Pasaporte Europeo',
		description:
			'Tramita el Pasaporte Europeo para Mascotas, documento clave para que tu compañero de cuatro patas pueda viajar contigo por la Unión Europea cumpliendo todos los requisitos oficiales.',
		price: 90,
		features: [
			{ text: 'Cartilla de Vacunación de Catalunya', included: true },
			{ text: 'Alta AIAC', included: true },
			{ text: 'Microchip', included: true },
		],
	},
]

const SLIDE_EASE = [0.32, 0.72, 0, 1]
const SLIDE_DURATION = 1.45
const DESKTOP_QUERY = '(min-width: 768px)'
const SWIPE_THRESHOLD = 48

const getPlanAt = offset => {
	const index =
		((offset % pricingPlans.length) + pricingPlans.length) % pricingPlans.length

	return { ...pricingPlans[index], planIndex: index }
}

const CheckIcon = () => (
	<svg
		className='h-5 w-5 shrink-0 text-primary'
		fill='currentColor'
		viewBox='0 0 20 20'
		aria-hidden='true'>
		<path
			fillRule='evenodd'
			d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
			clipRule='evenodd'
		/>
	</svg>
)

const CrossIcon = () => (
	<svg
		className='h-5 w-5 shrink-0 text-red-400'
		fill='currentColor'
		viewBox='0 0 20 20'
		aria-hidden='true'>
		<path
			fillRule='evenodd'
			d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
			clipRule='evenodd'
		/>
	</svg>
)

const PricingCard = ({ plan, width }) => {
	const { t } = useTranslation()

	return (
		<article
			style={width ? { width } : undefined}
			className='pricing-carousel-card flex h-[660px] shrink-0 flex-col overflow-hidden rounded-2xl border-2 border-primary-light/50 bg-white shadow-lg transition-shadow duration-300 hover:border-primary/30 hover:shadow-3xl'>
			{/* Cabecera: altura fija */}
			<header className='flex h-[220px] shrink-0 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-[#147F76] px-5 py-5 text-center'>
				<h3 className='mb-3 line-clamp-2 text-xl font-semibold leading-7 text-white font-playfair'>
					{translateText(t, plan.title)}
				</h3>

				<p className='line-clamp-4 text-sm leading-5 text-white/85'>
					{translateText(t, plan.description)}
				</p>
			</header>

			{/* Precio: altura fija */}
			<div className='flex h-[112px] shrink-0 items-center justify-center border-b border-primary-light/60 bg-white px-4 text-center'>
				<p className='whitespace-nowrap leading-none'>
					<span className='mr-1 align-top text-xl font-medium text-primary-light'>
						€
					</span>

					<span className='text-6xl font-light tracking-tight text-primary-light'>
						{plan.price}
					</span>
				</p>
			</div>

			{/* Características */}
			<ul className='flex flex-1 flex-col divide-y divide-primary-light/70 overflow-hidden'>
				{plan.features.map((feature, featureIdx) => (
					<li
						key={featureIdx}
						className={`flex h-[76px] shrink-0 items-center gap-3 overflow-hidden px-5 ${
							feature.included ? 'bg-white' : 'bg-primary-lighter/40'
						}`}>
						{feature.included ? <CheckIcon /> : <CrossIcon />}

						<span
							className={`line-clamp-2 text-sm leading-5 ${
								feature.included ? 'text-gray-700' : 'text-gray-500'
							}`}>
							{translateText(t, feature.text)}
						</span>
					</li>
				))}
			</ul>

			{/* Botón siempre abajo */}
			<div className='mt-auto shrink-0 border-t border-primary-light/60 bg-white px-6 py-6'>
				<a
					href='https://api.whatsapp.com/send?phone=34672363701'
					target='_blank'
					rel='noopener noreferrer'
					className='block w-full rounded-full bg-primary py-3.5 text-center font-medium tracking-wide text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md'>
					{translateText(t, 'Solicitar')}
				</a>
			</div>
		</article>
	)
}

const NavButton = ({
	onClick,
	disabled,
	ariaLabel,
	children,
	className = '',
}) => (
	<button
		type='button'
		onClick={onClick}
		disabled={disabled}
		aria-label={ariaLabel}
		className={`flex shrink-0 items-center justify-center rounded-full bg-white/90 p-2 text-gray-400 shadow-md transition-all hover:text-primary hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 ${className}`}>
		{children}
	</button>
)

const waitForLayout = () =>
	new Promise(resolve => {
		requestAnimationFrame(() => requestAnimationFrame(resolve))
	})

const measureStep = trackEl => {
	const first = trackEl?.children[0]
	const second = trackEl?.children[1]

	if (!first) return 0
	if (!second) return first.getBoundingClientRect().width

	return second.offsetLeft - first.offsetLeft
}

const PricingCards = () => {
	const { t } = useTranslation()

	const [currentIndex, setCurrentIndex] = useState(0)
	const [trackCards, setTrackCards] = useState([])
	const [isAnimating, setIsAnimating] = useState(false)
	const [isDesktop, setIsDesktop] = useState(false)
	const [cardWidth, setCardWidth] = useState(null)
	const [isReady, setIsReady] = useState(false)

	const viewportRef = useRef(null)
	const trackRef = useRef(null)
	const touchStartX = useRef(0)
	const x = useMotionValue(0)

	const visibleCount = isDesktop ? 3 : 1

	const getVisibleCards = useCallback(
		startIndex =>
			Array.from({ length: visibleCount }, (_, i) => getPlanAt(startIndex + i)),
		[visibleCount],
	)

	const updateLayout = useCallback(() => {
		const viewport = viewportRef.current
		if (!viewport) return

		const desktop = window.matchMedia(DESKTOP_QUERY).matches
		setIsDesktop(desktop)

		const gapPx = 24
		const visible = desktop ? 3 : 1

		const width = desktop
			? Math.floor((viewport.offsetWidth - (visible - 1) * gapPx) / visible)
			: viewport.offsetWidth

		setCardWidth(width)
	}, [])

	useEffect(() => {
		updateLayout()

		const media = window.matchMedia(DESKTOP_QUERY)
		media.addEventListener('change', updateLayout)
		window.addEventListener('resize', updateLayout)

		return () => {
			media.removeEventListener('change', updateLayout)
			window.removeEventListener('resize', updateLayout)
		}
	}, [updateLayout])

	useEffect(() => {
		if (cardWidth === null || isAnimating) return

		const frame = requestAnimationFrame(() => {
			setTrackCards(getVisibleCards(currentIndex))
			x.set(0)
			setIsReady(true)
		})

		return () => cancelAnimationFrame(frame)
	}, [cardWidth, isDesktop]) // eslint-disable-line react-hooks/exhaustive-deps

	const commitSlide = useCallback(
		nextIndex => {
			setCurrentIndex(nextIndex)
			setTrackCards(getVisibleCards(nextIndex))
			x.set(0)
		},
		[getVisibleCards, x],
	)

	const paginate = useCallback(
		async dir => {
			if (isAnimating || !isReady || cardWidth === null) return

			setIsAnimating(true)

			try {
				if (dir === 1) {
					setTrackCards([
						...getVisibleCards(currentIndex),
						getPlanAt(currentIndex + visibleCount),
					])

					await waitForLayout()

					const step = measureStep(trackRef.current)

					await animate(x, -step, {
						duration: SLIDE_DURATION,
						ease: SLIDE_EASE,
					})

					commitSlide((currentIndex + 1) % pricingPlans.length)
				} else {
					setTrackCards([
						getPlanAt(currentIndex - 1),
						...getVisibleCards(currentIndex),
					])

					await waitForLayout()

					const step = measureStep(trackRef.current)
					x.set(-step)

					await waitForLayout()

					await animate(x, 0, {
						duration: SLIDE_DURATION,
						ease: SLIDE_EASE,
					})

					commitSlide(
						(currentIndex - 1 + pricingPlans.length) % pricingPlans.length,
					)
				}
			} finally {
				setIsAnimating(false)
			}
		},
		[
			cardWidth,
			commitSlide,
			currentIndex,
			getVisibleCards,
			isAnimating,
			isReady,
			visibleCount,
			x,
		],
	)

	const goToIndex = useCallback(
		idx => {
			if (idx === currentIndex || isAnimating) return

			let diff = idx - currentIndex

			if (diff > pricingPlans.length / 2) {
				diff -= pricingPlans.length
			}

			if (diff < -pricingPlans.length / 2) {
				diff += pricingPlans.length
			}

			if (diff === 1) {
				paginate(1)
			} else if (diff === -1) {
				paginate(-1)
			} else {
				commitSlide(idx)
			}
		},
		[commitSlide, currentIndex, isAnimating, paginate],
	)

	const handleTouchStart = e => {
		touchStartX.current = e.touches[0].clientX
	}

	const handleTouchEnd = e => {
		if (isAnimating) return

		const delta = e.changedTouches[0].clientX - touchStartX.current

		if (Math.abs(delta) < SWIPE_THRESHOLD) return

		paginate(delta < 0 ? 1 : -1)
	}

	const arrowIcon = path => (
		<svg
			className='h-5 w-5'
			fill='none'
			stroke='currentColor'
			viewBox='0 0 24 24'
			aria-hidden='true'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d={path}
			/>
		</svg>
	)

	return (
		<section className='bg-primary-lighter py-16'>
			<div className='mx-auto max-w-8xl px-4'>
				<div className='flex items-center md:gap-1'>
					<NavButton
						onClick={() => paginate(-1)}
						disabled={isAnimating}
						ariaLabel={translateText(t, 'Plan anterior')}
						className='hidden md:flex'>
						{arrowIcon('M15 19l-7-7 7-7')}
					</NavButton>

					<div
						ref={viewportRef}
						className='min-w-0 flex-1 touch-pan-y select-none overflow-hidden'
						onTouchStart={handleTouchStart}
						onTouchEnd={handleTouchEnd}>
						<motion.div
							ref={trackRef}
							style={{ x }}
							className='flex items-stretch gap-6 will-change-transform'>
							{isReady &&
								cardWidth !== null &&
								trackCards.map(plan => (
									<PricingCard
										key={plan.planIndex}
										plan={plan}
										width={cardWidth}
									/>
								))}
						</motion.div>
					</div>

					<NavButton
						onClick={() => paginate(1)}
						disabled={isAnimating}
						ariaLabel={translateText(t, 'Plan siguiente')}
						className='hidden md:flex'>
						{arrowIcon('M9 5l7 7-7 7')}
					</NavButton>
				</div>

				{/* Indicadores */}
				<div className='mt-8 flex justify-center gap-2'>
					{pricingPlans.map((_, idx) => (
						<button
							key={idx}
							type='button'
							disabled={isAnimating}
							aria-label={translateText(t, `Ir al plan ${idx + 1}`)}
							aria-current={idx === currentIndex ? 'true' : undefined}
							onClick={() => goToIndex(idx)}
							className={`h-2.5 rounded-full transition-all disabled:opacity-50 ${
								idx === currentIndex
									? 'w-8 bg-primary'
									: 'w-2.5 bg-gray-300 hover:bg-primary-light'
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default PricingCards
