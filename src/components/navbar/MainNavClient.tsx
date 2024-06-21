"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { pagesArray } from "@/lib/navData";
import Search from "../Search";

import Logo from "../../../public/assets/images/logo/logo.png";
import clsx from "clsx";
import { useGlobalContext } from "@/context/store";
import { CartType } from "@/types";

export default function MainNavClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setIsMenuClicked } = useGlobalContext();
  const [isFixedNav, setIsFixedNav] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = () =>
      window.scrollY > 120 ? setIsFixedNav(true) : setIsFixedNav(false);
  }, []);
  return (
    <section
      className={clsx("flex items-center justify-between px-2 w-full", {
        "fixed top-0 left-0 bg-white z-40": isFixedNav,
      })}
    >
      {/* <!-- Header Logo Start --> */}

      <Link href="/">
        <Image src={Logo} alt="Bambi" />
      </Link>
      {/* <!-- Header Logo End --> */}

      {/* <!-- Header Menu Start --> */}
      <div className={"col-md-6 d-none d-md-block"}>
        <div className="main-menu xl:ml-6">
          <ul className="">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/faq">Faqs</NavLink>
            <NavLink href="#" array={pagesArray}>
              Pages
            </NavLink>
          </ul>
        </div>
      </div>
      {/* <!-- Header Menu End --> */}

      {/* <!-- Header Action Start --> */}
      <div className="col-md-6 col-lg-3 col-xl-4 col-6">
        <div className="header-actions header-actions-width">
          <div className="header-action-left">
            <React.Suspense>
              <Search />
            </React.Suspense>
          </div>

          <div className="header-action-right">
            <button className="header-action-btn header-action-btn-search d-xl-none d-lg-block d-none">
              <i className="pe-7s-search"></i>
            </button>

            {/* <UserDropdown /> */}

            <Link
              href="/dashboard"
              className="text-gray-500 hover:text-primary text-3xl header-action-btn"
            >
              <i className="pe-7s-user"></i>
            </Link>

            <Link
              href="/wishlist"
              className="header-action-btn header-action-btn-wishlist"
            >
              <i className="pe-7s-like"></i>
            </Link>
            {/* <!-- Wishlist Action Button End --> */}

            {children}

            {/* <!-- Mobile Menu Hambarger Action Button Start --> */}
            <button
              className="header-action-btn header-action-btn-menu d-lg-none d-md-block"
              onClick={() => setIsMenuClicked(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
            {/* <!-- Mobile Menu Hambarger Action Button End --> */}
          </div>
          {/* <!-- Header Action Right Side End --> */}
        </div>
      </div>
      {/* <!-- Header Action End --> */}
    </section>
  );
}