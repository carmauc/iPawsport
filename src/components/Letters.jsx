import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const Letters = ({ text = '', className = '', delay = 0.025 }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	let letterIndex = 0

	return (
		<span ref={ref} className={`inline ${className}`}>
			{text.split(/(\s+)/).map((word, wordIndex) => {
				if (/^\s+$/.test(word)) {
					return <span key={wordIndex}> </span>
				}

				return (
					<span key={wordIndex} className='inline-block whitespace-nowrap'>
						{word.split('').map((char, charIndex) => {
							const index = letterIndex++

							return (
								<motion.span
									key={`${wordIndex}-${charIndex}`}
									initial={{ y: 10, opacity: 0 }}
									animate={
										isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }
									}
									transition={{
										delay: index * delay,
										duration: 0.2,
										ease: 'easeOut',
									}}
									className='inline-block'>
									{char}
								</motion.span>
							)
						})}
					</span>
				)
			})}
		</span>
	)
}

export default Letters

// import { motion, useInView } from 'motion/react'
// import { useRef } from 'react'

// const Letters = ({ text, className = '', delay = 0.08 }) => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })

//   return (
//     <span
//       ref={ref}
//       className={`inline-flex flex-wrap ${className}`}
//     >
//       {text.split(' ').map((word, wordIndex) => (
//         <span key={wordIndex} className="inline-block whitespace-nowrap">
//           {word.split('').map((char, i) => {
//             const charIndex =
//               text.split(' ').slice(0, wordIndex).join(' ').length +
//               wordIndex +
//               i

//             return (
//               <motion.span
//                 key={i}
//                 initial={{ y: 10, opacity: 0 }}
//                 animate={
//                   isInView
//                     ? { y: 0, opacity: 1 }
//                     : { y: 10, opacity: 0 }
//                 }
//                 transition={{ delay: charIndex * delay, duration: 0.25 }}
//                 className="inline-block"
//               >
//                 {char}
//               </motion.span>
//             )
//           })}
//           {wordIndex < text.split(' ').length - 1 && '\u00A0'}
//         </span>
//       ))}
//     </span>
//   )
// }

// export default Letters
