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
    <section className="w-full p-3 bg-primary">
      <div className="breadcrumb-content">
        <ul className="flex gap-2 items-center text-white text-sm">
          <li>
            <Link href="/" className="hover:text-white text-secondary">
              <BamIcon Icon={HomeIcon} size="med" />
            </Link>
          </li>
          {array &&
            array?.map(({ title, href }, index) => (
              <Link href={href} key={index}>
                {title}
              </Link>
            ))}
          <li className="active"> {active}</li>
        </ul>
      </div>
    </section>
  );
}
