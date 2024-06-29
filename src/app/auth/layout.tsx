import { getCurrentUser } from "@/lib/prismaHelpers";
import { notFound, redirect } from "next/navigation";
import React from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (user) redirect("/");
  return <div>{children}</div>;
}
