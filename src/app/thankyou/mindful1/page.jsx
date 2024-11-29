import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ThankYouPage = () => {
    return (
       <Container maxWidth="lg bg-primary-div h-screen">
         <div className=" flex flex-col items-center   ">
            <div className=" rounded-lg  p-8 w-full text-center">
                <div className="mb-6">
                    <img
                        src="/home/footerLogo.svg"
                        alt="MindfulTMS Logo"

                        className="mx-auto"
                    />
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    We've received your details. Thank you for choosing MindfulTMS.
                </h1>

                <p className="text-gray-600 md:text-xl mb-4">
                    Our Phone/Whatsapp lines are open from Monday-Saturday 10 AM to 6PM.
                </p>

                <p className="text-gray-600 md:text-xl mb-6">
                    Our team will contact you at your preferred time on the next business day.
                </p>

                <p className="text-gray-800 md:text-xl font-semibold m-6">
                    -Team MindfulTMS
                </p>
                <Link href="/" className='bg-primary-orange hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 md:px-8 md:py-3 text-white text-sm md:text-base font-semibold'>
                    Go to Home
                </Link>
            </div>
        </div>
       </Container>
    )
}

export default ThankYouPage