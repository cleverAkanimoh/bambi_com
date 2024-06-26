import React from "react";
import Search from "../Search";

import BamIcon from "../Icon";
import { HeartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import BamLink from "../BamLink";
import MainNavClient from "./MainNavClient";
import OffCartButton from "./OffCartButton";
import MenuButton from "./MenuButton";
import { getCurrentUserCartItems } from "@/helpers/cart";

export default async function MainNav() {
  const totalItems = await getCurrentUserCartItems();

  return (
    <MainNavClient>
      <div className="flex items-center justify-center xs:gap-2 pr-1">
        <React.Suspense>
          <Search />
        </React.Suspense>

        <BamLink href="/dashboard" className="" variant="ghost">
          <BamIcon Icon={UserCircleIcon} size="med" />
        </BamLink>

        <BamLink href="/wishlist" variant="ghost" className="" title="Wishlist">
          <BamIcon Icon={HeartIcon} size="med" />
          <span className="max-lg:sr-only">Wishlist</span>
        </BamLink>

        <OffCartButton totalItems={totalItems?.length ?? 0} />

        <MenuButton />
      </div>
    </MainNavClient>
  );
}
