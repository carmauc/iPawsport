import { useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CountryCard from '../components/requirements/CountryCard'
import { countries } from '../data/countryRequirements'
import requirementsImage from '../assets/Requisitos.png'
import { translateText } from '../i18n/translate'

const RequirementsPage = () => {
	const prefersReducedMotion = useReducedMotion()
	const { t, i18n } = useTranslation()
	const tr = text => translateText(t, text)

	useEffect(() => {
		const previousTitle = document.title
		const existingDescription = document.querySelector(
			'meta[name="description"]',
		)
		const previousDescription = existingDescription?.content
		const description = existingDescription || document.createElement('meta')

		document.title = translateText(
			t,
			'Requisitos para viajar con mascotas | iPawsport',
		)
		description.name = 'description'
		description.content = translateText(
			t,
			'Selecciona el destino y consulta la documentación disponible para preparar el viaje internacional de tu perro o gato desde España.',
		)

		if (!existingDescription) document.head.appendChild(description)

		return () => {
			document.title = previousTitle
			if (existingDescription) existingDescription.content = previousDescription
			else description.remove()
		}
	}, [i18n.language, t])

	const entranceTransition = prefersReducedMotion
		? { duration: 0 }
		: { duration: 0.55, ease: 'easeOut' }

	return (
		<div className='bg-primary-lighter text-primary-dark'>
			<section className='mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-10'>
				<motion.div
					initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={entranceTransition}
					className='max-w-3xl'>
					<p className='text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm'>
						{tr('Guías por destino')}
					</p>
					<h1 className='mt-5 text-4xl font-semibold leading-tight text-primary-dark sm:text-5xl lg:text-6xl'>
						{tr('Viajar con tu mascota empieza con una buena preparación')}
					</h1>
					<p className='mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
						{tr(
							'Selecciona tu destino para consultar la documentación y orientación disponible. Los requisitos pueden cambiar; confirma siempre la información vigente con las autoridades oficiales.',
						)}
					</p>
				</motion.div>

				<motion.img
					src={requirementsImage}
					alt={tr(
						'Perro descansando junto a su pasaporte y documentos de viaje',
					)}
					initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={
						prefersReducedMotion
							? { duration: 0 }
							: { duration: 0.55, delay: 0.08, ease: 'easeOut' }
					}
					className='aspect-[16/10] w-full rounded-md object-cover object-center'
					fetchPriority='high'
				/>
			</section>

			<section className='border-t border-[#DCE7E3] bg-[#F7F9F8]'>
				<div className='mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10'>
					<div className='mb-4 flex flex-wrap items-end justify-between gap-3'>
						<div>
							<p className='text-xs font-semibold uppercase tracking-[0.16em] text-primary'>
								{tr('Información por país')}
							</p>
							<h2 className='mt-2 text-2xl font-semibold text-primary-dark sm:text-3xl'>
								{tr('Elige un destino')}
							</h2>
						</div>
						<p className='text-sm text-slate-500'>
							{countries.length}{' '}
							{countries.length === 1 ? tr('destino') : tr('destinos')}
						</p>
					</div>

					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						{countries.map((country, index) => (
							<CountryCard key={country.slug} country={country} index={index} />
						))}
					</div>
				</div>
			</section>

			<section className='mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10'>
				<div className='flex flex-col gap-5 border-l-2 border-primary pl-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8'>
					<div>
						<h2 className='text-xl font-semibold text-primary-dark'>
							{tr('¿No encuentras tu destino?')}
						</h2>
						<p className='mt-2 max-w-2xl text-sm leading-6 text-slate-600'>
							{tr(
								'Consulta con iPawsport los requisitos y trámites que debes verificar para el viaje de tu mascota.',
							)}
						</p>
					</div>
					<Link
						to='/contacto'
						className='inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary-dark underline decoration-[#A7BCBA] underline-offset-4 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'>
						{tr('Consultar con iPawsport')} <span aria-hidden='true'>→</span>
					</Link>
				</div>
			</section>
		</div>
	)
}

export default RequirementsPage
