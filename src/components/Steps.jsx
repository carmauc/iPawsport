import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'
import { Link } from 'react-router-dom'

const steps = [
	{
		number: '01',
		title: 'Cuéntanos tu viaje',
		text: 'Indícanos el destino, la fecha de salida y los datos de tu mascota para conocer tus necesidades.',
	},
	{
		number: '02',
		title: 'Analizamos los requisitos',
		text: 'Revisamos las exigencias sanitarias y documentales del país de destino según las características de tu viaje.',
	},
	{
		number: '03',
		title: 'Diseñamos tu plan',
		text: 'Te explicamos qué vacunas, pruebas, certificados y trámites necesitas, junto con los plazos que debes tener en cuenta.',
	},
	{
		number: '04',
		title: 'Preparamos a tu mascota',
		text: 'Coordinamos los servicios veterinarios necesarios, como vacunación, microchip, serología o revisión sanitaria.',
	},
	{
		number: '05',
		title: 'Gestionamos la documentación',
		text: 'Preparamos y tramitamos los certificados y documentos oficiales que correspondan a tu destino.',
	},
	{
		number: '06',
		title: 'Todo listo para viajar',
		text: 'Te entregamos la documentación y las indicaciones finales para que tengas claros los siguientes pasos antes de viajar.',
	},
]

const preparations = [
	{
		title: 'Identificación y vacunación',
		text: 'Microchip, pasaporte y vacunas vigentes según los requisitos del destino.',
	},
	{
		title: 'Pruebas y tratamientos',
		text: 'Serología de rabia, desparasitación y otros procedimientos cuando sean obligatorios.',
	},
	{
		title: 'Certificados oficiales',
		text: 'CEXGAN, certificados sanitarios y documentación específica según el país.',
	},
	{
		title: 'Plazos y planificación',
		text: 'Fechas clave, periodos de espera y trámites que debes realizar antes de la salida.',
	},
]

