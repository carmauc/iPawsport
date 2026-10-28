import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import enRequirements from './locales/en-requirements.json'
import es from './locales/es.json'

const englishTranslations = {
	...en,
	content: { ...en.content, ...enRequirements },
}

const getInitialLanguage = () => {
	try {
		return localStorage.getItem('ipawsport-language') === 'en' ? 'en' : 'es'
	} catch {
		return 'es'
	}
}

const initialLanguage = getInitialLanguage()

if (typeof document !== 'undefined') {
	document.documentElement.lang = initialLanguage
}

i18n.use(initReactI18next).init({
	ns: ['translation', 'content'],
	defaultNS: 'translation',
	resources: {
		en: {
			translation: {
				nav: englishTranslations.nav,
				common: englishTranslations.common,
			},
			content: englishTranslations.content,
		},
		es: {
			translation: es,
			content: {},
		},
	},
	lng: initialLanguage,
	fallbackLng: 'es',
	interpolation: { escapeValue: false },
	initImmediate: false,
	react: { useSuspense: false },
})

i18n.on('languageChanged', language => {
	const normalizedLanguage = language.startsWith('en') ? 'en' : 'es'
	if (typeof document !== 'undefined') {
		document.documentElement.lang = normalizedLanguage
	}
	try {
		localStorage.setItem('ipawsport-language', normalizedLanguage)
	} catch {
		// Language selection remains available for the current session.
	}
})

export default i18n
