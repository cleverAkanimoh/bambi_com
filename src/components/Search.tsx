"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Search({
  variant = "on-canvas",
}: {
  variant?: "off-canvas" | "on-canvas" | "mobile-view";
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
      className={
        variant === "on-canvas"
          ? "search-bar d-xl-flex d-none position-relative md:!min-w-32"
          : variant === "mobile-view"
          ? "bg-gray-200/80 w-full p-2 text-[0.96rem] text-gray-600 flex"
          : "offcanvas-search-form"
      }
    >
      <input
        type="search"
        name="search"
        placeholder={
          variant === "on-canvas" ? "Search our store" : "Search Product..."
        }
        className={
          variant === "on-canvas"
            ? "search-bar-input"
            : variant === "mobile-view"
            ? " placeholder:text-gray-600 flex-1 block"
            : "offcanvas-search-input"
        }
        onChange={(e) => handleSearch(e.target.value)}
        required
      />
      {variant !== "off-canvas" && (
        <button className="search-bar-button">
          <i className="pe-7s-search"></i>
        </button>
      )}
    </div>
  );
}
