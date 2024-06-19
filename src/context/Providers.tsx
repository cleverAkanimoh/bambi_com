"use client";

import { GlobalContextProvider } from "@/context/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
}
