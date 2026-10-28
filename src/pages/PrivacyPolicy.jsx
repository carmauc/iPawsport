import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const sections = [
	{ id: 'responsable', title: '1. Responsable del tratamiento' },
	{ id: 'datos', title: '2. Datos que podemos tratar' },
	{ id: 'finalidades', title: '3. Finalidad del tratamiento' },
	{ id: 'legitimacion', title: '4. Base jurídica' },
	{ id: 'conservacion', title: '5. Conservación de los datos' },
	{ id: 'destinatarios', title: '6. Destinatarios' },
	{ id: 'transferencias', title: '7. Transferencias internacionales' },
	{ id: 'derechos', title: '8. Tus derechos' },
	{ id: 'seguridad', title: '9. Seguridad' },
	{ id: 'cambios', title: '10. Cambios en la política' },
	{ id: 'contacto', title: '11. Contacto' },
]

const Section = ({ id, title, children }) => (
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

export default function PrivacyPolicy() {
	useEffect(() => {
		const previousTitle = document.title
		document.title = 'Política de privacidad | iPawsport'

		return () => {
			document.title = previousTitle
		}
	}, [])

	return (
		<main className='min-h-screen bg-[#F7F9F8] text-slate-700'>
			{/* Cabecera */}
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

					<motion.div
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45 }}
						className='mt-8 max-w-3xl'>
						<p className='text-sm font-semibold uppercase tracking-[0.16em] text-[#18A192]'>
							Transparencia y confianza
						</p>

						<h1 className='mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#103E38] sm:text-4xl lg:text-5xl'>
							Política de privacidad
						</h1>

						<p className='mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg'>
							Tu privacidad importa. Aquí te explicamos cómo tratamos tus datos
							personales cuando visitas iPawsport, contactas con nosotros o
							solicitas nuestros servicios.
						</p>

						<p className='mt-4 text-sm text-slate-500'>
							Última actualización: [DD/MM/AAAA]
						</p>
					</motion.div>
				</div>
			</header>

			{/* Contenido */}
			<div className='mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12 lg:py-14'>
				{/* Índice lateral */}
				<aside className='h-fit rounded-2xl border border-[#DCE7E3] bg-white p-5 lg:sticky lg:top-28'>
					<h2 className='text-sm font-semibold text-[#103E38]'>
						En esta página
					</h2>

					<nav
						aria-label='Índice de la política de privacidad'
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

				{/* Política */}
				<article className='min-w-0 rounded-2xl border border-[#DCE7E3] bg-white p-5 sm:p-8 lg:p-10'>
					<div className='mb-5 rounded-xl border border-amber-200 bg-amber-50 p-4'>
						<p className='font-semibold text-amber-950'>Antes de publicar</p>
						<p className='mt-1 text-sm leading-6 text-amber-900'>
							Sustituye los campos entre corchetes y adapta esta política a los
							datos, formularios y proveedores que realmente utilice iPawsport.
							No publiques la página con información pendiente.
						</p>
					</div>

					<Section id='responsable' title='1. Responsable del tratamiento'>
						<p>
							El responsable del tratamiento de los datos personales recogidos a
							través de este sitio web es:
						</p>

						<div className='grid gap-3 sm:grid-cols-2'>
							{[
								['Titular o razón social', '[Nombre completo o empresa]'],
								['NIF/CIF', '[Número de identificación fiscal]'],
								['Correo electrónico', '[Correo de contacto]'],
								['Domicilio profesional', '[Dirección postal]'],
							].map(([label, value]) => (
								<div key={label} className='rounded-lg bg-[#F7F9F8] p-3'>
									<p className='text-xs font-medium uppercase tracking-wide text-slate-500'>
										{label}
									</p>
									<p className='mt-1 break-words font-medium text-[#103E38]'>
										{value}
									</p>
								</div>
							))}
						</div>
					</Section>

					<Section id='datos' title='2. Datos que podemos tratar'>
						<p>
							Dependiendo de cómo utilices la web, podremos tratar los
							siguientes datos, cuando sean necesarios:
						</p>
						<ul className='list-disc space-y-2 pl-5 marker:text-[#18A192]'>
							<li>Nombre y apellidos.</li>
							<li>Correo electrónico y teléfono de contacto.</li>
							<li>Información que facilites en tus consultas o solicitudes.</li>
							<li>
								Información relacionada con el viaje y la documentación de tu
								mascota, cuando sea necesaria para el servicio solicitado.
							</li>
							<li>
								Datos técnicos de navegación, si se utilizan herramientas que
								los recojan.
							</li>
						</ul>
						<p>
							Te recomendamos no enviarnos datos personales que no sean
							necesarios para atender tu solicitud.
						</p>
					</Section>

					<Section id='finalidades' title='3. Finalidad del tratamiento'>
						<p>Podemos utilizar tus datos para:</p>
						<ul className='list-disc space-y-2 pl-5 marker:text-[#18A192]'>
							<li>Responder a consultas y solicitudes de información.</li>
							<li>Gestionar los servicios que solicites o contrates.</li>
							<li>Comunicarnos contigo sobre tu solicitud o servicio.</li>
							<li>Cumplir las obligaciones legales aplicables.</li>
							<li>Mantener la seguridad y el funcionamiento del sitio web.</li>
						</ul>
						<p>
							Cualquier finalidad adicional, como el envío de comunicaciones
							comerciales, deberá contar con la base jurídica correspondiente y
							con información específica cuando proceda.
						</p>
					</Section>

					<Section id='legitimacion' title='4. Base jurídica'>
						<p>
							Según el tratamiento concreto, la base jurídica podrá ser la
							aplicación de medidas precontractuales solicitadas por ti, la
							ejecución de un contrato, el cumplimiento de una obligación legal
							o tu consentimiento cuando sea necesario.
						</p>
						<p>
							Cuando el tratamiento se base en el consentimiento, podrás
							retirarlo en cualquier momento. La retirada no afectará a la
							licitud del tratamiento realizado previamente.
						</p>
					</Section>

					<Section id='conservacion' title='5. Conservación de los datos'>
						<p>
							Conservaremos los datos durante el tiempo necesario para atender
							tu solicitud, prestar el servicio correspondiente y cumplir las
							obligaciones legales aplicables. Cuando proceda, podrán
							conservarse bloqueados durante los plazos necesarios para atender
							posibles responsabilidades.
						</p>
						<p>
							Los plazos concretos deben determinarse en función de cada
							finalidad y de las obligaciones aplicables a iPawsport.
						</p>
					</Section>

					<Section id='destinatarios' title='6. Destinatarios'>
						<p>
							No se venderán tus datos personales. Podrán acceder a ellos los
							proveedores necesarios para el funcionamiento de la web o la
							prestación del servicio, como el alojamiento web o el correo
							electrónico, cuando corresponda y bajo las garantías exigibles.
						</p>
						<p>
							También podrán comunicarse datos a autoridades, profesionales u
							otras entidades cuando sea necesario para el servicio solicitado o
							exista una obligación legal. Las comunicaciones concretas
							dependerán del servicio y de los destinatarios reales.
						</p>
					</Section>

					<Section
						id='transferencias'
						title='7. Transferencias internacionales'>
						<p>
							Si los proveedores utilizados por iPawsport implican
							transferencias de datos personales fuera del Espacio Económico
							Europeo, estas deberán realizarse conforme a los requisitos y
							garantías establecidos por la normativa aplicable.
						</p>
						<p>
							Este apartado deberá adaptarse a los proveedores y a los flujos
							internacionales de datos que existan realmente.
						</p>
					</Section>

					<Section id='derechos' title='8. Tus derechos'>
						<p>
							Puedes ejercer, cuando corresponda, tus derechos de acceso,
							rectificación, supresión, oposición, limitación del tratamiento y
							portabilidad. También puedes retirar el consentimiento cuando esa
							sea la base jurídica del tratamiento.
						</p>
						<p>Para ejercer tus derechos, contacta con nosotros en:</p>
						<p>
							<a
								href='mailto:[CORREO-DE-PRIVACIDAD]'
								className='font-medium text-[#147F76] underline decoration-[#18A192]/40 underline-offset-4 hover:text-[#103E38]'>
								[Correo para solicitudes de privacidad]
							</a>
						</p>
						<p>
							Si es necesario, podremos solicitar información adicional para
							verificar tu identidad antes de atender la solicitud.
						</p>
						<p>
							También puedes presentar una reclamación ante la Agencia Española
							de Protección de Datos (AEPD).
						</p>
						<a
							href='https://www.aepd.es/'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 font-medium text-[#147F76] underline decoration-[#18A192]/40 underline-offset-4 hover:text-[#103E38]'>
							Agencia Española de Protección de Datos
							<span aria-hidden='true'>↗</span>
						</a>
					</Section>

					<Section id='seguridad' title='9. Seguridad'>
						<p>
							Aplicaremos medidas técnicas y organizativas apropiadas al tipo de
							información y a los riesgos del tratamiento para proteger los
							datos personales frente a accesos no autorizados, pérdida,
							alteración o divulgación indebida.
						</p>
					</Section>

					<Section id='cambios' title='10. Cambios en la política'>
						<p>
							Esta política podrá actualizarse para reflejar cambios legales,
							técnicos o en los servicios de iPawsport. La versión vigente
							estará disponible en esta página e indicará su fecha de
							actualización.
						</p>
					</Section>

					<Section id='contacto' title='11. Contacto'>
						<p>
							Si tienes dudas sobre esta política o sobre el tratamiento de tus
							datos personales, puedes contactar con nosotros a través de los
							datos indicados en el apartado de responsable.
						</p>
					</Section>

					{/* CTA final */}
					<div className='mt-8 rounded-xl bg-[#103E38] p-5 text-white sm:p-6'>
						<h2 className='text-lg font-semibold'>¿Tienes alguna duda?</h2>
						<p className='mt-2 text-sm leading-6 text-white/80'>
							Contacta con iPawsport si necesitas información sobre el
							tratamiento de tus datos personales.
						</p>
						<Link
							to='/contacto'
							className='mt-4 inline-flex items-center justify-center rounded-lg bg-[#18A192] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#147F76] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#103E38]'>
							Contactar con iPawsport
						</Link>
					</div>
				</article>
			</div>
		</main>
	)
}
