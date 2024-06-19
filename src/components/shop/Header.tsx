"use client";

import React from "react";
import Button from "../Button";
import { useRouter, useSearchParams } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import { CiGrid31 } from "react-icons/ci";
import clsx from "clsx";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-3">
      <div className="flex border rounded-md divide-x">
        <ViewButton Icon={CiGrid31} view="grid" />
        <ViewButton Icon={BiMenu} view="list" />
      </div>
      <div className="">
        <span>Showing 1-12 of 39 results</span>
      </div>
    </header>
  );
}

const ViewButton = ({
  Icon,
  view = "grid",
}: {
  Icon: React.ElementType;
  view: "grid" | "list";
}) => {
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const active = searchParams.get("view") ?? "grid";
  //   console.log(active);

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
