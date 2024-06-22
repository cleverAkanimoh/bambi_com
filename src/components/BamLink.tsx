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
      className={clsx("transition-all duration-300 p-2", className, {
        "hover:bg-black bg-primary": variant === "solid",
        "border border-primary hover:border-black": variant === "outline",
        "": variant === "ghost",
      })}
      {...rest}
    >
      {children}
    </Link>
  );
}
