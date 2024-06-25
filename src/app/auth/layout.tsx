import { getCurrentUser } from "@/lib/prismaHelpers";
import { notFound } from "next/navigation";
import React from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (user) return notFound();
  return <div>{children}</div>;
}
