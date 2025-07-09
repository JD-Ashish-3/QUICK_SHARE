// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//   "./index.html",
//   "./src/**/*.{js,ts,jsx,tsx}",
//   "./components/**/*.{js,ts,jsx,tsx}",
//   "./pages/**/*.{js,ts,jsx,tsx}",
//   "./lib/**/*.{js,ts,jsx,tsx}",
// ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Backgrounds & gradients
    'bg-gradient-to-r',
    'from-purple-400',
    'to-violet-600',
    'bg-gray-400',
    'bg-gray-700/30',
    'bg-white/10',
    'bg-[#8185B2]/10',
    'bg-[#282142]',
    'bg-[#282142]/30',
    'bg-[#282142]/50',
    'bg-violet-500/50',
    'bg-violet-500/30',

    // Text colors
    'text-white',
    'text-gray-300',
    'text-gray-500',
    'text-gray-800',
    'text-violet-400',
    'text-green-400',
    'text-neutral-400',

    // Borders
    'border',
    'border-gray-500',
    'border-gray-600',
    'border-stone-500',
    'border-[#ffffff50]',

    // Rings
    'focus:ring-2',
    'focus:ring-indigo-500',
    'focus:ring-violet-500',

    // Rounded corners
    'rounded-md',
    'rounded-lg',
    'rounded-full',
    'rounded-2xl',

    // Width, height, sizing
    'w-2', 'w-3', 'w-5', 'w-7', 'w-8', 'w-12', 'w-20', 'w-[35px]', 'w-[230px]', 'w-[min(30vw,250px)]', 'w-full',
    'h-full', 'h-5', 'h-7', 'h-[calc(100%-120px)]',
    'max-w-5', 'max-w-7', 'max-w-16', 'max-w-40', 'max-w-44',
    'aspect-[1/1]', 'aspect-square',

    // Grid & layout
    'grid', 'grid-cols-1', 'grid-cols-2',
    'md:grid-cols-2',
    'md:grid-cols-[1fr_1.5fr_1fr]',
    'xl:grid-cols-[1fr_2fr_1fr]',

    // Flex utility
    'flex', 'flex-col', 'flex-row-reverse', 'flex-1', 'flex-wrap',
    'items-center', 'items-end', 'justify-between', 'justify-center', 'justify-end',

    // Cursor states
    'cursor-pointer',
    'cursor-not-allowed',

    // Scroll & overflow
    'overflow-scroll',
    'overflow-y-scroll',

    // Blur
    'backdrop-blur-xl',
    'backdrop-blur-2xl',
    'backdrop-blur-lg',

    // Positioning
    'absolute', 'relative', 'top-4', 'top-full', 'bottom-0', 'bottom-5', 'left-0', 'right-0', 'left-1/2', '-translate-x-1/2',

    // Responsive prefixes
    'max-sm:flex-col-reverse',
    'max-sm:mt-10',
    'max-md:hidden',
    'sm:px-[15%]',
    'sm:py-[5%]',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


