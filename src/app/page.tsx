import { Carousel, CollectionGroup, NewArrivals } from '@/components/layout/home';
import { getCollectionProducts, getCollections, getSliderImages } from '@/lib/shopify';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
   description:
      'Welcome to Khpal Store – your ultimate destination for trendy fashion, stylish watches, top-notch airpods, and more! Explore our diverse range, from fashionable clothes to reliable power banks and high-quality baby products. Shop confidently with our fast and dependable delivery service. Stay in vogue with Khpal Store – your go-to for all things trendy!',
   openGraph: {
      type: 'website'
   }
};

export default async function HomePage() {
   const newArrivals = await getCollectionProducts({ collection: 'hidden-new-arrivals' });
   const collections = await getCollections();
   const carouselImages = await getSliderImages('slider');

   return (
      <>
         <Suspense>
            <Carousel images={carouselImages} />
            <CollectionGroup collections={collections} />
            {/* <HotProducts /> */}
            <NewArrivals products={newArrivals} />
         </Suspense>
      </>
   );
}
