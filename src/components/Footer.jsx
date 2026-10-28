// import React from 'react'

// const Footer = () => {
//     return (
//       <footer className="bg-primary-dark text-white">
//         {/* Main Footer */}
//         <div className="max-w-6xl mx-auto px-4 py-12">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
//             {/* Navigation */}
//             <nav className="flex flex-wrap gap-6">
//               <a href="#inicio" className="text-white hover:text-primary-light transition-colors">
//                 Inicio
//               </a>
//               <a href="#servicios" className="text-white hover:text-primary-light transition-colors">
//                 Servicios
//               </a>
//               <div className="flex items-center gap-1">
//                 <a href="#guia" className="text-white hover:text-primary-light transition-colors">
//                   Información
//                 </a>
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </div>
//               <a href="#contacto" className="text-white hover:text-primary-light transition-colors">
//                 Contacto
//               </a>
//             </nav>

//             {/* Contact Info */}
//             <div className="text-right">
//               <a
//                 href="tel:+34672363701"
//                 className="block text-2xl md:text-3xl font-light mb-2 hover:text-primary-light transition-colors"
//               >
//                 + 34 672 36 37 01
//               </a>
//               <a
//                 href="mailto:info@ipawsport.com"
//                 className="text-white/80 hover:text-white transition-colors"
//               >
//                 info@ipawsport.com
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="border-t border-white/20">
//           <div className="max-w-6xl mx-auto px-4 py-6">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               <p className="text-white/60 text-sm">
//                 © 2025 All rights Reserved.
//               </p>

//               {/* Social Links */}
//               <div className="flex items-center gap-4">
//                 <a
//                   href="https://api.whatsapp.com/send?phone=34672363701"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//                   </svg>
//                 </a>
//                 <a
//                   href="https://www.instagram.com/ipawsport/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                   </svg>
//                 </a>
//                 <a
//                   href="tel:+34672363701"
//                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   };

//   export default Footer;
import logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'
import { NavLink } from 'react-router-dom'

const Footer = () => {
	const { t } = useTranslation()
	return (
		<footer className='bg-gray-700'>
			<div className='container p-6 mx-auto'>
				<div className='lg:flex'>
					<div className='w-full -mx-6 lg:w-2/5'>
						<div className='px-6'>
							<a href='#'>
								<img
									className='w-auto h-12'
									src={logo}
									alt={translateText(t, 'Logotipo de iPawsport')}
								/>
							</a>

							<p className='max-w-sm mt-2 text-secondary'>
								{translateText(
									t,
									'Te ayudamos a cumplir con los requisitos para poder viajar con tu mascota.',
								)}
							</p>
							{/* <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">DIXBASE SOLUTIONS SL · CIF: B23963788</p> */}
							<p className='max-w-sm text-xs mt-8 text-gray-500 dark:text-gray-400'>
								{translateText(t, 'Contacto: info@ipawsport.com')}
							</p>
							<div className='flex mt-6 -mx-2'>
								<a
									href='#'
									className='mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
									aria-label='Facebook'>
									<svg
										className='w-5 h-5 fill-current'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path d='M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z'></path>
									</svg>
								</a>

								<a
									href='https://www.instagram.com/ipawsport/'

									className='mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
									aria-label='instagram'>
									<svg
										class='w-5 h-5 fill-current scale-125'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path d='M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z' />
									</svg>
								</a>
								<a
									href='https://api.whatsapp.com/send?phone=34672363701'
									target='_blank'
									rel='noopener noreferrer'
									className='mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
									aria-label='WhatsApp'>
									<svg
										className='w-5 h-5 fill-current scale-90'
										fill='none'
										viewBox='0 0 24 24'>
										<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
									</svg>
								</a>
							</div>
						</div>
					</div>

					<div className='mt-6 lg:mt-0 lg:flex-1 '>
						<div className='grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-end'>
							{/* <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">{translateText(t, 'ENLACES')}</h3>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">{translateText(t, 'Empresa')}</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">{translateText(t, 'Comunidad')}</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">{translateText(t, 'Empleo')}</a>
                    </div> */}

							<div>
								<h3 className='text-white uppercase font-medium'>
									{translateText(t, 'ENLACES')}
								</h3>

								<NavLink
									to='/'
									className='block mt-2 text-sm text-gray-400 hover:text-primary transition-colors'>
									{t('nav.home')}
								</NavLink>

								<NavLink
									to='/servicios'

									className='block mt-2 text-sm text-gray-400 hover:text-primary transition-colors'>
									{t('nav.services')}
								</NavLink>

								<NavLink
									to='/guia'
									className='block mt-2 text-sm text-gray-400 hover:text-primary transition-colors'>
									{t('nav.travelGuide')}
								</NavLink>
								<NavLink
									to='/requisitos'
									className='block mt-2 text-sm text-gray-400 hover:text-primary transition-colors'>
									{t('nav.requirements')}
								</NavLink>

								<NavLink
									to='/faq'
									className='block mt-2 text-sm text-gray-400 hover:text-primary transition-colors'>
									{t('nav.faq')}
								</NavLink>

								<NavLink
									to='/contacto'
									className='block mt-2 text-sm text-gray-400 hover:text-primary transition-colors'>
									{t('nav.contact')}
								</NavLink>
							</div>

							{/* <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
                    </div> */}

							<div>
								<h3 className='text-gray-700 uppercase dark:text-white'>
									{translateText(t, 'LEGAL')}
								</h3>
								<NavLink
									to='/aviso-legal'
									className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'>
									Aviso legal
								</NavLink>
								<NavLink
									to='/politica-de-privacidad'
									className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'>
									Privacidad
								</NavLink>
								<NavLink
									to='/politica-de-cookies'
									className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'>
									Política de cookies
								</NavLink>
								<button
									type='button'
									onClick={() =>
										window.dispatchEvent(
											new Event('ipawsport:open-cookie-settings'),
										)
									}
									className='block mt-2 text-left text-sm text-gray-600 dark:text-gray-400 hover:underline'>
									Configurar cookies
								</button>

								<NavLink
									to='/condiciones-del-servicio'
									className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'>
									Condiciones del servicio
								</NavLink>
							</div>
						</div>
					</div>
				</div>

				<hr className='h-px my-6 bg-gray-200 border-none dark:bg-gray-700' />

				<div>
					<p className='text-center text-gray-500 dark:text-gray-400'>
						{translateText(
							t,
							'© iPawsport 2026 - Todos los derechos reservados',
						)}
					</p>
				</div>
			</div>
		</footer>
	)
}
export default Footer
