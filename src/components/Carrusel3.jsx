import { useState } from 'react'
import Reveal from './Reveal'
import experiencia from '../assets/experiencia.png'
import gestion from '../assets/gestion.png'
import requisitos from '../assets/requisitos.png'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'

const Carrusel3 = () => {
	const { t } = useTranslation()

	// Estado para controlar qué imagen se muestra
	const [selectedTab, setSelectedTab] = useState('tabs-with-card-1')

	// Función para cambiar la imagen cuando se hace clic en un botón
	const handleTabClick = tabId => {
		setSelectedTab(tabId)
	}
	return (
		<section className='pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-gradient-to-br from-primary to-[#147F76] bg-cover mt-24'>
			<Reveal direction='right' delay={0.4} duration={1} distance='100px'>
				<div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
					<div className='relative p-6 md:p-16'>
						<div className='relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center'>
							<div className='mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2'>
								<h2 className='text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200'>
									{translateText(
										t,
										'Viajar con tu mascota no debería convertirse en un problema burocrático.',
									)}
								</h2>

								<nav
									className='grid gap-4 mt-5 md:mt-10'
									aria-label={translateText(t, 'Secciones de servicios')}
									role='tablist'>
									<button
										type='button'
										className={`hs-tab-active:bg-white hs-tab-active:shadow-md
  hs-tab-active:hover:border-transparent
  text-start p-4 md:p-5 rounded-xl
  hover:bg-primary-dark
  focus:outline-none
  focus:ring-1
  focus:ring-primary/30
  focus:ring-offset-1
  focus:ring-offset-white
  focus:shadow-[0_0_0_4px_rgba(24,161,146,0.10),0_8px_25px_rgba(16,62,56,0.10)]
  transition-all duration-300 ease-out
  ${selectedTab === 'tabs-with-card-1' && 'hs-tab-active:bg-primary-light/30'}
`}
										id='tabs-with-card-item-1'
										data-hs-tab='#tabs-with-card-1'
										aria-controls='tabs-with-card-1'
										role='tab'
										onClick={() => handleTabClick('tabs-with-card-1')}>
										<span className='flex'>
											<svg
												className='flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'>
												<path d='M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z' />
												<path d='M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z' />
												<path d='M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z' />
												<path d='M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z' />
												<path d='M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z' />
											</svg>
											<span className='grow ms-6'>
												<span className='block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200'>
													{translateText(
														t,
														'Experiencia veterinaria colegiada',
													)}
												</span>
												<span className='block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200'>
													{translateText(
														t,
														'Evaluación previa del estado de salud, pauta de vacunación, tratamientos antiparasitarios específicos y expedición del Certificado Veterinario de Salud (CVS).',
													)}
												</span>
											</span>
										</span>
									</button>

									<button
										type='button'
										className={`hs-tab-active:bg-white hs-tab-active:shadow-md
  hs-tab-active:hover:border-transparent
  text-start p-4 md:p-5 rounded-xl
  hover:bg-primary-dark
  focus:outline-none
  focus:ring-1
  focus:ring-primary/30
  focus:ring-offset-1
  focus:ring-offset-white
  focus:shadow-[0_0_0_4px_rgba(24,161,146,0.10),0_8px_25px_rgba(16,62,56,0.10)]
  transition-all duration-300 ease-out
  ${selectedTab === 'tabs-with-card-2' && 'hs-tab-active:bg-primary-light/30'}
`}
										id='tabs-with-card-item-2'
										data-hs-tab='#tabs-with-card-2'
										aria-controls='tabs-with-card-2'
										role='tab'
										onClick={() => handleTabClick('tabs-with-card-2')}>
										<span className='flex'>
											<svg
												className='flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'>
												<path d='m12 14 4-4' />
												<path d='M3.34 19a10 10 0 1 1 17.32 0' />
											</svg>
											<span className='grow ms-6'>
												<span className='block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200'>
													{translateText(t, 'Gestión documental integral')}
												</span>
												<span className='block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200'>
													{translateText(
														t,
														'Tramitación directa de solicitudes de exportación ante el CEXGAN del Ministerio de Agricultura, colegios oficiales de veterinarios y trámites consulares.',
													)}
												</span>
											</span>
										</span>
									</button>

									<button
										type='button'
										className={`hs-tab-active:bg-white hs-tab-active:shadow-md
  hs-tab-active:hover:border-transparent
  text-start p-4 md:p-5 rounded-xl
  hover:bg-primary-dark
  focus:outline-none
  focus:ring-1
  focus:ring-primary/30
  focus:ring-offset-1
  focus:ring-offset-white
  focus:shadow-[0_0_0_4px_rgba(24,161,146,0.10),0_8px_25px_rgba(16,62,56,0.10)]
  transition-all duration-300 ease-out
  ${selectedTab === 'tabs-with-card-3' && 'hs-tab-active:bg-primary-light/30'}
`}
										id='tabs-with-card-item-3'
										data-hs-tab='#tabs-with-card-3'
										aria-controls='tabs-with-card-3'
										role='tab'
										onClick={() => handleTabClick('tabs-with-card-3')}>
										<span className='flex'>
											<svg
												className='flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'>
												<path d='m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z' />
												<path d='M5 3v4' />
												<path d='M19 17v4' />
												<path d='M3 5h4' />
												<path d='M17 19h4' />
											</svg>
											<span className='grow ms-6'>
												<span className='block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200'>
													{translateText(t, 'Requisitos según destino')}
												</span>
												<span className='block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200'>
													{translateText(
														t,
														'Protocolos sanitarios actualizados: desde normativas CDC en USA hasta trámites APHA en UK, import permits en Asia y normas comunitarias de la UE.',
													)}
												</span>
											</span>
										</span>
									</button>
								</nav>
							</div>

							<div className='lg:col-span-6'>
								<div className='relative'>
									<div>
										<div
											id='tabs-with-card-1'
											role='tabpanel'
											aria-labelledby='tabs-with-card-item-1'
											className={`${selectedTab === 'tabs-with-card-1' ? 'block' : 'hidden'}`}>
											<img
												className='shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]'
												src={experiencia}
												alt={translateText(t, 'experiencia veterinaria')}
											/>
										</div>

										<div
											id='tabs-with-card-2'
											className={`${selectedTab === 'tabs-with-card-2' ? 'block' : 'hidden'}`}
											role='tabpanel'
											aria-labelledby='tabs-with-card-item-2'>
											<img
												className='shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]'
												src={gestion}
												alt={translateText(t, 'gestión de animales')}
											/>
										</div>

										<div
											id='tabs-with-card-3'
											className={`${selectedTab === 'tabs-with-card-3' ? 'block' : 'hidden'}`}
											role='tabpanel'
											aria-labelledby='tabs-with-card-item-3'>
											<img
												className='shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]'
												src={requisitos}
												alt={translateText(t, 'requisitos según destino')}
											/>
										</div>
									</div>

									<div className='hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20'>
										<svg
											className='w-16 h-auto text-primary-dark'
											width='121'
											height='135'
											viewBox='0 0 121 135'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164'
												stroke='currentColor'
												stroke-width='10'
												stroke-linecap='round'
											/>
											<path
												d='M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5'
												stroke='currentColor'
												stroke-width='10'
												stroke-linecap='round'
											/>
											<path
												d='M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874'
												stroke='currentColor'
												stroke-width='10'
												stroke-linecap='round'
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>

						<div className='absolute inset-0 grid grid-cols-12 size-full'>
							<div className='col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]'></div>
						</div>
					</div>
				</div>
			</Reveal>
		</section>
	)
}

export default Carrusel3
