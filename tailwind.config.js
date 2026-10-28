/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'var(--primary)',
					dark: 'var(--primary-dark)',
					light: 'var(--primary-light)',
					lighter: 'var(--primary-lighter)',
					// secondary: 'var(--secondary)',
				},
				secondary: 'var(--secondary)',
				neutral: 'var(--neutral)',

				teal: {
					50: '#f0fdfa',
					100: '#ccfbf1',
					200: '#99f6e4',
					300: '#5eead4',
					400: '#2dd4bf',
					500: 'var(--primary)',
					600: '#0d9488',
					700: '#0f766e',
					800: '#115e59',
					900: '#134e4a',
				},
			},

			fontFamily: {
				sans: ['Manrope', 'sans-serif'],
				acumin: ['acumin-pro', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				source: ['Source Serif 4', 'serif'],
			},

			animation: {
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'slide-up': 'slideUp 0.6s ease-out forwards',
			},

			keyframes: {
				fadeIn: {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},

				slideUp: {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},
		},
	},

	plugins: [],
}
