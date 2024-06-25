"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { ReactNode } from "react";
import BamIcon from "../Icon";
import { useGlobalContext } from "@/context/store";

export default function CartOffCanvasClient({
  children,
}: {
  children: ReactNode;
}) {
  const { isCartClicked, setIsCartClicked } = useGlobalContext();
  return (
    <section
      className={clsx(
        "fixed top-0 right-0 h-screen w-full flex max-xs:flex-col transition-all duration-500",
        {
          "bg-black/35 z-[200] visible": isCartClicked,
          "opacity-0 invisible -z-30": !isCartClicked,
        }
      )}
    >
      <div
        className="h-screen xs:w-full"
        onClick={() => setIsCartClicked(false)}
      />

      <div
        className={clsx("w-full xs:w-fit flex transition-all duration-500", {
          "translate-x-0 opacity-100 visible": isCartClicked,
          "translate-x-full opacity-0 invisible": !isCartClicked,
        })}
      >
        <div onClick={() => setIsCartClicked(false)}>
          <button className="bg-primary size-10 text-white grid place-items-center">
            <BamIcon
              Icon={XMarkIcon}
              size="big"
              className="hover:rotate-90 transition-all duration-500"
            />
          </button>
        </div>
        <aside
          className={clsx(
            "w-[250px] xs:min-w-[320px] max-w-[360px] grow shrink-0 relative h-screen overflow-y-auto p-2 xs:p-4 py-10 bg-white"
          )}
        >
          {children}
        </aside>
      </div>
    </section>
  );
}
