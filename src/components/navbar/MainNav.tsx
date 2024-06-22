"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { pagesArray } from "@/lib/navData";
import Search from "../Search";

import Logo from "../../../public/assets/images/logo/logo.png";
import clsx from "clsx";
import { useGlobalContext } from "@/context/store";
import { CartType } from "@/types";
import { getNumberOfItemsInCart } from "@/lib/cart";
import { useAuth } from "@/context/auth-context";
import BamIcon from "../Icon";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { BiMenu } from "react-icons/bi";
import BamLink from "../BamLink";

export default function MainNav() {
  const { setIsMenuClicked, setIsCartClicked } = useGlobalContext();
  const [isFixedNav, setIsFixedNav] = useState(false);
  const { user } = useAuth();
  // const [cartItems, setCartItems] = useState<CartType[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0); // New state for total items

  useEffect(() => {
    if (user) {
      const fetchCartItems = async () => {
        // const unsubscribeItems = fetchInRealtimeAndRenderPostsFromDB(user.uid, setCartItems);
        const unsubscribeTotal = await getNumberOfItemsInCart(
          user.uid,
          setTotalItems
        );

        return () => {
          // unsubscribeItems();
          unsubscribeTotal();
        };
      };

      fetchCartItems();
    }
  }, [user]);

  useEffect(() => {
    window.onscroll = () =>
      window.scrollY > 120 ? setIsFixedNav(true) : setIsFixedNav(false);
  }, []);
  return (
    <section
      className={clsx(
        "bg-white flex items-center justify-between px-2 w-full",
        {
          "fixed top-0 left-0 shadow z-40": isFixedNav,
        }
      )}
    >
      <Link href="/">
        <Image src={Logo} alt="Bambi" />
      </Link>

      <ul className=" max-md:hidden flex justify-center items-center gap-2">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/shop">Shop</NavLink>
        <NavLink href="/faq">Faqs</NavLink>
        <NavLink href="#" array={pagesArray}>
          Pages
        </NavLink>
      </ul>

      <div className="flex items-center justify-center">
        <React.Suspense>
          <Search />
        </React.Suspense>

        <BamLink href="/dashboard" className="" variant="ghost">
          <BamIcon Icon={UserCircleIcon} size="med" />
        </BamLink>

        <BamLink href="/wishlist" variant="ghost" className="">
          <BamIcon Icon={HeartIcon} size="med" />
        </BamLink>

        <button
          className="relative mx-2 hover:text-primary"
          onClick={() => setIsCartClicked(true)}
        >
          <BamIcon Icon={ShoppingCartIcon} size="med" />
          {totalItems > 0 && (
            <span
              key={totalItems}
              className="absolute -top-1 -right-0.5 bg-primary text-white rounded-full size-4 text-xs grid place-items-center transition-all duration-500"
            >
              {totalItems}
            </span>
          )}
        </button>

        <button
          className="md:hidden mr-1"
          onClick={() => setIsMenuClicked(true)}
        >
          <BamIcon Icon={BiMenu} size="big" className="hover:text-primary" />
        </button>
      </div>
    </section>
  );
}
