import React from "react";
import NavBanner from "./navbar/NavBanner";
import MainNav from "./navbar/MainNav";
import Search from "./Search";
import CartOffCanvas from "./navbar/CartOffCanvas";
import MenuSideNav from "./navbar/MenuSideNav";

export default async function Navbar() {
  return (
    <nav className="">
      {/* <!-- Header Section Start --> */}

      {/* <!-- Header Top Start --> */}
      <NavBanner />
      {/* <!-- Header Top End --> */}

      {/* <!-- Header Bottom Start --> */}
      <MainNav />
      {/* <!-- Header Bottom End --> */}

      <MenuSideNav />

      {/* <!-- Cart Offcanvas Start --> */}
      <CartOffCanvas />
      {/* <!-- Cart Offcanvas End --> */}

      {/* <!-- Header Section End --> */}
    </nav>
  );
}
