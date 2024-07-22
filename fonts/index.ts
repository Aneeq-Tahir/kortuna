import localFont from 'next/font/local';

const sfProDisplay = localFont({
   src: './SfProDisplay.otf',
   display: 'swap',
   variable: '--font-sf-pro-display'
});

const bebasNeue = localFont({
   src: './BebasNeue.ttf',
   display: 'swap',
   variable: '--font-bebas-neue'
});

const poppins = localFont({
   src: './Poppins.ttf',
   display: 'swap',
   variable: '--font-poppins'
});

export { sfProDisplay, poppins, bebasNeue };
