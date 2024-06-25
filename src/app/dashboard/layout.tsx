import React from "react";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Breadcrumbs from "@/components/Breadcrumbs";
import NavLink from "@/components/navbar/NavLink";
import LogoutButton from "@/components/LogoutButton";
import { getCurrentUser } from "@/lib/prismaHelpers";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getCurrentUser();
  if (user) redirect("/auth/login");
  const navLinks = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <IoSpeedometerOutline />,
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: <FaCartArrowDown />,
    },
    {
      title: "Download",
      href: "/dashboard/download",
      icon: <FaCloudDownloadAlt />,
    },
    {
      title: "Payment method",
      href: "/dashboard/payment-method",
      icon: <FaRegCreditCard />,
    },
    {
      title: "Address",
      href: "/dashboard/address",
      icon: <FaLocationDot />,
    },
    {
      title: "Account details",
      href: "/dashboard/account-details",
      icon: <FaUser />,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs active="Dashboard" />
      <div className="p-4 md:p-10 mb-4">
        <div className="w-full md:w-[90%] mx-auto flex flex-col gap-8 lg:flex-row">
          <nav className="w-full lg:w-[40%] border">
            <ul>
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  href={link.href}
                  dashboard
                  className="flex items-center gap-2 p-3 border-b last:border-0 "
                >
                  {link.icon}
                  <span>{link.title}</span>
                </NavLink>
              ))}
            </ul>
            <LogoutButton />
          </nav>
          <aside className="p-2 md:p-6 border size-full">{children}</aside>
        </div>
      </div>
    </div>
  );
};

export default Layout;
