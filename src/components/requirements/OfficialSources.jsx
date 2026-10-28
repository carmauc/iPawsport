import { useTranslation } from 'react-i18next'
import { translateText } from '../../i18n/translate'

const OfficialSources = ({ sources }) => {
	const { t } = useTranslation()

	return (
		<section className='border-t border-[#DCE7E3] py-9 sm:py-11'>
			<div className='grid gap-5 md:grid-cols-[0.72fr_1.28fr] md:gap-10'>
				<div>
					<h2 className='text-2xl font-semibold leading-tight text-primary-dark sm:text-3xl'>
						{translateText(t, 'Fuentes oficiales')}
					</h2>
					<p className='mt-3 max-w-sm text-sm leading-6 text-slate-600'>
						{translateText(
							t,
							'Consulta directamente las fuentes responsables y contrasta cualquier cambio.',
						)}
					</p>
				</div>
				<ul className='divide-y divide-[#DCE7E3] border-y border-[#DCE7E3]'>
					{sources.map(source => (
						<li key={source.url} className='py-4'>
							<a
								href={source.url}
								target='_blank'
								rel='noreferrer'
								className='group flex items-start justify-between gap-4 text-sm font-semibold text-primary-dark hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:text-base'>
								<span>
									{translateText(t, source.name)}
									<span className='mt-1 block text-xs font-normal text-slate-500'>
										{translateText(t, source.organization)}
									</span>
								</span>
								<span aria-hidden='true' className='shrink-0 text-lg'>
									↗
								</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default OfficialSources
