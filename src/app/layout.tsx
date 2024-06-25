"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { Providers } from "../context/Providers";
import { ToastContainer } from "react-toastify";
import "swiper/swiper-bundle.css";
import "swiper/css";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Providers>
            <React.Suspense fallback={<Loading />}>
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
        </QueryClientProvider>
      </body>
    </html>
  );
}
