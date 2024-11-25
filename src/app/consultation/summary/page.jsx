"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const Summary = () => {
  const router = useRouter()
  return (
    <div className='select-none'>
            <div className=' p-5 flex items-center mb-6'>
                <div className='mr-4' onClick={() => router.back()}>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    // className="w-6 h-6"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold text-center ">Booking Summary</h1>

                </div>
            </div>
            <div className="max-w-md mx-auto p-3 px-5">

                <div className="bg-primary-div p-4 rounded-lg mb-4 flex justify-between items-center">
                    <div>
                        <p className="font-semibold">Aster CMI, Hebbal Bangalore</p>
                        <p className="text-sm text-muted-foreground">1hr | One on One</p>
                    </div>
                    <button className="text-primary-orange underline">Change</button>
                </div>
                <div className="bg-primary-div p-4 py-6 rounded-lg mb-8">
                    <p className="font-semibold text-lg">Dr. David Samson</p>
                    <p className="text-muted-foreground">20 June 2024</p>
                    <p className="text-muted-foreground">11:25 am - 12:25 pm</p>
                </div>
                <div className='flex items-center justify-center'>
                <p className="font-semibold mb-2">Please Enter Your Details</p>

                </div>
                <form>
                    <label className="block mb-2">
                        <span className="text-muted-foreground">Name *</span>
                        <input type="text" className="mt-1 outline-orange-300 border-orange-400 block w-full border  rounded p-3" required />
                    </label>
                    <label className="block mb-2">
                        <span className="text-muted-foreground">Email *</span>
                        <input type="email" className="mt-1 outline-orange-300 border-orange-400 block w-full border  rounded p-3" required />
                    </label>

                    <label className="block mb-4">
                        <span className="text-muted-foreground">Contact Number *</span>
                        <input type="tel" className="mt-1 outline-orange-300 border-orange-400 block w-full border  rounded p-3" placeholder="+91" required />
                    </label>
                    <div className='flex items-center justify-center'>

                        <button onClick={() => router.push("/consultation/confirmation")} type="submit" className=" font-bold p-4 bg-primary-orange text-white w-full rounded-lg">SCHEDULE APPOINTMENT</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Summary