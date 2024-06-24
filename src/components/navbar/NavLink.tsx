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
          className={clsx("text-sm  space-y-3 transition-all duration-500", {
            "h-full peer-focus:h-full group-hover:h-full peer-focus:mt-2 group-hover:mt-2 px-3 overflow-hidden ":
              mobile,
            "absolute left-0 w-[200px] min-h-full peer-focus:min-h-full group-hover:min-h-full overflow-hidden peer-focus:overflow-visible group-hover:overflow-visible peer-focus:mt-8 group-hover:mt-8 opacity-0 peer-focus:opacity-100 group-hover:opacity-100 divide-y divide-gray-200 bg-white border border-gray-200 rounded":
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
