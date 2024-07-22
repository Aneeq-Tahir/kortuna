import clsx from 'clsx';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product, className }: { product: Product; className?: string }) => {
   const image = product.featuredImage;

   const comparePrice = Number(product.compareAtPriceRange.minVariantPrice.amount);
   const price = Number(product.priceRange.minVariantPrice.amount);
   const currencyCode = product.priceRange.minVariantPrice.currencyCode;

   const discount = Math.floor(((comparePrice - price) / comparePrice) * 100);

   return (
      <Link
         href={`/products/${product.handle}`}
         className={clsx(
            'flex flex-col items-start justify-center gap-5 rounded-xl',
            'bg-white px-4 py-6 shadow-card',
            className
         )}
      >
         <div className="relative w-full overflow-hidden rounded-xl shadow-card">
            <Image
               src={image.url}
               width={image.width}
               height={image.height}
               alt={image.altText}
               className="h-full w-full"
            />
            {comparePrice > price && (
               <h1 className="absolute -right-7 bottom-2 w-24 -rotate-45 bg-white text-center">
                  {discount}% off
               </h1>
            )}
         </div>
         <div className="ml-1 sm:ml-4">
            <h1 className="text-xl leading-tight">{product.title}</h1>
            <div className="font-poppins flex flex-wrap gap-x-2 text-sm">
               {comparePrice > 0 && (
                  <p className="text-red-600 line-through">{`${currencyCode} ${comparePrice}`}</p>
               )}
               <p className={clsx({ 'font-bold': comparePrice > 0 })}>
                  {`${currencyCode} ${price}`}
               </p>
            </div>
         </div>
      </Link>
   );
};

export default ProductCard;
