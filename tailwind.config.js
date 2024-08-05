const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/icons/**/*.{js,ts,jsx,tsx}'
   ],
   theme: {
      extend: {
         boxShadow: {
            card: '7px 5px 10px 0 rgba(0,0,0,0.25)'
         },
         colors: {
            primary: '#F6B91E',
            black: '#151515',
            white: '#F2F6F7'
         },
         fontFamily: {
            poppins: ['var(--font-poppins)'],
            bebas: ['var(--font-bebas-neue)'],
            cinderela: ['var(--font-cinderela)']
         },
         keyframes: {
            fadeIn: {
               from: { opacity: 0 },
               to: { opacity: 1 }
            },
            marquee: {
               '0%': { transform: 'translateX(0%)' },
               '100%': { transform: 'translateX(-100%)' }
            },
            blink: {
               '0%': { opacity: 0.2 },
               '20%': { opacity: 1 },
               '100% ': { opacity: 0.2 }
            }
         },
         animation: {
            fadeIn: 'fadeIn .3s ease-in-out',
            carousel: 'marquee 60s linear infinite',
            blink: 'blink 1.4s both infinite'
         }
      }
   },
   future: {
      hoverOnlyWhenSupported: true
   },
   plugins: [
      require('@tailwindcss/container-queries'),
      require('@tailwindcss/typography'),
      plugin(({ matchUtilities, theme }) => {
         matchUtilities(
            {
               'animation-delay': (value) => {
                  return {
                     'animation-delay': value
                  };
               }
            },
            {
               values: theme('transitionDelay')
            }
         );
      })
   ]
};
