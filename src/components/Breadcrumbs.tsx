import Link from "next/link";
import React from "react";
import BamIcon from "./Icon";
import { HomeIcon } from "@heroicons/react/20/solid";

export default function Breadcrumbs({
  array,
  active,
}: {
  array?: { title: string; href: string }[];
  active: string;
}) {
  return (
    <section className="w-full p-3 py-4 bg-primary">
      <ul className="md:w-11/12 w-full mx-auto flex gap-2 items-center text-white text-sm">
        <li>
          <Link href="/" className="text-white hover:text-secondary">
            <BamIcon Icon={HomeIcon} size="sm" />
          </Link>
        </li>
        <span>/</span>
        {array &&
          array?.map(({ title, href }, index) => (
            <Link href={href} key={index}>
              {title} <span className="last:hidden">/</span>
            </Link>
          ))}
        <li className=""> {active}</li>
      </ul>
    </section>
  );
}
