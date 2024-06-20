import React from "react";

export default function Loading({
  loadingText = "Loading page, Please wait...",
}: {
  loadingText?: string;
}) {
  return (
    <div className="min-h-[50vh] flex flex-col gap-4 items-center justify-center">
      <div className="size-16 border-8 border-t-primary border-primary/10 rounded-full animate-spin" />
      <span>{loadingText}</span>
    </div>
  );
}
