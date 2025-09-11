import React from 'react'
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment'
import { Container } from '@mui/material'
import TakeTest from './TakeTest'
import AllTherapyWithSearch from './AllTherapyWithSearch'
import Link from 'next/link'
import Image from 'next/image'
import OurDoctorSectionTherapyPage from './OurDoctorTherapyPage'
const conditions = [
    {
        id: 1,
        name: 'Depressed',
        icon: '/services/depressed.jpg'
    },
    {
        id: 2,
        name: 'Anxious',
        icon: '/services/anxiety.jpg'
    },
    {
        id: 3,
        name: 'Stressed',
        icon: '/services/stressed.jpg'
    },
]

const conditionBubble = [
    {
        id: 1,
        name: 'Depression',
        icon: '/services/depressed.jpg'
    },
    {
        id: 2,
        name: 'Anxiety',
        icon: '/services/anxiety.jpg'
    },

    {
        id: 3,
        name: 'OCD  ',
        icon: '/services/stressed.jpg'
    },
    {
        id: 2,
        name: 'Stress',
        icon: '/services/anxiety.jpg'
    },
    {
        id: 3,
        name: 'Trauma',
        icon: '/services/stressed.jpg'
    },
    {
        id: 1,
        name: 'Substance',
        icon: '/services/depressed.jpg'
    },
    {
        id: 2,
        name: 'Abuse',
        icon: '/services/anxiety.jpg'
    },
    {
        id: 2,
        name: 'BPD',
        icon: '/services/anxiety.jpg'
    },
    {
        id: 2,
        name: 'Eating Disorders',
        icon: '/services/anxiety.jpg'
    },
    {
        id: 2,
        name: 'Grief and Loss',
        icon: '/services/anxiety.jpg'
    },

    {
        id: 2,
        name: 'Self-Esteem Issues',
        icon: '/services/anxiety.jpg'
    },
    {
        id: 2,
        name: 'ADHD',
        icon: '/services/anxiety.jpg'
    },
]
const currentUrl = "https://mindfultms.in/services/therapy"
const  iframeSrc= `https://forms.zohopublic.in/nikhilmindf1/form/OTPVerifiticationtest/formperma/uqvupaDUHDlIs1hLYWsCUIgydIk4e9EzI3T6ubRgt7Y?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&location=${`website`}&solution=${`psychologist`}&from=website`;


const MobileView = () => {
    return (
        <>
            <div maxWidth="lg" className="mt-8 px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 gap-8">
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img className="w-full md:w-[400px] lg:w-[450px] transition-transform duration-300 transform hover:scale-105" alt="Therapy Banner" src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi3.webp&w=1920&q=75" />
                    </div>
                    {/* Text Section */}
                    <div className="text-start md:text-left mx-2">
                        <h1 className="text-3xl md:text-[38px] font-bold leading-snug text-primary mb-6">
                            Personalised Therapy for a Healthier You
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-4">
                            Discover a safe space with our experienced therapists and psychologists.</p>
                        <p className="text-lg md:text-xl text-gray-600 mb-8">
                            We provide a safe space to talk to our experts and overcome your challenges with confidence.</p>
                        <div className="flex justify-center md:justify-start">
                            <RequestAppointment name="Book a Therapy Session" customStyle="px-6 py-3 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                        </div>
                    </div>


                </div>
            </div>

            {/* our experts */}
            <div className='bg-primary-div'>
                <Container maxWidth="lg">
                    <OurDoctorSectionTherapyPage designation={"psychologist"} />
                </Container>
            </div>

            <div className="max-w-4xl mx-auto px-4 pt-4 pb-4">

                <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                    {`   MindfulTMS's experts specialise in treating a variety of conditions`}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {conditionBubble.map((condition) => (
                        <div
                            key={condition.name}
                            className="flex items-center bg-green-100 text-sm text-gray-700 px-4 py-2 rounded-full"
                        >
                            <span>{condition.name}</span>
                        </div>
                    ))}
                    <div className="flex items-center text-sm bg-green-100 text-gray-700 px-4 py-2 rounded-full">
                        <span>and more...</span>
                    </div>
                </div>
                <div className="flex justify-center md:justify-center mt-6">
                            <RequestAppointment  name="Book a Therapy Session" customStyle="px-4 py-2 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                        </div>


            </div>

            {/* Take Test */}
            <div className='md:hidden bg-primary-div'>
                <TakeTest />
            </div>

            <div className='px-4  py-12 bg-gray-200'>
                <AllTherapyWithSearch />
            </div>


            <div className='flex justify-center pt-9'>
                <RequestAppointment  name={"Book Consultation"} customStyle={"bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold"} />
            </div>

 
        </>
    )
}

