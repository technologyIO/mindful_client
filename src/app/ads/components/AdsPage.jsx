
import OurDoctorSection from '@/app/clinicLocation/[city]/OurDoctorSection'
import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment'
import ClinicLocationDoctors from '@/app/component/ClinicLocationDoctors'
import CounterComponent from '@/app/component/CounterComponent'
import TestimonialComponent from '@/app/component/TestimonialComponent'
import { HomePageSections as allSection } from '@/example'
import Image from 'next/image'
import Link from 'next/link'
import AdsExperts from '../../component/AdsExperts'
import AdsCombinePage from '../components/AdsCombinePage'
import { Container } from '@mui/material'
import ZohoForm from '@/app/component/ZohoForm'
import ContactForm from './ContactForm'

const servicesIcon = [
    {
        icon: '/iconsNew/therapy.png',
        link: '/services/therapy',
        name: 'Therapy'
    },
    {
        icon: '/iconsNew/psychiatry.png',
        link: '/services/psychiatry',
        name: 'Psychiatry'

    },
    {
        icon: '/iconsNew/assessment.png',
        link: '/assesment',
        name: 'Professional Assessment'

    },
    {
        icon: '/iconsNew/tms.png',
        link: '/services/tms-treatment-page',
        name: 'TMS'

    },
]
export default function AdsPage({ params, condition }) {
    // for zoho
    const iframeSrc =
        "https://forms.zohopublic.in/nikhilmindf1/form/RequestanAppointment/formperma/GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk?zf_rszfm=1";
    const containerId = "zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk"
    // console.log('location', params.location)

    const city = params.location;
    const expertCondition = params.general;
    const location = city === 'gk' ? 'New Delhi - Greater Kailash 1' : city === 'wf' ? 'Bengaluru - Whitefield' : city === 'hb' ? 'Bengaluru - Hebbal' : '';

    const expertText = expertCondition === 'psychology' ? 'Psychologist' : expertCondition === 'psychiatry' ? 'Psychiatrist' : '';




    const conditions = [
        { name: 'Depression', image: '/ads/depression1.png' },
        { name: 'Anxiety', image: '/ads/anxiety.png' },
        { name: 'Obsessive Compulsive Disorder (OCD)', image: '/ads/ocd1.png' },
        { name: 'Adult ADHD', image: '/ads/adhd1.png' }
    ]

    const symptoms = [
        { name: 'Feeling Sad', icon: '/ads/sad.png' },
        { name: 'Grief', icon: '/ads/grief.png' },
        { name: 'Hopelessness', icon: '/ads/hopeless.png' },
        { name: 'Excessive worry', icon: '/ads/excessive.png' },
        { name: 'Fear', icon: '/ads/fear.png' },
        { name: 'Panic of doom', icon: '/ads/panic.png' },
        { name: 'Feeling Irritable', icon: '/ads/feeling.png' },
        { name: 'Fear of contamination / germs', icon: '/ads/fear-of.png' },
        { name: 'Washing hand extensively', icon: '/ads/washing.png' },
        { name: 'Unwanted thoughts', icon: '/ads/unwanted.png' },
    ]

    const testimonials = [
        {
            text: "“Dr. Shilpi has been a great help to deal with the stress and turmoil that I have been facing. She is very friendly and easy to talk to. She lends her ear and attention to all the issues and emotional blips that I have been going through. She helps to see things with a different perspective and induces positivity which has greatly helped me cope up with my issues.”.",
            author: "Practo Patient"
        },
        {
            text: "“Dr. Shilpi's non-judgmental demeanor and practical advice during my recent visit left a lasting impression. She genuinely listens, provides achievable solutions, and remains available beyond sessions, which has significantly improved my perspective. Without a doubt, I highly recommend her for her invaluable guidance.”. ",
            author: "Practo Patient"
        },
        {
            text: "“I had severe anxiety & depression few days ago whish was making my life miserable, sooner or later my mom realized that I need to be treated and then we went to Dr. Shilpi…. she is the most calm & humble person I have ever met in my life…. She listened to all my problems patiently & made me understand that sometimes its ok to not be ok…. she is the person whom I trust a lot…. always smiling & her welcoming nature makes me forget all my problems…. Thank u so much Dr. Shilpi for treating me”",
            author: "Saanchi Kochhar"
        }
    ]




    // Automatically change testimonials every 2 seconds


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     // Handle form submission
    // }

    const MobileView = () => {
        return (
            <>
                <div className=" bg-gray-50">
                    {/* Hero Section */}
                    <section
                        className="relative min-h-[200px] bg-cover bg-center flex items-center"
                        style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,188,77,1) 110%), url('/ads/ad1.png')" }}
                    >
                        <div className="bg-opacity-75 w-full h-full flex items-center">
                            <div className="w-full p-2">
                                <div className='flex flex-col items-end'>
                                    <div className='w-1/2 text-end'>
                                        <span className="mb-4 text-[13px] md:text-2xl font-semibold">
                                            Are you or a loved one experiencing symptoms of depression, anxiety, ADHD, OCD or any other condition?
                                        </span>
                                    </div>
                                    <div className='w-1/2 text-end'>
                                        {(location && expertText) ? <p className="text-sm md:text-lg text-white font-bold text-end">
                                            Our Experienced {expertText} are here to help you at our {location}
                                        </p> :
                                            (location) ? <p className="text-sm md:text-lg text-white font-bold text-end">
                                                Our Expert are here to help you at our {location}
                                            </p>
                                                :
                                                <p className="text-sm md:text-lg text-white font-bold text-end">
                                                    Our Experts are available to assist you at a center near your location.
                                                </p>
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Contact Form */}
                    <section className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">

                    <ZohoForm
        containerId="zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk"
        iframeSrc={iframeSrc}
      />
                    </section>

                    {/* What We Treat */}
                    {!condition &&
                        <section className="bg-primary-div mx-auto py-6">
                            <h2 className="mb-12 text-center text-3xl font-bold text-orange-500">What We Treat</h2>
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 px-2">
                                {conditions.map((condition) => (
                                    <div key={condition.name} className="rounded-lg p-4 ">
                                        <div>
                                            <img
                                                src={condition.image}
                                                alt={condition.name}
                                                width={100}
                                                height={100}
                                                className="mb-4 h-[150px] w-full rounded object-cover"
                                            />
                                            <p className="text-center text-orange-500">{condition.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-center justify-center'>
                                <RequestAppointment customStyle={"flex w-full items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"} name="Book a Consultation" />
                            </div>
                        </section>}

                    {/* Symptoms */}
                    <section className="bg-gray-100 py-6">
                        <div className="mx-auto">
                            <h2 className="mb-4 text-center text-3xl font-bold text-orange-500">
                                Are you experiencing any of the following symptoms?
                            </h2>
                            <p className="mb-8 text-center text-gray-600">
                                If Yes, you may benefit from talking to someone
                            </p>
                            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 px-4 lg:grid-cols-6">
                                {symptoms.map((symptom) => (
                                    <div key={symptom.name} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow">
                                        {/* <span className="mb-2 text-3xl">{symptom.icon}</span> */}
                                        <img
                                            src={symptom.icon}
                                            alt={symptom.name}
                                            width={100}
                                            height={100}
                                            className="mb-4 h-[100px] w-full rounded object-cover"
                                        />
                                        <span className="text-sm text-gray-600">{symptom.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 text-center">
                                <button className="rounded bg-orange-500 px-8 py-3 text-white hover:bg-orange-600">
                                    Request an Appointment
                                </button>
                            </div>
                        </div>
                    </section>

                    <AdsCombinePage condition={condition} expertText={expertText} location={location} />

                    {/* Why Choose Us */}
                    <section className="py-8 bg-primary-div">
                        <h2 className="mb-4 text-center text-3xl font-bold text-orange-500">
                            Why Choose Us?
                        </h2>
                        <div className=''>
                            <div className='grid grid-cols-1 justify-center gap-2 '>
                                <div className='flex justify-center'>
                                    <img src="/ads/why.jpg" className='h-[300px]' />
                                </div>
                                <div className="mx-4 space-y-8 ">
                                    <div>
                                        <h3 className="mb-2 text-xl  text-orange-500 font-semibold">
                                            Experienced Clinical {expertText}:
                                        </h3>
                                        <p className="text-gray-600">
                                            They are trained to assess and diagnose and provide right therapy for you.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl  text-orange-500 font-semibold">
                                            Confidential and Supportive Environment:
                                        </h3>
                                        <p className="text-gray-600">
                                            Your privacy is our priority. We provide a safe and welcoming space for you to discuss your concerns and work towards recovery.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-6'>
                            <RequestAppointment customStyle={"flex  items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"} name="Request an Appointment" />
                        </div>
                    </section>
                </div>
            </>
        )
    }



    const DesktopView = () => {
        return (
            <>
                <div className=" bg-gray-50">
                    {/* Hero Section */}
                    <section
                        className=" bg-cover h-[70vh] bg-center flex items-center justify-between md:px-[10px] lg:px-[50px] xl:px-[100px] "
                        style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,188,77,1) 200%), url('/ads/banner.png')" }}
                    >
                        <div className="bg-opacity-75 w-full h-full flex items-end px-6">
                            <div className="w-full p-2">
                                <div className='mb-6'>
                                    <span className="mb-4 text-[13px] md:text-2xl text-white  font-bold ">
                                        Are you or a loved one experiencing symptoms of depression, anxiety, ADHD, OCD or any other condition?
                                    </span>
                                </div>
                                {(location && expertText) ? <p className="text-sm md:text-2xl text-orange-400 font-bold text-start">
                                    Our Experienced {expertText} are here to help you at our {location}
                                </p> :
                                    (location) ? <p className="text-sm md:text-2xl text-orange-400 font-bold text-start">
                                        Our Expert are here to help you at our {location}
                                    </p>
                                        :
                                        <p className="text-sm md:text-2xl text-orange-400 font-bold text-start">
                                            Our Experts are available to assist you at a center near your location.
                                        </p>
                                }
                            </div>
                        </div>
                        {/* Contact Form */}
                        <ContactForm />


                    </section>





                    {/* Symptoms */}
                    <section className="bg-gray-100 py-8">
                        <Container maxWidth="lg">
                            <div className="mx-auto">
                                <h2 className="mb-4 text-center text-4xl font-bold text-orange-500">
                                    Are you experiencing any of the following symptoms?
                                </h2>
                                <p className="mb-8 text-xl text-center text-gray-600">
                                    If Yes, you may benefit from talking to someone
                                </p>
                                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 px-4 lg:grid-cols-5">
                                    {symptoms.map((symptom) => (
                                        <div key={symptom.name} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow">
                                            {/* <span className="mb-2 text-3xl">{symptom.icon}</span> */}
                                            <img
                                                src={symptom.icon}
                                                alt={symptom.name}
                                                width={100}
                                                height={100}
                                                className="mb-4 h-[123px] w-full rounded object-cover"
                                            />
                                            <span className="text-sm text-gray-600">{symptom.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 text-center">
                                    <button className="rounded bg-orange-500 px-8 py-3 text-white hover:bg-orange-600">
                                        Request an Appointment
                                    </button>
                                </div>
                            </div>
                        </Container>
                    </section>
                    {/* What We Treat */}
                    {!condition && <section className="bg-primary-div mx-auto py-6">
                        <Container maxWidth="lg">
                            <h2 className="mb-12 text-center text-3xl font-bold text-orange-500">What We Treat</h2>
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 px-2">
                                {conditions.map((condition) => (
                                    <div key={condition.name} className="rounded-lg p-4 ">
                                        <div>
                                            <img
                                                src={condition.image}
                                                alt={condition.name}
                                                width={100}
                                                height={100}
                                                className="mb-4 h-[280px] w-full rounded object-cover"
                                            />
                                            <p className="text-center text-lg font-semibold text-orange-500">{condition.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-center justify-center'>
                                <RequestAppointment customStyle={"flex  items-center justify-center gap-2 rounded bg-orange-500 py-3 px-8 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"} name="Book a Consultation" />
                            </div>
                        </Container>
                    </section>}

                    <AdsCombinePage condition={condition} expertText={expertText} location={location} />
                    {/* our experts */}
                    {/* <div className='bg-primary-div'>
                        <ClinicLocationDoctors city={city} />
                    </div> */}

                    {/* Why Choose Us */}
                    <section className="py-8 bg-primary-div">
                        <h2 className="mb-4 text-center text-3xl font-bold text-orange-500">
                            Why Choose Us?
                        </h2>
                        <div className='flex justify-center'>
                            <div className='flex items-center justify-between  gap-2 mx-10 w-[800px] '>
                                <img src="/ads/why.jpg" className='h-[400px] rounded-lg' />
                                <div className="mx-4 space-y-8 ">
                                    <div>
                                        <h3 className="mb-2 text-xl  text-orange-500 font-semibold">
                                            Experienced Clinical {expertText}:
                                        </h3>
                                        <p className="text-gray-600">
                                            They are trained to assess and diagnose and provide right therapy for you.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl  text-orange-500 font-semibold">
                                            Confidential and Supportive Environment:
                                        </h3>
                                        <p className="text-gray-600">
                                            Your privacy is our priority. We provide a safe and welcoming space for you to discuss your concerns and work towards recovery.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-6'>
                            <RequestAppointment customStyle={"flex  items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"} name="Request an Appointment" />
                        </div>
                    </section>




                </div>
            </>
        )
    }


    return (
        <>
            <div className='md:hidden'>
                <MobileView />
            </div>
            <div className='hidden md:block'>
                <DesktopView />
            </div>
        </>
    )
}
