'use client';
import { Menu } from '@/lib/shopify/types';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NavItem = ({ path, children }: { path: string; children: React.ReactNode }) => {
   const pathname = usePathname();
   const [active, setActive] = useState(pathname === path);

   useEffect(() => {
      setActive(pathname === path);
   }, [pathname, path]);

   return (
      <li>
         <Link
            href={path}
            scroll={false}
            className={clsx('font-bebas text-2xl', { 'border-t-[3px] border-primary': active })}
         >
            {children}
         </Link>
      </li>
   );
};

const Navbar = ({ menu }: { menu: Menu[] }) => {
   return (
      <div className="flex justify-center">
         <div className="mt-10 hidden h-12 w-full max-w-[1100px] items-center rounded-xl bg-white px-14 lg:flex">
            <ul className="flex w-full items-center justify-between">
               {menu.map((menu, i) => (
                  <NavItem path={menu.path} key={i}>
                     {menu.title}
                  </NavItem>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