const DesktopView = () => {
    return (
        <>
            <div className='bg-primary-div p-6'>
                <Container maxWidth="lg" className="mt-8 mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 gap-8">
                        {/* Text Section */}
                        <div className="text-center md:text-left mx-2">
                            <h1 className="text-4xl md:text-[38px] font-bold leading-snug text-primary mb-6">
                                Personalised Therapy for a Healthier You
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-3">
                                Discover a safe space with our experienced therapists and psychologists.</p>
                            <p className='text-lg md:text-xl text-gray-600 mb-8'>
                                We provide a safe space to talk to our experts and overcome your challenges with confidence.
                            </p>

                            <div className="flex justify-center md:justify-start">
                                <RequestAppointment  name="Book a Therapy Session" customStyle="px-6 py-3 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 hover:shadow-lg hover:scale-105 active:bg-orange-600" />
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="flex justify-center">
                            <img className="w-full md:w-[400px] lg:w-[450px] rounded-xl shadow-lg" alt="Therapy Banner" src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi3.webp&w=1920&q=75" />
                        </div>
                    </div>
                </Container>
            </div>

            {/* our experts */}
            <div className=''>
                <Container maxWidth="lg">
                    <OurDoctorSectionTherapyPage designation={"psychologist"} />
                </Container>
            </div>

            <div className='bg-primary-div'>
                <Container maxWidth="lg" >
                    <div className="py-8">

                        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                            {`   MindfulTMS's experts specialise in treating a variety of conditions`}
                        </h2>
                        <div className='flex justify-center'>
                            <div className="flex flex-wrap w-[80%] items-center justify-center gap-4 ">
                                {conditionBubble.map((condition) => (
                                    <div
                                        key={condition.name}
                                        className="flex items-center bg-green-100 text-base text-gray-700 px-4 py-2 rounded-full"
                                    >
                                        <span className=''>{condition.name}</span>
                                    </div>
                                ))}
                                {/* <div className="flex items-center text-sm bg-green-100 text-gray-700 px-4 py-2 rounded-full">
                     <span>and more...</span>
                 </div> */}
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-center mt-6">
                            <RequestAppointment  name="Book a Therapy Session" customStyle="px-4 py-2 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                        </div>
                    </div>
                </Container>
            </div>

            {/* free test */}
            <section className=' pb-5 ' >

                <Container maxWidth="lg">
                    <div className='flex justify-center   items-center h-full'>
                        {/* left image */}
                        <div className='h-full'>
                            <Image height={500} width={500} alt='MindfulTMS - Advanced rTMS Therapy img' className='w-full  object-contain h-[500px]' src="https://ik.imagekit.io/mwpcmpi5v/1733289803168-take_assessment.webp?updatedAt=1733748287527" />
                        </div>
                        {/* right section */}
                        <div className='flex flex-col justify-center items-center  h-full'>
                            <div className='mb-8'>
                                <h1 className='text-4xl  text-center font-sans mb-4 font-semibold'>
                                    Not sure what you need?
                                </h1>
                                <br />
                                <p className='text-xl text-gray-700 text-start ml-[70px]'>These self tests can help you understand you are suffering from depression, anxiety, or stress.</p>
                            </div>
                            {/* right section box */}
                            {/* right section box is under that is under underline ant */}
                            <div className='flex flex-col w-[80%] h-[53%] justify-around items-center  bg-primary-div p-5 rounded-xl'>
                                <div className='flex flex-col justify-center mb-2 text-center bg-[rgba(239, 102, 35, 0.3)] text-[#3A3A3A]'>
                                    <span className='text-3xl  mb-2 '>Take a <span className='font-semibold'>FREE TEST </span></span>
                                    <span className=' text-3xl'>to identify your </span><span className='text-3xl'> symptoms</span>
                                </div>
                                <div className='flex justify-center mt-5'>
                                    <Link href={"/assesment"}>
                                        <button className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-12 py-3 font-semibold text-lg text-white'>
                                            Start Self Test
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <div className=' py-10 bg-gray-100'>
                <Container maxWidth="md">
                    <AllTherapyWithSearch />
                </Container>
            </div>


            <div className='flex justify-center pt-10'>
                <RequestAppointment  name={"Book Consultation"} customStyle={"bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold"} />
            </div>

        </>
    )
}
const TherapyPage = () => {
    return (
        <>
            <div className=' md:hidden'>
                <MobileView />
            </div>
            <div className='hidden md:block'>
                <DesktopView />
            </div>
        </>
    )
}

export default TherapyPage
