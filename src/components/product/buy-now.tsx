import { directCheckOut } from '@/lib/shopify';
import { ProductVariant } from '@/lib/shopify/types';
import clsx from 'clsx';

const BuyNow = async ({ variant, quantity }: { quantity: number; variant: ProductVariant }) => {
   const checkoutUrl: string = await directCheckOut({ variantId: variant.id, quantity });
   const buttonClasses =
      'relative flex w-full items-center justify-center rounded-md bg-primary p-4 tracking-wide text-white';
   //    const disabledClasses = 'cursor-not-allowed opacity-80 hover:opacity-80 text-opacity-50';

   //    if (!variant.availableForSale) {
   //       return (
   //          <button aria-disabled className={clsx(buttonClasses, disabledClasses)}>
   //             Out of Stock
   //          </button>
   //       );
   //    }

   return (
      <a href={checkoutUrl} className={clsx(buttonClasses)}>
         Buy Now
      </a>
   );
};

export default BuyNow;
