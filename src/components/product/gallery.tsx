'use client';
import { Image as IImage, Product } from '@/lib/shopify/types';
import Image from 'next/image';
import { useState } from 'react';

const Gallery = ({ product }: { product: Product }) => {
   const { images } = product;
   const [mainImage, setMainImage] = useState<IImage>(images[0]!);

   const comparePrice = Number(product.compareAtPriceRange.minVariantPrice.amount);
   const price = Number(product.priceRange.minVariantPrice.amount);

   const discount = Math.floor(((comparePrice - price) / comparePrice) * 100);

   return (
      <div className="flex flex-row gap-2 lg:flex-col lg:gap-5">
         <div className="relative w-full max-w-[260px] overflow-hidden rounded-xl md:max-w-[400px] lg:max-w-[500px]">
            <Image
               alt={mainImage.altText!}
               width={mainImage.width}
               src={mainImage.url!}
               height={mainImage.height}
               className="h-full w-full"
            />
            {comparePrice > price && (
               <h1 className="absolute -right-7 bottom-2 w-24 -rotate-45 bg-white text-center">
                  {discount}% off
               </h1>
            )}
         </div>
         <div className="flex flex-col gap-3 lg:flex-row">
            {images.map((image, i) => (
               <Image
                  key={i}
                  src={image.url}
                  alt={image.altText}
                  width={image.width}
                  height={image.height}
                  onClick={() => setMainImage(image)}
                  className="h-20 w-16 rounded-md hover:cursor-pointer"
               />
            ))}
         </div>
      </div>
   );
};

export default Gallery;
