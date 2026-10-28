import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { translateText } from '../../i18n/translate'

export default function ScrollToTop() {
	const { t } = useTranslation()
	const [isVisible, setIsVisible] = useState(false)
	const { pathname } = useLocation()

	// Volver arriba al cambiar de página
	useEffect(() => {
		if (window.lenis) {
			window.lenis.scrollTo(0, { immediate: true })
		} else {
			window.scrollTo(0, 0)
		}
	}, [pathname])

	// Función para desplazarse hacia arriba
	const scrollToTop = () => {
		if (window.lenis) {
			window.lenis.scrollTo(0, {
				duration: 1,
			})
		} else {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
	}

	useEffect(() => {
		const toggleVisibility = () => {
			const scrollY = window.lenis ? window.lenis.scroll : window.scrollY

			setIsVisible(scrollY > 300)
		}

		window.addEventListener('scroll', toggleVisibility)

		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	return (
		<>
			{isVisible && (
				<button
					onClick={scrollToTop}
					aria-label={translateText(t, 'Volver arriba')}
					className='fixed bottom-8 right-8 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition-all duration-300 ease-in-out hover:bg-primary/80'>
					<span className='mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white' />
				</button>
			)}
		</>
	)
}

// import { useEffect, useState } from 'react'

// export default function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false)

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     })
//   }

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true)
//       } else {
//         setIsVisible(false)
//       }
//     }

//     window.addEventListener('scroll', toggleVisibility)

//     return () => {
//       window.removeEventListener('scroll', toggleVisibility)
//     }
//   }, [])

//   return (
//     <>
//       {isVisible && (
//         <div
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//           role="button"
//           className="fixed bottom-8 right-8 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-primary/80"
//         >
//           <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white" />
//         </div>
//       )}
//     </>
//   )
// }
