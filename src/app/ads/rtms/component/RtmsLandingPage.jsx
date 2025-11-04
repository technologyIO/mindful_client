// "use client"
import React from 'react'
import Image from 'next/image'
import { Container } from '@mui/material'
import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment'
import TestimonialServerWrapper from './TestimonialServerWrapper'

const RtmsLandingPage = ({ city, data }) => {
    //   const city = params.location || "gk";

    const location = city === 'gk' ? 'New Delhi - Greater Kailash 1' : city === 'wf' ? 'Bengaluru - Whitefield' : city === 'hb' ? 'Bengaluru - Hebbal' : '';






    return (
        <div className="bg-white">

            {/* Hero Section */}
            <section className="bg-white pb-8 pt-4">
                <Container maxWidth="lg">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-left order-2 md:order-1">
                            <h1 className="text-2xl md:text-4xl font-bold mb-6 tracking-wide text-gray-800">
                                Stop Researching.
                                <br />Start Healing with rTMS.
                            </h1>



                            <p className="text-gray-700 text-base md:text-lg mb-6 ">
                                {`If you're already considering rTMS, you don't need more theory — you need the`} <strong>right provider</strong>.
                            </p>

                            <p className="text-gray-700 text-base md:text-lg mb-6">
                                At MindfulTMS Neurocare, every <strong>rTMS </strong>(repetitive transcranial magnetic stimulation) session is led by a specialist with  evidence-based targeting specifically focused on  <strong>Depression, Anxiety, OCD, PTSD </strong>and more.
                            </p>
                            <p className="text-base md:text-lg mb-6  text-gray-700">
                                {` Begin rTMS with one of India's most experienced speciality neurocare clinics`}
                            </p>
                            <div className=" flex items-center justify-center md:justify-start">
                                <RequestAppointment
                                    iframeSrc={data?.zohoForm}
                                    header = {true}
                                    customStyle={`flex items-center md:text-lg justify-center gap-2 w-[80%] rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 md:w-[400px] text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg`}
                                    name={`Schedule an rTMS Consultation`}
                                    city={"delhi"}
                                />
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                            <div className="relative w-full ">
                                <Image
                                    src="/ads/rtms/rtms_treatment.webp"
                                    alt="rTMS Illustration"
                                    width={600}
                                    height={400}
                                    className="w-full md:h-96 object-contain overflow-hidden rounded-xl"
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
                                src={data?.section2Img}
                                alt="Clinic rTMS Chair"
                                width={600}
                                height={400}
                                className="w-full md:max-h-[500px] object-cover rounded-xl"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold flex items-start gap-2">
                                    <span>✅</span>
                                    <span>Clinical Expertise</span>
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg ml-8">
                                    {`A psychiatrist personally maps your treatment path and monitors your progress.`}
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
                        iframeSrc={data?.zohoForm}
                          header = {true}
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

                        <TestimonialServerWrapper smallDevice={true} location={location} />


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
                                    iframeSrc={data?.zohoForm}
                                      header = {true}
                                        customStyle={`flex items-center text-sm md:text-lg justify-center gap-2 w-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-2 md:py-4 text-white font-bold transition-all duration-200 focus:ring-4 focus:ring-orange-300 hover:scale-105 hover:shadow-xl`}
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
                                        Call <a href={`tel:+91${data?.phone}`} className="text-orange-600 font-bold text-lg md:text-xl hover:text-orange-700 transition-colors">+91 {data?.phone}</a> to speak with our care team.
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

            <section className="py-8 bg-orange-50">
                <Container maxWidth="lg">
                    <div className="py-3">
                        <div className="px-4 mb-10">
                            <h1 className="text-3xl md:text-4xl text-primary-orange text-center font-bold">
                                Our Location
                            </h1>
                        </div>

                        <div className="px-4 mb-11">
                            {/* change grid-cols-1 to grid-cols-1 md:grid-cols-2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Left column: address + button */}
                                <div className="flex flex-col justify-center">
                                    <div>
                                        <p className="font-semibold mb-4 text-xl md:text-2xl ">
                                            {locationDataArray[city]?.addressTitle}
                                        </p>
                                        <span className="text-lg md:text-xl">
                                            {locationDataArray[city]?.address}
                                        </span>
                                    </div>
                                    <div className="mt-6 flex justify-center md:justify-start">
                                        <RequestAppointment
                                        iframeSrc={data?.zohoForm}
                                          header = {true}
                                            customStyle={`flex items-center  md:text-lg justify-center gap-2 w-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-2 md:py-4 text-white font-bold transition-all duration-200 focus:ring-4 focus:ring-orange-300 hover:scale-105 hover:shadow-xl`}
                                            name={`Schedule an rTMS Consultation`}
                                        />
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className='text-sm mr-6 mt-3 text-gray-700'>{locationDataArray[city]?.hero_description_2}.</p>
                                    </div>
                                </div>

                                {/* Right column: map */}
                                <div>

                                    <div className="flex items-center justify-center relative">
                                        <div className="w-full h-[400px] max-w-[500px] relative">
                                            <iframe
                                                title="Google Map"
                                                src={locationDataArray[city]?.googleMapLink}
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0, pointerEvents: "none" }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            />
                                            {/* Transparent overlay to block interactions */}
                                            <div className="absolute inset-0 bg-transparent" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </Container>
            </section>




        </div>
    )
}
const locationDataArray = {
    "gk": {
        addressTitle: 'MindfulTMS @ Greater Kailash 1, New Delhi',
        city: 'New-Delhi',
        address: 'S-35 first floor, Greater Kailash-1, Masjid Moth, Greater Kailash, New Delhi, Delhi 110048',
        googleMapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.749635826523!2d77.2155231871582!3d28.549114000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1da20c0c681%3A0x4bb15098e31edc9c!2smindful%20TMS%20Neurocare%20-%20Best%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20in%20Delhi!5e0!3m2!1sen!2sin!4v1724673517475!5m2!1sen!2sin',
        call: '011 – 415 000 11 / +91 96060 67372',
        slug: 'new-delhi',
        images: [
            { src: '/home/clinicImg2.jpg', alt: 'Company Image 1', className: "col-span-2" },
            { src: '/home/clinicImg3.jpg', alt: 'Company Image 2', className: "col-span-2 row-span-2" },
            { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
            { src: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
            { src: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
            { src: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
        ],
        hero_description_2: `Our Clinic is located in Greater Kailash 1, South Delhi—just a 10–15 minute ride from nearby Hauz Khas and Saket Metro Stations.`
    },
    "wf": {
        addressTitle: 'MindfulTMS @ Whitefield, Bengaluru ',
        city: 'Bengaluru-Whitefield',
        address: '704, 2nd Floor, ASN Signature, Varthur Road, near Laughing Waters Siddapura, Ramagondanahalli, Bengaluru, Karnataka 560066',
        googleMapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.231653179486!2d77.73074949678954!3d12.95702330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae132558211f3b%3A0x5a7282022d462888!2sMindful%20TMS%20Whitefield%20Clinic%20-%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20Bengaluru!5e0!3m2!1sen!2sin!4v1724673750137!5m2!1sen!2sin',
        call: '080- 41500055 / +91 81973 41114',
        slug: 'bangluru-whitefield',
        images: [
            { src: '/home/clinicImg2.jpg', alt: 'Company Image 1', className: "col-span-2" },
            { src: '/home/clinicImg3.jpg', alt: 'Company Image 2', className: "col-span-2 row-span-2" },
            { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
            { src: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
            { src: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
            { src: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
        ],
        hero_description_2: `Our Clinic is located on Old Airport Road in Whitefield, conveniently accessible from nearby areas of Marthahalli, Brookefield and Varthur.`
    },
    "hb": {
        addressTitle: 'MindfulTMS @ Hebbal, Bengaluru ',
        city: 'Bengaluru-Hebbal',
        address: '#43/2, New Airport Road, NH-7, Outer Ring Rd, Sahakar Nagar, Bengaluru, Karnataka 560092',
        googleMapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7041049286468!2d77.58899097470847!3d13.054496987268534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15250dbbd083%3A0x4e8aba2a52fa8613!2sMindful%20TMS%20Aster%20CMI%20Clinic%20-%20Best%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20Sahakar%20Nagar!5e0!3m2!1sen!2sin!4v1724673904955!5m2!1sen!2sin',
        call: '080 – 415 000 11 / +91 96069 69296',
        slug: 'bangluru-hebbal',
        images: [
            { src: '/home/clinicImg2.jpg', alt: 'Company Image 1', className: "col-span-2" },
            { src: '/home/clinicImg3.jpg', alt: 'Company Image 2', className: "col-span-2 row-span-2" },
            { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
            { src: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
            { src: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
            { src: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
            { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
        ],
        hero_description_2: `Our Clinic is located inside Aster CMI Hospital in Hebbal (Sahakar Nagar).`
    }
};
export default RtmsLandingPage
