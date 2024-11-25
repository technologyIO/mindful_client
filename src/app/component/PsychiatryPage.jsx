import { Container } from '@mui/material'
import React from 'react'
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment'
import Link from 'next/link'
const PsychiatryPage = () => {
    const psychiatryData = [
        {
            id: 1,
            name: "Dr Shubham",
            img: "https://mindfultms1.s3.us-east-1.amazonaws.com/1728029237361-Dr%20Subham%20%281%29.jpg",
            location: "New Delhi",
            link:'/doctor/66ffa1856a3f2ccdb194b61d'
        },
        {
            id: 2,
            name: "Dr Sandeep Govil",
            img: "https://mindfultms1.s3.us-east-1.amazonaws.com/1728029275117-Dr%20Sandeep%20Govil%20Pictures.jpg",
            location: "Bangalore",
            link:"/doctor/66ffa28f6a3f2ccdb194b62a"
        },
        {
            id: 3,
            name: "Dr. Abhishek",
            img: "https://mindfultms1.s3.us-east-1.amazonaws.com/1728029376714-Dr%20Abhishek%20.jpg",
            location: "New Delhi", 
            link:"/doctor/66ffa2e86a3f2ccdb194b632"
        },
    ]

    const MobileView = ()=>{
        return (
            <>
                 <div className='mt-8'>
                {/* Main Heading */}
                <Container maxWidth="lg">
                    <div className='px-3 text-center'>
                        <h1 className='text-3xl md:text-5xl text-gray-700 font-bold'>
                            Expert Psychiatric Services
                        </h1>
                        <p className='text-lg md:text-xl text-gray-600 mt-4 mb-5'>
                            {` Our experienced psychiatrists offer personalized treatment plans and medication management to help you navigate your mental health journey.`}
                        </p>
                        <div className="flex justify-center ">
                            <RequestAppointment name="Book a Consultation" customStyle="px-6 py-3 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                        </div>
                    </div>


                </Container>

                {/* Psychiatrists List */}
                <div className='mt-12 bg-primary-div px-3 pt-4 pb-8 '>
                    <h3 className='text-3xl md:text-4xl text-center text-gray-700 font-semibold'>
                        Our Psychiatrists
                    </h3>
                    <div className='grid grid-cols-3 gap-2 md:gap-8 mt-4 '>
                        {
                            psychiatryData.map((item) => (
                                <Link
                                    href={item.link}
                                    key={item.id}
                                    className='flex flex-col items-center cursor-pointer bg-white rounded-lg px-6 py-6 md:p-3 '
                                >
                                    <div className='w-[70px] md:w-[150px] h-[70px] md:h-[150px]'>
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className='w-full h-full object-cover rounded-full border-2 border-orange-500'
                                        />
                                    </div>
                                    <div className='mt-4 text-center'>
                                        <span className='text-sm font-semibold text-gray-800 truncate block w-[100px]'>
                                            {item.name}
                                        </span>
                                        <p className='text-[12px] text-gray-500'>
                                            {item.location}
                                        </p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>


                <div className="bg-white p-6  mx-auto rounded-lg ">
                <h3 className='text-2xl md:text-3xl text-center text-[#f6881f] font-bold mb-4'>
                When should I consider seeing a psychiatrist?
                    </h3>
                    <div className="space-y-6 text-center">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                               {` Therapy hasn’t provided expected relief`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                              {`  If you’re not finding the support you need through therapy, a psychiatrist can offer additional options.`}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                               {` You feel emotionally overwhelmed`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                               {` Constant feelings of sadness or anxiety are interfering with your daily life.`}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {`You notice major changes in your behavior`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                               {` Withdrawing from activities or experiencing changes in sleep or appetite can be signs that you need help.`}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {`You are struggling with harmful thoughts`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                               {` Racing, distressing or intrusive thoughts that disrupt your peace of mind.`}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {`You need help with medication`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                              {`  If you have a mental health condition requiring medication management, we’re here for you.`}
                            </p>
                        </div>

                        <div className="text-orange-600 font-bold text-xl">
                            {`If you’re uncertain about what you need, our team will guide you.`}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center ">
                            <RequestAppointment name="Book a Consultation" customStyle="px-6 py-3 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                        </div>
            </div>
            </>
        )
    }

    const DesktopView = ()=>{
        return (
            <>
                 <div className='mt-8'>
                {/* Main Heading */}
                <Container maxWidth="lg">
                    <div className='px-3 text-center'>
                        <h1 className='text-3xl md:text-4xl text-gray-700 font-bold'>
                            Expert Psychiatric Services
                        </h1>
                        <p className='text-lg md:text-xl text-gray-600 mt-4 mb-5'>
                            {` Our experienced psychiatrists offer personalized treatment plans and medication management to help you navigate your mental health journey.`}
                        </p>
                        <div className="flex justify-center ">
                            <RequestAppointment name="Book a Consultation" customStyle="px-6 py-3 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                        </div>
                    </div>


                </Container>

                {/* Psychiatrists List */}
               <div className='mt-12 bg-primary-div px-3 pt-8 pb-11 '>
               <Container maxWidth="lg">
                    <h3 className='text-3xl md:text-4xl text-center text-gray-700 font-semibold'>
                        Our Psychiatrists
                    </h3>
                    <div className='grid grid-cols-3 gap-2 md:gap-8 mt-4 '>
                        {
                            psychiatryData.map((item) => (
                                <Link
                                    href={item.link}
                                    key={item.id}
                                    className='flex flex-col items-center cursor-pointer bg-white rounded-lg px-6 py-6 md:p-3 '
                                >
                                    <div className='w-[70px] md:w-[150px] h-[70px] md:h-[150px]'>
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className='w-full h-full object-cover rounded-full border-2 border-orange-500'
                                        />
                                    </div>
                                    <div className='mt-4 text-center'>
                                        <span className='text-sm font-semibold text-gray-800 truncate block w-[100px]'>
                                            {item.name}
                                        </span>
                                        <p className='text-[12px] text-gray-500'>
                                            {item.location}
                                        </p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
               </Container>
                </div>


             <Container maxWidth="lg">
             <div className="bg-white p-6  mx-auto rounded-lg ">
                <h3 className='text-2xl md:text-3xl text-center text-[#f6881f] font-bold mb-4'>
                When should I consider seeing a psychiatrist?
                    </h3>
                    <div className="space-y-6 text-center">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                               {` Therapy hasn’t provided expected relief`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                              {`  If you’re not finding the support you need through therapy, a psychiatrist can offer additional options.`}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                               {` You feel emotionally overwhelmed`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                               {` Constant feelings of sadness or anxiety are interfering with your daily life.`}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {`You notice major changes in your behavior`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                               {` Withdrawing from activities or experiencing changes in sleep or appetite can be signs that you need help.`}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {`You are struggling with harmful thoughts`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                               {` Racing, distressing or intrusive thoughts that disrupt your peace of mind.`}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {`You need help with medication`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                              {`  If you have a mental health condition requiring medication management, we’re here for you.`}
                            </p>
                        </div>

                        <div className="text-orange-600 font-bold text-xl">
                            {`If you’re uncertain about what you need, our team will guide you.`}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center ">
                            <RequestAppointment name="Book a Consultation" customStyle="px-6 py-3 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                        </div>
             </Container>
            </div>
            </>
        )
    }
    return (
        <>
            <div className='hidden md:block'>
                <DesktopView/>
            </div>
            <div className='md:hidden'>
                <MobileView/>
            </div>
        </>
    )
}

export default PsychiatryPage
