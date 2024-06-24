import type { Metadata } from "next";
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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Bambi",
    default: "Welcome to Bambi",
  },
  description: "Bambi - Find your next adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>
          <React.Suspense>
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
          </React.Suspense>
        </Providers>
      </body>
    </html>
  );
}
