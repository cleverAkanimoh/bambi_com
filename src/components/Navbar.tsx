import React from "react";
import NavBanner from "./navbar/NavBanner";
import MainNav from "./navbar/MainNav";
import Search from "./Search";
import Image from "next/image";
import Link from "next/link";
import CartOffCanvas from "./CartOffCanvas";

export default function Navbar() {
  return (
    <nav className="header">
      {/* <!-- Header Section Start --> */}

      {/* <!-- Header Top Start --> */}
      <NavBanner />
      {/* <!-- Header Top End --> */}

      {/* <!-- Header Bottom Start --> */}
      <MainNav />
      {/* <!-- Header Bottom End --> */}

      {/* <!-- Offcanvas Search Start --> */}
      <div className="offcanvas-search">
        <div className="offcanvas-search-inner">
          {/* <!-- Button Close Start --> */}
          <div className="offcanvas-btn-close">
            <i className="pe-7s-close"></i>
          </div>
          {/* <!-- Button Close End --> */}

          {/* <!-- Offcanvas Search Form Start --> */}
          <Search variant="off-canvas" />
          {/* <!-- Offcanvas Search Form End --> */}
        </div>
      </div>
      {/* <!-- Offcanvas Search End --> */}

      {/* <!-- Cart Offcanvas Start --> */}
      <CartOffCanvas />
      {/* <!-- Cart Offcanvas End --> */}

      {/* <!-- Header Section End --> */}
    </nav>
  );
}
