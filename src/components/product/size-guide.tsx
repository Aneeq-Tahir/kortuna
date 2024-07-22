'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

type Sizes = Array<
   {
      value: string;
   }[]
>;

const SizeGuide = ({ sizes }: { sizes: Sizes }) => {
   const [IsOpen, setIsOpen] = useState(false);

   const openSearch = () => setIsOpen(true);
   const closeSearch = () => setIsOpen(false);

   return (
      <>
         <a
            onClick={openSearch}
            className="cursor-pointer font-semibold underline decoration-primary decoration-2 underline-offset-4"
         >
            Size Guide
         </a>
         <Transition as={Fragment} show={IsOpen}>
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
               <div className="fixed inset-0 flex w-screen items-center justify-center">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-in-out duration-300"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="ease-in-out duration-300"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                  >
                     <Dialog.Panel className="flex w-full max-w-[200px] flex-col gap-1 rounded-md bg-white p-3">
                        {sizes.map((size, i) => (
                           <div key={i} className="flex justify-between">
                              {size.map(({ value }, i) => (
                                 <p key={i}>{value}</p>
                              ))}
                           </div>
                        ))}
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </Dialog>
         </Transition>
      </>
   );
};

export default SizeGuide;
