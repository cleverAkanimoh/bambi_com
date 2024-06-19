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
import Script from "next/script";
import { AuthProvider } from "@/context/auth-context";

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
      <AuthProvider>
        <Navbar />
        {children}

        <Footer />
        </AuthProvider>
        {/* <!-- Scripts --> */}
        {/* <!-- Global Vendor, plugins JS --> */}

        {/* <!-- Vendor JS --> */}

        <Script src="/js/vendor/popper.min.js" />
        <Script src="/js/vendor/bootstrap.min.js" />
        <Script src="/js/vendor/jquery-3.6.0.min.js" />
        <Script src="/js/vendor/jquery-migrate-3.3.2.min.js" />
        <Script src="/js/vendor/modernizr-3.11.2.min.js" />

        {/* <!-- Plugins JS --> */}

        <Script src="/js/plugins/aos.min.js" />
        <Script src="/js/plugins/jquery.ajaxchimp.min.js" />
        <Script src="/js/plugins/jquery-ui.min.js" />
        <Script src="/js/plugins/nice-select.min.js" />
        <Script src="/js/plugins/swiper-bundle.min.js" />
        <Script src="/js/plugins/countdown.min.js" />
        <Script src="/js/plugins/lightgallery-all.min.js" />

        {/* <!--Main JS--> */}
        <Script src="/js/main.js" />
      </body>
    </html>
  );
}
