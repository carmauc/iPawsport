import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

import logo from '../assets/Logo.png'

const NavBar = () => {
	const { t } = useTranslation()
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [openSubmenu, setOpenSubmenu] = useState(null)
	const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
	const languageMenuRef = useRef(null)
	const currentLanguage = i18n.resolvedLanguage === 'en' ? 'en' : 'es'

	const navigation = [
		{
			name: t('nav.home'),
			href: '/',
		},
		{
			name: t('nav.services'),
			href: '/servicios',
		},
		{
			name: t('nav.information'),
			submenu: [
				{
					name: t('nav.travelGuide'),
					href: '/guia',
				},
				{
					name: t('nav.requirements'),
					href: '/requisitos',
				},
				{
					name: t('nav.faq'),
					href: '/faq',
				},
			],
		},
		{
			name: t('nav.contact'),
			href: '/contacto',
		},
	]

	const closeMobileMenu = () => {
		setIsMenuOpen(false)
		setOpenSubmenu(null)
	}

	useEffect(() => {
		const closeOnOutsideClick = event => {
			if (!languageMenuRef.current?.contains(event.target)) {
				setIsLanguageMenuOpen(false)
			}
		}
		const closeOnEscape = event => {
			if (event.key === 'Escape') setIsLanguageMenuOpen(false)
		}

		document.addEventListener('pointerdown', closeOnOutsideClick)
		document.addEventListener('keydown', closeOnEscape)
		return () => {
			document.removeEventListener('pointerdown', closeOnOutsideClick)
			document.removeEventListener('keydown', closeOnEscape)
		}
	}, [])

	return (
		<motion.header
			className='sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm'
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				type: 'spring',
				stiffness: 250,
				damping: 70,
				mass: 1,
			}}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='flex items-center justify-between py-4'>
					{/* Logo */}
					<motion.div
						whileHover={{ scale: 1.03 }}
						transition={{ duration: 0.2 }}>
						<a
							// to="/inicio"
							href='/'
							className='flex items-center gap-4'>
							<img
								src={logo}
								alt={t('nav.logoAlt')}
								className='h-10 w-8 object-contain'
							/>

							<h1 className='text-3xl text-primary font-light'>iPawsport</h1>
						</a>
					</motion.div>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex items-center gap-8'>
						{navigation.map(item => {
							/* Item with submenu */
							if (item.submenu) {
								return (
									<div key={item.name} className='relative group'>
										<button
											type='button'
											className='flex items-center gap-1 text-gray-600 font-medium text-sm hover:text-primary transition-colors'>
											{item.name}

											<svg
												className='w-4 h-4 transition-transform duration-200 group-hover:rotate-180'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M19 9l-7 7-7-7'
												/>
											</svg>
										</button>

										{/* Dropdown */}
										<div className='absolute left-0 top-full pt-3 w-52 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200'>
											<div className='bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden'>
												{item.submenu.map(subItem => (
													<NavLink
														key={subItem.href}
														to={subItem.href}
														className={({ isActive }) =>
															`block px-4 py-3 text-sm transition-colors ${
																isActive
																	? 'bg-primary-lighter text-primary font-medium'
																	: 'text-gray-600 hover:bg-primary-lighter hover:text-primary'
															}`
														}>
														{subItem.name}
													</NavLink>
												))}
											</div>
										</div>
									</div>
								)
							}

							/* Normal link */
							return (
								<motion.div key={item.href} whileHover={{ y: -2 }}>
									<NavLink
										to={item.href}
										className={({ isActive }) =>
											`font-medium text-sm transition-colors ${
												isActive
													? 'text-primary'
													: 'text-gray-600 hover:text-primary'
											}`
										}>
										{item.name}
									</NavLink>
								</motion.div>
							)
						})}
					</nav>

					{/* Contact / Phone */}
					{/* <a
            href="tel:+34672363701"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57-.11.35-.03.74-.25 1.02l-2.2 2.2z" />
            </svg>

            <span className="font-medium">
              672 363 701
            </span>
          </a> */}

					<div className='relative' ref={languageMenuRef}>
						<button
							type='button'
							onClick={() => setIsLanguageMenuOpen(open => !open)}
							className='flex h-10 w-10 items-center justify-center rounded-md text-primary-dark transition-colors hover:bg-primary-lighter hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
							aria-label={t('nav.selectLanguage')}
							aria-expanded={isLanguageMenuOpen}
							aria-haspopup='menu'
							aria-controls='language-menu'>
							<svg
								aria-hidden='true'
								className='h-5 w-5'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1.7'>
								<circle cx='12' cy='12' r='9' />
								<path
									d='M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18'
									strokeLinecap='round'
								/>
							</svg>
						</button>
						{isLanguageMenuOpen && (
							<motion.div
								id='language-menu'
								role='menu'
								aria-label={t('nav.language')}
								initial={{ opacity: 0, y: -6 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.14 }}
								className='absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-gray-100 bg-white p-1 shadow-lg'>
								{[
									{ code: 'es', flag: '🇪🇸', label: 'Español' },
									{ code: 'en', flag: '🇬🇧', label: 'English' },
								].map(language => (
									<button
										key={language.code}
										type='button'
										role='menuitemradio'
										aria-checked={currentLanguage === language.code}
										onClick={() => {
											i18n.changeLanguage(language.code)
											setIsLanguageMenuOpen(false)
										}}
										className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
											currentLanguage === language.code
												? 'bg-primary-lighter font-semibold text-primary-dark'
												: 'text-gray-600 hover:bg-primary-lighter hover:text-primary-dark'
										}`}>
										<span aria-hidden='true' className='text-lg'>
											{language.flag}
										</span>
										<span className='flex-1'>{language.label}</span>
										{currentLanguage === language.code && (
											<span aria-hidden='true'>✓</span>
										)}
									</button>
								))}
							</motion.div>
						)}
					</div>

					{/* Mobile button */}
					<button
						type='button'
						className='md:hidden p-2'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
						aria-expanded={isMenuOpen}>
						<svg
							className='w-6 h-6 text-primary-dark'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							{isMenuOpen ? (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							) : (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile menu */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							className='md:hidden overflow-hidden border-t border-gray-100'
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.25 }}>
							<nav className='flex flex-col py-4'>
								{navigation.map(item => {
									/* Mobile submenu */
									if (item.submenu) {
										const isOpen = openSubmenu === item.name

										return (
											<div key={item.name}>
												<button
													type='button'
													onClick={() =>
														setOpenSubmenu(isOpen ? null : item.name)
													}
													className='flex items-center justify-between w-full py-3 text-gray-600 font-medium hover:text-primary transition-colors'>
													{item.name}

													<svg
														className={`w-4 h-4 transition-transform duration-200 ${
															isOpen ? 'rotate-180' : ''
														}`}
														fill='none'
														stroke='currentColor'
														viewBox='0 0 24 24'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M19 9l-7 7-7-7'
														/>
													</svg>
												</button>

												<AnimatePresence>
													{isOpen && (
														<motion.div
															initial={{
																height: 0,
																opacity: 0,
															}}
															animate={{
																height: 'auto',
																opacity: 1,
															}}
															exit={{
																height: 0,
																opacity: 0,
															}}
															className='overflow-hidden pl-4'>
															{item.submenu.map(subItem => (
																<NavLink
																	key={subItem.href}
																	to={subItem.href}
																	onClick={closeMobileMenu}
																	className={({ isActive }) =>
																		`block py-2.5 text-sm ${
																			isActive
																				? 'text-primary font-medium'
																				: 'text-gray-500 hover:text-primary'
																		}`
																	}>
																	{subItem.name}
																</NavLink>
															))}
														</motion.div>
													)}
												</AnimatePresence>
											</div>
										)
									}

									/* Mobile normal link */
									return (
										<NavLink
											key={item.href}
											to={item.href}
											onClick={closeMobileMenu}
											className={({ isActive }) =>
												`py-3 font-medium ${
													isActive
														? 'text-primary'
														: 'text-gray-600 hover:text-primary'
												}`
											}>
											{item.name}
										</NavLink>
									)
								})}

								{/* Mobile phone */}
								<a
									href='tel:+34672363701'
									className='flex items-center gap-2 py-3 text-primary font-medium border-t border-gray-100 mt-2 pt-4'>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 24 24'>
										<path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57-.11.35-.03.74-.25 1.02l-2.2 2.2z' />
									</svg>
									672 363 701
								</a>
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.header>
	)
}

export default NavBar

// {
//   name: 'Información',
//   submenu: [
//     {
//       name: 'Guía de viaje',
//       href: '/guia',
//     },
//     {
//       name: 'Requisitos',
//       href: '/requisitos',
//     },
//     {
//       name: 'Preguntas frecuentes',
//       href: '/faq',
//     },
//     {
//       name: 'Sobre nosotros',
//       href: '/nosotros',
//     },
//   ],
//
