"use client";

import React from "react";
import Button from "../Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import { CiGrid31 } from "react-icons/ci";
import clsx from "clsx";

export default function Header({
  postPerPage,
  totalPages,
}: {
  postPerPage: number;
  totalPages: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelect = (term?: string) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set("sort_by", term) : params.delete("sort_by");

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <header className="flex items-center justify-between py-4 px-3 w-full">
      <div className="flex border rounded-md divide-x shop_toolbar_btn">
        <ViewButton Icon={CiGrid31} view="grid" role="grid_4" />
        <ViewButton Icon={BiMenu} view="list" role="grid_list" />
      </div>
      <aside className="flex flex-wrap-reverse justify-end gap-x-4 gap-y-1 w-fit">
        <span className="text-primary">
          {totalPages > 0 &&
            `Showing 1-${postPerPage} of ${totalPages} results`}
        </span>

        <select
          className=""
          onChange={(e) => handleSelect(e.target.value)}
          defaultValue=""
        >
          <option value="">Sort by Default</option>
          <option value="popular">Sort by popular</option>
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
    <Button className={clsx("", {})} data-role={role} title={`Display ${view}`}>
      <Icon className="size-5 md:size-7" />
    </Button>
  );
};
