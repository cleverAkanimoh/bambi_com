"use client";

import { useGlobalContext } from "@/context/store";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import BamIcon from "../Icon";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function NavLink({
  href,
  children,
  array,
  mobile,
}: {
  href: string;
  array?: {
    title: string;
    href?: string;
  }[];
  children: React.ReactNode;
  mobile?: boolean;
}) {
  const { setIsMenuClicked } = useGlobalContext();
  const pathname = usePathname();
  return (
    <li className={array ? "relative group" : ""}>
      {array ? (
        <button className="peer">
          {children}{" "}
          <BamIcon Icon={ChevronDownIcon} size="sm" className="inline" />
        </button>
      ) : (
        <Link
          href={href}
          onClick={() => setIsMenuClicked(false)}
          className={clsx("hover:text-primary", {
            "text-primary  font-medium": pathname === href,
          })}
        >
          {children}
        </Link>
      )}
      {array && (
        <ul
          className={clsx("", {
            "h-full peer-focus:h-full group-hover:h-full peer-focus:mt-2 group-hover:mt-2 overflow-hidden transition-all duration-500 text-sm px-3 space-y-3":
              mobile,
            "absolute left-0 w-[200px]  min-h-full peer-focus:min-h-full group-hover:min-h-full overflow-hidden peer-focus:mt-8 group-hover:mt-8 transition-all duration-500 text-sm space-y-3 divide-y divide-gray-300 bg-white border rounded":
              array && !mobile,
          })}
        >
          {array.map(({ title, href }, index) => (
            <li key={index} className="pt-3 px-4">
              <Link
                href={href ?? title}
                className={clsx("hover:text-primary", {
                  "font-light hover:pl-2": mobile,
                  "text-primary  font-medium": pathname === href,
                  "mt-3": array && !mobile,
                })}
                onClick={() => setIsMenuClicked(false)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
