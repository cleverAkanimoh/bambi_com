"use client";

import Link from "next/link";
import React from "react";

export default function NavLink({
  href,
  children,
  array,
}: {
  href: string;
  array?: {
    title: string;
    href?: string;
  }[];
  children: React.ReactNode;
}) {
  return (
    <li className={array ? "has-children" : ""}>
      <Link href={href}>
        {children} {array && <i className="fa fa-angle-down"></i>}
      </Link>
      {array && (
        <ul className="sub-menu">
          {array.map(({ title, href }, index) => (
            <li key={index}>
              <Link href={href ?? title}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
