module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
	purge: { enabled: true, content: ['./src/**/*.{js,jsx,ts,tsx,html}'] },
	theme: {
		container: {
			center: true,
		},
		extend: {
			screens: {
				'3xl': '1920px',
			},
		},
	},
	plugins: [],
};
