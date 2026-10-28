import Faq from '../components/Faq'
import PageMetadata from '../components/PageMetadata'
const PreguntasFrecuentes = () => {
	return (
		<div>
			<PageMetadata
				title='Preguntas frecuentes sobre viajes con mascotas | iPawsport'
				description='Respuestas sobre documentación, requisitos sanitarios y preparación para viajar con mascotas.'
			/>
			<Faq />
		</div>
	)
}

export default PreguntasFrecuentes
