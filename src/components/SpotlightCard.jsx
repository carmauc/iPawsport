import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const SpotlightCard = ({
	children,
	className = '',
	spotlightColor = '#18A192',
	spotlightSize = 220,
	blur = 12,
	opacity = 10,
	borderOpacity = 20,
}) => {
	const cardRef = useRef(null)

	const [isHovered, setIsHovered] = useState(false)

	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	})

	const handleMouseMove = e => {
		if (!cardRef.current) return

		const rect = cardRef.current.getBoundingClientRect()

		setMousePosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		})
	}

	return (
		<motion.div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			whileHover={{ y: -6 }}
			transition={{
				type: 'spring',
				stiffness: 300,
				damping: 20,
			}}
			className={`relative cursor-pointer overflow-hidden ${className}`}
			style={{
				backdropFilter: `blur(${blur}px)`,
				WebkitBackdropFilter: `blur(${blur}px)`,

				backgroundColor: `rgba(255,255,255,${opacity / 100})`,

				border: `1px solid rgba(255,255,255,${borderOpacity / 100})`,

				boxShadow: isHovered
					? `0 20px 60px ${spotlightColor}33,
             0 0 0 1px ${spotlightColor}22`
					: `0 8px 32px rgba(0,0,0,0.12)`,
			}}>
			{/* ============================= */}
			{/* CURSOR SPOTLIGHT */}
			{/* ============================= */}

			<motion.div
				className='absolute inset-0 pointer-events-none z-20'
				animate={{
					opacity: isHovered ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				style={{
					background: `
            radial-gradient(
              circle ${spotlightSize}px at
              ${mousePosition.x}px ${mousePosition.y}px,
              rgba(24,161,146,0.30),
              rgba(24,161,146,0.12) 35%,
              transparent 70%
            )
          `,
				}}
			/>

			{/* ============================= */}
			{/* LUZ MÁS INTENSA */}
			{/* ============================= */}

			<motion.div
				className='absolute inset-0 pointer-events-none z-30'
				animate={{
					opacity: isHovered ? 1 : 0,
				}}
				transition={{
					duration: 0.15,
				}}
				style={{
					background: `
            radial-gradient(
              circle ${spotlightSize * 0.45}px at
              ${mousePosition.x}px ${mousePosition.y}px,
              rgba(255,255,255,0.20),
              transparent 70%
            )
          `,
				}}
			/>

			{/* ============================= */}
			{/* BORDE ILUMINADO */}
			{/* ============================= */}

			<motion.div
				className='absolute inset-0 pointer-events-none rounded-[inherit] z-30'
				animate={{
					opacity: isHovered ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				style={{
					background: `
            radial-gradient(
              circle ${spotlightSize * 0.65}px at
              ${mousePosition.x}px ${mousePosition.y}px,
              transparent 40%,
              ${spotlightColor}55 70%,
              transparent 100%
            )
          `,
					maskImage:
						'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
					WebkitMaskImage:
						'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
					maskComposite: 'exclude',
					WebkitMaskComposite: 'xor',
					padding: '1px',
				}}
			/>

			{/* ============================= */}
			{/* ORB DECORATIVO */}
			{/* ============================= */}

			<motion.div
				className='absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl pointer-events-none'
				style={{
					backgroundColor: spotlightColor,
					opacity: 0.15,
				}}
				animate={{
					scale: isHovered ? 1.5 : 1,
				}}
				transition={{
					duration: 0.4,
				}}
			/>

			{/* ============================= */}
			{/* CONTENIDO */}
			{/* ============================= */}

			<div className='relative z-40'>{children}</div>
		</motion.div>
	)
}

export default SpotlightCard
