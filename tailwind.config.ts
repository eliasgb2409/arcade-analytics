import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        linkgreen: "rgb(23, 253, 162)",
        cardBackground: "rgb(33, 43, 58)"
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(162,253,217, 0.35)",
          "0 0px 40px rgba(162,253,217, 0.2)"
        ]
      },
      animation: {
				fade: 'fadeIn 1.5s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
			},
    },
  },
  plugins: [],
};
export default config;
