"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import BamIcon from "../Icon";
import BamLink from "../BamLink";

export default function NavBanner() {
  const [showBanner, setShowBanner] = React.useState(true);
  return (
    <>
      {showBanner && (
        <div className=" bg-secondary p-2 text-white text-sm sm:text-base">
          <div className="container mx-auto flex items-center justify-center gap-4">
            <p className="text-center w-10/12 leading-[2.3] p-2">
              Get 25% off any product from <strong>1st to 31st July</strong> Use
              Promo Code: LAUNCH SALES &nbsp;
              <BamLink href="/shop" className="text-nowrap">
                Shop Now
              </BamLink>
            </p>

            <button
              className="border hover:border-primary hover:text-primary transition-colors duration-300"
              onClick={() => setShowBanner(false)}
            >
              <BamIcon Icon={XMarkIcon} size="sm" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
