"use client";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import Head from "next/head";
import AdsNavbar from "@/components/AdsNavbar";
const inter = Inter({ subsets: ["latin"] });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RootLayout({ children }: { children: React.ReactNode })  {
  const pathname = usePathname();

  const noFooterPaths = ["/admin", "/assesment", "/thankyou"];
  const noNavbarPaths = ["/ads"];
  const zeroNav = ["/thankyou"];
  const shouldHideFooter = noFooterPaths.some((path) => pathname.startsWith(path));
  const shouldHideNavbar = noNavbarPaths.some((path) => pathname.startsWith(path));
  const hideZeroNavbar = zeroNav.some((path) => pathname.startsWith(path));

  const getTitle = () => {
    if (pathname === "/admin") return "Admin Panel";
    if (pathname === "/assesment") return "Assessment";
    return "Mindful TMS"; // Default title
  };

  return (
    <html lang="en">
      {/* Add GTM script to <head> */}
      <Head>
        <title>{getTitle()}</title>
        <GoogleTagManager gtmId="GTM-5HDDPXG" />
      </Head>
      <body className={inter.className}>
        {/* Add GTM noscript to <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5HDDPXG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {shouldHideNavbar ? <AdsNavbar /> : hideZeroNavbar ? null : <Navbar />}
        <Toaster position="top-right" />
        {children}
        {!shouldHideFooter && <Footer />}
      </body>
    </html>
  );
}
