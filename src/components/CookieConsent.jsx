import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/Logo.png'

const CONSENT_KEY = 'ipawsport-cookie-consent'
const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000
const OPEN_SETTINGS_EVENT = 'ipawsport:open-cookie-settings'

const readConsent = () => {
	try {
		const stored = window.localStorage.getItem(CONSENT_KEY)
		if (!stored) return null

		const consent = JSON.parse(stored)
		if (
			typeof consent?.expiresAt !== 'number' ||
			consent.expiresAt <= Date.now() ||
			consent.necessary !== true
		) {
			return null
		}

		return consent
	} catch {
		return null
	}
}

export default function CookieConsent() {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(() => !readConsent())
	const [showPreferences, setShowPreferences] = useState(false)
	const [analytics, setAnalytics] = useState(false)
	const [marketing, setMarketing] = useState(false)
	const [saveError, setSaveError] = useState(false)

	useEffect(() => {
		const openSettings = () => {
			const consent = readConsent()
			setIsOpen(true)
			setShowPreferences(true)
			setAnalytics(consent?.analytics === true)
			setMarketing(consent?.marketing === true)
			setSaveError(false)
		}

		window.addEventListener(OPEN_SETTINGS_EVENT, openSettings)
		return () => window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings)
	}, [])

	const saveConsent = choice => {
		const allowAll = choice === 'all'
		const saveSelection = choice === 'selection'
		const consent = {
			necessary: true,
			analytics: allowAll || (saveSelection && analytics),
			marketing: allowAll || (saveSelection && marketing),
			updatedAt: Date.now(),
			expiresAt: Date.now() + CONSENT_MAX_AGE,
		}

		try {
			window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
			setSaveError(false)
			setIsOpen(false)
			setShowPreferences(false)
		} catch {
			setSaveError(true)
		}
	}

	if (!isOpen) return null

	return (
		<aside
			aria-label={t('common.cookies.title')}
			className='fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5'>
			<div className='mx-auto max-w-2xl rounded-xl border border-[#DCE7E3] bg-white p-4 shadow-[0_12px_48px_rgba(16,62,56,0.2)] sm:p-5'>
				<div className='flex items-start gap-3'>
					<img
						src={logo}
						alt=''
						aria-hidden='true'
						className='h-8 w-8 shrink-0 object-contain'
					/>
					<div className='min-w-0'>
						<p className='text-base font-semibold leading-5 text-[#103E38]'>
							{t('common.cookies.title')}
						</p>
						<p className='mt-1.5 text-sm leading-5 text-slate-600'>
							{t('common.cookies.description')}{' '}
							<Link
								to='/politica-de-cookies'
								className='font-medium text-[#147F76] underline underline-offset-2 hover:text-[#103E38]'>
								{t('common.cookies.policyLink')}
							</Link>
						</p>
					</div>
				</div>

				<div className='mt-4 flex flex-wrap gap-2'>
					<button
						type='button'
						onClick={() => saveConsent('all')}
						className='rounded-lg bg-[#147F76] px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-[#103E38] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#147F76]'>
						{t('common.cookies.acceptAll')}
					</button>
					<button
						type='button'
						onClick={() => saveConsent('necessary')}
						className='rounded-lg border border-[#C7D6D1] px-3.5 py-2 text-sm font-semibold text-[#103E38] transition hover:bg-[#F1F5F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#147F76]'>
						{t('common.cookies.deny')}
					</button>
					<button
						type='button'
						aria-expanded={showPreferences}
						onClick={() => {
							if (!showPreferences) {
								const consent = readConsent()
								setAnalytics(consent?.analytics === true)
								setMarketing(consent?.marketing === true)
							}
							setShowPreferences(current => !current)
							setSaveError(false)
						}}
						className='rounded-lg px-2 py-2 text-sm font-medium text-[#147F76] underline underline-offset-2 hover:text-[#103E38]'>
						{t('common.cookies.settings')}
					</button>
				</div>

				{showPreferences && (
					<div className='mt-5 border-t border-[#E8EFEC] pt-4'>
						<p className='text-sm leading-6 text-slate-600'>
							{t('common.cookies.preferencesNote')}
						</p>
						<div className='mt-4 grid gap-3 sm:grid-cols-3'>
							<div className='rounded-lg bg-[#F7F9F8] p-3'>
								<p className='text-sm font-semibold text-[#103E38]'>
									{t('common.cookies.necessary')}
								</p>
								<p className='mt-1 text-xs leading-5 text-slate-600'>
									{t('common.cookies.necessaryDescription')}
								</p>
								<span className='mt-2 inline-block text-xs font-medium text-[#147F76]'>
									{t('common.cookies.alwaysActive')}
								</span>
							</div>
							<label className='flex cursor-pointer items-start gap-3 rounded-lg bg-[#F7F9F8] p-3'>
								<input
									type='checkbox'
									checked={analytics}
									onChange={event => setAnalytics(event.target.checked)}
									className='mt-1 accent-[#147F76]'
								/>
								<span>
									<span className='block text-sm font-semibold text-[#103E38]'>
										{t('common.cookies.analytics')}
									</span>
									<span className='mt-1 block text-xs leading-5 text-slate-600'>
										{t('common.cookies.analyticsDescription')}
									</span>
								</span>
							</label>
							<label className='flex cursor-pointer items-start gap-3 rounded-lg bg-[#F7F9F8] p-3'>
								<input
									type='checkbox'
									checked={marketing}
									onChange={event => setMarketing(event.target.checked)}
									className='mt-1 accent-[#147F76]'
								/>
								<span>
									<span className='block text-sm font-semibold text-[#103E38]'>
										{t('common.cookies.marketing')}
									</span>
									<span className='mt-1 block text-xs leading-5 text-slate-600'>
										{t('common.cookies.marketingDescription')}
									</span>
								</span>
							</label>
						</div>
						<div className='mt-4 flex flex-wrap items-center justify-between gap-3'>
							{saveError && (
								<p role='alert' className='text-sm text-red-700'>
									{t('common.cookies.saveError')}
								</p>
							)}
							<button
								type='button'
								onClick={() => saveConsent('selection')}
								className='ml-auto rounded-lg bg-[#147F76] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#103E38] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#147F76]'>
								{t('common.cookies.saveSelection')}
							</button>
						</div>
					</div>
				)}
			</div>
		</aside>
	)
}
