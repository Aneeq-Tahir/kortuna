import type { Collection } from '@/lib/shopify/types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const Collection = ({ item, className }: { item: Collection; className?: string }) => {
   const { image } = item;

   return (
      <div className={clsx('space-y-2', className)}>
         <Link href={item.path} className="rounded-xl">
            <div className="rounded-full shadow-card">
               <Image
                  src={image.url}
                  width={image?.width}
                  height={image?.height}
                  alt={image?.altText}
                  className="h-full w-full rounded-full"
               />
            </div>
         </Link>
         <p className="text-md text-center font-poppins font-extrabold">{item.title}</p>
      </div>
   );
};

export default Collection;
