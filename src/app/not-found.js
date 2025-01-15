"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const [countdown, setCountdown] = useState(5); // Initialize countdown to 3 seconds
  const router = useRouter();

  useEffect(() => {
    if (countdown === 0) {
      router.push("/"); // Redirect to the homepage after 3 seconds
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Clean up timer
  }, [countdown, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-xl mb-4">Oops! The page you're looking for does not exist.</p>
        <p className="text-lg">
          Redirecting to the homepage in <span className="font-bold">{countdown}</span> seconds...
        </p>
      </div>
    </div>
  );
};

export default NotFound;
