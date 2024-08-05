import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { bebasNeue, cinderela, poppins } from '@/fonts';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata = {
   metadataBase: new URL('https://www.khpalstore.com'),
   title: {
      default: 'Kortuna',
      template: `%s | Kortuna`
   },
   robots: {
      follow: true,
      index: true
   }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en" className={`${poppins.variable} ${bebasNeue.variable} ${cinderela.variable}`}>
         <body>
            <Suspense>
               <Navbar />
               <main>{children}</main>
               {/* <WhatsApp /> */}
               <Footer />
            </Suspense>
         </body>
      </html>
   );
}
