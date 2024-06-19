import React from "react";

export default function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className="p-2 min-w-10 min-h-10 text-xl bg-white hover:!bg-primary  hover:text-white rounded-md transition-all duration-300 active:scale-95 flex items-center justify-center"
    >
      {props.children}
    </button>
  );
}
