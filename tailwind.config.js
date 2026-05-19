/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#09090b',
        ink: '#18181b',
        graphite: '#3f3f46',
        slate: '#52525b',
        steel: '#71717a',
        ash: '#a1a1aa',
        pebble: '#d4d4d8',
        fog: '#ececee',
        mist: '#f4f4f5',
        snow: '#ffffff',
        ember: '#ff5a00',
        'orchid-flash': '#fe45e2',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '28px',
        xl: '36px',
        hero: '48px',
        pill: '9999px',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"DM Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        cta: 'rgba(255,255,255,0.5) 0px 0.5px 0px 0px inset, rgba(117,123,133,0.4) 0px 9px 14px -5px inset, rgb(44,46,52) 0px 0px 0px 1.5px, rgba(0,0,0,0.14) 0px 4px 6px 0px',
        card: 'rgba(0,0,0,0.04) 0px 4px 12px 0px',
        'card-inset': 'rgb(228,228,231) 0px 1px 0px 0px inset',
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
