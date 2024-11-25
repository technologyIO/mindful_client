"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
const BackButton = () => {
    const router = useRouter();
  return (
    <div className="flex items-center space-x-3 p-4">
    <button
      onClick={() => router.back()} // Navigate to the previous page
      className="flex items-center text-primary-orange hover:text-orange-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span className="ml-2 text-lg font-medium">Back</span>
    </button>
  </div>
  )
}

export default BackButton