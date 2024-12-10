import React from 'react'
import Link from 'next/link';
// import VideoComponent from './VideoComponent'
// import NewComponent from './newComponent';
import  Container  from '@mui/material/Container';
// import dynamic from 'next/dynamic';
// import TestimonialComponent from './TestimonialComponent';
// import TestimonialComponents2 from './TestimonialComponents2';
import Image from 'next/image';
// import Footer from '@/components/Footer'
import TestimonialComponentSlide from './TestimonialComponentSlide';
import OurDoctorSection from '../clinicLocation/[city]/OurDoctorSection';
import CounterComponent from './CounterComponent';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';

// Dynamically import non-critical components with SSR enabled
// const CounterComponent = dynamic(() => import('./CounterComponent'));
// const OurDoctorSection = dynamic(() => import('../clinicLocation/[city]/OurDoctorSection'));
// const TestimonialComponentSlide = dynamic(() => import('./TestimonialComponentSlide'));
// const RequestAppointment = dynamic(() => import('../clinicLocation/[city]/RequestAppointment'));



const servicesIcon = [
    {
        icon: '/iconsNew/therapy.webp',
        link: '/services/therapy',
        name: 'Therapy'
    },
    {
        icon: '/iconsNew/psychiatry.webp',
        link: '/services/psychiatry',
        name: 'Psychiatry'

    },
    {
        icon: '/iconsNew/assessment.webp',
        link: '/assesment',
        name: 'Professional Assessment'

    },
    {
        icon: '/iconsNew/tms.webp',
        link: '/services/tms-treatment-page',
        name: 'TMS'

    },
]
const HomePage = ({ allSection }) => {

    const MobileScreen = () => {
        return (
            <>
                {/* hero section */}
                <section className='mb-5'>
                    <div className='md:grid grid-cols-2 items-center'>
                        <div className='flex justify-center w-full  mb-7'>
                            <Image height={100} width={100}   className='w-full object-cover' src='/iconsNew/hero2.webp' alt='hero' />
                        </div>
                        <div>
                            <div className='flex flex-col justify-center'>
                                {/* <h1 className=' text-3xl mb-5  text-center font-sans font-semibold '>
                                    {allSection?.heroSection?.title}
                                </h1> */}
                                <div className='mb-5'>
                                    <h1 className=' text-[24px] m-0 p-0 leading-[20px] text-[#f6881f] text-center uppercase  font-bold '>
                                        You Deserve  </h1>
                                    <h1 className=' text-[24px] mb-0 p-0 text-[#f6881f] text-center  uppercase  font-bold '>    to Feel Better
                                    </h1>
                                </div>
                                {/* {
                                    allSection?.heroSection?.para?.split("\n").map((para, index) => <p key={index} className='text-center mb-5 font-[15px] text-[#3A3A3A] '>{para}</p>

                                    )
                                } */}

                                {/* <div  dangerouslySetInnerHTML={{ __html: allSection?.heroSection?.para }}/> */}

                                <div className='mb-5'>
                                    <p className='mb-2   text-[16px]  text-center text-[#545454]'>Get the best care from our experts. </p>
                                    <div className='mb-6'>
                                        <div className='flex gap-5 mb-2 items-center justify-center'>
                                            <div className='flex'>
                                                <Image height={100} width={100} alt='img'  className='w-6' src='/home/mindfulIcon.png' /><span className='text-[16px] text-[#3084ae] whitespace-nowrap font-bold' > Psychologists</span>
                                            </div>
                                            <div className='flex'>
                                                <Image height={100} width={100} alt='img'  className='w-6' src='/home/mindfulIcon.png' /> <span className='text-[16px]  text-[#3084ae] whitespace-nowrap font-bold'>Psychiatrists</span>
                                            </div>
                                            {/* <div className='flex'>
                                                <Image height={100} width={100}  className='w-6' src='/home/mindfulIcon.png' /> <span className='text-[16px]  text-[#3084ae] whitespace-nowrap font-bold'>Psychiatry</span>
                                            </div> */}

                                        </div>
                                        <div className='flex justify-center'>
                                            <div className='flex'>
                                                <Image height={100} width={100} alt='img'  className='w-6' src='/home/mindfulIcon.png' /> <span className='text-[16px]  text-[#3084ae] whitespace-nowrap font-bold'>TMS Specialists</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-primary-div p-4'>
                                        <p className=' mb-2 text-center text-[16px] text-black'>We help you win over</p>
                                        <div className='mb-2'>
                                            <p className='text-[16px] text-center text-primary-orange font-semibold'>OCD | ANXIETY | DEPRESSION | TRAUMA</p>
                                        </div>
                                        <p className='  text-center text-[16px] text-black'>and various other conditions</p>

                                    </div>
                                   
                                    <p className='mb-0 mt-5  text-[16px] px-6  text-center text-[#737373]'>With empathy and confidence,
                                        our professionals will guide you
                                        through every challenge. </p>



                                </div>
                            </div>
                            <div className='flex justify-center'>
                               
                                <div className=''>
                                    <RequestAppointment name={"SCHEDULE CONSULTATION"} />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* free test */}
                <section className='bg-primary-div py-5'>
                    <div>
                        <h1 className='text-2xl  text-center font-sans font-semibold'>
                            {/* {allSection?.section2?.para1} */}
                            Not sure where to begin?
                        </h1>
                        {/* <p className='text-center font-semibold text-lg'>Take our self-assessment</p> */}
                    </div>

                    <div className='flex flex-col justify-center  bg-[rgba(239, 102, 35, 0.3)]'>
                        {/* <div dangerouslySetInnerHTML={{ __html: allSection?.section2?.html1 }} /> */}
                        <div>
                            <Image height={100} width={100}  alt='img' className='w-full' src='https://mindfultms1.s3.us-east-1.amazonaws.com/1733289803168-take_assessment.webp' />
                        </div>

                    </div>
                    <div className='flex justify-center'>
                        <Link href={allSection?.section2?.button?.link}>
                            <button className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                                {allSection?.section2?.button?.text}
                            </button>
                        </Link>
                    </div>
                </section>
                {/* services */}
                <section className='py-5 px-4'>
                    <div className=''>
                        <div className='mb-5'>
                            <h1 className='text-3xl font-semibold text-gray-800 text-center'>Services We Offer</h1>
                        </div>
                        {
                            allSection?.section5?.services?.map((service, index) => (
                                <div key={index} className=''>
                                    <div className='grid grid-cols-2 items-center gap-6 justify-center'>
                                        {
                                            service?.array?.map((i, index) => (
                                                <Link href={servicesIcon[index]?.link} key={index} className='flex flex-col cursor-pointer justify-center items-center mb-2'>
                                                    <Image height={100} width={100} alt='img' src={servicesIcon[index]?.icon} className='w-[80px] h-[80px] mb-4' />
                                                    <p className='text- font-semibold text-center'>{servicesIcon[index]?.name}</p>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

                {/* More about tms */}
                <section className=' py-10 px-4  bg-primary-div'>
                    <div className='mb-5'>
                        <h1 className='text-3xl text-center font-sans font-semibold'>
                            {allSection?.section3?.title}
                        </h1>
                        <p className='text-center mt-2 mb-2 text-[16px] text-[#545454] font-semibold'>A safe approach using magnets to treat <strong>Depression, Anxiety, OCD and more.</strong></p>
                    </div>

                    <div className='md:grid grid-cols-6 items-center justify-center md:bg-primary-div'>
                        {/* hide this on medium and show alternate */}
                        <div className='flex flex-col justify-between mb-10 items-center pb-4  md:px-8 rounded-lg gap-6 col-span-2 bg-orange-100  '>
                            <div className=''>
                                <Image height={100} width={100} alt='img' className='w-full h-full border-2 border-white  rounded-lg' src={"https://mindfultms1.s3.us-east-1.amazonaws.com/1733372630195-illustration%20%281%29.webp"} />
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                {/* <div dangerouslySetInnerHTML={{ __html: allSection?.section3?.box?.para }} /> */}
                                <div className='flex  items-center gap-1'>
                                    <svg fill="#ea580c" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24">
                                        <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                                    </svg><p className='text-left text-gray-700 text-[13px] font-semibold'>NON-INVASIVE</p>
                                </div>
                                <div className='flex  items-center gap-1'>
                                    <svg fill="#ea580c" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24">
                                        <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                                    </svg><p className='text-left text-gray-700 text-[13px] font-semibold'>NO MEDICATION</p>
                                </div>
                                <div className='flex  items-center gap-1'>
                                    <svg fill="#ea580c" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24">
                                        <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                                    </svg><p className='text-left text-gray-700 text-[13px] font-semibold'>SAFE</p>
                                </div>
                                <div className='flex  items-center gap-1'>
                                    <svg fill="#ea580c" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24">
                                        <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                                    </svg><p className='text-left text-gray-700 text-[13px] font-semibold'>US FDA Approved</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-4 md:bg-primary-div'>
                            {/* <div className='flex flex-col justify-center mb-5 px-8 bg-[rgba(239, 102, 35, 0.3)]'>
                                <div dangerouslySetInnerHTML={{ __html: allSection?.section3?.para2 }} />
                            </div> */}
                            <div className='mb-8'>
                                <CounterComponent />
                            </div>
                            <div>
                                <p className='text-center mb-8 text-gray-700 text-lg font-semibold'><strong>Is TMS for me?</strong> <br />Learn how it works and
                                    if it is the right option for you.</p>
                            </div>
                            <div className='flex justify-center'>
                                <Link href={"/pages/tms"} className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
                                    {allSection?.section3?.button?.text}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* wy tms */}
                <section className='py-8 px-4 mb-3'>
                    <div className='mb-8'>
                    <h1 class="text-[27px] whitespace-nowrap text-center ">Why choose <span class="font-semibold">MindfulTMS?</span></h1>
                        <div className='mt-2' dangerouslySetInnerHTML={{ __html: allSection?.section4?.para }} />
                    </div>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0  items-center  justify-center'>
                            {
                                allSection?.section4?.services?.map((service, index) => (
                                    <div key={index} className='flex flex-col justify-center  items-center'>
                                        <Image height={100} width={100} alt='img' className='w-[64px] h-[64px] text-center' src={service?.icon} />
                                        <p className='text-md font-semibold mt-3'>{service?.text}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>
                <hr className='border-1 border-gray-200' />

                {/* client speaks */}
                <section className='py-8 px-4 bg-primary-div'>
                {/* <h1 className='text-center text-3xl font-semibold'> Client Speaks</h1> */}
                    {/* <VideoComponent /> */}
                    {/* <NewComponent videos={videos} /> */}
                    {/* <TestimonialComponent  /> */}
                    <TestimonialComponentSlide smallDevice={true} />
                    {/* <TestimonialComponents2/> */}

                </section>

                {/* our experts */}
                <div className=''>
                    <OurDoctorSection />
                </div>
            </>
        )
    }

    const DesktopHeroSection = () => {
        return (
            <>
                <section className='mb-5'>
                    <div className='grid grid-cols-2  w-full cover mb-4 h-[545px]  ' style={{
                        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(163,109,22,1) 84%), url('/iconsNew/hero2.webp')`,

                        backgroundSize: 'cover',  // This makes the background image cover the entire div
                        backgroundPosition: 'center', // This centers the background image
                    }}>
                        <div></div>
                        {/* <Image height={100} width={100}  className='w-full object-cover' src='/home/banner02.svg' /> */}
                        <div className='flex flex-col justify-center items-end mr-[70px] lg:mr-[100px]'>
                            <div className='flex flex-col justify-center  items-end px-8'>
                                <h1 className=' text-6xl mb-5 text-white  text-end font-sans font-semibold '>
                                    {`You Deserve to Feel Better `}
                                </h1>
                                {
                                    allSection?.heroSection?.para?.split("\n").map((para, index) => <p key={index} className=' mb-5 font-[400] text-[18px] text-white text-end'>{para}</p>

                                    )
                                }
                                {/* <div dangerouslySetInnerHTML={{ __html: allSection?.heroSection?.para }} /> */}

                            </div>
                            <div className='flex justify-end px-8'>
                                <div className=''>
                                    <RequestAppointment name={"SCHEDULE CONSULTATION"} />

                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* free test */}
                <section className=' pb-5 ' >

                    <Container maxWidth="lg">
                        <div className='flex justify-center   items-center h-full'>
                            {/* left image */}
                            <div className='h-full'>
                                <Image height={100} width={100} alt='img' className='w-full  object-contain h-[500px]' src="https://mindfultms1.s3.us-east-1.amazonaws.com/1733289803168-take_assessment.webp"  />
                            </div>
                            {/* right section */}
                            <div className='flex flex-col justify-center items-center  h-full'>
                                <div className='mb-8'>
                                    <h1 className='text-4xl  text-center font-sans mb-4 font-semibold'>
                                        {allSection?.section2?.para1}
                                    </h1>
                                    <br />
                                    <p className='text-xl text-center'>{allSection?.section2?.para2}</p>
                                </div>
                                {/* right section box */}
                                {/* right section box is under that is under underline ant */}
                                <div className='flex flex-col w-[80%] h-[53%] justify-around items-center  bg-primary-div p-5 rounded-xl'>
                                    <div className='flex flex-col justify-center mb-2 text-center bg-[rgba(239, 102, 35, 0.3)] text-[#3A3A3A]'>
                                        {/* <div className='text-3xl' dangerouslySetInnerHTML={{ __html: allSection?.section2?.html1 }} /> */}
                                        <span className='text-3xl  mb-2 '>Take a <span className='font-semibold'>FREE TEST </span></span>
                                        <span className=' text-3xl'>to identify your </span><span className='text-3xl'> symptoms</span>
                                    </div>
                                    <div className='flex justify-center mt-5'>
                                        <Link href={allSection?.section2?.button?.link}>
                                            <button className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-12 py-3 font-semibold text-lg text-white'>
                                                {/* {allSection?.section2?.button?.text} */}
                                                Start Test
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                {/* services */}
                <section className='py-8  bg-primary-div rounded-lg'>
                    <Container maxWidth="lg">
                        <div className='mb-3'>
                            <div className='mb-3 py-3'>
                                <h1 className='text-4xl   font-semibold text-gray-800 uppercase  text-center'>{allSection?.section5?.header}</h1>
                            </div>
                            {
                                allSection?.section5?.services?.map((service, index) => (
                                    <div key={index} className='mb-6 '>
                                        {/* <h1 className='text-xl font-semibold mb-5 text-center'>{service?.title}</h1> */}
                                        <div className='grid grid-cols-2 md:grid-cols-4 items-center mb-5 gap-8 justify-center'>
                                            {
                                                service?.array?.map((i, index) => (
                                                    <Link href={servicesIcon[index]?.link} key={index} className='flex cursor-pointer flex-col justify-center  items-center text-center '>
                                                        {/* <div className='w-[164px] h-[164px] rounded-full bg-[#EF6623] mb-3 '></div> */}
                                                        <div className='w-[150px] h-[150px] flex justify-center'>
                                                            <Image height={100} width={100} alt='img'  src={servicesIcon[index]?.icon} className=' p-4 h-full w-full object-contain    mb-3 ' />
                                                        </div>
                                                        <p className='text-xl text-center font-semibold'>{i?.name}</p>
                                                    </Link>
                                                ))
                                            }

                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </Container>

                </section>


                {/* tms treatment */}
                <section className='py-7'>
                    <Container maxWidth="lg">
                        <div className=" p-6 bg-white  rounded-lg">
                            <h2 className="text-4xl font-semibold text-center mb-5">TMS Treatment</h2>
                            <p className=" text-xl mt-2 text-center">
                                A safe approach using magnets to treat Depression, Anxiety, OCD and more.
                            </p>

                            <div className="flex flex-col md:flex-row items-center">
                                {/* left image */}
                                <div className="md">
                                    <Image 
                                        src="https://mindfultms1.s3.us-east-1.amazonaws.com/1733372630195-illustration%20%281%29.webp"
                                        alt="TMS Treatment"
                                        width={600}
                                        height={400}
                                        className="rounded-lg h-[420px] object-contain "
                                    />
                                </div>
                                {/* right section */}
                                <div className="md: mt-6 md:mt-0 md:pl-8">

                                    <div className="mt-4 space-y-2">
                                        <div className="flex items-center">
                                            <svg fill="#ea580c" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 24 24">
                                                <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                                            </svg><span className='ml-2 font-semibold text-xl text-gray-800'> NON-INVASIVE</span>
                                        </div>
                                        <div className="flex  items-center">
                                            <svg fill="#ea580c" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 24 24">
                                                <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                                            </svg> <span className='ml-2 font-semibold text-xl text-gray-800'> NO MEDICATION</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg fill="#ea580c" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 24 24">
                                                <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                                            </svg> <span className='ml-2 font-semibold text-xl text-gray-800'> SAFE</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg fill="#ea580c" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 24 24">
                                                <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                                            </svg> <span className='ml-2 font-semibold text-xl text-gray-800'> US FDA Approved</span>
                                        </div>
                                    </div>
                                    <br />
                                    <p className="text-gray-600 mt-4 text-xl">
                                        At MindfulTMS, we bring 5+ years of TMS experience with 10+ clinics in India and USA.
                                    </p>
                                    <br />
                                    <p className="text-gray-600 mt-2 text-xl">
                                        <strong>Is TMS for me?</strong> Learn how it works and if it is the right option for you.
                                    </p>
                                    <br />
                                    <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg">
                                        MORE ABOUT TMS
                                    </button>
                                </div>
                            </div>
                            {/* numbers */}
                            <div className="flex justify-around mt-8 text-center">
                                <div>
                                    <p className="text-5xl  mb-2 font-bold text-orange-500">5+</p>
                                    <p className="text-gray-900 font-bold">Years of Experience</p>
                                </div>
                                <div>
                                    <p className="text-5xl  mb-2 font-bold text-orange-500">10+</p>
                                    <p className="text-gray-900 font-bold">Clinics (India & USA)</p>
                                </div>
                                <div>
                                    <p className="text-5xl  mb-2 font-bold text-orange-500">400,000+</p>
                                    <p className="text-gray-900 font-bold">Treatments Administered</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* wy tms */}
                <section className='py-10   bg-primary-div'>
                    <Container maxWidth="lg">
                        <div className='mb-10'>
                            <h1 className='text-4xl text-center font-sans font-semibold mb-5'>Why Choose <span className='font-bold'> MindfulTMS?</span></h1>

                            <p className='text-xl text-center'>Your well being is our mission</p>
                        </div>
                        <div className='flex justify-center'>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-[70px]  items-center  justify-center'>
                                {
                                    allSection?.section4?.services?.map((service, index) => (
                                        <div key={index} className='flex flex-col justify-center  items-center'>
                                            <Image height={100} width={100}  className='w-[100px] h-[100px] text-center' src={service?.icon} />
                                            <p className='text-xl font-semibold mt-3'>{service?.text}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </Container>
                </section>



                {/* client speaks */}
                <section className='py-10 px-4 md:px-[100px] '>
                    {/* <VideoComponent /> */}
                    {/* <NewComponent videos={allSection?.section8?.videos} /> */}
                    <h1 className='text-4xl text-gray-800 font-semibold  text-center  mb-6'>Clients Speak</h1>
                    <TestimonialComponentSlide />

                </section>

                \
                {/* our experts */}
                <div className='bg-primary-div'>
                    <Container maxWidth="lg">
                        <OurDoctorSection />
                    </Container>
                </div>


            </>
        )
    }

    return (
        <div className="">
            {allSection &&
                <div className=" select-none">
                    {/* hero section */}
                    <div className='md:hidden'>
                        <MobileScreen />
                    </div>
                    <div className='md:block hidden'>
                        <DesktopHeroSection />
                    </div>


                </div>
            }
        </div>
    )
}

export default HomePage