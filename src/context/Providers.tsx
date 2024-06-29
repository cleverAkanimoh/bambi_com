"use client";

import { GlobalContextProvider } from "@/context/store";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), [loaded]);

  if (!loaded) return null;

  return <GlobalContextProvider>{children}</GlobalContextProvider>;
}
