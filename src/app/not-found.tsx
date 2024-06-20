import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FcBrokenLink } from "react-icons/fc";

export const metadata: Metadata = {
  title: "Bambi | 404 - page not found",
};

export default function NotFound() {
  return (
    <section className="min-h-[50svh] p-3 flex flex-col items-center justify-center gap-6">
      <FcBrokenLink className="size-36 text-gray-400" />
      <h1 className="text-4xl font-extrabold px-4 text-center">
        Oops, 404 Error - Page not Found
      </h1>
      <p className="px-2 text-center font-medium max-w-[420px]">
        The page you requested for {"doesn't"} exist or has been moved to a new
        route.
      </p>
      <div className="space-x-4">
        <Link
          href={"/"}
          className="hover:underline text-gray-400 hover:text-black"
        >
          Go back home
        </Link>

        <Link href={"/shop"} className="hover:underline text-primary">
          Go to shop
        </Link>
      </div>
    </section>
  );
}