const Steps = () => {
	const { t } = useTranslation()
	return (
		<>
			{/* PROCESO */}
			<section className='relative overflow-hidden pb-28'>
				<div className='mx-auto max-w-7xl px-5 md:px-8'>
					<SectionTitle
						text1='Nuestro proceso'
						text2='Viajar con tu mascota, paso a paso'
						text3='Nos encargamos de la preparación documental y veterinaria para que sepas qué necesitas, cuándo hacerlo y cómo organizar cada trámite.'
					/>

					<div className='relative mt-16'>
						{/* Línea decorativa en escritorio */}
						<div className='absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-primary/15 xl:block' />

						<div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
							{steps.map((step, index) => (
								<Reveal
									key={step.number}
									direction={'bottom'}
									delay={index * 0.15}
									className='h-full'>
									<article className='group relative flex h-full flex-col rounded-3xl border border-[#DCE7E3] bg-[#F1F5F4] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5'>
										<div className='mb-8 flex items-center justify-between'>
											<span className='text-4xl font-light tracking-tight text-[#18AA9C]/90 transition-colors duration-300 group-hover:text-primary'>
												{step.number}
											</span>

											<div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-lighter text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white'>
												{index === 0 && (
													<svg
														viewBox='0 0 24 24'
														fill='none'
														className='h-5 w-5'
														stroke='currentColor'
														strokeWidth='1.7'>
														<path
															d='M8 10h8M8 14h5M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
												)}

												{index === 1 && (
													<svg
														viewBox='0 0 24 24'
														fill='none'
														className='h-5 w-5'
														stroke='currentColor'
														strokeWidth='1.7'>
														<circle cx='11' cy='11' r='7' />
														<path
															d='m16 16 4 4M8 11h6M11 8v6'
															strokeLinecap='round'
														/>
													</svg>
												)}

												{index === 2 && (
													<svg
														viewBox='0 0 24 24'
														fill='none'
														className='h-5 w-5'
														stroke='currentColor'
														strokeWidth='1.7'>
														<path
															d='M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z'
															strokeLinejoin='round'
														/>
														<path
															d='m9 12 2 2 4-4'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
												)}

												{index === 3 && (
													<svg
														viewBox='0 0 24 24'
														fill='none'
														className='h-5 w-5'
														stroke='currentColor'
														strokeWidth='1.7'>
														<path d='M12 3v18M3 12h18' strokeLinecap='round' />
														<circle cx='12' cy='12' r='9' />
													</svg>
												)}

												{index === 4 && (
													<svg
														viewBox='0 0 24 24'
														fill='none'
														className='h-5 w-5'
														stroke='currentColor'
														strokeWidth='1.7'>
														<path
															d='M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z'
															strokeLinejoin='round'
														/>
														<path
															d='M14 3v6h5M9 14h6M9 17h6'
															strokeLinecap='round'
														/>
													</svg>
												)}

												{index === 5 && (
													<svg
														viewBox='0 0 24 24'
														fill='none'
														className='h-5 w-5'
														stroke='currentColor'
														strokeWidth='1.7'>
														<path
															d='m5 12 4 4L19 6'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
												)}
											</div>
										</div>

										<h3 className='text-xl font-semibold text-primary-dark'>
											{translateText(t, step.title)}
										</h3>

										<p className='mt-3 text-sm leading-7 text-gray-600'>
											{translateText(t, step.text)}
										</p>

										<div className='mt-auto pt-7'>
											<div className='h-0.5 w-12 bg-primary/30 transition-all duration-300 group-hover:w-full group-hover:bg-primary' />
										</div>
									</article>
								</Reveal>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* PREPARACIÓN DEL VIAJE */}
			<section className='bg-white py-20 md:py-28'>
				<div className='mx-auto max-w-7xl px-5 md:px-8'>
					<div className='grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20'>
						{/* Texto y lista */}
						<Reveal direction='left' duration={1.5} distance='100px'>
							{' '}
							<div>
								<span className='text-xs font-semibold uppercase tracking-[0.2em] text-primary'>
									{translateText(t, 'Preparación del viaje')}
								</span>

								<h2 className='mt-4 max-w-xl text-3xl font-semibold leading-tight text-primary-dark md:text-4xl'>
									{translateText(
										t,
										'Cada destino tiene sus propias exigencias',
									)}
								</h2>

								<p className='mt-5 max-w-xl leading-7 text-slate-600'>
									{translateText(
										t,
										'No todos los viajes requieren la misma documentación. Por eso, analizamos cada caso de forma individual y organizamos los trámites según el destino y la fecha.',
									)}
								</p>

								<div className='mt-9 space-y-6'>
									{preparations.map(item => (
										<div key={item.title} className='flex gap-4'>
											<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-lighter text-primary'>
												<svg
													className='h-5 w-5'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='1.8'>
													<path
														d='m5 12 4 4L19 6'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
											</div>

											<div>
												<h3 className='font-semibold text-primary-dark'>
													{translateText(t, item.title)}
												</h3>
												<p className='mt-1 text-sm leading-6 text-slate-600'>
													{translateText(t, item.text)}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</Reveal>

						<Reveal direction='right' duration={1.5} distance='100px'>
							<div className='relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-dark to-[#147F76] p-8 text-white md:p-10'>
								{/* Decoración */}
								<div className='pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10' />
								<div className='pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10' />

								<div className='relative'>
									<span className='text-xs font-semibold uppercase tracking-[0.2em] text-primary-light'>
										{translateText(t, 'Asesoramiento personalizado')}
									</span>

									<h3 className='mt-5 text-3xl font-semibold leading-tight md:text-4xl'>
										{translateText(t, '¿Ya tienes fecha y destino?')}
									</h3>

									<p className='mt-5 leading-7 text-white/75'>
										{translateText(
											t,
											'Consulta los requisitos para viajar con tu mascota o contacta con nuestro equipo si necesitas orientación personalizada.',
										)}
									</p>

									{/* Acción principal: requisitos por país */}
									<Link
										to='/requisitos'
										className='mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20'>
										{translateText(t, 'Consultar requisitos por país')}
										<svg
											className='h-5 w-5'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='1.8'>
											<path
												d='M5 12h14m-6-6 6 6-6 6'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</Link>

									{/* Acción secundaria: contacto */}
									<Link
										to='/contacto'
										className='mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 font-medium text-white transition-colors hover:border-white/50 hover:bg-white/10'>
										<svg
											className='h-5 w-5'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='1.8'>
											<path
												d='M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										{translateText(t, 'Solicitar asesoramiento personalizado')}
									</Link>

									<p className='mt-5 text-center text-xs leading-5 text-white/50'>
										{translateText(
											t,
											'Orientación inicial en menos de 24 horas laborables. Los plazos de tramitación dependen de cada destino.',
										)}
									</p>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>
		</>
	)
}

export default Steps
