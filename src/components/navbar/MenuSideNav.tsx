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
import BamIcon from "../Icon";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function MenuSideNav() {
  const { setIsMenuClicked, isMenuClicked } = useGlobalContext();
  return (
    <section
      className={clsx(
        "lg:hidden fixed top-0 right-0 h-screen w-full flex max-xs:flex-col transition-all duration-500",
        {
          "bg-black/35 z-[200] visible": isMenuClicked,
          "opacity-0 invisible -z-30": !isMenuClicked,
        }
      )}
    >
      <div
        className="h-screen xs:w-full"
        onClick={() => setIsMenuClicked(false)}
      />

      <div
        className={clsx("w-full flex transition-all duration-500", {
          "translate-x-0 opacity-100 visible": isMenuClicked,
          "translate-x-full opacity-0 invisible": !isMenuClicked,
        })}
      >
        <div onClick={() => setIsMenuClicked(false)} className="">
          <button className="bg-primary size-10 text-white grid place-items-center">
            <BamIcon
              Icon={XMarkIcon}
              size="big"
              className="hover:rotate-90 transition-all duration-500"
            />
          </button>
        </div>
        <aside
          className={clsx(
            "w-full xs:min-w-[320px]  h-screen overflow-y-auto p-2 xs:p-4 py-8 bg-white"
          )}
        >
          <div className="space-y-10 px-2 w-full">
            <Suspense>
              <Search variant="mobile-view" />
            </Suspense>

            <ul className="space-y-6 px-0.5 font-medium">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/shop">Shop</NavLink>
              <NavLink href="/faq">Faqs</NavLink>
              <NavLink href="#" array={pagesArray} mobile>
                Pages
              </NavLink>
            </ul>

            <div className="space-y-3">
              <MenuDropDown title="Language" placeholder="English" />
              <MenuDropDown
                title="Currency"
                placeholder="USD"
                //   array={["USD", "NGN"]}
              />
            </div>

            <aside className="font-semibold flex flex-col gap-y-4 w-full shrink-0">
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
            </aside>

            <div className="flex items-center gap-2.5 pb-10">
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
  <p className="flex gap-3">
    <Icon className="size-6" />
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
  <div className="flex items-center gap-2 xs:text-sm">
    <span>{title}:</span>
    <div>
      <label htmlFor="title">
        {placeholder} {array && "v"}
      </label>
      <input type="checkbox" id={title} className="hidden" />

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
    <Icon className="size-7 xs:size-5" />
  </a>
);
