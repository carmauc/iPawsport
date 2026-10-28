import HeroServices from '../components/Services/HeroServices'
import ServicesFeatures from '../components/Services/ServicesFeactures'
import PricingCards from '../components/PrincingCards'
import CallActionGuide from '../components/CallActionGuide'
import PageMetadata from '../components/PageMetadata'

const Servicios = () => {
	return (
		<div>
			<PageMetadata
				title='Servicios para viajar con mascotas | iPawsport'
				description='Descubre cómo preparar la documentación y los cuidados veterinarios para viajar con tu mascota.'
			/>

			<HeroServices />
			<ServicesFeatures />
			<PricingCards />
			<CallActionGuide />
		</div>
	)
}

export default Servicios
