export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-purple-500',
    'text-purple-500',
    'hover:bg-purple-600',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

