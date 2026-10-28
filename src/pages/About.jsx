import React from 'react'

const About = () => {
	return (
		<section className='py-16 px-4 max-w-4xl mx-auto text-center'>
			<p className='text-gray-600 leading-relaxed mb-6'>
				En IPAWSPORT somos amantes de los animales y expertos en hacer posible
				que viajen contigo a cualquier parte del mundo.
				<br />
				Nos encargamos de toda la documentación, pasaportes, certificados,
				vacunas..., para que no tengas que preocuparte por nada.
			</p>

			<p className='text-gray-500 mb-2'>
				Tu tranquilidad y la seguridad de tu mascota son nuestra prioridad.
			</p>

			<p className='font-semibold text-primary-dark mb-8'>
				Viajar juntos nunca fue tan fácil.
			</p>

			<a
				href='#nosotros'
				className='inline-block px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all hover:scale-105'>
				Nosotros
			</a>
		</section>
	)
}

export default About
