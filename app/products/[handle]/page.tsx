import { AddToCart } from 'components/cart/add-to-cart';
import BuyNow from 'components/product/buy-now';
import Gallery from 'components/product/gallery';
import QuantitySelector from 'components/product/quantity-selector';
import SizeGuide from 'components/product/size-guide';
import { VariantSelector } from 'components/product/variant-selector';
import { getProduct, getProductMetaFields, getProducts } from 'lib/shopify';
import { ProductVariant } from 'lib/shopify/types';
import { notFound } from 'next/navigation';

type Params = {
   handle: string;
};

export const runtime = 'edge';

export const generateMetadata = async ({ params }: { params: Params }) => {
   const product = await getProduct(params.handle);

   if (!product) return notFound();

   const { url, width, height, altText: alt } = product.featuredImage || {};

   return {
      title: product.seo.title || product.title,
      description: product.seo.description || product.description,
      robots: {
         index: true,
         follow: true,
         googleBot: {
            index: true,
            follow: true
         }
      },
      openGraph: url
         ? {
              images: [
                 {
                    url,
                    width,
                    height,
                    alt
                 }
              ]
           }
         : null
   };
};

type Props = {
   params: { handle: string };
   searchParams: { [key: string]: string | string[] | undefined };
};

function selectVariant(variants: ProductVariant[], selection: Props['searchParams']) {
   return variants.find((variant) => {
      return Object.keys(selection).every((key) => {
         const selectedOption = variant.selectedOptions.find(
            (option) => option.name.toLowerCase() === key.toLowerCase()
         );
         return selectedOption && selectedOption.value === selection[key];
      });
   });
}

const Page = async ({ params, searchParams }: Props) => {
   const product = await getProduct(params.handle);
   if (!product) return notFound();

   const comparePrice = Number(product.compareAtPriceRange.minVariantPrice.amount);
   const currencyCode = product.priceRange.minVariantPrice.currencyCode;

   let sizes = await getProductMetaFields({ handle: params.handle, key: 'size_guide' });

   if (sizes) sizes = sizes.references.edges.map((v: any) => v.node.fields);

   const quantity = Number(searchParams.quantity);

   delete searchParams.handle;
   delete searchParams.quantity;

   const variant = selectVariant(product.variants, searchParams);
   const price = Number(variant?.price.amount);

   return (
      <div className="mx-3 mt-12 flex flex-col gap-8 md:mx-6 lg:mx-8 lg:flex-row xl:mx-auto xl:max-w-[1280px]">
         <Gallery product={product} />
         <div className="flex w-full flex-col gap-4 lg:w-1/2">
            <h1 className="text-3xl">{product.title}</h1>
            <div
               className="prose-headings:text-lg prose-ul:list-disc prose-ul:pl-8"
               dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <div className="font-poppins flex flex-wrap gap-x-2 text-lg">
               {comparePrice > 0 && (
                  <p className="text-red-600 line-through">{`${currencyCode} ${comparePrice}`}</p>
               )}
               <p className="font-bold">{`${currencyCode} ${price}`}</p>
            </div>
            <VariantSelector variants={product.variants} options={product.options} />
            <QuantitySelector />
            {sizes && <SizeGuide sizes={sizes} />}
            <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
            <BuyNow variant={variant!} quantity={quantity ? quantity : 1} />
         </div>
      </div>
   );
};

export const generateStaticParams = async () => {
   const products = await getProducts({});

   return products.map((product) => ({ handle: product.handle }));
};

export default Page;
