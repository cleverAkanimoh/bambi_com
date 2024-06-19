"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();

  const navLinks = [
    {
      title: "Dashboard",
      href: "/dashboard"
    },
    {
      title: "Orders",
      href: "/orders"
    },
    {
      title: "Payment method",
      href: "/payment-method"
    },
    {
      title: "Address",
      href: "/address"
    },
    {
      title: "Account details",
      href: "/account-details"
    },
    {
      title: "Logout",
      href: "/logout"
    },
  ];

  return (
    <div className='my-6 p-6 md:p-10'>
      <div className='w-[95%] md:w-[90%] mx-auto flex flex-col gap-8 md:flex-row'>
        <nav className='w-full lg:w-[40%] border'>
          <ul>
            {navLinks.map(link => (
              <li
                className={`p-4 border-b flex items-center gap-2 ${pathName === link.href ? "bg-primary text-white" : ""}`}
                key={link.title}
              >
                <Link className='uppercase font-semibold' href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <aside className='p-6 border'>
          {children}
        </aside>
      </div>
    </div>
  );
};

export default Layout;
