"use client"
import React from 'react'
import Image from 'next/image'
import { Container } from '@mui/material'
import { useEffect, useState } from 'react'

import TestimonialComponentSlideV2 from '@/app/component/TestimonialComponentSlideV2'
import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment'
import { adsPageContent } from '@/adsPageContent'
import DoctorsSection from './DoctorsSection'
import ImageCarousel from "@/app/clinicLocation/[city]/ImageCarousel";
import axios from 'axios'
const AdsPage2 = ({ params }) => {




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
  const multiCondition = params.condition && params.condition.includes('-');
  console.log("multiCondition", multiCondition);
  const current_condition = params.condition;
  const cleanCondition = condition ? condition?.replace(/%20/g, ' ').replace(/,/g, '') : ""
  const [doctors, setDoctors] = useState([]);
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
  console.log("expertService", expertService)


  useEffect(() => {
    if (expertService != "general") {
      let designation;
      if (expertService === "psychologist") {
        designation = "Psychologist";
      } else if (expertService === "psychiatrist") {
        designation = "Psychiatrist";
      } else {
        designation = expertText === "therapist" ? "Psychologist" : expertText;
      }
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?location=${location}&designation=${designation}`
        )
        .then((res) => {
          // const map = res.data.map((i)=>i._id)
          // console.log(map)
          setDoctors(res.data);
          // setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching doctors:", err);
          // setLoading(false);
        });
    }
  }, [expertService])

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

  const Show_what_we_treat = () => {
    return (
      <section className="bg-[#FDE4BB] py-5">
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
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500">
                  <img
                    src={condition.image}
                    alt={condition.name}
                    className="h-8 w-8 object-contain"
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
          <div className="mt-12 mb-6 flex items-center justify-center ">
            <RequestAppointment
              iframeSrc={locationContent[city]?.iframeSrc || iframeSrc}
              customStyle={`${RequestAppointmentButton[expertService].style}`}
              name={RequestAppointmentButton[expertService].text}
            />
          </div>
        </Container>
      </section>
    );
  };

  const SymptomsSection = () => {


    const conditionsData = {
      "depression-anxiety": [
        { "symptom": "Excessive Worrying", "imageLink": "/ads/ads2/conditions/Excessive Worrying.png" },
        { "symptom": "Restlessness", "imageLink": "/ads/ads2/conditions/Restlessness.png" },
        { "symptom": "Fatigue", "imageLink": "/ads/ads2/conditions/Fatigue.png" },
        { "symptom": "Difficulty Concentrating", "imageLink": "/ads/ads2/conditions/Difficulty Concentrating.png" },
        { "symptom": "Muscle Tension", "imageLink": "/ads/ads2/conditions/Muscle Tension.png" },
        { "symptom": "Sleep Disturbances", "imageLink": "/ads/ads2/conditions/Sleep Disturbances.png" },
        { "symptom": "Irritability", "imageLink": "/ads/ads2/conditions/Irritability.png" },
        { "symptom": "Gastrointestinal Issues", "imageLink": "/ads/ads2/conditions/Gastrointestinal Issues.png" },
        { "symptom": "Cognitive Impairments", "imageLink": "/ads/ads2/conditions/Cognitive Impairment.png" },
        { "symptom": "Persistent Sadness or Emptiness", "imageLink": "/ads/ads2/conditions/Persistent Sadness or Emptiness.png" },
        { "symptom": "Loss of Interest in Activities", "imageLink": "/ads/ads2/conditions/Loss of Interest in Activities.png" },
        { "symptom": "Changes in Appetite or Weight", "imageLink": "/ads/ads2/conditions/Changes in Appetite or Weight.png" },
        { "symptom": "Fatigue or Low Energy", "imageLink": "/ads/ads2/conditions/Fatigue or Low Energy.png" },
        { "symptom": "Difficulty Concentrating", "imageLink": "/ads/ads2/conditions/Difficulty Concentrating.png" },
        { "symptom": "Feelings of Worthlessness or Guilt", "imageLink": "/ads/ads2/conditions/Feelings of Worthlessness or Guilt.png" },
        { "symptom": "Sleep Disturbances", "imageLink": "/ads/ads2/conditions/Sleep Disturbances.png" },
        { "symptom": "Psychomotor Agitation or Retardation", "imageLink": "/ads/ads2/conditions/Psychomotor Agitation or Retardation.png" },
        { "symptom": "Thoughts of Death or Suicide", "imageLink": "/ads/ads2/conditions/Thoughts of Death or Suicide.png" }
      ],
      "anxiety": [
        { "symptom": "Excessive Worrying", "imageLink": "/ads/ads2/conditions/Excessive Worrying.png" },
        { "symptom": "Restlessness", "imageLink": "/ads/ads2/conditions/Restlessness.png" },
        { "symptom": "Fatigue", "imageLink": "/ads/ads2/conditions/Fatigue.png" },
        { "symptom": "Difficulty Concentrating", "imageLink": "/ads/ads2/conditions/Difficulty Concentrating.png" },
        { "symptom": "Muscle Tension", "imageLink": "/ads/ads2/conditions/Muscle Tension.png" },
        { "symptom": "Sleep Disturbances", "imageLink": "/ads/ads2/conditions/Sleep Disturbances.png" },
        { "symptom": "Irritability", "imageLink": "/ads/ads2/conditions/Irritability.png" },
        { "symptom": "Gastrointestinal Issues", "imageLink": "/ads/ads2/conditions/Gastrointestinal Issues.png" },
        { "symptom": "Cognitive Impairments", "imageLink": "/ads/ads2/conditions/Cognitive Impairment.png" }
      ],
      "depression": [
        { "symptom": "Persistent Sadness or Emptiness", "imageLink": "/ads/ads2/conditions/Persistent Sadness or Emptiness.png" },
        { "symptom": "Loss of Interest in Activities", "imageLink": "/ads/ads2/conditions/Loss of Interest in Activities.png" },
        { "symptom": "Changes in Appetite or Weight", "imageLink": "/ads/ads2/conditions/Changes in Appetite or Weight.png" },
        { "symptom": "Fatigue or Low Energy", "imageLink": "/ads/ads2/conditions/Fatigue or Low Energy.png" },
        { "symptom": "Difficulty Concentrating", "imageLink": "/ads/ads2/conditions/Difficulty Concentrating.png" },
        { "symptom": "Feelings of Worthlessness or Guilt", "imageLink": "/ads/ads2/conditions/Feelings of Worthlessness or Guilt.png" },
        { "symptom": "Sleep Disturbances", "imageLink": "/ads/ads2/conditions/Sleep Disturbances.png" },
        { "symptom": "Psychomotor Agitation or Retardation", "imageLink": "/ads/ads2/conditions/Psychomotor Agitation or Retardation.png" },
        { "symptom": "Thoughts of Death or Suicide", "imageLink": "/ads/ads2/conditions/Thoughts of Death or Suicide.png" }
      ],
      "general": [
        { "symptom": "Persistent Sadness or Emptiness", "imageLink": "/ads/ads2/conditions/Persistent Sadness or Emptiness.png" },
        { "symptom": "Excessive Worrying", "imageLink": "/ads/ads2/conditions/Excessive Worrying.png" },
        { "symptom": "Loss of Interest in Activities", "imageLink": "/ads/ads2/conditions/Loss of Interest in Activities.png" },
        { "symptom": "Intrusive Thoughts", "imageLink": "/ads/ads2/conditions/Intrusive Thoughts.png" },
        { "symptom": "Repetitive Behaviors (Compulsions)", "imageLink": "/ads/ads2/conditions/Repetitive Behaviors.png" },
        { "symptom": "Panic Attacks", "imageLink": "/ads/ads2/conditions/Panic Attacks.png" },
        { "symptom": "Restlessness", "imageLink": "/ads/ads2/conditions/Restlessness.png" },
        { "symptom": "Sleep Disturbances", "imageLink": "/ads/ads2/conditions/Sleep Disturbances.png" },
        { "symptom": "Difficulty Concentrating", "imageLink": "/ads/ads2/conditions/Difficulty Concentrating.png" }
      ],
      "ocd": [
        { "symptom": "Intrusive Thoughts", "imageLink": "/ads/ads2/conditions/Intrusive Thoughts.png" },
        { "symptom": "Repetitive Behaviors (Compulsions)", "imageLink": "/ads/ads2/conditions/Repetitive Behaviors.png" },
        { "symptom": "Need for Order and Symmetry", "imageLink": "/ads/ads2/conditions/Need for Order and Symmetry.png" },
        { "symptom": "Excessive Cleaning or Washing", "imageLink": "/ads/ads2/conditions/Excessive Cleaning or Washing.png" },
        { "symptom": "Checking Rituals", "imageLink": "/ads/ads2/conditions/Checking Rituals.png" },
        { "symptom": "Counting or Repeating", "imageLink": "/ads/ads2/conditions/Counting or Repeating.png" },
        { "symptom": "Arranging Items", "imageLink": "/ads/ads2/conditions/Arranging Items.png" },
        { "symptom": "Mental Compulsions", "imageLink": "/ads/ads2/conditions/Mental Compulsions.png" },
        { "symptom": "Avoidance of Triggers", "imageLink": "/ads/ads2/conditions/Avoidance of Triggers.png" }
      ],
      "social anxiety": [
        { "symptom": "Intense Fear of Social Situations", "imageLink": "/ads/ads2/conditions/Intense Fear of Social Situations.png" },
        { "symptom": "Avoidance of Social Interactions", "imageLink": "/ads/ads2/conditions/Avoidance of Social Interactions.png" },
        { "symptom": "Physical Symptoms in Social Settings", "imageLink": "/ads/ads2/conditions/Physical Symptoms in Social Settings.png" },
        { "symptom": "Self-Consciousness", "imageLink": "/ads/ads2/conditions/Self-Consciousness.png" },
        { "symptom": "Fear of Being Judged", "imageLink": "/ads/ads2/conditions/Fear of Being Judged.png" },
        { "symptom": "Clumsiness or Physical Discomfort", "imageLink": "/ads/ads2/conditions/Clumsiness or Physical Discomfort.png" },
        { "symptom": "Excessive Self-Monitoring", "imageLink": "/ads/ads2/conditions/Excessive Self-Monitoring.png" },
        { "symptom": "Difficulty Speaking", "imageLink": "/ads/ads2/conditions/Difficulty Speaking.png" },
        { "symptom": "Avoiding Eye Contact", "imageLink": "/ads/ads2/conditions/Avoiding Eye Contact.png" }
      ]
    }

    // Get the list for this condition, or empty array if not found
    const conditionKey = current_condition.toLowerCase()
    const list = conditionsData[conditionKey] || []



    return (
      <section className="py-12 bg-[#FDE4BB]">
        <div className="mx-auto max-w-7xl px-4">
          {/* Heading */}
          <h2 className="mb-10 text-center text-2xl md:text-3xl font-bold">
  Are you experiencing the following{' '}
  <span className={`${upperCaseCondition.includes(current_condition) ? 'uppercase' : ''}`}>
    {(() => {
      const parts = current_condition.split('-');
      if (parts.length === 1) {
        return parts[0];
      } else if (parts.length === 2) {
        return `${parts[0]} and ${parts[1]}`;
      } else {
        return parts.slice(0, -1).join(', ') + ' and ' + parts[parts.length - 1];
      }
    })()}
  </span>{' '}
  symptoms?
</h2>

          {/* Flex‐wrapped Symptoms */}
          <div className=" grid grid-cols-3 md:flex flex-wrap justify-center gap-6 md:gap-10">
            {list.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-lg  p-4 text-center max-w-[140px] transition-transform duration-200 "
              >
                <Image
                  src={item.imageLink || '/images/placeholder.png'}
                  alt={item.symptom}
                  width={80}
                  height={80}
                  className="mb-2 h-[80px] md:h-[100px] w-auto object-contain"
                />
                <span className="text-sm md:text-lg font-medium text-gray-700">{item.symptom}</span>
              </div>
            ))}
          </div>

          <p className="mb-4 mt-10 text-center text-base font-semibold text-gray-600">
            If you are feeling any of these symptoms, you may benefit from talking to someone.
          </p>

          {/* Call-to-action Button */}
          <div className="mt-6 flex justify-center">
            <RequestAppointment
              iframeSrc={locationContent[city]?.iframeSrc || iframeSrc}
              customStyle={RequestAppointmentButton[expertService].style}
              name={RequestAppointmentButton[expertService].text}
            />
          </div>
        </div>
      </section>
    );
  
  };



  const bannerImage = {
    "general": {
      "psychiatrist": "/ads/ads2/LP/General - Psychiatrist.png",
      "psychologist": "/ads/ads2/LP/General - Therapist and Psychologist.png",
      "therapist": "/ads/ads2/LP/General - Therapist and Psychologist.png",
    },
    "depression": {
      "psychiatrist": "/ads/ads2/LP/Depression - Psychiatrist.png",
      "general": "/ads/ads2/LP/Depression - General, Psychologist and Therapist.png",
      "psychologist": "/ads/ads2/LP/Depression - General, Psychologist and Therapist.png",
      "therapist": "/ads/ads2/LP/Depression - General, Psychologist and Therapist.png",
    },
    "anxiety": {
      "psychiatrist": "/ads/ads2/LP/Anxiety - Psychiatrist.png",
      "general": "/ads/ads2/LP/Anxiety - General, Psychologist and Therapist.png",
      "psychologist": "/ads/ads2/LP/Anxiety - General, Psychologist and Therapist.png",
      "therapist": "/ads/ads2/LP/Anxiety - General, Psychologist and Therapist.png",
    },
    "depression-anxiety": {
      "psychiatrist": "/ads/ads2/LP/Anxiety - Psychiatrist.png",
      "general": "/ads/ads2/LP/Anxiety - General, Psychologist and Therapist.png",
      "psychologist": "/ads/ads2/LP/Anxiety - General, Psychologist and Therapist.png",
      "therapist": "/ads/ads2/LP/Anxiety - General, Psychologist and Therapist.png",
    },
    "ocd": {
      "psychiatrist": "/ads/ads2/LP/OCD - Psychiatrist.png",
      "general": "/ads/ads2/LP/OCD - General, Psychologist and Therapist.png",
      "psychologist": "/ads/ads2/LP/OCD - General, Psychologist and Therapist.png",
      "therapist": "/ads/ads2/LP/OCD - General, Psychologist and Therapist.png",
    },
  }

  const RequestAppointmentButton = {
    "general": {
      "style": "flex items-center md:text-lg justify-center gap-2 w-[80%] rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 md:w-[400px] text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg",
      "text": "Book a Session"
    },
    "therapist": {
      "style": "flex items-center md:text-lg justify-center gap-2 w-[80%] rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 md:w-[400px] text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg",
      "text": "Book a Therapy Session"
    },
    "psychiatrist": {
      "style": "flex items-center md:text-lg justify-center gap-2 w-[80%] rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 md:w-[400px] text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg",
      "text": "Book a Consultation"
    },
    "psychologist": {
      "style": "flex items-center md:text-lg justify-center gap-2 w-[80%] rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 md:w-[400px] text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg",
      "text": "Book a Session"
    },
  }

  return (
    <>
      <Container maxWidth="lg">
        <section className="bg-white pb-8 md:h-[500px] md:flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative w-full   overflow-hidden rounded-xl md:rounded-xl ">
                <img
                  src={`${bannerImage[current_condition][expertService] || bannerImage["anxiety"][expertService]}`}
                  alt="Illustration of a woman looking upwards, symbolizing hope and guidance"
                  className='w-full h-full object-contain '
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-left order-2 md:order-1">
              <h1 className="text-2xl md:text-4xl font-bold mb-6 tracking-wide">
                {currentPageContent?.lp_hero_title}
              </h1>

              <div className="text-gray-700 text-base md:text-lg mb-4" dangerouslySetInnerHTML={{ __html: currentPageContent?.lp_hero_subtitle }} />

              <p className='text-sm mt-6 text-gray-500'>
                {currentPageContent?.hero_description_2}
              </p>
              <div className="mt-6 flex items-center justify-center md:justify-start">
                <RequestAppointment
                  iframeSrc={locationContent[city]?.iframeSrc || iframeSrc}
                  customStyle={`${RequestAppointmentButton[expertService].style}`}
                  name={RequestAppointmentButton[expertService].text}
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
            customStyle={`${RequestAppointmentButton[expertService].style}`}
            name={RequestAppointmentButton[expertService].text}
          />
        </div>
      </section>


      {/* client speaks */}
      <section className='py-5 px-1 bg-gray-100 '>
        <TestimonialComponentSlideV2 smallDevice={true} location={location} doctorArray={doctors.length > 0 ? doctors : []} />
      </section>

      {!condition && <div>
        <Show_what_we_treat />

      </div>}

      {condition && <div>
        <SymptomsSection />
      </div>}

      {/* why mindfultms section */}
      <section className="py-8 ">
        <Container maxWidth="lg">
          <h2 className="mb-8 text-center text-3xl md:text-3xl font-bold text-orange-500">
            Why MindfulTMS?
          </h2>
          <div className=" ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  src="/ads/ads2/Delhi3.webp"
                  alt="MindfulTMS clinic"
                  className="w-full object-contain rounded-xl"
                />
              </div>
              {/* Content Section */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold">
                    A  safe and supportive space
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    We offer a safe, welcoming space to discuss your concerns and work towards recovery.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold">
                    Confidential
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    Our clinicians are committed to maintaining strict confidentiality, ensuring every interaction is private and secure.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl md:text-2xl text-orange-500 font-semibold">
                    Experienced Clinical Team
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    Our clinicians are trained to assess, diagnose, and provide the right therapy for you.
                  </p>
                </div>

              </div>
            </div>


            <div className="mt-8 mb-3 flex items-center justify-center ">
              <RequestAppointment
                iframeSrc={locationContent[city]?.iframeSrc || iframeSrc}
                customStyle={`${RequestAppointmentButton[expertService].style}`}
                name={RequestAppointmentButton[expertService].text}
              />
            </div>
          </div>
        </Container>


      </section>

      {/* Our Location */}
      <section className="py-8 bg-[#FDE4BB]">
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
                      iframeSrc={locationContent[city]?.iframeSrc || iframeSrc}
                      customStyle={`${RequestAppointmentButton[expertService].style} w-[90%]`}
                      name={RequestAppointmentButton[expertService].text}
                    />
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


    </>
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
    ]
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
    ]
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
    ]
  }
};

export default AdsPage2