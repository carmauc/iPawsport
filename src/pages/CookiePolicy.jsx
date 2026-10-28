import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const sections = [
	{ id: 'que-son', title: '1. ¿Qué son las cookies?' },
	{ id: 'uso-actual', title: '2. Uso actual en iPawsport' },
	{ id: 'preferencias', title: '3. Gestión de preferencias' },
	{ id: 'duracion', title: '4. Duración y conservación' },
	{ id: 'navegador', title: '5. Cómo gestionar el almacenamiento' },
	{ id: 'cambios', title: '6. Cambios en esta política' },
	{ id: 'contacto', title: '7. Contacto' },
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

export default function CookiePolicy() {
	useEffect(() => {
		const previousTitle = document.title
		document.title = 'Política de cookies | iPawsport'
		return () => {
			document.title = previousTitle
		}
	}, [])

	return (
		<main className='min-h-screen bg-[#F7F9F8] text-slate-700'>
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
							Transparencia y control
						</p>
						<h1 className='mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#103E38] sm:text-4xl lg:text-5xl'>
							Política de cookies
						</h1>
						<p className='mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg'>
							Te explicamos qué tecnologías de almacenamiento utiliza
							actualmente este sitio, para qué sirven y cómo puedes cambiar tus
							preferencias.
						</p>
						<p className='mt-4 text-sm text-slate-500'>
							Última actualización: 28/10/2026
						</p>
					</div>
				</div>
			</header>

			<div className='mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12 lg:py-14'>
				<aside className='h-fit rounded-2xl border border-[#DCE7E3] bg-white p-5 lg:sticky lg:top-28'>
					<h2 className='text-sm font-semibold text-[#103E38]'>
						En esta página
					</h2>
					<nav aria-label='Índice de la política de cookies' className='mt-3'>
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
					<Section id='que-son' title='1. ¿Qué son las cookies?'>
						<p>
							Las cookies son pequeños archivos que un sitio web puede guardar
							en tu navegador. También existen tecnologías de almacenamiento
							local, como localStorage, que conservan información en tu
							dispositivo sin ser cookies.
						</p>
					</Section>

					<Section id='uso-actual' title='2. Uso actual en iPawsport'>
						<p>
							Según la implementación actual del sitio, iPawsport no incorpora
							herramientas propias de analítica o publicidad que instalen
							cookies opcionales. La web utiliza almacenamiento local del
							navegador para recordar estas preferencias:
						</p>
						<ul className='list-disc space-y-2 pl-5 marker:text-[#18A192]'>
							<li>
								<strong className='text-[#103E38]'>ipawsport-language:</strong>{' '}
								recuerda el idioma que has seleccionado.
							</li>
							<li>
								<strong className='text-[#103E38]'>
									ipawsport-cookie-consent:
								</strong>{' '}
								guarda la decisión sobre las categorías opcionales del aviso de
								cookies para no mostrarlo en cada visita.
							</li>
						</ul>
						<p>
							Estas preferencias se almacenan en localStorage y no son cookies
							de seguimiento. Las categorías analíticas y publicitarias están
							desactivadas por defecto; activarlas en el panel solo guarda tu
							elección y no habilita herramientas que no estén instaladas.
							Revisaremos esta política si incorporamos nuevos servicios.
						</p>
					</Section>

					<Section id='preferencias' title='3. Gestión de preferencias'>
						<p>
							En el aviso puedes aceptar todas las categorías, permitir solo las
							necesarias o abrir la configuración para elegir las opcionales.
							Las preferencias se conservan durante un máximo de seis meses y
							puedes modificarlas en cualquier momento.
						</p>
						<button
							type='button'
							onClick={() =>
								window.dispatchEvent(
									new Event('ipawsport:open-cookie-settings'),
								)
							}
							className='inline-flex items-center justify-center rounded-lg bg-[#147F76] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#103E38] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#147F76]'>
							Configurar cookies
						</button>
					</Section>

					<Section id='duracion' title='4. Duración y conservación'>
						<p>
							La elección de consentimiento se guarda durante seis meses. La
							preferencia de idioma se conserva en tu navegador hasta que la
							elimines o borres los datos del sitio. No se crea un perfil
							publicitario ni se utiliza esta información para identificarte.
						</p>
					</Section>

					<Section id='navegador' title='5. Cómo gestionar el almacenamiento'>
						<p>
							Puedes borrar los datos almacenados por este sitio desde los
							ajustes de privacidad de tu navegador. Si eliminas la preferencia
							de idioma o consentimiento, la web volverá a preguntarte por tus
							preferencias y podrás seleccionar el idioma de nuevo.
						</p>
					</Section>

					<Section id='cambios' title='6. Cambios en esta política'>
						<p>
							Actualizaremos esta página si cambia el uso de cookies,
							almacenamiento local o servicios de terceros en el sitio. La
							información publicada describe la implementación actual; los
							cambios en herramientas o proveedores pueden requerir una nueva
							revisión.
						</p>
					</Section>

					<Section id='contacto' title='7. Contacto'>
						<p>
							Si tienes preguntas sobre esta política, escríbenos a{' '}
							<a
								href='mailto:info@ipawsport.com'
								className='font-medium text-[#147F76] underline decoration-[#18A192]/40 underline-offset-4 hover:text-[#103E38]'>
								info@ipawsport.com
							</a>
							. Para información sobre el tratamiento de datos personales,
							consulta también nuestra{' '}
							<Link
								to='/politica-de-privacidad'
								className='font-medium text-[#147F76] underline decoration-[#18A192]/40 underline-offset-4 hover:text-[#103E38]'>
								política de privacidad
							</Link>
							.
						</p>
					</Section>
				</article>
			</div>
		</main>
	)
}
