'use client';
import { LeftArrow, RightArrow } from '@/icons';
import { Image as IImage } from '@/lib/shopify/types';
import Image from 'next/image';
import Slider from 'nuka-carousel';

const sliderConfig = {
   nextButtonText: <RightArrow fill="#F2F6F7" />,
   prevButtonText: <LeftArrow fill="#F2F6F7" />,
   nextButtonClassName: '!bg-transparent',
   prevButtonClassName: '!bg-transparent',
   pagingDotsContainerClassName: '!gap-2 ',
   pagingDotsClassName: '!border-none text-white'
};

const Carousel = ({ images }: { images: IImage[] }) => {
   return (
      <>
         <Slider
            className="!max-h-[30rem]"
            autoplay={true}
            wrapAround={true}
            defaultControlsConfig={sliderConfig}
         >
            {images.map((image, i) => (
               <Image
                  key={i}
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={image.altText}
                  className="h-auto !w-full object-cover"
               />
            ))}
         </Slider>
         <p className="bg-black py-1 text-center text-white">Buy Online or order on Whatsapp</p>
      </>
   );
};

export default Carousel;
