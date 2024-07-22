import Navbar from 'components/collections-navbar';
import ProductCard from 'components/layout/product-card';
import { getCollectionProducts, getCollections, getMenu, getProducts } from 'lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Params = {
   params: {
      collection: string;
   };
};

export const runtime = 'edge';

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
   const collections = await getCollections();
   const [collection] = collections.filter((value) => value.handle === params.collection);

   if (!collection) return notFound();

   return {
      title: collection?.seo.title || collection.title,
      description:
         collection?.seo.description || collection.description || `${collection.title} Products`
   };
};

const Page = async ({ params }: Params) => {
   const menu = await getMenu('main-menu');

   const collection =
      params.collection === 'all'
         ? await getProducts({})
         : await getCollectionProducts({ collection: params.collection });

   return (
      <main>
         <Navbar menu={menu} />
         <div aria-hidden id="#0" />
         <div className="mx-3 mt-8 grid max-w-[1100px] grid-cols-2 gap-x-3 gap-y-5 md:mx-10 md:grid-cols-3 min-[1100px]:mx-auto min-[1100px]:grid-cols-4">
            {collection.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </main>
   );
};

export default Page;
