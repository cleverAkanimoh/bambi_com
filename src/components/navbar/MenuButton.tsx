"use client";
import React from "react";
import BamIcon from "../Icon";
import { BiMenu } from "react-icons/bi";
import { useGlobalContext } from "@/context/store";

export default function MenuButton() {
  const { setIsMenuClicked } = useGlobalContext();
  return (
    <button
      className="lg:hidden mr-1"
      title="Menu"
      onClick={() => setIsMenuClicked(true)}
    >
      <BamIcon Icon={BiMenu} size="big" className="hover:text-primary" />
    </button>
  );
}
