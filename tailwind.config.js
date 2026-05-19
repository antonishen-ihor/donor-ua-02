/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E20B1D',
        'primary-pressed': '#b00916',
        canvas: '#ffffff',
        'surface-soft': '#fbfbf9',
        'surface-card': '#f6f6f3',
        'secondary-bg': '#e5e5e0',
        'secondary-pressed': '#c8c8c1',
        'surface-dark': '#262622',
        hairline: '#dadad3',
        'hairline-soft': '#e5e5e0',
        ink: '#000000',
        'ink-soft': '#211922',
        body: '#33332e',
        charcoal: '#262622',
        mute: '#62625b',
        ash: '#91918c',
        stone: '#c8c8c1',
        'on-dark': '#ffffff',
        'error': '#9e0a0a',
        'focus-outer': '#435ee5',
        'focus-inner': '#ffffff',
        'accent-purple': '#7e238b',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '32px',
        full: '9999px',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'system-ui', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['Manrope', 'Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '-1.2px',
        heading: '-0.8px',
      },
      spacing: {
        xxs: '4px',
        xs: '6px',
        sm: '8px',
        section: '64px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
