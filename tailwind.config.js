/** @type {import('tailwindcss').Config} */


const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		colors: {
			primary: '#0ea5e9',
			secondary: '#6366f1',
			contrast: '#374151',
			complementary: '#f3f4f6',
			acent: colors.white,
			relive: '#f8fafc',
			...colors,
		},
	},
	plugins: [],
}



