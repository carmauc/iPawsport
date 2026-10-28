import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'

const Faq = () => {
	const { t } = useTranslation()
	const [openIndex, setOpenIndex] = useState(0)

	const faqs = [
		{
			question: '¿Qué documentación necesita mi mascota para viajar?',
			answer:
				'Los requisitos dependen del país de destino, el país de origen y la fecha del viaje. Revisamos tu caso y te indicamos qué documentos, vacunas, certificados o pruebas necesita tu mascota antes de viajar.',
		},
		{
			question: '¿Qué es el certificado CEXGAN?',
			answer:
				'El CEXGAN es la documentación oficial necesaria para determinados viajes internacionales con mascotas desde España. Nos encargamos de revisar los requisitos y gestionar la documentación correspondiente para tu viaje.',
		},
		{
			question: '¿Necesito una serología de rabia?',
			answer:
				'Depende del país de destino. Algunos países exigen una prueba de anticuerpos frente a la rabia realizada después de la vacunación y con unos plazos determinados. Revisamos tu caso para confirmar si es necesaria y cuándo debe realizarse.',
		},
		{
			question: '¿Puedo obtener el pasaporte europeo para mi mascota?',
			answer:
				'Sí. Podemos ayudarte con la gestión del pasaporte europeo para perros, gatos y hurones, además de revisar que la identificación mediante microchip y las vacunas estén correctamente registradas.',
		},
		{
			question: '¿Cuánto tiempo antes del viaje debo empezar los trámites?',
			answer:
				'Recomendamos empezar a preparar la documentación con suficiente antelación, ya que algunos destinos requieren vacunas, serología de rabia o periodos de espera. Cuanto antes revisemos el caso, más fácil será organizar todos los requisitos.',
		},
		{
			question: '¿Podéis realizar la vacunación y el microchip a domicilio?',
			answer:
				'Sí. Dependiendo de la zona, podemos gestionar servicios veterinarios a domicilio como vacunación, identificación mediante microchip y otros procedimientos necesarios para preparar a tu mascota para el viaje.',
		},
		{
			question: '¿Os encargáis del transporte de mi mascota?',
			answer:
				'No. iPawsport se centra en la preparación y gestión de la documentación veterinaria necesaria para viajar con tu mascota. El transporte, los vuelos y las gestiones de importación o cuarentena son responsabilidad del propietario.',
		},
		{
			question: '¿Cómo puedo saber qué necesita mi mascota para viajar?',
			answer:
				'Solo tienes que indicarnos a dónde viajas, cuándo viajas y algunos datos de tu mascota. Nuestro equipo veterinario revisará tu caso y te indicará los pasos necesarios para preparar el viaje.',
		},
	]

	const toggleFaq = index => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section>
			<div className='container px-6 mx-auto max-w-5xl mb-28'>
				<div className='text-center mb-12'>
					<SectionTitle
						text1='Preguntas frecuentes'
						text2='Resolvemos tus dudas antes de viajar'
						text3='Resolvemos las dudas más frecuentes sobre la documentación y los requisitos para viajar con tu mascota.'
					/>
				</div>

				<div className='border-t border-gray-200 mt-20'>
					{faqs.map((faq, index) => (
						<div key={index} className='border-b border-gray-200'>
							<button
								type='button'
								onClick={() => toggleFaq(index)}
								className='flex items-center justify-between w-full py-6 text-left focus:outline-none'
								aria-expanded={openIndex === index}>
								<span className='pr-6 text-lg font-medium text-gray-800'>
									{translateText(t, faq.question)}
								</span>

								<span
									className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
										openIndex === index
											? 'bg-primary text-white'
											: 'bg-primary-lighter text-primary'
									}`}>
									<svg
										className={`w-5 h-5 transition-transform duration-300 ${
											openIndex === index ? 'rotate-45' : ''
										}`}
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M12 4v16m8-8H4'
										/>
									</svg>
								</span>
							</button>

							<div
								className={`grid transition-all duration-300 ease-in-out ${
									openIndex === index
										? 'grid-rows-[1fr] opacity-100 pb-6'
										: 'grid-rows-[0fr] opacity-0'
								}`}>
								<div className='overflow-hidden'>
									<div className='flex gap-4 md:pl-6'>
										<span className='w-1 flex-shrink-0 rounded-full bg-primary' />

										<p className='max-w-3xl text-gray-500 leading-relaxed'>
											{translateText(t, faq.answer)}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='mt-10 text-center'>
					<p className='text-gray-500'>
						{translateText(t, '¿No encuentras la respuesta que buscas?')}
					</p>

					<a
						href='/contacto'
						className='inline-flex mt-3 font-medium text-primary hover:text-primary-dark transition-colors'>
						{translateText(t, 'Consulta tu caso con nuestro equipo →')}
					</a>
				</div>
			</div>
		</section>
	)
}

export default Faq
