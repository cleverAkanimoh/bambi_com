import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface AnchorProps extends React.ComponentProps<"a"> {
  href: string;
  variant?: "solid" | "outline" | "ghost";
}

export default function BamLink({
  href,
  children,
  className,
  variant = "solid",
  ...rest
}: AnchorProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "transition-all duration-300 p-2 hover:rounded text-sm shrink-0",
        className,
        {
          "hover:bg-black bg-primary text-white": variant === "solid",
          "border border-primary hover:border-black": variant === "outline",
          "text-gray-500 hover:text-primary": variant === "ghost",
        }
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
