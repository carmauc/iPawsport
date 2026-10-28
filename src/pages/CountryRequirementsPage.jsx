import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import CallActionGuide from '../components/CallActionGuide'
import OfficialSources from '../components/requirements/OfficialSources'
import RequirementsChecklist from '../components/requirements/RequirementsChecklist'
import RequirementsSection from '../components/requirements/RequirementsSection'
import { getCountryBySlug } from '../data/countryRequirements'
import { translateText, translateTree } from '../i18n/translate'

const setPageTitle = title => {
	document.title = title
}

const CountryRequirementsPage = () => {
	const { countrySlug } = useParams()
	const { t, i18n } = useTranslation()
	const tr = text => translateText(t, text)
	const sourceCountry = getCountryBySlug(countrySlug)
	const country = translateTree(t, sourceCountry)
	const prefersReducedMotion = useReducedMotion()

	useEffect(() => {
		const previousTitle = document.title
		const meta = document.querySelector('meta[name="description"]')
		const previousDescription = meta?.content
		const description = meta || document.createElement('meta')

		setPageTitle(
			translateText(
				t,
				sourceCountry?.seoTitle || 'Guía de requisitos por destino | iPawsport',
			),
		)
		description.name = 'description'
		description.content = translateText(
			t,
			sourceCountry?.seoDescription ||
				'Consulta las guías de requisitos para viajar internacionalmente con tu mascota.',
		)
		if (!meta) document.head.appendChild(description)

		return () => {
			setPageTitle(previousTitle)
			if (meta) meta.content = previousDescription
			else description.remove()
		}
	}, [sourceCountry, i18n.language, t])

	if (!country) {
		return (
			<section className='mx-auto max-w-4xl px-5 py-20 text-center sm:py-28'>
				<p className='text-sm font-semibold uppercase tracking-[0.16em] text-primary'>
					{tr('Destino no disponible')}
				</p>
				<h1 className='mt-4 text-3xl font-semibold text-primary-dark'>
					{tr('No encontramos esta guía')}
				</h1>
				<p className='mt-3 text-slate-600'>
					{tr('Revisa el destino o vuelve al listado de países.')}
				</p>
				<Link
					to='/requisitos'
					className='mt-7 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'>
					{tr('Volver a todos los destinos')}
				</Link>
			</section>
		)
	}

	if (country.status !== 'available') {
		return (
			<section className='bg-primary-lighter text-primary-dark'>
				<div className='mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20'>
					<Link
						to='/requisitos'
						className='text-sm font-semibold text-primary-dark underline decoration-[#A7BCBA] underline-offset-4 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'>
						← {tr('Todos los destinos')}
					</Link>
					<div className='mt-12 border-t border-[#DCE7E3] pt-8'>
						<img
							src={`/images/flags/${country.flagCode}.svg`}
							alt={t('Bandera de {{name}}', {
								ns: 'content',
								name: country.name,
								keySeparator: false,
							})}
							width='30'
							height='10'
							className='h-5 w-[3.75rem] rounded-sm border border-black/5 object-cover'
						/>
						<p className='mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary'>
							{tr('Guía en preparación')}
						</p>
						<h1 className='mt-3 text-4xl font-semibold sm:text-5xl'>
							{t('Requisitos para viajar a {{name}}', {
								ns: 'content',
								name: country.name,
								keySeparator: false,
							})}
						</h1>
						<p className='mt-5 max-w-2xl text-base leading-7 text-slate-600'>
							{tr(
								'La información específica de este destino está pendiente de verificación con fuentes oficiales. No publicamos requisitos sanitarios hasta disponer de una fuente fiable y una fecha de revisión.',
							)}
						</p>
						<Link
							to='/contacto'
							className='mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'>
							{tr('Consultar con iPawsport')}
						</Link>
					</div>
				</div>
			</section>
		)
	}

	return (
		<div className='bg-primary-lighter text-primary-dark'>
			<nav
				aria-label='Migas de pan'
				className='mx-auto max-w-7xl px-5 pt-7 sm:px-8 lg:px-10'>
				<ol className='flex flex-wrap items-center gap-2 text-sm text-slate-500'>
					<li>
						<Link
							to='/requisitos'
							className='underline decoration-[#A7BCBA] underline-offset-4 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'>
							{tr('Requisitos por destino')}
						</Link>
					</li>
					<li aria-hidden='true'>/</li>
					<li aria-current='page' className='font-medium text-primary-dark'>
						{country.name}
					</li>
				</ol>
			</nav>

			<header className='mx-auto max-w-7xl px-5 pb-11 pt-10 sm:px-8 sm:pb-14 sm:pt-14 lg:px-10'>
				<motion.div
					initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: prefersReducedMotion ? 0 : 0.5,
						ease: 'easeOut',
					}}
					className='max-w-4xl'>
					<div className='flex items-center gap-4'>
						<img
							src={`/images/flags/${country.flagCode}.svg`}
							alt={t('Bandera de {{name}}', {
								ns: 'content',
								name: country.name,
								keySeparator: false,
							})}
							width='72'
							height='48'
							className='h-12 w-[4.5rem] shrink-0 rounded-sm border border-black/5 object-cover'
						/>
						<p className='text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm'>
							{tr('Guía de destino')}
						</p>
					</div>
					<h1 className='mt-5 text-4xl font-semibold leading-tight text-primary-dark sm:text-5xl lg:text-6xl'>
						{t('Viajar con tu mascota a {{name}}', {
							ns: 'content',
							name: country.name,
							keySeparator: false,
						})}
					</h1>
					<p className='mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
						{country.description}
					</p>
					<p className='mt-5 inline-flex border-l-2 border-primary bg-white px-4 py-3 text-sm leading-6 text-slate-600'>
						{tr(
							'Consulta informativa: confirma los requisitos vigentes con las autoridades oficiales antes de viajar.',
						)}
					</p>
					{country.notice && (
						<p
							role='note'
							className='mt-3 max-w-3xl border-l-2 border-[#A7BCBA] bg-white px-4 py-3 text-sm leading-6 text-slate-600'>
							{country.notice}
						</p>
					)}
				</motion.div>
			</header>

			<section
				aria-label={t('Requisitos oficiales para {{name}}', {
					ns: 'content',
					name: country.name,
					keySeparator: false,
				})}
				className='border-y border-[#DCE7E3] bg-[#F7F9F8]'>
				<div className='mx-auto max-w-7xl px-5 py-3 sm:px-8 sm:py-6 lg:px-10'>
					<RequirementsSection
						id='tramites-principales'
						title={tr('Trámites principales')}
						intro={tr(
							'Resumen de los puntos indicados en la documentación consultada.',
						)}
						groups={[{ items: country.summary }]}
					/>

					{country.sections.map(section => (
						<RequirementsSection key={section.id} {...section} />
					))}

					{country.checklist?.length > 0 && (
						<RequirementsChecklist items={country.checklist} />
					)}

					{country.historicalNotice && (
						<aside
							className='border-t border-[#DCE7E3] py-8 sm:py-10'
							aria-label={tr('Nota histórica sobre apostilla')}>
							<div className='border-l-2 border-[#A7BCBA] pl-5'>
								<h2 className='text-lg font-semibold text-primary-dark'>
									{t('common.historyNote')}
								</h2>
								<p className='mt-2 max-w-4xl text-sm leading-6 text-slate-600'>
									{country.historicalNotice}
								</p>
							</div>
						</aside>
					)}

					{country.sources?.length > 0 && (
						<OfficialSources sources={country.sources} />
					)}

					<section
						className='border-t border-[#DCE7E3] py-7 sm:py-8'
						aria-label={tr('Fecha de revisión')}>
						<p className='text-xs leading-5 text-slate-500'>
							<span className='font-semibold text-primary-dark'>
								{tr('Última revisión:')}
							</span>{' '}
							{country.lastReviewed}
							<span className='mx-2' aria-hidden='true'>
								·
							</span>
							<span>{country.sourceLabel}</span>
						</p>
					</section>
				</div>
			</section>

			<section className='mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10'>
				<div className='flex flex-col gap-4 border-l-2 border-primary pl-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8'>
					<div>
						<h2 className='text-xl font-semibold'>
							{tr('¿Quieres revisar tu caso?')}
						</h2>
						<p className='mt-2 max-w-2xl text-sm leading-6 text-slate-600'>
							{tr(
								'iPawsport puede orientarte con la documentación y preparación veterinaria para el destino.',
							)}
						</p>
					</div>
					<Link
						to='/contacto'
						className='inline-flex shrink-0 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'>
						{tr('Solicitar asesoramiento')}
					</Link>
				</div>
			</section>

			<CallActionGuide />
		</div>
	)
}

export default CountryRequirementsPage
