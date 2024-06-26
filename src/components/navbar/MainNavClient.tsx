"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { pagesArray } from "@/lib/navData";


import Logo from "../../../public/assets/images/logo/logo.png";
import clsx from "clsx";
export default function MainNavClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFixedNav, setIsFixedNav] = useState(false);

  useEffect(() => {
    window.onscroll = () =>
      window.scrollY > 120 ? setIsFixedNav(true) : setIsFixedNav(false);
  }, []);
  return (
    <section
      className={clsx(
        "bg-white flex items-center justify-between px-2 w-full transition-all duration-500",
        {
          "fixed top-0 left-0 shadow z-40": isFixedNav,
        }
      )}
    >
      <Link href="/">
        <Image src={Logo} className="max-xs:w-28" alt="Bambi" />
      </Link>

      <ul className=" max-lg:hidden flex justify-center items-center gap-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/shop">Shop</NavLink>
        <NavLink href="/faq">Faqs</NavLink>
        <NavLink href="#" array={pagesArray}>
          Pages
        </NavLink>
      </ul>

      {children}
    </section>
  );
}
