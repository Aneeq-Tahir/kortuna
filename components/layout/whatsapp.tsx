import { WALogo } from 'icons';
import Link from 'next/link';

const WhatsApp = () => {
   return (
      <>
         <div className="fixed bottom-4 left-4">
            <Link href="https://wa.me/923705524134" className=" md:hidden">
               <WALogo color="#25D366" />
            </Link>
            <Link
               href={'https://wa.me/923705524134'}
               className="hidden items-center gap-2 rounded-2xl bg-green-500 p-3 md:flex"
            >
               <WALogo color="white" className="h-6 w-6" />
               <p className="font-semibold text-white">Chat on WhatsApp</p>
            </Link>
         </div>
      </>
   );
};

export default WhatsApp;
