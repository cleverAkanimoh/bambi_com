"use client";

import { logOutUserAction } from "@/actions/authenticate";
import React from "react";
import { useFormStatus } from "react-dom";
import { TbLogout } from "react-icons/tb";

export default function LogoutButton() {
  const { pending } = useFormStatus();
  return (
    <form action={logOutUserAction}>
      <button
        className="uppercase font-semibold border-0 border-none flex items-center gap-2 hover:text-red-500 disabled:text-gray-400 p-3"
        disabled={pending}
      >
        <TbLogout />
        <span>{pending ? "Logging you out" : "Logout"}</span>
      </button>
    </form>
  );
}
