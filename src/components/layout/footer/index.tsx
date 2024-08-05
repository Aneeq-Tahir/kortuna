import Link from 'next/link';

import FooterMenu from '@/components/layout/footer/footer-menu';
import { Logo } from '@/icons';
import { getMenu } from '@/lib/shopify';
import Newsletter from './newsletter';

export default async function Footer() {
   const currentYear = new Date().getFullYear();
   const menu = await getMenu('main-menu');
   const aboutMenu = await getMenu('footer');
   const copyrightName = 'Khpal Store';

   return (
      <footer className="mt-10 bg-black text-sm text-neutral-400">
         <div className="flex w-full flex-col gap-6 p-12 text-sm">
            <div>
               <Link href="/">
                  <Logo />
               </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 md:grid-cols-3">
               <FooterMenu menu={menu} title="quick links" />
               <FooterMenu menu={aboutMenu} title="about us" />
               <Newsletter />
            </div>
         </div>
         <div className="border-t border-neutral-700 py-6 text-sm">
            <div className="mx-12">
               <p>
                  &copy; {currentYear} {copyrightName}
                  {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights
                  reserved.
               </p>
            </div>
         </div>
      </footer>
   );
}
