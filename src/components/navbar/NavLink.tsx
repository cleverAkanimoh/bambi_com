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
  className,
  dashboard,
}: {
  href: string;
  className?: string;
  array?: {
    title: string;
    href?: string;
  }[];
  children: React.ReactNode;
  mobile?: boolean;
  dashboard?: boolean;
}) {
  const { setIsMenuClicked } = useGlobalContext();
  const pathname = usePathname();
  return (
    <li className={array ? "relative group z-20" : ""}>
      {array ? (
        <button className="peer lg:h-14">
          {children}{" "}
          <BamIcon Icon={ChevronDownIcon} size="sm" className="inline" />
        </button>
      ) : (
        <Link
          href={href}
          onClick={() => setIsMenuClicked(false)}
          className={clsx(
            "hover:text-primary transition-all duration-300",
            className,
            {
              "text-primary  font-medium pointer-events-none":
                pathname === href,
              "bg-primary  text-white": pathname === href && dashboard,
              "": dashboard,
            }
          )}
        >
          {children}
        </Link>
      )}
      {array && (
        <ul
          className={clsx(
            "text-sm z-20  space-y-3 transition-all duration-500",
            {
              "h-0 peer-focus:h-full group-hover:h-full peer-focus:mt-2 group-hover:mt-2 px-3 overflow-hidden ":
                mobile,
              "absolute left-0 w-[200px] z-20 h-0 group-hover:h-fit peer-focus:h-fit overflow-hidden opacity-0 peer-focus:opacity-100 group-hover:opacity-100 divide-y divide-gray-200 bg-white border border-gray-200 rounded":
                array && !mobile,
            }
          )}
        >
          {array.map(({ title, href }, index) => (
            <li key={index} className="pt-3 z-20 last:pb-3 px-4">
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
