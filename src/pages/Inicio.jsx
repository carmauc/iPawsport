import { motion } from 'motion/react'
import Hero from '../components/Hero'
import ServicesGeneral from '../components/Features'
import GuideCallToAction from '../components/GuideCallToAction'
import PrincingCards from '../components/PrincingCards'
import DetailedServices from '../components/DetailedServices'
import Testimonials from '../components/Testimonials'
import Partners from '../components/Partners'
import Stats from '../components/Stats'
import Carrusel from '../components/Carrusel3'
import Faq from '../components/Faq'
import PageMetadata from '../components/PageMetadata'
import ServiceDogCallToAction from '../components/ServiceDogCallToAction'
import Features from '../components/Features'
import CallActionGuide from '../components/CallActionGuide'
import LocalService from '../components/LocalService'
const InView = ({ children, delay = 0 }) => (
	<motion.div
		initial={{ opacity: 0, y: 40 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.15 }}
		transition={{
			duration: 0.8,
			delay,
			ease: [0.22, 1, 0.36, 1],
		}}>
		{children}
	</motion.div>
)
const Inicio = () => {
	return (
		<div>
			<PageMetadata
				title='iPawsport | Viajar con mascotas'
				description='Servicios veterinarios y documentación para viajes internacionales con mascotas desde España.'
			/>
			<Hero />
			<InView>
				<LocalService />
			</InView>

			<InView>
				<Features />
			</InView>
			<InView>
				<Carrusel />
			</InView>
			<InView>
				<GuideCallToAction />
			</InView>
			{/* <InView><ContactForm /></InView> */}
			<InView>
				<PrincingCards />
			</InView>
			<InView>
				<DetailedServices />
			</InView>

			<InView>
				<Stats />
			</InView>
			<InView>
				<Partners />
			</InView>

			<InView>
				<ServiceDogCallToAction />
			</InView>

			<InView>
				<Testimonials />
			</InView>
			<InView>
				<Faq />
			</InView>
			<InView>
				<CallActionGuide />
			</InView>
		</div>
	)
}

export default Inicio
