/** @type {import('tailwindcss').Config} */


const colors = require('tailwindcss/colors')


module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		colors: {
			primary: '#2563eb',
			secondary: '#4338ca',
			contrast: '#374151',
			complementary: '#f3f4f6',
			acent: colors.white,
			relive: '#f8fafc',
			...colors,
		},
		fontFamily: {
			sans: "'Maven Pro', sans-serif",
			custom: 'var(--custom-font)',
		},
	},
	plugins: [],
}



