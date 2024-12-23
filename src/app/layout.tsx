"use client";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'));
const Footer = dynamic(() => import('@/components/Footer'));
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import AdsNavbar from "@/components/AdsNavbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { metadata } from "./layoutWithMetadata";  // Import the metadata file

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noFooterPaths = ["/admin", "/assesment", "/thankyou", "/auth", ];
  const noNavbarPaths = ["/ads", "/auth", "/tests"];
  const zeroNav = ["/thankyou ,"];
  const shouldHideFooter = noFooterPaths.some((path) => pathname.startsWith(path));
  const shouldHideNavbar = noNavbarPaths.some((path) => pathname.startsWith(path));
  const hideZeroNavbar = zeroNav.some((path) => pathname.startsWith(path));

  const getTitle = () => {
    if (pathname === "/admin") return "Admin Panel";
    if (pathname === "/assesment") return "Assessment";
    return metadata.title; // Default title from metadata
  };

  return (
    <html lang="en">
      <head>
        
        <title>{getTitle()}</title>
        <link rel="icon" href={metadata.icons.icon} />
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
        <script
          async
          src={`https://www.googletagmanager.com/gtm.js?id=GTM-5HDDPXG`}
        ></script>
       <script defer src="https://cdn-in.pagesense.io/js/rangsonshealthcaresolutionspvtltd/67af7e7b39754527a4a1201d246c8524.js"></script>
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-0QBSV5K5FL"></script>
    <script
    defer
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0QBSV5K5FL');
        `,
      }}
    />
    <link 
      rel="preload" 
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" 
      as="style" 
      crossOrigin="anonymous" 
    />
      </head>
      <body >
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
