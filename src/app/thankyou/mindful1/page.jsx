import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
export async function generateMetadata({params}) {


  return {
 robots: "noindex, nofollow",
 };

}
const ThankYouPage = () => {
    return (
      <>
      
         <Container maxWidth="lg bg-primary-div h-screen">
         <div className=" flex flex-col items-center  justify-center h-full ">
            <div className=" rounded-lg pb-[50px]    w-full text-center">
                <div className="mb-2">
                    <img
                        src="/home/footerLogo.svg"
                        alt="MindfulTMS Logo"

                        className="mx-auto"
                    />
                </div>

                <h1 className="text-lg text-center  md:text-xl  text-gray-800 mb-6">
                    Thank you for choosing MindfulTMS.
                        <br/> 
                       {` We've received your details.`}
                    </h1>

                <p className="text-gray-800 text-sm md:text-lg mb-6">
                    Our Phone/Whatsapp lines are open from Monday-Saturday 10 AM to 6PM.
                </p>

                <p className="text-2xl md:text-3xl font-bold mb-6">
                    Our team will contact you at your preferred time on the next business day.
                </p>

                <p className="text-gray-800 md:text-xl font-semibold m-6 mb-8">
                    -Team MindfulTMS
                </p>
                <Link href="/" className='bg-primary-orange hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 md:px-8 md:py-3 text-white text-sm md:text-base font-semibold'>
                    Go to Home
                </Link>
            </div>
        </div>
       </Container>
      </>
    )
}

export default ThankYouPage