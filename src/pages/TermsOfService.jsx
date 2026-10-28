import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const sections = [
	{ id: 'alcance', title: '1. Alcance del servicio' },
	{ id: 'solicitud', title: '2. Solicitud y contratación' },
	{ id: 'precio', title: '3. Precio y pago' },
	{ id: 'cliente', title: '4. Información del cliente' },
	{ id: 'plazos', title: '5. Plazos y requisitos' },
	{ id: 'desistimiento', title: '6. Desistimiento y cancelaciones' },
	{ id: 'responsabilidad', title: '7. Alcance y responsabilidad' },
	{ id: 'reclamaciones', title: '8. Consultas y reclamaciones' },
	{ id: 'modificaciones', title: '9. Modificaciones' },
]

function Section({ id, title, children }) {
	return (
		<section
			id={id}
			className='scroll-mt-28 border-b border-[#E8EFEC] py-7 last:border-0'>
			<h2 className='text-xl font-semibold leading-snug text-[#103E38]'>
				{title}
			</h2>
			<div className='mt-3 space-y-3 text-[15px] leading-7 text-slate-600'>
				{children}
			</div>
		</section>
	)
}

export default function TermsOfService() {
	useEffect(() => {
		const previousTitle = document.title
		document.title = 'Condiciones del servicio | iPawsport'

		return () => {
			document.title = previousTitle
		}
	}, [])

	return (
		<div className='min-h-screen bg-[#F7F9F8] text-slate-700'>
			<header className='relative overflow-hidden border-b border-[#DCE7E3] bg-[#F1F5F4]'>
				<div
					aria-hidden='true'
					className='pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#18A192]/10 blur-3xl'
				/>

				<div className='relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20'>
					<Link
						to='/'
						className='inline-flex items-center gap-2 text-sm font-medium text-[#147F76] transition hover:text-[#103E38]'>
						<span aria-hidden='true'>←</span>
						Volver al inicio
					</Link>

					<div className='mt-8 max-w-3xl'>
						<p className='text-sm font-semibold uppercase tracking-[0.16em] text-[#18A192]'>
							Información para clientes
						</p>
						<h1 className='mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#103E38] sm:text-4xl lg:text-5xl'>
							Condiciones del servicio
						</h1>
						<p className='mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg'>
							Estas condiciones describen el alcance general de los servicios de
							documentación y asesoramiento de iPawsport para viajar con perros
							y gatos.
						</p>
						<p className='mt-4 text-sm text-slate-500'>
							Última actualización: [DD/MM/AAAA]
						</p>
					</div>
				</div>
			</header>

			<div className='mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12 lg:py-14'>
				<aside className='h-fit rounded-2xl border border-[#DCE7E3] bg-white p-5 lg:sticky lg:top-28'>
					<h2 className='text-sm font-semibold text-[#103E38]'>
						En esta página
					</h2>
					<nav
						aria-label='Índice de las condiciones del servicio'
						className='mt-3'>
						<ul className='space-y-1'>
							{sections.map(section => (
								<li key={section.id}>
									<a
										href={`#${section.id}`}
										className='block rounded-lg px-3 py-2 text-sm leading-5 text-slate-600 transition hover:bg-[#F1F5F4] hover:text-[#103E38]'>
										{section.title}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</aside>

				<article className='min-w-0 rounded-2xl border border-[#DCE7E3] bg-white p-5 sm:p-8 lg:p-10'>
					<div className='mb-5 rounded-xl border border-amber-200 bg-amber-50 p-4'>
						<p className='font-semibold text-amber-950'>Antes de publicar</p>
						<p className='mt-1 text-sm leading-6 text-amber-900'>
							Completa y revisa los campos entre corchetes y adapta las
							cláusulas al proceso, precios, plazos y servicios que realmente
							ofreces. Las condiciones no sustituyen la información que debe
							mostrarse antes de cada contratación.
						</p>
					</div>

					<Section id='alcance' title='1. Alcance del servicio'>
						<p>
							iPawsport presta servicios de orientación, documentación y
							asesoramiento relacionados con los requisitos para viajar con
							perros y gatos. El alcance concreto, entregables, precio y plazo
							de cada servicio se describirán antes de que el cliente lo
							contrate.
						</p>
						<p>
							iPawsport no transporta animales, no vende billetes ni reserva
							vuelos o alojamientos. La contratación de servicios de terceros
							corresponde al cliente, salvo que se acuerde expresamente otra
							cosa por escrito.
						</p>
						<p>
							La información facilitada no sustituye la valoración clínica ni la
							atención veterinaria. Cuando sea necesario realizar actos clínicos
							o emitir documentos oficiales, deberá intervenir el profesional o
							autoridad habilitados para ello.
						</p>
					</Section>

					<Section id='solicitud' title='2. Solicitud y contratación'>
						<p>
							El cliente puede solicitar información mediante los canales
							indicados en el sitio. Antes de aceptar una contratación,
							iPawsport facilitará la descripción del servicio, su precio total
							o el método para calcularlo, la forma de pago y el plazo estimado,
							además de cualquier condición específica aplicable.
						</p>
						<p>
							La contratación solo se entenderá confirmada cuando el cliente
							acepte la propuesta y reciba confirmación por un medio duradero,
							como el correo electrónico.
						</p>
						<p>
							Si la contratación se realiza en línea, las condiciones aplicables
							deberán estar disponibles para su consulta y conservación antes de
							que el cliente complete el pedido.
						</p>
					</Section>

					<Section id='precio' title='3. Precio y pago'>
						<p>
							El precio aplicable será el comunicado al cliente antes de
							contratar: <strong>[indicar precios o dónde se consultan]</strong>
							. Debe especificarse si incluye impuestos y cualquier coste
							adicional.
						</p>
						<p>
							Medios de pago aceptados:{' '}
							<strong>[indicar medios de pago]</strong>. El momento del cobro y,
							si procede, los pagos por fases se indicarán en la propuesta o
							confirmación del servicio.
						</p>
					</Section>

					<Section id='cliente' title='4. Información del cliente'>
						<p>
							Para prestar el servicio, el cliente debe proporcionar información
							completa y exacta sobre el destino, origen, fechas, itinerario,
							animal y documentación disponible. Debe comunicar cualquier cambio
							que pueda afectar a la orientación solicitada.
						</p>
						<p>
							El cliente es responsable de revisar los datos y documentos
							personales y del animal que aporte antes de su uso o presentación
							ante terceros.
						</p>
					</Section>

					<Section id='plazos' title='5. Plazos y requisitos'>
						<p>
							Los plazos de respuesta o entrega serán los indicados en la
							propuesta individual. Si no se especifica un plazo, deberá
							acordarse con el cliente antes de la contratación.
						</p>
						<p>
							Los requisitos de entrada y tránsito pueden cambiar y depender de
							las autoridades competentes, la ruta y las circunstancias del
							animal. El cliente debe confirmarlos con las fuentes oficiales y
							con su veterinario, laboratorio y compañía de transporte.
						</p>
						<p>
							iPawsport no puede garantizar la concesión de permisos, la emisión
							de certificados por terceros, la aceptación de documentos ni la
							admisión del animal en un país o medio de transporte.
						</p>
					</Section>

					<Section id='desistimiento' title='6. Desistimiento y cancelaciones'>
						<p>
							Cuando el cliente tenga la condición de consumidor y el contrato
							se celebre a distancia, podrá aplicarse el derecho legal de
							desistimiento de catorce días naturales, salvo las excepciones
							previstas por la normativa. La forma de ejercerlo y sus efectos se
							comunicarán antes de contratar.
						</p>
						<p>
							Si el cliente solicita que el servicio comience durante el plazo
							de desistimiento, iPawsport recabará previamente las declaraciones
							expresas que sean exigibles. La pérdida del derecho al completarse
							el servicio solo se aplicará cuando se cumplan los requisitos
							legales correspondientes.
						</p>
						<p>
							Para solicitar una cancelación o ejercer el desistimiento, escribe
							a <strong>[correo de contacto]</strong> indicando el servicio
							contratado y la fecha de contratación. Las condiciones específicas
							de cancelación y cualquier importe que pudiera corresponder
							deberán comunicarse antes del pago y respetarán los derechos
							legales del consumidor.
						</p>
					</Section>

					<Section id='responsabilidad' title='7. Alcance y responsabilidad'>
						<p>
							iPawsport se compromete a prestar el servicio contratado con
							diligencia y conforme a la descripción aceptada. El asesoramiento
							se basa en la información disponible y en los datos facilitados
							por el cliente.
						</p>
						<p>
							Las decisiones sobre admisión, controles y documentos corresponden
							a las autoridades y terceros competentes. El cliente debe
							comprobar los requisitos vigentes antes del viaje y seguir las
							indicaciones de su veterinario y de los proveedores de transporte.
						</p>
						<p>
							Estas condiciones no limitan los derechos imperativos del
							consumidor ni excluyen responsabilidades que no puedan excluirse
							conforme a la ley.
						</p>
					</Section>

					<Section id='reclamaciones' title='8. Consultas y reclamaciones'>
						<p>
							Para consultas o reclamaciones relacionadas con un servicio,
							contacta con iPawsport en <strong>[correo de atención]</strong>.
							Indica tu nombre, el servicio contratado y una descripción de la
							solicitud.
						</p>
						<p>
							La persona consumidora podrá acudir a los mecanismos de resolución
							de conflictos y a las autoridades de consumo que resulten
							competentes conforme a la normativa aplicable.
						</p>
					</Section>

					<Section id='modificaciones' title='9. Modificaciones'>
						<p>
							Estas condiciones podrán actualizarse para reflejar cambios
							legales o en los servicios. Se aplicará al contrato la versión
							comunicada y aceptada en el momento de la contratación, sin
							perjuicio de los derechos que correspondan al cliente.
						</p>
						<p>
							Para más información sobre los datos personales tratados, consulta
							la{' '}
							<Link
								to='/politica-de-privacidad'
								className='font-medium text-[#147F76] underline decoration-[#18A192]/40 underline-offset-4 hover:text-[#103E38]'>
								Política de privacidad
							</Link>
							.
						</p>
					</Section>

					<div className='mt-8 rounded-xl bg-[#103E38] p-5 text-white sm:p-6'>
						<h2 className='text-lg font-semibold'>
							¿Tienes preguntas sobre el servicio?
						</h2>
						<p className='mt-2 text-sm leading-6 text-white/80'>
							Contacta con iPawsport para resolver tus dudas antes de contratar.
						</p>
						<Link
							to='/contacto'
							className='mt-4 inline-flex items-center justify-center rounded-lg bg-[#18A192] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#147F76] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#103E38]'>
							Contactar con iPawsport
						</Link>
					</div>
				</article>
			</div>
		</div>
	)
}
