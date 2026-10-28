import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'

const PageMetadata = ({ title, description }) => {
	const { t, i18n } = useTranslation()

	useEffect(() => {
		const previousTitle = document.title
		const existingDescription = document.querySelector(
			'meta[name="description"]',
		)
		const previousDescription = existingDescription?.content
		const descriptionTag = existingDescription || document.createElement('meta')

		document.title = translateText(t, title)
		descriptionTag.name = 'description'
		descriptionTag.content = translateText(t, description)

		if (!existingDescription) document.head.appendChild(descriptionTag)

		return () => {
			document.title = previousTitle
			if (existingDescription) existingDescription.content = previousDescription
			else descriptionTag.remove()
		}
	}, [description, i18n.language, t, title])

	return null
}

export default PageMetadata
