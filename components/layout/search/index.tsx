'use client';
import { Dialog, Transition } from '@headlessui/react';
import { SearchIcon } from 'icons';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';
import { Fragment, useState } from 'react';

const Search = ({ products }: { products: Product[] }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [query, setQuery] = useState('');

   const filteredProducts =
      query === ''
         ? products
         : products.filter((product) =>
              product.title
                 .toLowerCase()
                 .replace(/\s+/g, '')
                 .includes(query.toLowerCase().replace(/\s+/g, ''))
           );

   const openSearch = () => setIsOpen(true);
   const closeSearch = () => setIsOpen(false);

   return (
      <>
         <button aria-label="open search" onClick={openSearch}>
            <SearchIcon color="white" />
         </button>
         <Transition as={Fragment} show={isOpen}>
            <Dialog className={'relative z-20'} onClose={closeSearch}>
               <Transition.Child
                  as={Fragment}
                  enter="transition-all ease-in-out duration-300"
                  enterFrom="opacity-0 backdrop-blur-none"
                  enterTo="opacity-100 backdrop-blur-1"
                  leave="transition-all ease-in-out duration-300"
                  leaveFrom="opacity-100 backdrop-blur-1"
                  leaveTo="opacity-0 backdrop-blur-none"
               >
                  <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
               </Transition.Child>
               <div className="fixed inset-0 flex w-screen items-start justify-center">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-in-out duration-300"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="ease-in-out duration-300"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                  >
                     <Dialog.Panel className={'mt-16 flex flex-col gap-4 text-center lg:w-1/3'}>
                        <h1 className="text-4xl text-white 2xl:text-5xl">
                           can we help find anything?
                        </h1>
                        <div>
                           <div
                              className={`flex h-10 items-center gap-1 bg-white 2xl:h-12 ${
                                 query.length > 0 ? 'rounded-t-2xl' : 'rounded-2xl'
                              }`}
                           >
                              <SearchIcon className="ml-2" color="black" />
                              <input
                                 type="text"
                                 name="search"
                                 onChange={(e) => setQuery(e.target.value)}
                                 autoComplete="off"
                                 className="w-full bg-transparent focus:outline-none"
                              />
                           </div>
                           {query.length > 0 && (
                              <div className="max-h-60 space-y-1 overflow-y-auto rounded-b-2xl bg-white pb-1.5 pl-3 text-left">
                                 {filteredProducts.length === 0 && query !== '' ? (
                                    <p>Nothing Found.</p>
                                 ) : (
                                    filteredProducts.map((product, i) => (
                                       <Link
                                          key={i}
                                          onClick={closeSearch}
                                          href={`/products/${product.handle}`}
                                          className="block"
                                       >
                                          {product.title}
                                       </Link>
                                    ))
                                 )}
                              </div>
                           )}
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </Dialog>
         </Transition>
      </>
   );
};

export default Search;
