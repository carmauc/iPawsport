import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { translateTree, translateText } from '../../i18n/translate'

const CountryCard = ({ country, index = 0 }) => {
	const prefersReducedMotion = useReducedMotion()
	const { t } = useTranslation()
	const localizedCountry = translateTree(t, country)

	return (
		<motion.div
			initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{
				duration: prefersReducedMotion ? 0 : 0.4,
				delay: prefersReducedMotion ? 0 : (index % 3) * 0.08,
				ease: 'easeOut',
			}}
			className='group h-full w-full py-2'>
			<Link
				to={`/requisitos/${localizedCountry.slug}`}
				className='flex h-full min-h-[245px] flex-col rounded-xl border border-[#DCE7E3] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#18AA9C]/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:p-6'>
				{/* Bandera y etiqueta de destino */}
				<div className='flex items-center justify-between gap-3'>
					<div className='flex h-12 w-14 items-center justify-center overflow-hidden rounded-lg border border-[#E8EFEC] bg-[#F7F9F8]'>
						<img
							src={`https://flagcdn.com/w80/${localizedCountry.flagCode}.png`}
							alt={t('Bandera de {{name}}', {
								ns: 'content',
								name: localizedCountry.name,
								keySeparator: false,
							})}
							loading='lazy'
							width='40'
							className='h-auto max-h-8 w-10 object-contain'
						/>
					</div>

					<span className='text-xs font-medium uppercase tracking-wider text-slate-400'>
						{translateText(t, 'Destino')}
					</span>
				</div>

				{/* Nombre del país */}
				<h3 className='mt-5 text-lg font-semibold text-primary-dark transition-colors duration-300 group-hover:text-primary'>
					{localizedCountry.name}
				</h3>

				{/* Descripción */}
				<p className='mt-2 line-clamp-3 flex-1 text-sm leading-6 text-slate-600'>
					{localizedCountry.description}
				</p>

				{/* Enlace visual */}
				<div className='mt-5 flex items-center justify-between border-t border-[#EDF1EF] pt-4'>
					<span className='text-sm font-semibold text-primary-dark transition-colors duration-300 group-hover:text-primary'>
						{translateText(t, 'Consultar requisitos')}
					</span>

					<span
						aria-hidden='true'
						className='flex h-8 w-8 items-center justify-center rounded-full bg-[#F0F7F5] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<path d='M5 12h14' />
							<path d='m12 5 7 7-7 7' />
						</svg>
					</span>
				</div>
			</Link>
		</motion.div>
	)
}

export default CountryCard
