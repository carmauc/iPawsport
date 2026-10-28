import { MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'

const LocalService = () => {
	const { t } = useTranslation()

	return (
		<div className='bg-primary px-4 py-3'>
			<div className='mx-auto flex max-w-5xl items-center justify-center gap-2 text-center'>
				<MapPin
					size={17}
					className='shrink-0 text-white/80'
					aria-hidden='true'
				/>

				<p className='text-sm leading-4 text-white'>
					<span className='font-semibold'>
						{translateText(t, 'Atención en Barcelona')}
					</span>
					<span className='hidden sm:inline text-white/80'>
						{' · '}
						{translateText(t, 'Barcelona y alrededores')}
					</span>
				</p>
			</div>
		</div>
	)
}

export default LocalService
