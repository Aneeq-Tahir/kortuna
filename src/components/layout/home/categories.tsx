'use client';
import { Collection } from '@/lib/shopify/types';
import Slider from 'nuka-carousel';
import { useEffect, useState } from 'react';
import Card from '../collections-card';

const sliderConfig = {
   nextButtonClassName: 'hidden',
   prevButtonClassName: 'hidden',
   pagingDotsContainerClassName: '!hidden'
};

const Categories = ({ collections }: { collections: Collection[] }) => {
   const [slides, setSlides] = useState(3);

   useEffect(() => {
      if (window.innerWidth < 468) {
         setSlides(2);
      } else {
         setSlides(3);
      }
   }, []);

   collections = collections.filter((collection) => collection.title !== 'All');
   const cellAlign = slides === 2 ? 'center' : 'left';

   return (
      <section className="min-[468px]:ml-6 md:m-0">
         <div className="mt-10 hidden max-w-[1100px] gap-3 md:mx-6 md:flex min-[1100px]:mx-auto">
            {collections.map((collection, i) => (
               <Card key={i} item={collection} className="w-full" />
            ))}
         </div>
         <Slider
            className="mt-10 md:hidden"
            cellAlign={cellAlign}
            slidesToShow={slides}
            defaultControlsConfig={sliderConfig}
         >
            {collections.map((collection, i) => (
               <Card key={i} item={collection} className="mr-4" />
            ))}
         </Slider>
      </section>
   );
};

export default Categories;
