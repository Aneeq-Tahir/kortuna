import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import { Logo, Person } from '@/icons';
import { getMenu, getMetaObject, getProducts } from '@/lib/shopify';
import clsx from 'clsx';
import Link from 'next/link';
import { Suspense } from 'react';
import Search from '../search';
import MobileMenu from './mobile-menu';

const Navbar = async () => {
   const menu = await getMenu('main-menu');
   const topText = await getMetaObject({ handle: 'top-bar', type: 'top_bar' });
   const text = topText.fields[0]?.value;
   const products = await getProducts({});

   return (
      <header>
         <p className="bg-primary py-[5px] text-center text-sm">{text}</p>
         <div className="flex flex-col gap-3 bg-black py-2">
            <div
               className={clsx(
                  'mx-auto flex w-full max-w-[360px] items-center justify-between md:items-baseline',
                  'sm:max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1100px]',
                  '[@media_(max-width:380px)]:max-w-[325px]'
               )}
            >
               <div className="flex justify-end md:hidden">
                  <MobileMenu menu={menu} />
               </div>
               <div aria-hidden className="hidden w-6 md:block" />
               <Link href="/">
                  <Logo className="ml-4 mt-2 md:ml-[4.5rem]" />
               </Link>
               <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
                  <Search products={products} />
                  <Link
                     aria-label="log in or sign up"
                     href="https://shopify.com/88437227838/account"
                  >
                     <Person className="hidden h-8 w-6 md:block" />
                  </Link>
                  <div className="flex justify-end">
                     <Suspense fallback={<OpenCart />}>
                        <Cart />
                     </Suspense>
                  </div>
               </div>
            </div>
            {menu.length > 0 && (
               <nav className="mx-auto hidden md:block">
                  <ul className="flex gap-6">
                     {menu.map(({ title, path }) => (
                        <li className="font-bebas text-xl text-white" key={title}>
                           <Link href={`${path}`}>{title}</Link>
                        </li>
                     ))}
                  </ul>
               </nav>
            )}
         </div>
      </header>
   );
};

export default Navbar;
