// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { Providers } from "../context/Providers";
import { ToastContainer } from "react-toastify";
import "swiper/swiper-bundle.css";
import "swiper/css";
// import { SessionProvider } from "next-auth/react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/[...nextAuth]/route";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOptions);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* <SessionProvider session={session}> */}
          <Providers>
            <Navbar />
            {children}
            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={4000}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              hideProgressBar={false}
            />
          </Providers>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
