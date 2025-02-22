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
				museo_moderno: ["MuseoModerno", "sans-serif"],
			},
			backgroundImage: {
				"hero-img": "url('../assets/img/hero-bg.png')",
				"features-img":
					"url('../assets/img/features-bg.png')",
			},
		},
	},
	plugins: [],
} satisfies Config;
