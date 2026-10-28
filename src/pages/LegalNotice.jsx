import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const sections = [
	{ id: 'titular', title: '1. Titular del sitio web' },
	{ id: 'objeto', title: '2. Objeto y actividad' },
	{ id: 'uso', title: '3. Condiciones de uso' },
	{ id: 'propiedad', title: '4. Propiedad intelectual' },
	{ id: 'responsabilidad', title: '5. Responsabilidad' },
	{ id: 'enlaces', title: '6. Enlaces externos' },
	{ id: 'datos', title: '7. Protección de datos' },
	{ id: 'ley', title: '8. Legislación aplicable' },
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

export default function LegalNotice() {
	useEffect(() => {
		const previousTitle = document.title
		document.title = 'Aviso legal | iPawsport'

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
							Información legal
						</p>
						<h1 className='mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#103E38] sm:text-4xl lg:text-5xl'>
							Aviso legal
						</h1>
						<p className='mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg'>
							Información sobre la titularidad de iPawsport y las condiciones
							generales de uso de este sitio web.
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
					<nav aria-label='Índice del aviso legal' className='mt-3'>
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
							Completa los datos entre corchetes con la información real del
							titular. La Ley de servicios de la sociedad de la información
							exige que estos datos estén disponibles de forma permanente,
							sencilla, directa y gratuita. No publiques esta página con campos
							pendientes.
						</p>
					</div>

					<Section id='titular' title='1. Titular del sitio web'>
						<p>
							En cumplimiento del deber de información, se indican a
							continuación los datos del titular del sitio web:
						</p>

						<div className='grid gap-3 sm:grid-cols-2'>
							{[
								['Titular o razón social', '[Nombre completo o razón social]'],
								['NIF o CIF', '[Número de identificación fiscal]'],
								['Domicilio profesional', '[Dirección postal completa]'],
								['Correo electrónico', '[Correo de contacto]'],
								['Teléfono', '[Teléfono de contacto, si procede]'],
								['Registro', '[Datos registrales, si procede]'],
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

					<Section id='objeto' title='2. Objeto y actividad'>
						<p>
							iPawsport ofrece información, documentación y asesoramiento
							relacionado con los requisitos para viajar con perros y gatos. La
							información de este sitio tiene carácter orientativo y debe
							contrastarse con las autoridades competentes y los proveedores
							implicados en cada viaje.
						</p>
						<p>
							iPawsport no transporta animales, no vende billetes ni reserva
							vuelos. Tampoco sustituye las decisiones de las autoridades
							sanitarias, veterinarios, laboratorios, aerolíneas u otros
							operadores de transporte.
						</p>
					</Section>

					<Section id='uso' title='3. Condiciones de uso'>
						<p>
							La persona usuaria se compromete a utilizar el sitio web de forma
							lícita, diligente y respetuosa con los derechos de terceros y con
							el funcionamiento del servicio.
						</p>
						<p>
							No se permite utilizar el sitio para introducir o difundir
							contenido ilícito, dañino, engañoso o que pueda afectar a la
							seguridad, disponibilidad o integridad del sitio web.
						</p>
					</Section>

					<Section id='propiedad' title='4. Propiedad intelectual'>
						<p>
							Los textos, diseños, logotipos, imágenes y demás elementos del
							sitio pertenecen a su titular o se utilizan con autorización de
							sus respectivos titulares. No podrán reproducirse, distribuirse ni
							transformarse sin la autorización correspondiente, salvo en los
							casos permitidos por la ley.
						</p>
						<p>
							Las marcas, nombres y logotipos de terceros que puedan aparecer en
							el sitio pertenecen a sus respectivos titulares y no implican
							afiliación ni patrocinio salvo que se indique expresamente.
						</p>
					</Section>

					<Section id='responsabilidad' title='5. Responsabilidad'>
						<p>
							Se procura mantener la información del sitio actualizada y
							comprensible, pero los requisitos de viaje pueden variar según el
							destino, el origen, la ruta, la fecha y las características del
							animal.
						</p>
						<p>
							La persona usuaria debe verificar los requisitos vigentes con las
							autoridades oficiales, su veterinario y los proveedores de
							transporte correspondientes. iPawsport no garantiza la admisión de
							un animal en un país ni la aceptación de documentos por parte de
							terceros.
						</p>
						<p>
							Nada de lo indicado en este aviso limita los derechos que la ley
							reconoce a las personas consumidoras ni excluye responsabilidades
							que no puedan excluirse legalmente.
						</p>
					</Section>

					<Section id='enlaces' title='6. Enlaces externos'>
						<p>
							Este sitio puede incluir enlaces a páginas de terceros,
							especialmente autoridades y fuentes oficiales. iPawsport no
							controla el contenido ni la disponibilidad de esas páginas. La
							inclusión de un enlace no supone necesariamente una relación,
							aprobación o recomendación de su titular.
						</p>
					</Section>

					<Section id='datos' title='7. Protección de datos'>
						<p>
							El tratamiento de datos personales se explica en la{' '}
							<Link
								to='/politica-de-privacidad'
								className='font-medium text-[#147F76] underline decoration-[#18A192]/40 underline-offset-4 hover:text-[#103E38]'>
								Política de privacidad
							</Link>
							. El uso de cookies y tecnologías similares se describe en la{' '}
							<Link
								to='/politica-de-cookies'
								className='font-medium text-[#147F76] underline decoration-[#18A192]/40 underline-offset-4 hover:text-[#103E38]'>
								Política de cookies
							</Link>
							.
						</p>
					</Section>

					<Section id='ley' title='8. Legislación aplicable'>
						<p>
							Este aviso se rige por la legislación española. Cuando la persona
							usuaria tenga la condición de consumidora, serán competentes los
							juzgados y tribunales que establezca la normativa aplicable.
						</p>
					</Section>

					<div className='mt-8 rounded-xl bg-[#103E38] p-5 text-white sm:p-6'>
						<h2 className='text-lg font-semibold'>¿Tienes alguna duda?</h2>
						<p className='mt-2 text-sm leading-6 text-white/80'>
							Escríbenos si necesitas información sobre este aviso legal.
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
