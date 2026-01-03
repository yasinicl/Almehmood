import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            50: '#e6f2f5',
            100: '#cce5eb',
            200: '#99cbd7',
            300: '#66b1c3',
            400: '#3397af',
            500: '#0f4c5c',
            600: '#0c3d4a',
            700: '#092e37',
            800: '#061f25',
            900: '#030f12',
            950: '#020a0d',
          },
          secondary: {
            50: '#e8f3f2',
            100: '#d1e7e5',
            200: '#a3cfcb',
            300: '#75b7b1',
            400: '#479f97',
            500: '#1b6f6a',
            600: '#155955',
            700: '#104340',
            800: '#0b2d2b',
            900: '#051615',
          },
          accent: {
            50: '#fef4ed',
            100: '#fde9db',
            200: '#fbd3b7',
            300: '#f9bd93',
            400: '#f7a76f',
            500: '#f4a261',
            600: '#f08a3d',
            700: '#c66821',
            800: '#8c4a17',
            900: '#522c0e',
          },
        },
      },
      backgroundImage: {
        'islamic-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(245, 158, 11, 0.6)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
