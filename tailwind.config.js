/** @type {import('tailwindcss').Config} */


const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: '#a855f7',
			secondary: '#4f46e5',
			contrast: '#374151',
			complementary: '#f3f4f6',
			acent: colors.white,
			relive: '#f8fafc',
			...colors,
		},
	},
	plugins: [],
}
