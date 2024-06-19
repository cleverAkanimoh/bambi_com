"use client";

import React from "react";
import Search from "../Search";
import { pagesArray } from "@/lib/navData";
import NavLink from "./NavLink";
import Link from "next/link";
import { BsClock, BsPhone } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";

export default function MenuSideNav() {
  return (
    <section className="lg:hidden fixed h-screen w-screen bg-black/20 z-50">
      <div className="h-screen bg-black" />

      <aside className="w-[250px] xs:w-[320px] h-screen p-2 xs:p-4">
        <button>X</button>

        <div>
          <Search variant="off-canvas" />

          <ul className="">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/faq">Faqs</NavLink>
            <NavLink href="/faq" array={pagesArray}>
              Pages
            </NavLink>
          </ul>

          <div>
            <MenuDropDown title="Language" placeholder="English" />
            <MenuDropDown
              title="Currency"
              placeholder="USD"
              array={["USD", "NGN"]}
            />
          </div>

          <address>
            <MenuAddress
              Icon={BsPhone}
              href="tel:+012 3456 789"
              title="+012 3456 789"
            />
            <MenuAddress
              Icon={BiMailSend}
              href="mailto:info@example.com"
              title="info@example.com"
            />
            <MenuAddress Icon={BsClock} title="Monday - Sunday 9.00 - 18.00" />
          </address>

          <div></div>
        </div>
      </aside>
    </section>
  );
}

const MenuAddress = ({
  Icon,
  href,
  title,
}: {
  Icon: React.ElementType;
  href?: string;
  title: string;
}) => (
  <p className="flex gap-2">
    <Icon className="size-5" />
    {href ? <Link href={href}>{title}</Link> : <span>{title}</span>}
  </p>
);

const MenuDropDown = ({
  title,
  array,
  placeholder,
}: {
  title: string;
  placeholder: string;
  array?: string[];
}) => (
  <div className="flex items-center gap-2">
    <span>{title}:</span>
    <div>
      <label htmlFor="title">
        {placeholder} {array && "v"}
      </label>
      <input type="checkbox" id={title} />

      {array && (
        <div className="border">
          {array.map((text, index) => (
            <button key={index}>{text} </button>
          ))}
        </div>
      )}
    </div>
  </div>
);
