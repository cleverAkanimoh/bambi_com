"use client";

import React, { useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { toast } from "react-toastify";

export default function LogoutButton() {
  const [pending, setPending] = useState(false);

  const handleLogOut = async () => {
    try {
      setPending(true);
      const response = await fetch(`/api/logout`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.ok) {
        toast.info("You are successfully logged out");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Logout failed");
      }
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
