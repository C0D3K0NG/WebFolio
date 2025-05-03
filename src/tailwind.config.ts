
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
				// Spider-Man theme colors
				spidey: {
					red: '#E62429',
					blue: '#0C1A2B',
					light: '#F9F9F9',
					text: '#333333',
				},
				venom: {
					red: '#F52D4F',
					black: '#1B1B1B',
					dark: '#121212',
					text: '#F9F9F9',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'bounce-small': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'spider-drop': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px 0px hsla(var(--primary))',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 15px 3px hsla(var(--primary))',
						transform: 'scale(1.05)'
					}
				},
				'shimmer': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '100% 100%' }
				},
				'shimmer-slow': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'web-swing': {
					'0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
					'50%': { transform: 'translateX(10px) rotate(3deg)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'scroll-x': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'mouse-glow': {
					'0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' }
				},
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
				'skew-x-45': {
					'0%': { transform: 'skewX(-45deg) translateX(-150%)' },
					'100%': { transform: 'skewX(-45deg) translateX(150%)' }
				},
				'ripple': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1s ease-out',
				'fade-out': 'fade-out 1s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'bounce-small': 'bounce-small 2s ease-in-out infinite',
				'spider-drop': 'spider-drop 2s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'shimmer-slow': 'shimmer-slow 3s infinite',
				'web-swing': 'web-swing 5s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 15s linear infinite',
				'scroll-x': 'scroll-x 20s linear infinite',
				'mouse-glow': 'mouse-glow 2s infinite',
        'float': 'float 3s ease-in-out infinite',
				'ripple': 'ripple 1s linear',
			},
			backgroundImage: {
				'grunge-texture': "url('/grunge-texture.png')",
				'web-pattern': "url('/web-pattern.png')",
				'venom-texture': "url('/venom-texture.png')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-shimmer': 'linear-gradient(45deg, transparent 20%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 40%, transparent 50%)',
			},
			clipPath: {
				'circle-small': 'circle(0% at calc(100% - 3rem) 3rem)',
				'circle-full': 'circle(150% at calc(100% - 3rem) 3rem)',
			},
			transitionDelay: {
				'100': '100ms',
				'200': '200ms',
				'300': '300ms',
				'400': '400ms',
				'500': '500ms',
				'600': '600ms',
				'700': '700ms',
				'800': '800ms',
				'900': '900ms',
				'1000': '1000ms',
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }) {
			const newUtilities = {
				'.skew-x-45': {
					transform: 'skewX(45deg)',
				},
				'.skew-x-neg-45': {
					transform: 'skewX(-45deg)',
				},
				'.clip-path-circle-small': {
					clipPath: 'circle(0% at calc(100% - 3rem) 3rem)',
				},
				'.clip-path-circle-full': {
					clipPath: 'circle(150% at calc(100% - 3rem) 3rem)',
				},
				'.transition-delay-100': {
					transitionDelay: '100ms',
				},
				'.transition-delay-200': {
					transitionDelay: '200ms',
				},
				'.transition-delay-300': {
					transitionDelay: '300ms',
				},
				'.transition-delay-400': {
					transitionDelay: '400ms',
				},
				'.transition-delay-500': {
					transitionDelay: '500ms',
				},
			};
			addUtilities(newUtilities);
		}
	],
} satisfies Config;
