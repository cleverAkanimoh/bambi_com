"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
  const pathname = usePathname();
  return (
    <li className={array ? "has-children" : ""}>
      {mobile ? (
        <button className="peer inline">
          {children} <i className="fa fa-angle-down"></i>
        </button>
      ) : (
        <Link
          href={href}
          className={clsx("hover:text-primary", {
            "text-primary font-medium": pathname === href,
          })}
        >
          {children} {array && <i className="fa fa-angle-down"></i>}
        </Link>
      )}
      {array && (
        <ul
          className={clsx("sub-menu", {
            "h-0 peer-focus:h-full peer-focus:mt-2 overflow-hidden transition-all duration-500 text-sm px-3 space-y-3":
              mobile,
          })}
        >
          {array.map(({ title, href }, index) => (
            <li key={index}>
              <Link
                href={href ?? title}
                className={clsx("hover:text-primary", {
                  "font-light hover:pl-2": mobile,
                })}
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
