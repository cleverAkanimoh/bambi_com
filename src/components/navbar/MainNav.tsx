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
            className="h-20"
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
            ? "w-full absolute top-28 bg-white"
            : "col-lg-6 d-none d-lg-block"
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
          {/* <!-- Header Action Left Side Start --> */}
          <div className="header-action-left">
            {/* <!-- Search bar Start --> */}
            <Search />
            {/* <!-- Search bar Start --> */}
          </div>
          {/* <!-- Header Action Left Side End --> */}

          {/* <!-- Header Action Right Side Start --> */}
          <div className="header-action-right">
            {/* <!-- Search Action Button Start --> */}
            <button className="header-action-btn header-action-btn-search d-xl-none d-lg-block d-none">
              <i className="pe-7s-search"></i>
            </button>
            {/* <!-- Search Action Button End --> */}

            {/* <!-- User Dropdown Start --> */}
            {/* <UserDropdown /> */}
            {/* <!-- User Dropdown End --> */}

            {/* <!-- Wishlist Action Button Start --> */}
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
