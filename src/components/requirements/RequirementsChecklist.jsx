import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { translateText } from '../../i18n/translate'

const RequirementsChecklist = ({ items }) => {
	const { t } = useTranslation()
	const [checkedItems, setCheckedItems] = useState([])

	const toggleItem = item => {
		setCheckedItems(current =>
			current.includes(item)
				? current.filter(checkedItem => checkedItem !== item)
				: [...current, item],
		)
	}

	return (
		<section className='border-t border-[#DCE7E3] py-9 sm:py-11'>
			<div className='grid gap-5 md:grid-cols-[0.72fr_1.28fr] md:gap-10'>
				<div>
					<h2 className='text-2xl font-semibold leading-tight text-primary-dark sm:text-3xl'>
						{translateText(t, 'Checklist antes del viaje')}
					</h2>
					<p className='mt-3 max-w-sm text-sm leading-6 text-slate-600'>
						{translateText(
							t,
							'Marca cada punto mientras organizas la documentación.',
						)}
					</p>
				</div>
				<ul className='space-y-4'>
					{items.map(item => {
						const inputId = `check-${item.slice(0, 24).replace(/[^a-z0-9]/gi, '-')}`
						const checked = checkedItems.includes(item)

						return (
							<li key={item}>
								<label
									htmlFor={inputId}
									className='flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base'>
									<input
										id={inputId}
										type='checkbox'
										checked={checked}
										onChange={() => toggleItem(item)}
										className='mt-1 h-4 w-4 shrink-0 accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
									/>
									<span
										className={
											checked
												? 'text-slate-500 line-through decoration-primary/60'
												: ''
										}>
										{translateText(t, item)}
									</span>
								</label>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}

export default RequirementsChecklist
