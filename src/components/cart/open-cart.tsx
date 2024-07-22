import { CartIcon } from '@/icons';
import clsx from 'clsx';

export default function OpenCart({
   className,
   quantity
}: {
   className?: string;
   quantity?: number;
}) {
   return (
      <div className="relative flex items-center justify-center text-white">
         <CartIcon color="white" className={clsx('h-8 w-6', className)} />

         {quantity ? (
            <div className="absolute right-0 top-0 -mr-[10px] -mt-1.5 h-4 w-4 rounded-full bg-primary text-[11px] font-medium text-white">
               {quantity}
            </div>
         ) : null}
      </div>
   );
}
