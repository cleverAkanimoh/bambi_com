import clsx from "clsx";
import React from "react";

export default function BamIcon({
  Icon,
  size,
  className,
}: {
  Icon: React.ElementType;
  size?: "big" | "med" | "sm";
  className?: string;
}) {
  return (
    <Icon
      className={clsx("font-thin transition-all duration-300", className, {
        "size-8": size === "big",
        "size-6": size === "med",
        "size-4": size === "sm",
      })}
    />
  );
}
