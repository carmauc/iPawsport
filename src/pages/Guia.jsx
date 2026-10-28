import { motion } from 'motion/react'
import PricingSection from '../components/PricingSection'
import HeroGuia from '../components/HeroGuia'
import Steps from '../components/Steps'
import CallActionGuide from '../components/CallActionGuide'
import PageMetadata from '../components/PageMetadata'

const InView = ({ children, delay = 0, className = '' }) => (
	<motion.div
		initial={{ opacity: 0, y: 40 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.15 }}
		transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
		className={className}>
		{children}
	</motion.div>
)

const Guia = () => {
	return (
		<div>
			<PageMetadata
				title='Guía para viajar con mascotas | iPawsport'
				description='Descubre cómo preparar la documentación y los cuidados veterinarios para viajar con tu mascota.'
			/>
			<InView>
				<HeroGuia />
			</InView>

			<InView>
				<Steps />
			</InView>

			<InView>
				<PricingSection />
			</InView>
			<InView>
				<CallActionGuide />
			</InView>
		</div>
	)
}

export default Guia
