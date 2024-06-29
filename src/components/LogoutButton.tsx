"use client";

import React, { useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { toast } from "react-toastify";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const [pending, setPending] = useState(false);

  const handleLogOut = async () => {
    try {
      setPending(true);
      await signOut({ callbackUrl: '/' }); // Optionally redirect to the homepage after logout
      toast.info("You are successfully logged out");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <button
      className="uppercase font-semibold border-0 border-none flex items-center gap-2 hover:text-red-500 disabled:text-gray-300 p-3"
      disabled={pending}
      onClick={handleLogOut}
    >
      {pending ? <BiRefresh className="animate-spin" /> : <TbLogout />}
      <span>{pending ? "Logging you out" : "Logout"}</span>
    </button>
  );
}
