"use client";
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import AdsNavbar from "@/components/AdsNavbar";
import CenterNav from "@/components/CenterNav";
import DynamicNavbar from "@/components/Navbar";
import DynamicFooter from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { metadata } from "./layoutWithMetadata";

// Dynamically load components that are not required on every page
// const DynamicNavbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
// const DynamicFooter = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Conditions to hide Navbar, Footer, and CenterNav based on the path
  const noFooterPaths = ["/admin", "/assesment", "/thankyou", "/auth"];
  const noNavbarPaths = ["/ads", "/auth"];
  const centerNav = ["/tests"];
  const zeroNav = ["/thankyou"];
  const shouldHideFooter = noFooterPaths.some((path) => pathname.startsWith(path));
  const shouldHideNavbar = noNavbarPaths.some((path) => pathname.startsWith(path));
  const hideZeroNavbar = zeroNav.some((path) => pathname.startsWith(path));
  const hideCenterNavbar = centerNav.some((path) => pathname.startsWith(path));

  // const getTitle = () => {
  //   if (pathname === "/admin") return "Admin Panel";
  //   if (pathname === "/assesment") return "Assessment";
  //   return metadata.title || "Mindful TMS"; // Default title from metadata
  // };

  return (
    <html lang="en">
      <head>
        {/* <title>Mindful TMS</title> */}
        <link rel="icon" href={`/icons/mindLogo.png`} />

        {/* Preload important font for better performance */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
          as="style"
          crossOrigin="anonymous"
        />

        {/* Load necessary scripts in async or defer mode */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11458426933"></script>
        <script defer
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11458426933');
            `,
          }}
        />

        <script async src={`https://www.googletagmanager.com/gtm.js?id=GTM-5HDDPXG`}></script>
        <script defer src="https://cdn-in.pagesense.io/js/rangsonshealthcaresolutionspvtltd/67af7e7b39754527a4a1201d246c8524.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0QBSV5K5FL"></script>
        <script defer
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0QBSV5K5FL');
            `,
          }}
        />

 
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5HDDPXG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Conditionally render Navbar based on the pathname */}
        {hideCenterNavbar ? (
          <CenterNav />
        ) : shouldHideNavbar ? (
          <AdsNavbar />
        ) : hideZeroNavbar ? null : (
          <DynamicNavbar />
        )}

        <Toaster position="top-right" />
        {children}

        {/* Conditionally render Footer based on the pathname */}
        {!shouldHideFooter && <DynamicFooter />}
      </body>
    </html>
  );
}
