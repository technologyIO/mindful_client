
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
    const cleanCondition = condition ? condition?.replace(/%20/g, ' ').replace(/,/g, '') : ""

    const upperCaseCondition = ['ocd']
    // for zoho
    const iframeSrc =
        "https://forms.zohopublic.in/nikhilmindf1/form/RequestanAppointment/formperma/GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk?zf_rszfm=1";
    const containerId = "zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk"
    // console.log('location', params.location)

    const city = params.location;
    const expertCondition = params.general;
    const location = city === 'gk' ? 'New Delhi - Greater Kailash 1' : city === 'wf' ? 'Bengaluru - Whitefield' : city === 'hb' ? 'Bengaluru - Hebbal' : '';

    const locationContent = {
        "gk": {
            city: 'New Delhi',
            area: "Greater Kailash 1", 
            iframeSrc:"https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationLPGK/formperma/ZSzbxKx_hXcJlDGEB0w3ryiWi8oK-NfameMJkXw7mi4"
        },
        "wf": {
            city: 'Bengaluru',
            area: "Whitefield (Varthur Road)"
        },
        "hb": {
            city: 'Bengaluru',
            area: "Hebbal (Aster CMI Hospital)"
        }
    }

    const expertText = expertCondition === 'psychologist' ? 'Psychologist' : expertCondition === 'psychiatrist' ? 'Psychiatrist' : 'Psychologist';

    const conditions = [
        { name: 'Depression', image: '/ads/depression1.png' },
        { name: 'Anxiety', image: '/ads/anxiety.png' },
        { name: 'Obsessive Compulsive Disorder (OCD)', image: '/ads/ocd1.png' },
        { name: 'Adult ADHD', image: '/ads/adhd1.png' }
    ]

    const symptomsDynamic = [
        { id: 1, symptom: "Excessive Worrying", description: "Constant and overwhelming worry about various aspects of life.", category: "Anxiety", icons: "Excessive Worrying.png" },
        { id: 2, symptom: "Restlessness", description: "Inability to relax and feeling tense.", category: "Anxiety", icons: "Restlessness.png" },
        { id: 3, symptom: "Fatigue", description: "Persistent tiredness and lack of energy despite adequate rest.", category: "Anxiety", icons: "Fatigue.png" },
        { id: 4, symptom: "Difficulty Concentrating", description: "Trouble focusing, remembering, or making decisions.", category: "Anxiety", icons: "Difficulty Concentrating.png" },
        { id: 5, symptom: "Muscle Tension", description: "Persistent muscle tightness or soreness without physical exertion.", category: "Anxiety", icons: "Muscle Tension.png" },
        { id: 6, symptom: "Sleep Disturbances", description: "Problems falling asleep, staying asleep, or experiencing restful sleep.", category: "Anxiety", icons: "Sleep Disturbances.png" },
        { id: 7, symptom: "Irritability", description: "Easily annoyed or frustrated.", category: "Anxiety", icons: "Irritability.png" },
        { id: 8, symptom: "Gastrointestinal Issues", description: "Digestive problems like stomachaches or diarrhea.", category: "Anxiety", icons: "Gastrointestinal Issues.png" },
        { id: 9, symptom: "Cognitive Impairments", description: "Challenges with memory and concentration.", category: "Anxiety", icons: "Cognitive Impairment.png" },
        { id: 1, symptom: "Persistent Sadness or Emptiness", description: "Ongoing feelings of sadness, hopelessness, or emptiness.", category: "Depression", icons: "Persistent Sadness or Emptiness.png" },
        { id: 2, symptom: "Loss of Interest in Activities", description: "No longer enjoying hobbies or activities that were once pleasurable.", category: "Depression", icons: "Loss of Interest in Activities.png" },
        { id: 3, symptom: "Changes in Appetite or Weight", description: "Significant weight loss or gain, or changes in eating habits.", category: "Depression", icons: "Changes in Appetite or Weight.png" },
        { id: 4, symptom: "Fatigue or Low Energy", description: "Constantly feeling tired or lacking energy despite adequate rest.", category: "Depression", icons: "Fatigue or Low Energy.png" },
        { id: 5, symptom: "Difficulty Concentrating", description: "Trouble focusing, remembering, or making decisions.", category: "Depression", icons: "Difficulty Concentrating.png" },
        { id: 6, symptom: "Feelings of Worthlessness or Guilt", description: "Feeling worthless, excessively guilty, or self-critical.", category: "Depression", icons: "Feelings of Worthlessness or Guilt.png" },
        { id: 7, symptom: "Sleep Disturbances", description: "Problems falling asleep, staying asleep, or experiencing restful sleep.", category: "Depression", icons: "Sleep Disturbances.png" },
        { id: 8, symptom: "Psychomotor Agitation or Retardation", description: "Moving or speaking slowly, or feeling restless and unable to sit still.", category: "Depression", icons: "Psychomotor Agitation or Retardation.png" },
        { id: 9, symptom: "Thoughts of Death or Suicide", description: "Persistent thoughts about death or suicide, planning, or attempting suicide.", category: "Depression", icons: "Thoughts of Death or Suicide.png" },
        { id: 1, symptom: "Persistent Sadness or Emptiness", description: "Ongoing feelings of sadness, hopelessness, or emptiness.", category: "General", icons: "Persistent Sadness or Emptiness.png" },
        { id: 2, symptom: "Excessive Worrying", description: "Constant and overwhelming worry about various aspects of life without reason.", category: "General", icons: "Excessive Worrying.png" },
        { id: 3, symptom: "Loss of Interest in Activities", description: "No longer enjoying hobbies or activities once pleasurable.", category: "General", icons: "Loss of Interest in Activities.png" },
        { id: 4, symptom: "Intrusive Thoughts", description: "Unwanted, persistent thoughts that are difficult to control.", category: "General", icons: "Intrusive Thoughts.png" },
        { id: 5, symptom: "Repetitive Behaviors (Compulsions)", description: "Engaging in repetitive actions to reduce anxiety, such as hand-washing or checking locks.", category: "General", icons: "Repetitive Behaviors.png" },
        { id: 6, symptom: "Panic Attacks", description: "Sudden episodes of intense fear with physical symptoms like heart racing, sweating, shaking.", category: "General", icons: "Panic Attacks.jpg" },
        { id: 7, symptom: "Restlessness", description: "Inability to relax and feeling tense or keyed up.", category: "General", icons: "Restlessness.png" },
        { id: 8, symptom: "Sleep Disturbances", description: "Problems falling asleep, staying asleep, or experiencing restful sleep.", category: "General", icons: "Sleep Disturbances.png" },
        { id: 9, symptom: "Difficulty Concentrating", description: "Trouble focusing, remembering, or making decisions.", category: "General", icons: "Difficulty Concentrating.png" },
        { id: 1, symptom: "Intrusive Thoughts", description: "Unwanted, persistent thoughts that are difficult to control.", category: "OCD", icons: "Intrusive Thoughts.png" },
        { id: 2, symptom: "Repetitive Behaviors (Compulsions)", description: "Engaging in actions to reduce anxiety from obsessions, such as hand-washing or checking locks.", category: "OCD", icons: "Repetitive Behaviors.png" },
        { id: 3, symptom: "Need for Order and Symmetry", description: "Strong desire for things to be arranged in a specific, orderly manner.", category: "OCD", icons: "Need for Order and Symmetry.png" },
        { id: 4, symptom: "Excessive Cleaning or Washing", description: "Frequent hand-washing or cleaning rituals to remove perceived contaminants.", category: "OCD", icons: "Excessive Cleaning or Washing.png" },
        { id: 5, symptom: "Checking Rituals", description: "Repeatedly checking things like locks, lights, or appliances to prevent a feared event.", category: "OCD", icons: "Checking Rituals.png" },
        { id: 6, symptom: "Counting or Repeating", description: "Performing actions a certain number of times to feel better.", category: "OCD", icons: "Counting or Repeating.png" },
        { id: 7, symptom: "Arranging Items", description: "Organizing items until they feel 'just right.'", category: "OCD", icons: "Arranging Items.png" },
        { id: 8, symptom: "Mental Compulsions", description: "Engaging in mental acts like praying or counting to neutralize obsessive thoughts.", category: "OCD", icons: "Mental Compulsions.png" },
        { id: 9, symptom: "Avoidance of Triggers", description: "Avoiding situations that trigger obsessions, leading to limiting behaviors.", category: "OCD", icons: "Avoidance of Triggers.png" },
        { id: 6, symptom: "Clumsiness or Physical Discomfort", description: "Feeling physically awkward or uncomfortable in certain situations.", category: "Social Anxiety", icons: "Clumsiness or Physical Discomfort.png" },
        { id: 7, symptom: "Excessive Self-Monitoring", description: "Constantly checking oneself or behavior to ensure it is acceptable.", category: "Social Anxiety", icons: "Excessive Self-Monitoring.png" },
        { id: 8, symptom: "Difficulty Speaking", description: "Struggling to speak in groups or public settings.", category: "Social Anxiety", icons: "Difficulty Speaking.png" },
        { id: 1, symptom: "Intense Fear of Social Situations", description: "Extreme anxiety in social interactions or performance settings.", category: "Social Anxiety", icons: "Intense Fear of Social Situations.png" },
        { id: 9, symptom: "Avoiding Eye Contact", description: "Avoiding eye contact during interactions to reduce anxiety.", category: "Social Anxiety", icons: "Avoiding Eye Contact.png" },
        { id: 2, symptom: "Avoidance of Social Interactions", description: "Steering clear of social gatherings or interactions to prevent anxiety.", category: "Social Anxiety", icons: "Avoidance of Social Interactions.png" },
        { id: 3, symptom: "Physical Symptoms in Social Settings", description: "Experiencing blushing, sweating, or trembling when interacting with others.", category: "Social Anxiety", icons: "Physical Symptoms in Social Settings.png" },
        { id: 4, symptom: "Self-Consciousness", description: "Being overly concerned about how others perceive you.", category: "Social Anxiety", icons: "Self-Consciousness.png" },
        { id: 5, symptom: "Fear of Being Judged", description: "Worrying about being judged or embarrassed by others.", category: "Social Anxiety", icons: "Fear of Being Judged.png" },
    ]


    const addContent = {
        header_general: `Are you looking for an experienced ${expertText} and a safe space?`,
        header_condition: `Break Free from ${cleanCondition}. Your Journey to mental peace starts here.`,
        subheader_general: `We help people with anxiety, depression, OCD, grief, trauma, and more. Whether you're facing stress, seeking personal growth, or need someone to talk to, our compassionate ${expertText}s are here for you.`,
        subheader_condition: `Our compassionate ${expertText} are here to support you on your journey to mental peace. Together, we can break free from ${cleanCondition}.`,
    }


    const MobileView = () => {
        return (
            <>
                <div className=" bg-gray-50">
                    {/* Hero Section */}
                    <section
                        className="relative min-h-[200px] bg-cover bg-center flex items-center"
                        // style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,188,77,1) 200%), url('/ads/ad1.png')" }}
                        style={{ backgroundImage: " url('/ads/ad1.png')" }}

                    >
                        <div className="bg-opacity-75 w-full h-full flex items-center">
                            <div className="w-full p-2">
                                <div className='flex flex-col items-end'>

                                    {/* <div className=' text-end'> */}
                                        {/* sub header */}
                                        {/* {cleanCondition ? <p className="text-sm  text-white font-bold text-start">
                                            Our compassionate and skilled {expertText}s will help you understand your {condition}, learn effective coping mechanisms and achieve positive change.
                                        </p> :
                                            <p className="text-sm  text-white font-bold text-start">
                                                We help people with anxiety, depression, OCD, grief, trauma, and more. Whether you're facing stress, seeking personal growth, or need someone to talk to, our compassionate {expertText}s are here for you.
                                            </p>} */}
                                    {/* </div> */}
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className=' mx-4 mt-5'>
                        <div className='text-center '>
                            {cleanCondition ? <h1 className="mb-4 text-2xl  text-orange-500  font-bold ">
                                Break Free from <span className={`${upperCaseCondition.includes(cleanCondition) ? "uppercase" : ""}`}>{cleanCondition}</span>. Your Journey to mental peace starts here.
                            </h1> :
                                <h1 className="mb-4 text-2xl  text-orange-500  font-bold ">
                                    Are you looking for an experienced {expertText} and a safe space?
                                </h1>}
                        </div>
                        <div className='mb-5'>
                            <div className='text-lg text-center text-gray-600'>
                            {cleanCondition ? <p className="">
                                            Our compassionate and skilled {expertText}s will help you understand your {condition}, learn effective coping mechanisms and achieve positive change.
                                        </p> :
                                            <p className="">
                                                We help people with anxiety, depression, OCD, grief, trauma, and more. Whether you're facing stress, seeking personal growth, or need someone to talk to, our compassionate {expertText}s are here for you.
                                            </p>}
                            </div>
                        </div>
                    </section>

                    {/* Contact Form */}
                    <section className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">

                        <ZohoForm
                            containerId="zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk"
                            iframeSrc={locationContent[city].iframeSrc || iframeSrc }
                        />
                        {condition ? <h3 className='text-gray-600 text-lg  text-center'>Embrace a healthier, happier life with personalized.<br /> Book a Session at our {locationContent[city].area} clinic in {locationContent[city].city}</h3>
                            : <h3 className='text-gray-600 text-lg  text-center'>Start your healing by booking a Consultation at our {locationContent[city].area} clinic in {locationContent[city].city}</h3>}

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
                    {condition && <ShowSymptoms category={cleanCondition} />}

                    <AdsCombinePage condition={cleanCondition} expertText={expertText} location={location} />

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
                        className=" bg-cover h-[80vh] bg-center flex items-center justify-between md:px-[10px] lg:px-[50px] xl:px-[100px] "
                        style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,188,77,1) 200%), url('/ads/banner.png')" }}
                    >
                              {/* to-[#ffffff1a] */}
                            {/* w-full bg-gradient-to-r */}
                              
                        <div className="bg-opacity-75 w-full h-full flex items-end px-6 py-5">
                            <div className="
                             bg-[#fb923ca8] 
                               rounded-lg  px-3 py-3">
                                <div className='mb-3'>
                                    {/* header */}
                                    {/* if condition then or not  */}
                                    {cleanCondition ? <h1 className="mb-2 text-5xl  text-white  font-bold ">
                                        Break Free from <span className={`${upperCaseCondition.includes(cleanCondition) ? "uppercase" : "capitalize"}`}>{cleanCondition}</span>. 
                                    </h1> :
                                        <h1 className="mb-2 text-5xl  text-white  font-bold ">
                                            Are you looking for an experienced {expertText} and a safe space?
                                        </h1>}
                                </div>

                                {/* sub header */}
                                {cleanCondition ? <p className="text-2xl  text-white font-bold text-start">
                                    Our compassionate and skilled {expertText}s will help you understand your {condition}, learn effective coping mechanisms and achieve positive change.
                                </p> :
                                    <p className="text-2xl  text-white font-bold text-start">
                                        We help people with anxiety, depression, OCD, grief, trauma, and more. Whether you're facing stress, seeking personal growth, or need someone to talk to, our compassionate {expertText}s are here for you.
                                    </p>}
                               
                            </div>
                        </div>
                        {/* Contact Form */}
                        <div className='flex flex-col items-center'>
                            {/* {condition ? <h3 className='text-white text-xl font-semibold text-center'>Embrace a healthier, happier life with personalized. Book a Session at our {locationContent[city].area} clinic in {locationContent[city].city}</h3>
                                : <h3 className='text-white text-xl font-semibold text-center'>Start your healing by booking a Consultation at our {locationContent[city].area} clinic in {locationContent[city].city}</h3>} */}
                            <ContactForm iframeSrc={locationContent[city].iframeSrc || iframeSrc}/>
                        </div>


                    </section>





                    {/* Symptoms */}
                    {condition && <ShowSymptoms category={cleanCondition} />}
                    {/* What We Treat */}
                    {!cleanCondition && <section className="bg-primary-div mx-auto py-6">
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

                    <AdsCombinePage condition={cleanCondition} expertText={expertText} location={location} />
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

    const ShowSymptoms = ({ category }) => {
        const filteredSymptoms = symptomsDynamic?.filter((symptom) => symptom?.category.toLowerCase() === category?.toLowerCase());
        return (
            <>
                {/* Symptoms */}
                <section className="bg-gray-100 py-8">
                    <Container maxWidth="lg">
                        <div className="mx-auto">
                            <h2 className="mb-4 text-center text-2xl md:text-3xl font-bold text-orange-500">
                                Are you experiencing any of the following symptoms?
                            </h2>
                            <p className="mb-8 text-lg text-center text-gray-600">
                                If Yes, you may benefit from talking to someone
                            </p>
                            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 px-4 lg:grid-cols-5">
                                {filteredSymptoms.map((symptom) => (
                                    <div key={symptom.name} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow">
                                        <img
                                            src={`/Symptom Icons/${symptom.icons}`}
                                            alt={symptom.symptom}
                                            width={100}
                                            height={100}
                                            className="mb-4 h-[123px] w-full rounded object-contain"
                                        />
                                        <span className="text-sm text-gray-600">{symptom.symptom}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-center justify-center mt-6'>
                                <RequestAppointment customStyle={"flex  items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"} name="Request an Appointment" />
                            </div>
                        </div>
                    </Container>
                </section>
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