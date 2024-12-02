/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}', // Look inside the app directory
		'./components/**/*.{js,ts,jsx,tsx}', // Optionally look inside the components directory
		'./pages/**/*.{js,ts,jsx,tsx}', // If you're using pages, include them too
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
