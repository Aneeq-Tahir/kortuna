import { getCollectionProducts } from 'lib/shopify';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

const Product = ({ product }: { product: Product }) => {
   // @ts-ignore
   const image = product.metafield.reference.image;
   return (
      <Link href={`/products/${product.handle}`} className="group/product relative w-full">
         <h1 className="absolute bottom-16 z-10 text-3xl text-white group-odd/product:right-5 group-even/product:left-5">
            {product.title}
         </h1>
         <p className="absolute bottom-7 z-10 rounded-lg border p-1 text-sm font-thin text-white group-odd/product:right-5 group-even/product:left-5">
            Shop now
         </p>
         <Image
            src={image.url}
            width={500}
            height={400}
            alt={image.altText}
            className="w-full rounded-xl"
         />
      </Link>
   );
};

const HotProducts = async () => {
   const products = await getCollectionProducts({ collection: 'hidden-hot-products' });

   const [product1, product2] = products;

   return (
      <section className="mx-3 mt-6 max-w-[1100px] space-y-4 sm:mx-6 min-[1100px]:mx-auto">
         <h1 className="text-center text-3xl">Hot Selling Products</h1>
         <div className="flex flex-col gap-x-2 gap-y-4 md:flex-row">
            <Product product={product1!} />
            <Product product={product2!} />
         </div>
      </section>
   );
};

export default HotProducts;
