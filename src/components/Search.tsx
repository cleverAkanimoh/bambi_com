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
        variant === "on-canvas" ? "max-lg:hidden" : ""
      } relative w-full flex items-center`}
    >
      <input
        name="search"
        placeholder={
          variant === "on-canvas" ? "Search our store" : "Search Product..."
        }
        className="peer placeholder:text-gray-600 bg-gray-100/70 w-full max-w-md shrink-0 p-3 pr-4 indent-2 text-[0.96rem] text-gray-700 md:p-2 rounded-sm md:rounded-xl focus:outline-none focus:ring-1 focus:ring-primary ring-offset-3 xs:placeholder:text-sm"
        onChange={(e) => handleSearch(e.target.value)}
        required
      />

      <button className="absolute right-3 text-gray-400 xs:peer-focus-within:text-primary/70">
        <BamIcon Icon={BiSearch} size="sm" />
      </button>
    </div>
  );
}
