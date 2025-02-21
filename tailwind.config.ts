import type { Config } from "tailwindcss";

export default {
	content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"brand-lime": "#ceef08",
				"brand-black": "#121212",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				"museo_moderno": ["MuseoModerno", "sans-serif"],
			},
		},
	},
	plugins: [],
} satisfies Config;
