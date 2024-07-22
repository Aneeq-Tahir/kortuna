import clsx from 'clsx';
import type { Collection } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ item, className }: { item: Collection; className?: string }) => {
   const { image } = item;

   return (
      <div className={clsx('space-y-2', className)}>
         <Link href={item.path} className="rounded-xl">
            <div className="rounded-xl shadow-card">
               <Image
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={image.altText}
                  className="h-full w-full rounded-xl"
               />
            </div>
         </Link>
         <p className="text-center text-lg">{item.title}</p>
      </div>
   );
};

export default Card;
