"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const Details = () => {

  const router = useRouter()
  return (
    <div className='select-none'>
            <div className="mt-1  flex  items-center justify-center bg-background text-foreground">
                <div className="w-full max-w-md bg-card  rounded-lg lg:container p-6">
                    <div className="flex items-center   mb-6">
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
                            <h1 className="text-2xl font-bold text-center ">Appointment details!</h1>

                        </div>
                    </div>
                    <p className="text-center text-primary-orange text-md mb-8">Book your appointment in a few simple steps, See you soon!</p>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-3 bg-primary-div rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" color='gray' width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg>
                                <div>
                                    <p className=" text-lg">Aster CMI, Hebbal Bangalore</p>
                                    <p className="text-sm text-muted-foreground">1hr</p>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-primary-div rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" color='gray' width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                </svg>
                                <div>
                                    <p className="font-medium text-lg">Dr David Samson</p>
                                    <p className="text-sm text-muted-foreground">Psychologist</p>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-between p-5 bg-primary-div rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" color='gray' height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                </svg>
                                <div>
                                    <p className="font-medium text-lg">20 June 2024</p>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-between p-5 bg-primary-div rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg>
                                <div>
                                    <p className="font-medium text-lg">11:25 am - 12:25 pm</p>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>

                        <button className=" w-full mt-8 py-4 bg-primary-orange px-10  rounded-lg  text-white font-semibold" onClick={() => router.push("/consultation/summary")}>BOOK APPOINTMENT</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Details