"use client";

import React, { Suspense } from "react";
import Search from "../Search";
import { pagesArray } from "@/lib/navData";
import NavLink from "./NavLink";
import Link from "next/link";
import {
  BsClock,
  BsLinkedin,
  BsPhone,
  BsTwitter,
  BsVimeo,
  BsYoutube,
} from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { useGlobalContext } from "@/context/store";
import clsx from "clsx";
import { FaFacebook } from "react-icons/fa";

export default function MenuSideNav() {
  const { setIsMenuClicked, isMenuClicked } = useGlobalContext();
  return (
    <section
      className={clsx(
        "lg:hidden fixed top-0 left-0 h-screen w-screen  flex transition-all duration-500",
        {
          "bg-black/35 z-[200]": isMenuClicked,
          "opacity-0 -z-30": !isMenuClicked,
        }
      )}
    >
      <div
        className="h-screen w-full"
        onClick={() => setIsMenuClicked(false)}
      />

      <div
        className={clsx("relative flex", {
          "translate-x-full opacity-0": !isMenuClicked,
        })}
      >
        <div
          className="top-0 -left-12 bg-primary size-10 text-2xl text-white grid place-items-center active:scale-95 transition-all duration-300 shrink-0"
          onClick={() => setIsMenuClicked(false)}
        >
          <button className=" transition-all duration-500 hover:rotate-180 ">
            X
          </button>
        </div>
        <aside
          className={clsx(
            "w-full max-w-[300px] xs:max-w-[320px] sm:max-w-[350px] shrink-0 relative h-screen overflow-y-auto  p-2 xs:p-4 py-6 bg-white transition-all duration-300"
          )}
        >
          <div className="space-y-10 px-2">
            <Suspense>
              <Search variant="mobile-view" />
            </Suspense>

            <ul className="space-y-6 px-0.5 font-semibold">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/shop">Shop</NavLink>
              <NavLink href="/faq">Faqs</NavLink>
              <NavLink href="#" array={pagesArray} mobile>
                Pages
              </NavLink>
            </ul>

            <div className="space-y-1">
              <MenuDropDown title="Language" placeholder="English" />
              <MenuDropDown
                title="Currency"
                placeholder="USD"
                //   array={["USD", "NGN"]}
              />
            </div>

            <address className="font-semibold">
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
              <MenuAddress
                Icon={BsClock}
                title="Monday - Sunday 9.00 - 18.00"
              />
            </address>

            <div className="flex items-center gap-2.5">
              <IconLink href="https://facebook.com/" Icon={FaFacebook} />
              <IconLink href="https://x.com" Icon={BsTwitter} />
              <IconLink href="https://linkedin.com/" Icon={BsLinkedin} />
              <IconLink href="https://youtube.com/" Icon={BsYoutube} />
              <IconLink href="https://vimeo.com/" Icon={BsVimeo} />
            </div>
          </div>
        </aside>
      </div>
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
  <p className="flex gap-2 ">
    <Icon className="size-5" />
    {href ? (
      <Link href={href} className="hover:text-primary">
        {title}
      </Link>
    ) : (
      <span>{title}</span>
    )}
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

const IconLink = ({
  href,
  Icon,
}: {
  href: string;
  Icon: React.ElementType;
}) => (
  <a href={href} target="__blank" className="hover:text-primary">
    <Icon className="size-6 xs:size-4" />
  </a>
);
