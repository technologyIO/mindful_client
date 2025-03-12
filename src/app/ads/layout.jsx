"use client"
import React, { useEffect, useState } from 'react'
const layout = ({ children }) => {

    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
    return (
        <>

            <head>
                {/* <title>Find the Best Psychologists Near You | Mindful TMS</title> */}
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="Looking for experienced psychologists? Mindful TMS connects you with top-rated psychologists for therapy, counseling, and mental health support. Book a session today!" />
                <meta name="keywords" content="psychologist, mental health, therapy, counseling, depression treatment, anxiety help, Mindful TMS, best psychologists near me" />
                <meta name="author" content="Mindful TMS" />
                <meta property="og:title" content="Find the Best Psychologists Near You | Mindful TMS" />
                <meta property="og:description" content="Connect with top-rated psychologists for therapy, counseling, and mental health support. Book a session with Mindful TMS today!" />
                <meta property="og:url" content="https://mindfultms.in/ads/psychologist/hb" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://mindfultms.in/assets/images/psychologist-banner.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Find the Best Psychologists Near You | Mindful TMS" />
                <meta name="twitter:description" content="Get expert therapy and counseling from experienced psychologists. Improve your mental well-being with Mindful TMS." />
                <meta name="twitter:image" content="https://mindfultms.in/assets/images/psychologist-banner.jpg" />
            </head>
            {children}
        </>
    )
}

export default layout