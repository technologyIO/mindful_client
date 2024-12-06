"use client";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import AdsNavbar from "@/components/AdsNavbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { metadata } from "./layoutWithMetadata";  // Import the metadata file

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noFooterPaths = ["/admin", "/assesment", "/thankyou", "/auth"];
  const noNavbarPaths = ["/ads", "/auth"];
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
        <script
          async
          src={`https://www.googletagmanager.com/gtm.js?id=GTM-5HDDPXG`}
        ></script>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11458426933"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'AW-11458426933');
                        `,
                    }}
                /> */}
      </head>
      <body className={inter.className}>
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
