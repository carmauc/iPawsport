import { useTranslation } from 'react-i18next'
import { translateText } from '../../i18n/translate'

const RequirementsSection = ({ id, title, intro, groups = [] }) => {
	const { t } = useTranslation()
	const tr = text => translateText(t, text)

	return (
		<section
			id={id}
			className='scroll-mt-28 border-t border-[#DCE7E3] py-9 sm:py-11'>
			<div className='grid gap-5 md:grid-cols-[0.72fr_1.28fr] md:gap-10'>
				<div>
					<h2 className='text-2xl font-semibold leading-tight text-primary-dark sm:text-3xl'>
						{tr(title)}
					</h2>
					{intro && (
						<p className='mt-3 max-w-sm text-sm leading-6 text-slate-600'>
							{tr(intro)}
						</p>
					)}
				</div>
				<div className='space-y-7'>
					{groups.map((group, index) => (
						<div key={group.title || index}>
							{group.title && (
								<h3 className='mb-3 text-base font-semibold text-primary-dark'>
									{tr(group.title)}
								</h3>
							)}
							<ul className='space-y-3'>
								{group.items.map(item => (
									<li
										key={item}
										className='grid grid-cols-[0.5rem_1fr] gap-3 text-sm leading-6 text-slate-700 sm:text-base'>
										<span
											aria-hidden='true'
											className='mt-[0.65rem] h-1.5 w-1.5 rounded-full bg-primary'
										/>
										<span>{tr(item)}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default RequirementsSection
