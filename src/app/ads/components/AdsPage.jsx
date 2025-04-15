
"use client"
import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment'

import AdsCombinePage from '../components/AdsCombinePage'
import { Container } from '@mui/material'

import { useEffect, useState } from 'react'
import { adsPageContent } from '@/adsPageContent'
export default function AdsPage({ params }) {
    const [queryString, setQueryString] = useState("");
    const [expertCondition, setExpertCondition] = useState("");
    const condition = params.condition == "general" ? "" : params.condition || ""
    const current_condition = params.condition
    const cleanCondition = condition ? condition?.replace(/%20/g, ' ').replace(/,/g, '') : ""

    const upperCaseCondition = ['ocd']
    // for zoho
    const iframeSrc =
        "https://forms.zohopublic.in/nikhilmindf1/form/RequestanAppointment/formperma/GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk?zf_rszfm=1";
    const containerId = "zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk"
    // console.log('location', params.location)
    useEffect(() => {
        // Check if running in the browser
        if (typeof window !== 'undefined') {
            setQueryString(window.location.search); // Get the query string
            console.log(window.location.search)
        }
    }, []);

    const city = params.location;
    // const urlParts = window.location.pathname.split('/');
    // const expertCondition = urlParts[urlParts.indexOf('ads') + 1];
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setQueryString(window.location.search);

            const urlParts = window.location.pathname.split('/');
            const conditionFromUrl = urlParts[urlParts.indexOf('ads') + 1];
            setExpertCondition(conditionFromUrl);
        }
    }, []);
    const location = city === 'gk' ? 'New Delhi - Greater Kailash 1' : city === 'wf' ? 'Bengaluru - Whitefield' : city === 'hb' ? 'Bengaluru - Hebbal' : '';
    const expertText = expertCondition === 'psychologist' ? 'Psychologist' : expertCondition === 'psychiatrist' ? 'Psychiatrist' : expertCondition === 'therapist' ? "therapist" : 'Psychologist';

    const locationContent = {
        "gk": {
            city: 'New Delhi',
            area: "Greater Kailash 1",
            iframeSrc: `https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationLPGK/formperma/ZSzbxKx_hXcJlDGEB0w3ryiWi8oK-NfameMJkXw7mi4${queryString}`,
            price: expertText === "therapist" ? "Therapy from Rs. 1800 to Rs. 2500 per session" : "",
        },
        "wf": {
            city: 'Bengaluru',
            area: "Whitefield (Varthur Road)",
            iframeSrc: `https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationWhitefieldBangalore/formperma/n7UqoYroFADQJ-HqsYjiuY41_3pJKGRkwARxLp1vVDQ${queryString}`,
            price: expertText === "therapist" ? "Therapy at Rs. 1750 per session" : "",
        },
        "hb": {
            city: 'Bengaluru',
            area: "Hebbal (Aster CMI Hospital)",
            iframeSrc: `https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationHebbalBangalore/formperma/RqE9YNKl1bYNAryFgvxELvCqhXm8xkK0jJYOcjk0Htc${queryString}`,
            price: expertText === "therapist" ? "First therapy session at Rs. 1500!" : "",
        }
    }

    const currentPageContent = adsPageContent[city]?.[expertCondition]?.[current_condition];


    const conditions = [
        { name: 'Depression', image: '/ads/what_we_treat/psychology.png' },
        { name: 'Anxiety', image: '/ads/what_we_treat/anxiety (1).png' },
        { name: 'OCD', image: '/ads/what_we_treat/ocd.png' },
        { name: 'Adult ADHD', image: '/ads/what_we_treat/adhd.png' },
        { name: 'Stress concerns', image: '/ads/what_we_treat/marks.png' },
        { name: 'Personality disorders', image: '/ads/what_we_treat/personality-disorder.png' },
        { name: 'Adjustment disorders', image: '/ads/what_we_treat/dissociative-identity-disorder.png' },


    ]

    // const conditions = [
    //     { name: 'Depression', image: '/ads/what_we_treat/psychology.png' },
    //     { name: 'Anxiety', image: '/ads/what_we_treat/anxiety (1).png' },
    //     { name: 'Obsessive Compulsive Disorder (OCD)', image: '/ads/what_we_treat/ocd.png' },
    //     { name: 'Adult ADHD', image: '/ads/what_we_treat/adhd.png' }
    // ]

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
                            {cleanCondition ? <h1 className="mb-4 text-3xl  text-orange-500  font-bold ">
                                Break Free from <span className={`${upperCaseCondition.includes(cleanCondition) ? "uppercase" : "capitalize"}`}>{cleanCondition}</span>.
                            </h1> :
                                <h1 className="mb-4 text-3xl  text-orange-500  font-bold ">
                                    Are you looking for an experienced <span className=''>{expertText}</span>?
                                </h1>}
                        </div>
                        {/* sub header */}
                        <div className='mb-3'>
                            <div className='text-xl text-center text-gray-600'>
                                {cleanCondition ?
                                    // for condition 
                                    <p className="">
                                        Our compassionate and skilled {expertText}s will help you understand your {condition}, learn effective coping mechanisms and achieve positive change.
                                    </p> :
                                    // none condition 
                                    <p className="">
                                        <span className='block mb-2'> We help people with anxiety, depression, OCD, grief, trauma, and more in a safe space. </span>
                                        {`Whether you're facing stress, seeking personal growth, or need someone to talk to, our compassionate `}{expertText}s are here for you.
                                    </p>}
                            </div>
                        </div>
                    </section>

                    {/* Contact Form */}
                    {/* <section className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">

                        <ZohoForm
                            containerId="zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk"
                            iframeSrc={locationContent[city]?.iframeSrc || iframeSrc }
                        />
                        {condition ? <h3 className='text-gray-600 text-lg  text-center'>Embrace a healthier, happier life with personalized.<br /> Book a Session at our {locationContent[city]?.area} clinic in {locationContent[city]?.city}</h3>
                            : <h3 className='text-gray-600 text-lg  text-center'>Start your healing by booking a Consultation at our {locationContent[city]?.area} clinic in {locationContent[city]?.city}</h3>}

                    </section> */}
                    <section className=' mx-4 mt-5 mb-6'>
                        {condition ?
                            <h3 className=' text- text-base text-gray-800 text-center'>
                                Embrace a healthier, happier life with personalized care.
                                <br />
                                Book a Session at our {locationContent[city]?.area} clinic in {locationContent[city]?.city}
                            </h3>
                            : <h3 className=' text-base text-gray-800 text-center'>
                                Start your healing now.
                                <br />
                                Book a Consultation at our {locationContent[city]?.area} clinic in {locationContent[city]?.city}
                            </h3>}
                        {
                            locationContent[city]?.price &&
                            <div className="text-base  text-center text-orange-500 mt-2  font-bold mx-0 px-0 ">
                                {locationContent[city]?.price}
                            </div>
                        }
                        <div className='flex items-center justify-center mt-1'>
                            <RequestAppointment iframeSrc={locationContent[city]?.iframeSrc || iframeSrc} customStyle={"flex w-full  items-center justify-center gap-2 font-semibold rounded bg-orange-500 py-2 text-base text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-2"} icon={`/home/whatsapp2.svg`} iconSize={`w-[40px]`} name={`Request an Appointment`} />
                        </div>


                    </section>



                    {/* What We Treat */}
                    {!condition && <div className=''>
                        <Show_what_we_treat /></div>}

                    {/* Symptoms */}
                    {condition && <ShowSymptoms category={cleanCondition} />}
                    {/* expert */}
                    <AdsCombinePage iframeSrc={locationContent[city]?.iframeSrc || iframeSrc} condition={cleanCondition} expertText={expertText} location={location} />

                    {/* Why Choose Us */}
                    <section className="py-8 bg-primary-div">
                        <h2 className="mb-4 text-center text-3xl font-bold text-orange-500">
                            Why Choose Us?
                        </h2>
                        <div className='text-center'>
                            <div className='grid grid-cols-1 justify-center gap-2 '>
                                <div className='flex justify-center'>
                                    <img src="/ads/why.jpg" className='h-[300px]' />
                                </div>
                                <div className="mx-4 space-y-8 ">
                                    <div>
                                        <h3 className="mb-2 text-xl capitalize text-orange-500 font-semibold">
                                            Experienced Clinical team:
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
                            <RequestAppointment iframeSrc={locationContent[city]?.iframeSrc || iframeSrc} customStyle={"flex  items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"} name="Request an Appointment" />
                        </div>
                    </section>
                </div>
            </>
        )
    }


    const DesktopView = () => {
        return (
            <>
                <div className=" ">
                    {/* Hero Section */}
                    <section
                        className=" bg-cover h-[80vh] bg-center flex items-center justify-between md:px-[10px] lg:px-[50px] xl:px-[100px] "
                        style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,188,77,1) 200%), url('/ads/banner.png')" }}
                    >
                        {/* to-[#ffffff1a] */}
                        {/* w-full bg-gradient-to-r */}

                        <div className="bg-opacity-75 w-full h-full flex items-end px-6 py-10">
                            <div className="
                             bg-[#fb923ca8] 
                               rounded-lg  px-7 py-7">
                                <div className=''>
                                 
                                    {cleanCondition ? <h1 className="mb-2 text-5xl  text-white  font-bold ">
                                        Break Free from <span className={`${upperCaseCondition.includes(cleanCondition) ? "uppercase" : "capitalize"}`}>{cleanCondition}</span>.
                                    </h1> :
                                        <h1 className="mb-2 text-5xl  text-white  font-bold ">
                                            Are you looking for an experienced {expertText}?
                                        </h1>}
                                </div>
                                {/* <h1 className="mb-2 text-5xl  text-white  font-bold ">
                                    {currentPageContent?.lp_hero_title}
                                </h1> */}

                                {/* sub header */}
                                {cleanCondition ? <p className="text-xl  text-white font-bold text-start">
                                    Our compassionate and skilled {expertText}s will help you understand your {condition}, learn effective coping mechanisms and achieve positive change.
                                </p> :
                                    <div className="text-xl  text-white font-bold text-start">
                                        <p className=''>We help people with anxiety, depression, OCD, grief, trauma, and more in a safe space. </p>


                                        {`  Whether you're facing stress, seeking personal growth, or need someone to talk to, our compassionate `} {expertText}s are here for you.
                                    </div>}

                                <div className="text-xl  text-white  text-start">
                                    <p className='font-bold'>{currentPageContent?.lp_hero_subtitle}</p>

                                    <p className='text-lg mt-3'>

                                        {currentPageContent?.hero_description_2}
                                    </p>
                                </div>


                                {/* {condition ?
                                    <h3 className=' text- text-lg text-white text-start mt-2'>
                                        Embrace a healthier, happier life with personalized care.
                                        <br />
                                        Book a Session at our {locationContent[city]?.area} clinic in {locationContent[city]?.city}
                                    </h3>
                                    : <h3 className=' text-lg text-white text-start mt-2'>
                                        Start your healing now.
                                        <br />
                                        Book a Consultation at our {locationContent[city]?.area} clinic in {locationContent[city]?.city}
                                    </h3>} */}

                                <h3 className=' text-lg text-white text-start '>
                                    {
                                        currentPageContent?.hero_description_what_we_offer
                                    }
                                </h3>


                                <div className='flex items-start justify-start mt-4'>
                                    <RequestAppointment iframeSrc={locationContent[city]?.iframeSrc || iframeSrc} icon={`/home/whatsapp2.svg`} iconSize={`w-[40px]`} customStyle={"flex  items-center justify-center gap-2  hover:scale-105 font-semibold  hover:scale-105 outline-none border-none text-lg  rounded bg-white p-3 text-orange-500 hover:bg-gray-200 "} name="Request an Appointment" />

                                </div>


                            </div>
                        </div>
                        {/* Contact Form */}
                        <div className='flex flex-col items-center'>
                            {/* <ContactForm iframeSrc={locationContent[city]?.iframeSrc || iframeSrc}/> */}
                            {/* <RequestAppointment customStyle={"flex  items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"} name="Request an Appointment" /> */}
                        </div>

                        {/* {condition ? <h3 className='text-white text-xl font-semibold text-center'>Embrace a healthier, happier life with personalized. Book a Session at our {locationContent[city]?.area} clinic in {locationContent[city]?.city}</h3>
                                : <h3 className='text-white text-xl font-semibold text-center'>Start your healing by booking a Consultation at our {locationContent[city]?.area} clinic in {locationContent[city]?.city}</h3>} */}

                    </section>





                    {/* Symptoms */}
                    {condition && <ShowSymptoms category={cleanCondition} />}
                    {/* What We Treat */}
                    {!cleanCondition && <Show_what_we_treat />}

                    <div className=' py-5'>
                        <AdsCombinePage iframeSrc={locationContent[city]?.iframeSrc || iframeSrc} condition={cleanCondition} expertText={expertText} location={location} />

                    </div>
                    {/* our experts */}
                    {/* <div className='bg-primary-div'>
                        <ClinicLocationDoctors city={city} />
                    </div> */}

                    {/* Why Choose Us */}
                    <section className="py-8 bg-primary-div ">
                        <h2 className="mb-4 text-center text-3xl font-bold text-orange-500">
                            Why Choose Us?
                        </h2>
                        <div className='flex justify-center'>
                            <div className='flex items-center justify-between  gap-2 mx-10 w-[800px] '>
                                <img src="/ads/why.jpg" className='h-[400px] rounded-lg' />
                                <div className="mx-4 space-y-8 ">
                                    <div>
                                        <h3 className="mb-2 text-xl capitalize text-orange-500 font-semibold">
                                            Experienced Clinical team:
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
                            {/* <RequestAppointment iframeSrc={locationContent[city]?.iframeSrc || iframeSrc} customStyle={"flex  items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"} name="Request an Appointment" /> */}
                            <RequestAppointment iframeSrc={locationContent[city]?.iframeSrc || iframeSrc} customStyle={"flex  items-center justify-center gap-2 rounded bg-orange-500 py-3  hover:scale-105 px-8 text-white rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-200 focus:ring focus:ring-orange-500 mx-10"} name="Book a Consultation" />

                        </div>
                    </section>
                    <hr />

                </div>
            </>
        )
    }

    const ShowSymptoms = ({ category }) => {
        const filteredSymptoms = symptomsDynamic?.filter((symptom) => symptom?.category.toLowerCase() === category?.toLowerCase());
        return (
            <>
                {/* Symptoms */}
                <section className="bg-primary-div py-8">
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
                                    <div key={symptom.name} className="flex flex-col items-center rounded-lg p-6 text-center ">
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
                                <RequestAppointment iframeSrc={locationContent[city]?.iframeSrc || iframeSrc} customStyle={"flex  items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10"} name="Request an Appointment" />
                            </div>
                        </div>
                    </Container>
                </section>
            </>
        )
    }
    const WhatWeTreat = [
        { name: 'Depression', image: '/ads/what_we_treat/psychology.png' },
        { name: 'Anxiety', image: '/ads/what_we_treat/anxiety (1).png' },
        { name: 'OCD', image: '/ads/what_we_treat/ocd.png' },
        { name: 'Adult ADHD', image: '/ads/what_we_treat/adhd.png' },
        { name: 'Stress concerns', image: '/ads/what_we_treat/marks.png' },
        { name: 'Personality disorders', image: '/ads/what_we_treat/personality-disorder.png' },
        // { name: 'Adjustment disorders', image: '/ads/what_we_treat/dissociative-identity-disorder.png' },
    
    
      ]

    const Show_what_we_treat = () => {
        return (
          <section className="bg-primary-div py-5">
            <Container maxWidth="lg">
              {/* Heading */}
              <h2 className="mb-10 mt-4 text-center text-3xl font-bold  text-gray-800">
                What We Treat
              </h2>
              {/* Subheading */}
    
    
              {/* Grid of conditions */}
              <div className="grid grid-cols-3 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
                {WhatWeTreat.map((condition) => (
                  <div
                    key={condition.name}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Icon wrapper */}
                    <div className="mb-4 flex h-[85px] w-[85px] md:h-[130px] md:w-[130px] items-center justify-center rounded-full bg-orange-500">
                      <img
                        src={condition.image}
                        alt={condition.name}
                        className="h-[58px] w-[58px] md:h-[85px] md:w-[85px] object-contain"
                      />
                    </div>
                    {/* Title */}
                    <p className="text-base md:text-lg font-semibold text-gray-700">
                      {condition.name}
                    </p>
                  </div>
                ))}
              </div>
    
              {/* Button at the bottom */}
              {/* <div className="mt-12 mb-6 flex items-center justify-center ">
                <RequestAppointment
                  iframeSrc={locationContent[city]?.iframeSrc || iframeSrc}
                  customStyle={`${RequestAppointmentButton[expertService].style}`}
                  name={RequestAppointmentButton[expertService].text}
                />
              </div> */}
            </Container>
          </section>
        );
      };


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