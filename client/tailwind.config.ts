import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'daba-teal': '#1C75BC',
  			'daba-green': '#3D7C3B',
  			'daba-light-teal': '#4FC3F7',
  			'daba-coral': '#FF6F61',
  			'daba-yellow': '#FBBF24',
  			'daba-bg-teal': '#B2DFDB',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
				'50': '#fcfcfc',
				'100': '#f1f1f2',
				'200': '#e0e0e2',
				'300': '#c7c7cc',
				'400': '#a8a8af',
				'500': '#82828b',
				'600': '#57575f',
				'700': '#27272a',
				'800': '#111113',
				'900': '#040405',
				'950': '#000000'
			},
			secondary: {
				'50': '#fefcfc',
				'100': '#fdf2f2',
				'200': '#fae1e1',
				'300': '#f6c9c9',
				'400': '#f1abab',
				'500': '#eb8686',
				'600': '#e45a5a',
				'700': '#dc2828',
				'800': '#7c1414',
				'900': '#400a0a',
				'950': '#2c0707'
			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
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
  		// fontFamily: {
  		// 	'arial-nova': [
  		// 		'Arial Nova"',
  		// 		'Arial',
  		// 		'sans-serif'
  		// 	],
  		// 	'arial-nova-light-bold': [
  		// 		'Arial Nova Light"',
  		// 		'Arial',
  		// 		'sans-serif',
  		// 		{
  		// 			fontWeight: 'bold'
  		// 		}
  		// 	],
  		// 	'century-gothic-bold': [
  		// 		'Poppins"',
  		// 		'sans-serif',
  		// 		{
  		// 			fontWeight: '700'
  		// 		}
  		// 	]
  		// },
		  fontFamily: {
			'arial-nova': ['"Arial Nova"', 'Arial', 'sans-serif'],
			'arial-nova-light-bold': ['"Arial Nova Light"', 'Arial', 'sans-serif'],
			'century-gothic-bold': ['"Poppins"', 'sans-serif'],
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    // Add a plugin to set default font families
    // function({ addBase }) {
    //   addBase({
    //     'body': { fontFamily: '"Arial Nova", Arial, sans-serif' }, // Normal text
    //     'h1, h2, h3, h4, h5, h6': { fontFamily: '"Poppins", sans-serif', fontWeight: '700' }, // Titles
    //     'h3': { fontFamily: '"Arial Nova Light", Arial, sans-serif', fontWeight: 'bold' }, // Subtitles (override h3 for subtitles)
    //   });
    // },
	
      require("tailwindcss-animate")
],
} satisfies Config;
