/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["media"],
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}',
    
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)'],      
    },   
    extend: {
      fontFamily: {
        'syne': ['var(--font-syne)'],
        'work': ['var(--font-work)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(60.07% 60.07% at 50% 50%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)'
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "spotify": {
          "0%": {    
            "box-shadow": "0 0 0 0 rgba(29, 185, 84, 0.7)"
          },
          "70%": {
            "box-shadow": "0 0 0 10px rgba(29, 185, 84, 0)"
          },          
          "100%": {
            "box-shadow": "0 0 0 0 rgba(29, 185, 84, 0)"
          }                                
        },
        "marquee": {
          '0%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '50%': {
            transform: 'translate3d(40px, 0, 0)',
          },
          '60%': {
            transform: 'translate3d(40px, 0, 0)',
          },
          '90%': {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        "nowPlayingAnimation": {
          '10%': {
            transform: 'scaleY(0.3)',
          },
          '30%': {
            transform: 'scaleY(1)',
          },
          '60%': {
            transform: 'scaleY(0.5)',
          },
          '80%': {
            transform: 'scaleY(0.75)',
          },
          '100%': {
            transform: 'scaleY(0.5)',
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spotify": "spotify 2s infinite",
        "marquee": 'marquee 10s linear infinite',
        "nowPlayingAnimation": "nowPlayingAnimation 2.2s ease infinite alternate"
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
    require("tailwind-gradient-mask-image"),
    require("tailwindcss-animated")
  ],
}