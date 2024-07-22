'use client';
import { createUrl } from '@/lib/utils';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';

type State = [number, Dispatch<SetStateAction<number>>];

function Button({ handleQuantity, type }: { handleQuantity: () => void; type: 'plus' | 'minus' }) {
   return (
      <button
         onClick={handleQuantity}
         aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
         className={clsx(
            'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
            { 'ml-auto': type === 'minus' }
         )}
      >
         {type === 'plus' ? <PlusIcon className="h-4 w-4" /> : <MinusIcon className="h-4 w-4" />}
      </button>
   );
}

const QuantitySelector = () => {
   const router = useRouter();
   const searchParams = useSearchParams();
   const pathname = usePathname();

   const [quantity, setQuantity] = useState(1);

   const updateQuantityAndUrl = (newQuantity: number) => {
      setQuantity(newQuantity);

      const quantitySearchParams = new URLSearchParams(searchParams.toString());
      quantitySearchParams.set('quantity', String(newQuantity));
      const quantityUrl = createUrl(pathname, quantitySearchParams);

      router.replace(quantityUrl, { scroll: false });
   };

   return (
      <div className="mr-auto flex h-9 flex-row items-center rounded-full border border-neutral-700">
         <Button
            handleQuantity={() => updateQuantityAndUrl(quantity > 0 ? quantity - 1 : 0)}
            type="minus"
         />
         <p className="w-6 text-center">
            <span className="w-full text-sm">{quantity}</span>
         </p>
         <Button handleQuantity={() => updateQuantityAndUrl(quantity + 1)} type="plus" />
      </div>
   );
};

export default QuantitySelector;
