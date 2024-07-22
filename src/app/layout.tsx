import Footer from '@/components/layout/footer';
import { Carousel } from '@/components/layout/home';
import Navbar from '@/components/layout/navbar';
import WhatsApp from '@/components/layout/whatsapp';
import { bebasNeue, poppins, sfProDisplay } from '@/fonts';
import { getSliderImages } from '@/lib/shopify';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata = {
   metadataBase: new URL('https://www.khpalstore.com'),
   title: {
      default: 'Khpal Store',
      template: `%s | Khpal Store`
   },
   robots: {
      follow: true,
      index: true
   }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
   const carouselImages = await getSliderImages('home');

   return (
      <html
         lang="en"
         className={`${poppins.variable} ${bebasNeue.variable} ${sfProDisplay.variable}`}
      >
         <body>
            <Suspense>
               <Navbar />
               <main>
                  <Carousel images={carouselImages} />
                  {children}
               </main>
               <WhatsApp />
               <Footer />
            </Suspense>
         </body>
      </html>
   );
}
