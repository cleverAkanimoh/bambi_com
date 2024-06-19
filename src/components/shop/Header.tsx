"use client";

import React from "react";
import Button from "../Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import { CiGrid31 } from "react-icons/ci";
import clsx from "clsx";

export default function Header() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const sortBy = searchParams.get("sort_by") ?? undefined;

  const active = searchParams.get("view") ?? "grid";

  const handleSelect = (term?: string) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set("sort_by", term) : params.delete("sort_by");
    params.has("currentPage")
      ? params.set("currentPage", "1")
      : params.delete("currentPage");

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <header className="flex items-center justify-between py-4 px-3">
      <div className="flex border rounded-md divide-x shop_toolbar_btn">
        <ViewButton Icon={CiGrid31} view="grid" role="grid_4" />
        <ViewButton Icon={BiMenu} view="list" role="grid_list" />
      </div>
      <aside className="flex flex-wrap gap-4">
        <span>Showing 1-12 of 39 results</span>

        <select className="" onChange={(e) => handleSelect(e.target.value)}>
          <option selected value="">
            Sort by Default
          </option>
          <option value="popularity">Sort by Popularity</option>
          <option value="rated">Sort by Rated</option>
          <option value="latest">Sort by Latest</option>
          <option value="price">Sort by Price</option>
        </select>
      </aside>
    </header>
  );
}

const ViewButton = ({
  Icon,
  view = "grid",
  role,
}: {
  Icon: React.ElementType;
  view: "grid" | "list";
  role: string;
}) => {
  return (
    <Button
      className={clsx("", {})}
      data-role={role}
      title={`Display ${view}`}
    >
      <Icon className="size-5 md:size-7" />
    </Button>
  );
};
