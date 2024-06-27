import React from "react";
import Search from "../Search";

import BamIcon from "../Icon";
import { HeartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import BamLink from "../BamLink";
import MainNavClient from "./MainNavClient";
import OffCartButton from "./OffCartButton";
import MenuButton from "./MenuButton";
import { getCurrentUserCartItems } from "@/helpers/cart";
import { getCurrentUser } from "@/lib/prismaHelpers";

export default async function MainNav() {
  const cartItems = await getCurrentUserCartItems();
  const user = await getCurrentUser()

const totalItems = cartItems?.reduce((prev, curr) => prev + curr?.quantity, 0) ??
    0;

  return (
    <MainNavClient>
      <div className="flex items-center justify-center xs:gap-2 pr-1">
        <React.Suspense>
          <Search />
        </React.Suspense>

        <BamLink href={user ? "/dashboard" : "/auth/login"} className="flex items-center gap-1" variant="ghost">
          <BamIcon className={`${!user && "hidden"}`} Icon={UserCircleIcon} size="med" />
          <span className={`${user && "max-lg:sr-only"}`}>{user ? "Dashboard" : "Login / Register"}</span>
        </BamLink>

        <BamLink href="/wishlist" variant="ghost" className="flex items-center gap-1" title="Wishlist">
          <BamIcon Icon={HeartIcon} size="med" />
          <span className="max-lg:sr-only">Wishlist</span>
        </BamLink>

        <OffCartButton totalItems={totalItems} />

        <MenuButton />
      </div>
    </MainNavClient>
  );
}
