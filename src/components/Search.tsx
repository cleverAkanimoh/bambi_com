"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import BamIcon from "./Icon";
import { BiSearch } from "react-icons/bi";

export default function Search({
  variant = "on-canvas",
}: {
  variant?: "on-canvas" | "mobile-view";
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set("search", term) : params.delete("search");
    params.has("currentPage")
      ? params.set("currentPage", "1")
      : params.delete("currentPage");
    // if (params.has("filterby")) params.delete("filterby");
    replace(`shop?${params.toString()}`, { scroll: false });
  }, 600);
  return (
    <div
      className={`${
        variant === "on-canvas" ? "max-lg:hidden " : ""
      } relative w-full flex items-center`}
    >
      <input
        name="search"
        placeholder={
          variant === "on-canvas" ? "Search our store" : "Search Product..."
        }
        className=" placeholder:text-gray-600 bg-gray-200/80 w-full max-w-md shrink-0 p-3 text-[0.96rem] text-gray-600 md:p-2 md:rounded-md focus-within:border-primary"
        onChange={(e) => handleSearch(e.target.value)}
        required
      />
      {
        <button className="absolute right-2 text-gray-500">
          <BamIcon Icon={BiSearch} size="sm" />
        </button>
      }
    </div>
  );
}
