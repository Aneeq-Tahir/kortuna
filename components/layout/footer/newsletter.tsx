import { Facebook, Instagram, TikTok } from 'icons';
import Link from 'next/link';

const Newsletter = () => {
   return (
      <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
         <h1 className="text-2xl text-white">Subscribe</h1>
         <p className="text-lg leading-tight">
            Subscribe to our Newsletter to get Special Offers, Free Giveaways and once-in-a-lifetime
            deals
         </p>
         <input
            type="email"
            name="newsletter"
            className="border-b-2 border-b-primary bg-transparent pb-1 text-base placeholder:font-bebas placeholder:text-xl placeholder:text-white/50 focus:outline-none"
            placeholder="Enter your email"
         />
         <div className="flex gap-4">
            <Link
               href={
                  'https://www.instagram.com/khpalstore640/?fbclid=IwAR3g_wRf6ndN9rW2_nw0yYWxBkBvwITCYYsQQPluFRNSXFrl__jLv7XWLQk'
               }
            >
               <Instagram />
            </Link>
            <Link href={'https://www.facebook.com/profile.php?id=61555568142048'}>
               <Facebook />
            </Link>
            <Link href={'https://www.tiktok.com/@khpal.store?_t=8jiWQNq3Rqy&_r=1'}>
               <TikTok />
            </Link>
         </div>
      </div>
   );
};

export default Newsletter;
