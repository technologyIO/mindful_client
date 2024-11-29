"use client";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import Head from "next/head"; // Import Head from next/head
import AdsNavbar from "@/components/AdsNavbar";
const inter = Inter({ subsets: ["latin"] });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current route path

  const noFooterPaths = ["/admin", "/assesment", "/thankyou"];
  const noNavbarPaths = ["/ads", ];
  const zeroNav = ["/thankyou"];
  const shouldHideFooter = noFooterPaths.some((path) => pathname.startsWith(path));
  const shouldHideNavbar = noNavbarPaths.some((path) => pathname.startsWith(path));
  const hideZeroNavbar = zeroNav.some((path) => pathname.startsWith(path));
  // Set dynamic title based on the path or other conditions
  const getTitle = () => {
    if (pathname === "/admin") return "Admin Panel";
    if (pathname === "/assesment") return "Assessment";
    return "mindful TMS"; // Default title
  };

  return (
    <html lang="en">
      <Head>
        <title>{getTitle()}</title>
      </Head>
      <body className={inter.className}>
     {  shouldHideNavbar?<AdsNavbar/>:  hideZeroNavbar ? null : <Navbar />}
        <Toaster position="top-right" />
        {children}
        {!shouldHideFooter && <Footer />}
      </body>
    </html>
  );
}
