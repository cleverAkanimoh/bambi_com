"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { pagesArray } from "@/lib/navData";
import Search from "../Search";
import { useMediaQuery } from "react-responsive";
// import UserDropdown from "./UserDropdown";

export default function MainNav() {
  const [showNav, setShowNav] = useState(false);

  const laptopView = useMediaQuery({ query: "(min-width:765px)" });
  return (
    <section className="flex items-center justify-between px-2 xs:px-4">
      {/* <!-- Header Logo Start --> */}

      <div className="header-logo">
        <Link href="/">
          <Image
            src="/assets/images/logo/logo.png"
            alt="Site Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      {/* <!-- Header Logo End --> */}

      {/* <!-- Header Menu Start --> */}
      <div
        className={
          showNav && !laptopView
            ? "w-full left-0 pl-2 xs:pl-4 absolute top-28 bg-white"
            : "col-md-6 d-none d-md-block"
        }
      >
        <div className="main-menu">
          <ul className="">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/faq">Faqs</NavLink>
            <NavLink href="/faq" array={pagesArray}>
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
            <Search />
          </div>

          <div className="header-action-right">
            <button className="header-action-btn header-action-btn-search d-xl-none d-lg-block d-none">
              <i className="pe-7s-search"></i>
            </button>

            {/* <UserDropdown /> */}
            <Link
              href="/wishlist"
              className="header-action-btn header-action-btn-wishlist"
            >
              <i className="pe-7s-like"></i>
            </Link>
            {/* <!-- Wishlist Action Button End --> */}

            {/* <!-- Cart Action Button Start --> */}
            <button className="header-action-btn header-action-btn-cart">
              <i className="pe-7s-cart"></i>
              <span className="header-action-num">3</span>
            </button>
            {/* <!-- Cart Action Button End --> */}

            {/* <!-- Mobile Menu Hambarger Action Button Start --> */}
            <button
              className="header-action-btn header-action-btn-menu d-lg-none d-md-block"
              onClick={() => setShowNav((prev) => !prev)}
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
