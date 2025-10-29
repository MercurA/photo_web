/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {},
			fontFamily: {
				aboreto: ['Aboreto', 'serif'],
				bebas: ['Bebas Neue', 'sans-serif'],
				dancing: ['Dancing Script', 'cursive'],
				sans: ['Bebas Neue', 'ui-sans-serif', 'system-ui'],
				serif: ['Aboreto', 'ui-serif', 'Georgia'],
			},
		},
	},
}
