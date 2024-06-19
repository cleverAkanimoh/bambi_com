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
      <div className="flex border rounded-md divide-x">
        <ViewButton Icon={CiGrid31} view="grid" active={active} />
        <ViewButton Icon={BiMenu} view="list" active={active} />
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
  active = "grid",
}: {
  Icon: React.ElementType;
  view: "grid" | "list";
  active: string;
}) => {
  const { push } = useRouter();

  return (
    <Button
      className={clsx("", {
        "pointer-events-none !bg-primary !text-white": active === view,
      })}
      title={`Display ${view}`}
      onClick={() => push(`?view=${view}`)}
    >
      <Icon className="size-5 md:size-7" />
    </Button>
  );
};
