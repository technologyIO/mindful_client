import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ThankYouPage = () => {
    return (
        <Container maxWidth="lg bg-primary-div h-screen " >
            <div className=" flex flex-col items-center  justify-center h-full ">
                <div className="rounded-lg pb-[50px]  p-2 w-full text-center">
                    <div className="mb-2">
                        <img
                            src="/home/footerLogo.svg"
                            alt="MindfulTMS Logo"

                            className="mx-auto"
                        />
                    </div>

                    <h1 className="text-lg text-center  md:text-xl  text-gray-800 mb-6">
                        Thank you for choosing MindfulTMS.
                        <br />
                        We've received your details.
                    </h1>
                    <h1 className='text-2xl md:text-3xl font-bold mb-6'> Our team will contact you shortly.</h1>

                    <p className="text-gray-800 text-base md:text-base font-semibold uppercase mb-1">
                        Want to Book Immediately?
                    </p>

                    <p className="text-gray-700  text-base mb-6 ">
                        Click the WhatsApp Button below to get in touch with us right now!
                    </p>

                    <div className='flex justify-center'>
                        <Link
                            href={`https://wa.me/9606030958?text=${encodeURIComponent('Mindful TMS')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                className={`select-none mb-8 flex gap-2 items-center justify-center text-white rounded-lg px-8 py-2 font-semibold text-center cursor-pointer active:shadow-xl active:bg-green-600 bg-green-500`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="currentColor"
                                    className="bi bi-whatsapp"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                </svg>
                                Whatsapp
                            </button>
                        </Link>

                    </div>
                    <Link href="/" className='bg-primary-orange h-full hover:bg-orange-500 active:bg-orange-700 rounded-lg px-[45px] py-[13px] text-white text-base font-semibold'>
                        Go to Home
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default ThankYouPage