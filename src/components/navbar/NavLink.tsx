"use client";

import clsx from "clsx";
import Link from "next/link";
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
  return (
    <li className={array ? "has-children" : ""}>
      {mobile ? (
        <button className="peer inline">
          {children} <i className="fa fa-angle-down"></i>
        </button>
      ) : (
        <Link href={href} className="hover:text-primary">
          {children} {array && <i className="fa fa-angle-down"></i>}
        </Link>
      )}
      {array && (
        <ul
          className={clsx("sub-menu", {
            "h-0 peer-focus:h-full opacity-0 peer-focus:opacity-100 peer-focus:mt-2 overflow-hidden transition-all duration-300 text-sm peer-focus:px-2 space-y-2":
              mobile,
          })}
        >
          {array.map(({ title, href }, index) => (
            <li key={index}>
              <Link href={href ?? title} className="hover:text-primary">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
