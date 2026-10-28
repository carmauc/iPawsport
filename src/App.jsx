import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import LenisScroll from './components/LenisScroll'
import ScrollToTop from './components/ScrollToTop/Index'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Guia from './pages/Guia'
import Contacto from './pages/Contacto'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import RequirementsPage from './pages/RequirementsPage'
import CountryRequirementsPage from './pages/CountryRequirementsPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import CookieConsent from './components/CookieConsent'
import LegalNotice from './pages/LegalNotice'
import TermsOfService from './pages/TermsOfService'
// import Requisitos from './pages/Requisitos'
// import Faq from './pages/Faq'
// import Contacto from './pages/Contacto'

function App() {
	return (
		<BrowserRouter>
			<LenisScroll />
			<ScrollToTop />
			<div className='bg-primary-lighter min-h-screen'>
				<NavBar />{' '}
				<main>
					<Routes>
						{' '}
						{/* Inicio */}
						<Route path='/' element={<Inicio />} />
						<Route path='/servicios' element={<Servicios />} />
						<Route path='/requisitos' element={<RequirementsPage />} />
						<Route
							path='/requisitos/:countrySlug'
							element={<CountryRequirementsPage />}
						/>
						<Route path='/guia' element={<Guia />} />
						{/* <Route path="/requisitos" element={<Requisitos />} /> 
        <Route path="/faq" element={<Faq />} />  */}
						<Route path='/faq' element={<PreguntasFrecuentes />} />
						<Route path='/contacto' element={<Contacto />} />
						<Route path='/politica-de-privacidad' element={<PrivacyPolicy />} />
						<Route path='/politica-de-cookies' element={<CookiePolicy />} />
						<Route path='/aviso-legal' element={<LegalNotice />} />
						<Route
							path='/condiciones-del-servicio'
							element={<TermsOfService />}
						/>
					</Routes>{' '}
				</main>
				<Footer />
				<CookieConsent />
				{/* <FloatingWhatsApp />  */}
			</div>
		</BrowserRouter>
	)
}

export default App
