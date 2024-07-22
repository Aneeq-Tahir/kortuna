'use client';

import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { Person } from '@/icons';
import { Menu } from '@/lib/shopify/types';
import { Bars3CenterLeftIcon as Hamburger, XMarkIcon } from '@heroicons/react/24/outline';
// import Search from './search';

export default function MobileMenu({ menu }: { menu: Menu[] }) {
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const [isOpen, setIsOpen] = useState(false);
   const openMobileMenu = () => setIsOpen(true);
   const closeMobileMenu = () => setIsOpen(false);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth > 768) {
            setIsOpen(false);
         }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, [isOpen]);

   useEffect(() => {
      setIsOpen(false);
   }, [pathname, searchParams]);

   return (
      <>
         <button
            onClick={openMobileMenu}
            aria-label="Open mobile menu"
            className="h-7 w-7 text-white"
         >
            <Hamburger />
         </button>
         <Transition show={isOpen}>
            <Dialog onClose={closeMobileMenu} className="relative z-50">
               <Transition.Child
                  as={Fragment}
                  enter="transition-all ease-in-out duration-200"
                  enterFrom="opacity-0 backdrop-blur-none"
                  enterTo="opacity-100 backdrop-blur-[.5px]"
                  leave="transition-all ease-in-out duration-200"
                  leaveFrom="opacity-100 backdrop-blur-[.5px]"
                  leaveTo="opacity-0 backdrop-blur-none"
               >
                  <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
               </Transition.Child>
               <Transition.Child
                  as={Fragment}
                  enter="transition-all ease-in-out duration-300"
                  enterFrom="translate-x-[-100%]"
                  enterTo="translate-x-0"
                  leave="transition-all ease-in-out duration-200"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-[-100%]"
               >
                  <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-black pb-6">
                     <div className="p-6">
                        <div className="mb-3 flex items-center justify-between">
                           <button
                              className="h-7 w-7 text-white"
                              onClick={closeMobileMenu}
                              aria-label="Close mobile menu"
                           >
                              <XMarkIcon className="h-6" />
                           </button>
                           <Link
                              href="https://shopify.com/67728212212/account"
                              className="flex items-center gap-2 text-white"
                           >
                              Log In
                              <Person className="h-8 w-6" />
                           </Link>
                        </div>

                        {menu.length > 0 && (
                           <nav>
                              <ul className="flex w-full flex-col">
                                 {menu.map((item: Menu) => (
                                    <li
                                       className="py-2 font-bebas text-xl text-white hover:text-neutral-500"
                                       key={item.title}
                                    >
                                       <Link href={item.path} onClick={closeMobileMenu}>
                                          {item.title}
                                       </Link>
                                    </li>
                                 ))}
                              </ul>
                           </nav>
                        )}
                     </div>
                  </Dialog.Panel>
               </Transition.Child>
            </Dialog>
         </Transition>
      </>
   );
}