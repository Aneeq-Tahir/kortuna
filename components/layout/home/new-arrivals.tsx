'use client';
import { LeftArrow, RightArrow } from 'icons';
import { Product } from 'lib/shopify/types';
import Slider from 'nuka-carousel';
import { useEffect, useState } from 'react';
import ProductCard from '../product-card';

const sliderConfig = {
   nextButtonText: <RightArrow fill="#000" />,
   prevButtonText: <LeftArrow fill="#000" />,
   nextButtonClassName: '!hidden min-[468px]:!block !bg-transparent',
   prevButtonClassName: '!hidden min-[468px]:!block !bg-transparent',
   pagingDotsContainerClassName: '!hidden'
};

const NewArrivals = ({ products }: { products: Product[] }) => {
   const [slides, setSlides] = useState(3);

   useEffect(() => {
      if (window.innerWidth < 468) {
         setSlides(2);
      } else {
         setSlides(3);
      }
   }, []);

   const cellAlign = slides === 2 ? 'center' : 'left';
   return (
      <section className="mt-10 space-y-6 min-[468px]:ml-6 md:mx-6 lg:max-w-[1100px] min-[1100px]:mx-auto">
         <h1 className="text-center text-3xl">New Arrivals</h1>
         <Slider
            className="pb-4"
            cellAlign={cellAlign}
            slidesToShow={slides}
            defaultControlsConfig={sliderConfig}
         >
            {products.map((product, i) => (
               <ProductCard key={i} className="mr-4 md:max-w-[300px]" product={product} />
            ))}
         </Slider>
      </section>
   );
};

export default NewArrivals;
