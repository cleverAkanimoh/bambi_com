import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Vendor CSS (Icon Font)
import "./css/vendor/fontawesome.min.css";
import "./css/vendor/pe-icon-7-stroke.min.css";

// Plugins style
import "./css/plugins/aos.min.css";
import "./css/plugins/swiper-bundle.min.css";
import "./css/plugins/animate.min.css";
import "./css/plugins/nice-select.min.css";
import "./css/style.css";
// import "./css/plugins/lightgallery.min.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bambi",
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
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
