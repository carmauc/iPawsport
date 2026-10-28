const untranslatedFields = new Set(['slug', 'flagCode', 'id', 'url', 'status'])

export const translateText = (t, text) => {
	if (typeof text !== 'string' || !text) return text
	return t(text, { ns: 'content', defaultValue: text, keySeparator: false })
}

export const translateTree = (t, value, fieldName = '') => {
	if (typeof value === 'string') {
		return untranslatedFields.has(fieldName) ? value : translateText(t, value)
	}

	if (Array.isArray(value)) {
		return value.map(item => translateTree(t, item))
	}

	if (value && typeof value === 'object') {
		return Object.fromEntries(
			Object.entries(value).map(([key, item]) => [
				key,
				translateTree(t, item, key),
			]),
		)
	}

	return value
}
