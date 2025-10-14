"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container } from '@mui/material'
import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment'
import TestimonialComponentV2 from './TestimonialComponentV2'

const RtmsLandingPage = ({ city , data}) => {
    //   const city = params.location || "gk";

    const location = city === 'gk' ? 'New Delhi - Greater Kailash 1' : city === 'wf' ? 'Bengaluru - Whitefield' : city === 'hb' ? 'Bengaluru - Hebbal' : '';






    return (
        <div className="bg-white">

            {/* Hero Section */}
            <section className="bg-white pb-8 pt-12">
                <Container maxWidth="lg">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* Text Section */}
                        <div className="w-full md:w-3/5 text-left order-2 md:order-1">
                            <h1 className="text-2xl md:text-4xl font-bold mb-6 tracking-wide text-gray-800">
                                Stop Researching. Start Healing.
                            </h1>

                            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-700">
                               {` Begin rTMS with One of India's Most Experienced Speciality Neurocare Clinics`}
                            </h2>

                            <p className="text-gray-700 text-base md:text-lg mb-4">
                                {`If you're already considering rTMS, you don't need more theory — you need the`} <strong>right provider</strong>.
                            </p>

                            <p className="text-gray-700 text-base md:text-lg mb-6">
                                At <strong>MindfulTMS Neurocare</strong>, every rTMS (repetitive transcranial magnetic stimulation) session is <strong>led by a specialist</strong>, using <strong>FDA-approved protocols</strong> and <strong>evidence-based targeting</strong> for <strong>Depression, Anxiety, OCD, PTSD and more</strong>.
                            </p>

                            <div className="mt-8 flex items-center justify-center md:justify-start">
                                <RequestAppointment
                                    customStyle={`flex items-center md:text-lg justify-center gap-2 w-[80%] rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 md:w-[400px] text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg`}
                                    name={`Schedule an rTMS Consultation`}
                                    city={"delhi"}
                                />
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-2/5 flex justify-center order-1 md:order-2">
                            <div className="relative w-full overflow-hidden rounded-xl">
                                <Image
                                    src="/ads/rtms/rtms_treatment.webp"
                                    alt="rTMS Illustration"
                                    width={600}
                                    height={400}
                                    className="w-full md:h-96 object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </Container>
            </section>

            {/* Why Patients Choose Us Section */}
            <section className="py-12 bg-orange-50">
                <Container maxWidth="lg">
                    <h2 className="mb-10 text-center text-2xl md:text-4xl font-bold text-orange-500">
                        Why Patients Choose Us for rTMS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        {/* Image Section */}
                        <div className="flex justify-center">
                            <Image
                                src="/ads/ads2/Delhi3.webp"
                                alt="Clinic rTMS Chair"
                                width={600}
                                height={400}
                                className="w-full md:h-96 object-cover rounded-xl"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold flex items-start gap-2">
                                    <span>✅</span>
                                    <span>Clinical Expertise — Not Trial & Error</span>
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg ml-8">
                                    {`Your protocol isn't handled by technicians. A psychiatrist personally maps your treatment path and monitors your progress.`}
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold flex items-start gap-2">
                                    <span>✅</span>
                                    <span>Proven Track Record</span>
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg ml-8">
                                    We have delivered over <strong>25,000 rTMS sessions</strong> across <strong>800+ patients</strong>, with measurable outcome tracking.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold flex items-start gap-2">
                                    <span>✅</span>
                                    <span>Comfort & Privacy</span>
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg ml-8">
                                    Sessions are conducted in private, sound-controlled rooms with complete confidentiality.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold flex items-start gap-2">
                                    <span>✅</span>
                                    <span>Medication-Free Option — or Add-On Therapy</span>
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg ml-8">
                                   {` Whether you're looking to avoid medication or enhance its effect, we personalize your plan accordingly, by working with your psychiatrist.`}
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 flex items-center justify-center">
                        <RequestAppointment
                            customStyle={`flex items-center md:text-lg justify-center gap-2 w-[80%] rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 md:w-[400px] text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg`}
                            name={`Schedule an rTMS Consultation`}
                        />
                    </div>
                </Container>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 bg-gray-100">
                <Container maxWidth="lg">
                    <h2 className="mb-10 text-center text-2xl md:text-4xl font-bold text-gray-800">
                        Testimonials
                    </h2>

                    <div className="">

                        <TestimonialComponentV2 smallDevice={true} location={location} />


                    </div>
                </Container>
            </section>



         {/* Ready to Start Section */}
<section className="pt-12 bg-white">
    <Container maxWidth="lg">
        <div className="text-center">
            <h2 className="mb-6 text-2xl md:text-4xl font-bold text-gray-800">
                Ready to Start?
            </h2>

            <p className="text-gray-700 text-lg md:text-xl mb-8">
                Most patients begin within <strong>48 hours of consultation</strong>.
            </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            
            {/* 2 Column Grid on Medium Devices */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Online Section */}
                <div className="bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800  text-center">
                        You can reach out to us online here:
                    </h3>

                    <div className="flex items-center justify-center mt-5">
                        <RequestAppointment
                            customStyle={`flex items-center md:text-lg justify-center gap-2 w-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-2 md:py-4 text-white font-bold transition-all duration-200 focus:ring-4 focus:ring-orange-300 hover:scale-105 hover:shadow-xl`}
                            name={`Schedule an rTMS Consultation`}
                        />
                    </div>
                </div>

                {/* Phone Section */}
                <div className="bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                        Want to talk to us immediately?
                    </h3>
                    
                    <div className="bg-orange-50 rounded-lg p-4 mb-4">
                        <p className="text-gray-700 text-base text-center mb-2">
                            Call <a href={`tel:+91${data?.phone}`} className="text-orange-600 font-bold text-xl hover:text-orange-700 transition-colors">+91 {data?.phone}</a> to speak with our care team.
                        </p>
                    </div>
                    
                    <p className="text-gray-600 text-sm text-center mt-auto">
                        (Note: Our clinic is open from 9 AM to 7 PM, Monday to Saturday)
                    </p>
                </div>

            </div>

        </div>
    </Container>
</section>






        </div>
    )
}

export default RtmsLandingPage
