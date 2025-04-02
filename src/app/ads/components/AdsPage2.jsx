"use client"
import React from 'react'
import Image from 'next/image'
import { Container } from '@mui/material'
import { useEffect, useState } from 'react'
// import {
//   ClipboardCheckIcon, BeakerIcon, UserIcon, ClockIcon,
//   EmojiSadIcon,
//   ExclamationIcon,
//   RefreshIcon,
//   LightningBoltIcon,
//   AdjustmentsIcon,
//   UserGroupIcon,
// } from '@heroicons/react/outline'
import TestimonialComponentSlideV2 from '@/app/component/TestimonialComponentSlideV2'
import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment'
import { adsPageContent } from '@/adsPageContent'
import DoctorsSection from './DoctorsSection'
const AdsPage2 = ({ params }) => {

  const experts = [

    {
      id: "66ffa28f6a3f2ccdb194b62a",
      name: "Dr. Sandeep Govil",
      title: "Psychiatrist",
      image: "https://mindfultms1.s3.us-east-1.amazonaws.com/1733302040781-sandeep.webp",
    },
    {
      id: "6720e7e38de82da2acfe7a98",
      name: "Ms. Sonali Das",
      title: "Clinical Psychologist",
      image: "https://mindfultms1.s3.us-east-1.amazonaws.com/1733302104083-sonali.webp",
    },
    {
      id: "66fe4d3a6a3f2ccdb194af4b",
      name: "Ms. Shilpi Sharma",
      title: "Counselling Psychologist",
      image: "https://mindfultms1.s3.us-east-1.amazonaws.com/1742884185829-dr.shilpisharma.png",
    },
    {
      id: "66ffa1856a3f2ccdb194b61d",
      name: "Dr. Shubham Narnoli",
      title: "Psychiatrist",
      image: "https://mindfultms1.s3.us-east-1.amazonaws.com/1733302025490-shubham.webp",
    },
  ];


  const WhatWeTreat = [
    { name: 'Depression', image: '/ads/what_we_treat/psychology.png' },
    { name: 'Anxiety', image: '/ads/what_we_treat/anxiety (1).png' },
    { name: 'OCD', image: '/ads/what_we_treat/ocd.png' },
    { name: 'Adult ADHD', image: '/ads/what_we_treat/adhd.png' },
    { name: 'Stress concerns', image: '/ads/what_we_treat/marks.png' },
    { name: 'Personality disorders', image: '/ads/what_we_treat/personality-disorder.png' },
    // { name: 'Adjustment disorders', image: '/ads/what_we_treat/dissociative-identity-disorder.png' },


  ]


  const [queryString, setQueryString] = useState("");
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
  const expertService = params.service;
  const location = city === 'gk' ? 'New Delhi - Greater Kailash 1' : city === 'wf' ? 'Bengaluru - Whitefield' : city === 'hb' ? 'Bengaluru - Hebbal' : '';
  const expertText = expertService === 'psychologist' ? 'Psychologist' : expertService === 'psychiatrist' ? 'Psychiatrist' : expertService === 'therapist' ? "therapist" : 'Psychologist';
  console.log(expertService)

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

  const currentPageContent = adsPageContent[city]?.[expertService]?.[current_condition];


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



  const Show_what_we_treat = () => {
    return (
      <section className="bg-[#FDE4BB] py-5">
        <Container maxWidth="lg">
          {/* Heading */}
          <h2 className="mb-7 text-center text-3xl font-bold  text-gray-800">
            What We Treat
          </h2>
          {/* Subheading */}
          {/* <p className="mb-8 text-center text-gray-600 max-w-xl mx-auto">
            Our platform is built by psychiatrists, therapists, and mental
            health experts with immense global experience.
          </p> */}

          {/* Grid of conditions */}
          <div className="grid grid-cols-3 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
            {WhatWeTreat.map((condition) => (
              <div
                key={condition.name}
                className="flex flex-col items-center text-center"
              >
                {/* Icon wrapper */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500">
                  <img
                    src={condition.image}
                    alt={condition.name}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                {/* Title */}
                <p className="text-base md:text-lg font-semibold text-orange-500">
                  {condition.name}
                </p>
              </div>
            ))}
          </div>

          {/* Button at the bottom */}
          <div className="mt-6 flex items-center justify-center ">
          <RequestAppointment
            iframeSrc={locationContent[city]?.iframeSrc || iframeSrc}
            customStyle="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 px-8 text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg"
            name="Book a Consultation"
          />
        </div>
        </Container>
      </section>
    );
  };


  const SymptomsSection = () => {
    const symptoms = [
      { src: "/Symptom Icons/Intrusive Thoughts.png", alt: "Intrusive Thoughts" },
      {
        src: "/Symptom Icons/Repetitive Behaviors.png",
        alt: "Repetitive Behaviors (Compulsions)",
      },
      { src: "/Symptom Icons/Need for Order and Symmetry.png", alt: "Need for Order and Symmetry" },
      { src: "/Symptom Icons/Excessive Cleaning or Washing.png", alt: "Excessive Cleaning or Washing" },
      { src: "/Symptom Icons/Checking Rituals.png", alt: "Checking Rituals" },
      { src: "/Symptom Icons/Counting or Repeating.png", alt: "Counting or Repeating" },
      { src: "/Symptom Icons/Arranging Items.png", alt: "Arranging Items" },
      { src: "/Symptom Icons/Mental Compulsions.png", alt: "Mental Compulsions" },
      { src: "/Symptom Icons/Avoidance of Triggers.png", alt: "Avoidance of Triggers" },
    ];

    return (
      <section className=" py-12 bg-[#FDE4BB]">
        <div className="mx-auto max-w-7xl px-4">
          {/* Heading */}
          <h2 className="mb-4 text-center text-3xl font-bold ">
            Are you experiencing any of the following symptoms?
          </h2>


          {/* Grid of Symptoms */}
          <div className="grid grid-cols-3  md:gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {symptoms.map((symptom, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg  p-3 text-center  transition-transform duration-200  "
              >
                <Image
                  src={symptom.src}
                  alt={symptom.alt}
                  width={100}
                  height={100}
                  className="mb-4 h-[80px] w-auto object-contain"
                />
                <span className="text-sm font-medium text-gray-700">{symptom.alt}</span>
              </div>
            ))}
          </div>

          <p className="mb-4 mt-8 text-center text-base font-semibold text-gray-600">
            If you are feeling any of these symptoms, you may benefit from talking to someone.
          </p>
          {/* Call-to-action Button */}
          <div className="mt-6 flex items-center justify-center ">
          <RequestAppointment
            iframeSrc={locationContent[city]?.iframeSrc || iframeSrc}
            customStyle="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 px-8 text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg"
            name="Book a Consultation"
          />
        </div>
        </div>
      </section>
    );
  };

  //   const htmlContent = {
  //     "lp_hero_subtitle": `<p>
  //     Experience individualizedddd care from experienced psychiatrists committed to improving your quality of life.<br><br><b>We help with:</b><br/>Anxiety | Depression | OCD | Bipolar Disorder | PTSD | Schizophrenia |\nand more.</p>`,
  //   }

  return (
    <>
      <Container maxWidth="lg">
        <section className="bg-white pb-8 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[500px] overflow-hidden rounded-xl md:rounded-full shadow-lg">
                <Image
                  src="https://mindfultms.in/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fmwpcmpi5v%2F1733372630195-illustration_20_281_29.webp%3FupdatedAt%3D1733819155146&w=1200&q=75"
                  alt="Illustration of a woman looking upwards, symbolizing hope and guidance"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-left order-2 md:order-1">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 tracking-wide">
                {currentPageContent?.lp_hero_title}
              </h1>

              <div className="text-gray-700 text-base md:text-lg mb-4" dangerouslySetInnerHTML={{ __html: currentPageContent?.lp_hero_subtitle }} />
              {/* <p className="text-gray-700 text-base md:text-lg mb-4">
                Get individualized care from dedicated psychiatrists committed to improving your quality of life.
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-semibold">We help with:</span>
                <br />
                Anxiety | Depression | OCD | Bipolar Disorder | PTSD | Schizophrenia | and more.
              </p> */}
              <div className="mt-6 flex items-center justify-center md:justify-start">
                <RequestAppointment
                  iframeSrc={locationContent[city]?.iframeSrc || iframeSrc}
                  customStyle="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 px-8 text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg"
                  name="Book a Consultation"
                />
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* expert */}

      <section className="py-8 px-4 bg-[#FDE4BB]">
        <DoctorsSection expertService={expertService} location={location} expertText={expertText} />
        <div className="mt-6 flex items-center justify-center ">
          <RequestAppointment
            iframeSrc={locationContent[city]?.iframeSrc || iframeSrc}
            customStyle="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 px-8 text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg"
            name="Book a Consultation"
          />
        </div>
      </section>


      {/* client speaks */}
      <section className='py-5 px-1 bg-gray-100 '>

        <TestimonialComponentSlideV2 smallDevice={true} location={location} />

      </section>

   {!condition &&   <div>
        <Show_what_we_treat />
        
      </div>}

    {condition &&  <div>
        <SymptomsSection />
      </div>}

      {/* why mindfultms section */}
      <section className="py-8 ">
        <Container maxWidth="lg">
          <h2 className="mb-6 text-center text-3xl md:text-3xl font-bold text-orange-500">
            Why MindfulTMS?
          </h2>
          <div className=" mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  src="/ads/ads2/Delhi3.webp"
                  alt="MindfulTMS clinic"
                  className="h-[300px] md:h-[350px] w-full object-cover rounded-xl"
                />
              </div>
              {/* Content Section */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold">
                    A  safe and supportive space
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    Your privacy is our priority. We offer a safe, welcoming space to discuss your concerns and work towards recovery.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold">
                    Confidential and Supportive Environment:
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    Your privacy is our priority. We offer a safe, welcoming space to discuss your concerns and work towards recovery.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold">
                    Experienced Clinical Team:
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    Our clinicians are trained to assess, diagnose, and provide the right therapy for you.
                  </p>
                </div>

              </div>
            </div>
            <div className="flex items-center justify-center mt-8">
              {/* Uncomment and adjust the RequestAppointment component as needed */}
              {/*
      <RequestAppointment 
        iframeSrc={locationContent[city]?.iframeSrc || iframeSrc} 
        customStyle="flex items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10" 
        name="Request an Appointment" 
      />
      */}
            </div>

            <div className=" flex items-center justify-center">
              <RequestAppointment
                customStyle="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 px-8 text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg"
                name="Book a Consultation"
              />
            </div>
          </div>
        </Container>


      </section>

      {/* why mindfultms section */}
      <section className="py-8 ">
        <Container maxWidth="lg">
          <h2 className="mb-6 text-center text-3xl md:text-3xl font-bold text-orange-500">
            Our Location
          </h2>
          <div className=" mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  src="/ads/ads2/Delhi3.webp"
                  alt="MindfulTMS clinic"
                  className="h-[300px] md:h-[350px] w-full object-cover rounded-xl"
                />
              </div>
              {/* Content Section */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold">
                    A  safe and supportive space
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    Your privacy is our priority. We offer a safe, welcoming space to discuss your concerns and work towards recovery.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold">
                    Confidential and Supportive Environment:
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    Your privacy is our priority. We offer a safe, welcoming space to discuss your concerns and work towards recovery.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold">
                    Experienced Clinical Team:
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    Our clinicians are trained to assess, diagnose, and provide the right therapy for you.
                  </p>
                </div>

              </div>
            </div>
            <div className="flex items-center justify-center mt-8">
              {/* Uncomment and adjust the RequestAppointment component as needed */}
              {/*
      <RequestAppointment 
        iframeSrc={locationContent[city]?.iframeSrc || iframeSrc} 
        customStyle="flex items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 mx-10" 
        name="Request an Appointment" 
      />
      */}
            </div>

            <div className=" flex items-center justify-center">
              <RequestAppointment
                customStyle="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 px-8 text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg"
                name="Book a Consultation"
              />
            </div>
          </div>
        </Container>


      </section>

    </>
  )
}

export default AdsPage2