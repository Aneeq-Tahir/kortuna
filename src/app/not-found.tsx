'use client';
import { useRouter } from 'next/navigation';

const NotFound = () => {
   const router = useRouter();

   return (
      <div className="flex min-h-[75vh] flex-col items-center justify-center gap-4">
         <div className="space-y-3 rounded bg-black p-8 text-center text-white">
            <h1 className="text-2xl">Error 404 | Page not found</h1>
            <p className="">Oopsie! The page that you&apos;re looking for is unavailable.</p>
            <button
               onClick={() => router.back()}
               className="w-1/2 rounded-full bg-primary px-4 py-2"
            >
               Go back
            </button>
         </div>
      </div>
   );
};

export default NotFound;
