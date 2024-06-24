"use client";

import { GlobalContextProvider } from "@/context/store";
import { AuthProvider } from "./auth-context";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), [loaded]);

  return (
    <GlobalContextProvider>
      <AuthProvider>{children}</AuthProvider>
    </GlobalContextProvider>
  );
}
