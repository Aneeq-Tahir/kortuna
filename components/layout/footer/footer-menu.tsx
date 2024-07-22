'use client';

import clsx from 'clsx';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MenuItem = ({ path, children }: { path: string; children: React.ReactNode }) => {
   const pathname = usePathname();
   const [active, setActive] = useState(pathname === path);

   useEffect(() => {
      setActive(pathname === path);
   }, [pathname, path]);

   return (
      <li>
         <Link
            href={path}
            className={clsx(
               'text-lg decoration-primary decoration-2 underline-offset-4 hover:underline',
               { 'text-neutral-200': active, 'hover:text-neutral-300': !active }
            )}
         >
            {children}
         </Link>
      </li>
   );
};

export default function FooterMenu({ menu, title }: { menu: Menu[]; title: string }) {
   if (!menu.length) return null;

   return (
      <nav className="space-y-3">
         <h1 className="text-2xl text-white">{title}</h1>
         <ul className="space-y-1">
            {menu.map((item: Menu) => (
               <MenuItem key={item.title} path={item.path}>
                  {item.title}
               </MenuItem>
            ))}
         </ul>
      </nav>
   );
}
