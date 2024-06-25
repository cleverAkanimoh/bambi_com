"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import BamIcon from "../Icon";
import { useGlobalContext } from "@/context/store";

export default function OffCartButton({ totalItems }: { totalItems: number }) {
  const { setIsCartClicked } = useGlobalContext();
  return (
    <button
      className="relative mx-2 hover:text-primary"
      onClick={() => setIsCartClicked(true)}
      title="Cart"
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
  );
}
