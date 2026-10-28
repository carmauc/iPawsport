const BASE_URL = import.meta.env.VITE_API_URL?.trim()

const api = {
	enviarFormulario: async formData => {
		if (!BASE_URL) {
			throw new Error('Falta configurar la URL del servidor.')
		}

		const response = await fetch(`${BASE_URL}/contacto`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(formData),
		})

		const responseData = await response.json().catch(() => ({}))

		if (!response.ok) {
			throw new Error(responseData.error || 'Error al enviar el formulario.')
		}

		return responseData
	},
}

export default api
