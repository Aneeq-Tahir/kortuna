import localFont from 'next/font/local';

// const sfProDisplay = localFont({
//    src: './sf-pro-display.otf',
//    display: 'swap',
//    variable: '--font-sf-pro-display'
// });

const cinderela = localFont({
   src: './cinderela.ttf',
   display: 'swap',
   variable: '--font-cinderela'
});

const bebasNeue = localFont({
   src: './bebas-neue.ttf',
   display: 'swap',
   variable: '--font-bebas-neue'
});

const poppins = localFont({
   src: './poppins.ttf',
   display: 'swap',
   variable: '--font-poppins'
});

export { bebasNeue, cinderela, poppins };
