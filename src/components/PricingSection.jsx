import { motion } from 'motion/react'
import SectionTitle from './SectionTitle'
import { useTranslation } from 'react-i18next'
import { translateText } from '../i18n/translate'

const services = [
	{ name: 'Solicitud CEXGAN + Revision Veterinaria', price: '140 €' },
	//   { name: 'Consulta veterinaria a domicilio', price: '60–100 €' },
	{ name: 'Certificado de salud (CVS)', price: '60 €' },
	{ name: 'Vacuna antirrábica', price: '50 €' },
	{ name: 'Vacuna polivalente (perros) / trivalente (gatos)', price: '65 €' },
	{ name: 'Desparasitación interna', price: '10 €' },
	{ name: 'Desparasitación externa', price: '15 €' },
	{ name: 'Test serológico antirrábico', price: '180 €' },
]

const PricingSection = () => {
	const { t } = useTranslation()
	return (
		<section className='bg-primary-lighter pb-20'>
			<div className='mx-auto max-w-5xl px-4 md:px-6'>
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className='mb-10 text-center'>
					<SectionTitle
						text1='Precios orientativos'
						text2='Servicios y tarifas'
						//   text3="Un servicio profesional pensado para que tú y tu mascota viajéis preparados y con tranquilidad."
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white/90 backdrop-blur-sm'>
					<div className='hidden border-b border-primary/10 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-dark/80 md:grid md:grid-cols-[1fr_auto]'>
						<span>{translateText(t, 'Servicio')}</span>
						<span className='text-right'>{translateText(t, 'Precio')}</span>
					</div>

					<div className='divide-y divide-primary/10'>
						{services.map((service, index) => (
							<motion.div
								key={service.name}
								initial={{ opacity: 0, y: 14 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{
									duration: 0.45,
									delay: index * 0.04,
									ease: 'easeOut',
								}}
								className='group px-5 py-4 md:px-6'>
								<div className='flex items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto] md:items-center'>
									<span className='text-sm font-medium text-primary-dark md:text-base'>
										{translateText(t, service.name)}
									</span>
									<span className='text-sm font-semibold text-primary md:text-base'>
										{service.price}
									</span>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default PricingSection
