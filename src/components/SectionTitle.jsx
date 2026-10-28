import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'
import Letters from './Letters'

export default function SectionTitle({
	text1,
	text2,
	text3,
	align = 'center',
}) {
	const { t } = useTranslation()

	const alignment = align === 'left' ? 'text-left' : 'text-center'

	return (
		<>
			<motion.p
				className={`mt-12 sm:mt-16 lg:mt-28 py-2 w-fit max-w-full text-xs sm:text-sm tracking-[0.14em] sm:tracking-[0.18em] font-semibold text-primary uppercase ${
					align === 'left' ? 'ml-0' : 'mx-auto'
				} ${alignment}`}
				initial={{ y: 40, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					type: 'spring',
					stiffness: 320,
					damping: 70,
					mass: 1,
				}}>
				{translateText(t, text1)}
			</motion.p>

			<motion.h3
				className={`mt-2 sm:mt-4 w-full max-w-full text-xl sm:text-3xl lg:text-4xl font-semibold text-primary-dark leading-tight sm:leading-snug ${
					align === 'left' ? '' : 'mx-auto'
				} ${alignment}`}
				initial={{ y: 40, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					type: 'spring',
					stiffness: 280,
					damping: 70,
					mass: 1,
				}}>
				<Letters text={`${translateText(t, text2)}`} delay={0.08} />
			</motion.h3>

			<motion.p
				className={`mt-2 max-w-xl text-sm sm:text-base leading-relaxed text-secondary ${
					align === 'left' ? 'text-left' : 'mx-auto text-center'
				}`}
				initial={{ y: 40, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					type: 'spring',
					stiffness: 240,
					damping: 70,
					mass: 1,
				}}>
				{translateText(t, text3)}
			</motion.p>
		</>
	)
}
