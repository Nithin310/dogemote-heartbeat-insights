
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				/* DogEmote AI Custom Colors */
				dog: {
					blue: 'hsl(var(--dog-blue))',
					yellow: 'hsl(var(--dog-yellow))',
					orange: 'hsl(var(--dog-orange))',
					pink: 'hsl(var(--dog-pink))',
					peach: 'hsl(var(--dog-peach))',
					purple: 'hsl(var(--dog-purple))',
					'light-purple': 'hsl(var(--dog-light-purple))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'wiggle': 'wiggle 1s ease-in-out infinite',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				opensans: ['Open Sans', 'sans-serif'],
			},
			backgroundImage: {
				'paw-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjMgNi44Yy0uMy0xLjEtMS0xLjQtMS41LTEuNC0uNiAwLTEuNS41LTEuNSAxLjYgMCAuOS43IDIuMSAxLjMgMi4xLjYgMCAxLjgtMS4xIDEuNy0yLjN6bS0zLjYgMWMtLjctLjctMS41LS44LTItLjQtLjUuNC0uOCAxLjMtLjMgMi4zLjQgMS4xIDEuNCAyLjcgMiAzIC44LjIgMi0xLjkgLjMtNC45em0zLjcuN2MtLjYuNi0uNyAxLjUtLjQgMiAuNC41IDEuMy44IDIuMy4zIDEuMS0uNCAyLjctMS40IDMtMiAuMi0uOC0xLjktMi0uMy0yYTE1IDE1IDAgMDEtNC42IDEuN3ptMy43LTVjLTEuMS0xLjItMi4xLTEuNC0yLjYtMS4yLS40LjItLjcgMS4xIDAgMi4yLjUgMSAxLjUgMi40IDIuMiAyLjcuOC4zIDEuNS0yLjQgMS40LTMuN2gtMXptLTggMS41Yy0xLjIgMS4xLTEuNCAxLjItMS4yIDEuNi4yLjQuMiAxLjEgMi4yIDAgMSAuMyAxLjUtMi40IDAtMi43bC0xIDF6IiBmaWxsPSIjZjlmOWY5IiBvcGFjaXR5PSIuMDciLz48L3N2Zz4=')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
