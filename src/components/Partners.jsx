import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'

const partners = [
	{
		name: 'IPATA',
		logo: 'https://ext.same-assets.com/2620247170/1283409572.svg',
		url: 'https://www.ipata.org/',
	},
	{
		name: 'CEXGAN',
		logo: 'https://ext.same-assets.com/2620247170/3392191002.svg',
		url: 'https://servicio.mapama.gob.es/cexgan/Acceso.aspx',
	},
	{
		name: 'IDEXX',
		logo: 'https://ext.same-assets.com/2620247170/4059227771.svg',
		url: 'https://www.idexx.es/es/',
	},
	{
		name: 'ServicesDogs',
		logo: 'https://ext.same-assets.com/2620247170/3133355485.svg',
		url: 'https://servicesdogsspain.es/',
	},
]

const Partners = ({ speed = 60, pauseOnHover = true }) => {
	const { t } = useTranslation()
	const doubled = [...partners, ...partners, ...partners, ...partners]

	return (
		<section className='bg-primary-lighter py-16 sm:py-20'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<h2 className='text-center text-2xl font-semibold text-primary-dark mb-8'>
					{translateText(t, 'Colaboradores')}
				</h2>
			</div>

			<div className='relative w-full overflow-hidden py-4 select-none'>
				<div
					className='pointer-events-none absolute inset-y-0 left-0 w-20 z-10'
					style={{
						background:
							'linear-gradient(to right, #f4f7f7 0%, transparent 100%)',
					}}
				/>
				<div
					className='pointer-events-none absolute inset-y-0 right-0 w-20 z-10'
					style={{
						background:
							'linear-gradient(to left, #f4f7f7 0%, transparent 100%)',
					}}
				/>

				<div
					className='flex w-max items-center'
					style={{
						animation: `marquee-scroll-left ${speed}s linear infinite`,
					}}
					onMouseEnter={e => {
						if (pauseOnHover)
							e.currentTarget.style.animationPlayState = 'paused'
					}}
					onMouseLeave={e => {
						e.currentTarget.style.animationPlayState = 'running'
					}}>
					{doubled.map((partner, i) => (
						<a
							key={`${partner.name}-${i}`}
							href={partner.url}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-10 pr-16 shrink-0 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0'>
							<img
								src={partner.logo}
								alt={partner.name}
								className='h-8 md:h-12 w-auto object-contain'
							/>
							<span
								className='inline-block rounded-full shrink-0 bg-primary'
								style={{ width: 6, height: 6, opacity: 0.7 }}
								aria-hidden='true'
							/>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default Partners
