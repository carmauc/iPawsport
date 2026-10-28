import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const Reveal = ({
	children,
	direction = 'bottom',
	delay = 0,
	duration = 1,
	distance = '100%',
	once = true,
	className = '',
}) => {
	const ref = useRef(null)

	const inView = useInView(ref, {
		once,
		amount: 0.1,
	})

	const positions = {
		top: { y: `-${distance}` },
		bottom: { y: distance },
		left: { x: `-${distance}` },
		right: { x: distance },
	}

	const initialPosition = positions[direction] || positions.bottom

	return (
		<motion.div
			ref={ref}
			className={className}
			initial={{
				...initialPosition,
				opacity: 0,
			}}
			animate={
				inView
					? {
							x: 0,
							y: 0,
							opacity: 1,
						}
					: {
							...initialPosition,
							opacity: 0,
						}
			}
			transition={{
				duration,
				delay,
				ease: 'easeOut',
			}}>
			{children}
		</motion.div>
	)
}

export default Reveal
