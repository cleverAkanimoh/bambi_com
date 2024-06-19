"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();

  const navLinks = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <IoSpeedometerOutline />
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: <FaCartArrowDown />
    },
    {
      title: "Download",
      href: "/dashboard/download",
      icon: <FaCloudDownloadAlt />
    },
    {
      title: "Payment method",
      href: "/dashboard/payment-method",
      icon: <FaRegCreditCard />
    },
    {
      title: "Address",
      href: "/dashboard/address",
      icon: <FaLocationDot />
    },
    {
      title: "Account details",
      href: "/dashboard/account-details",
      icon: <FaUser />
    },
    {
      title: "Logout",
      href: "/dashboard/logout",
      icon: <TbLogout />
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
                <span>{link.icon}</span>
                <Link className='uppercase font-semibold' href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <aside className='p-6 border size-full'>
          {children}
        </aside>
      </div>
    </div>
  );
};

export default Layout;
