import React from 'react'
import Image from 'next/image'
import { Container } from '@mui/material'
import {
  ClipboardCheckIcon, BeakerIcon, UserIcon, ClockIcon,
  EmojiSadIcon,
  ExclamationIcon,
  RefreshIcon,
  LightningBoltIcon,
  AdjustmentsIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import TestimonialComponentSlideV2 from '@/app/component/TestimonialComponentSlideV2'
import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment'

const NewAdsLandingPage = () => {

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
  const features = [
    {
      id: 1,
      icon: ClipboardCheckIcon,
      title: 'Integrated TMS Care',
      description:
        'Access self-care tools, TMS therapy, and in-person or online psychiatric services.',
    },
    {
      id: 2,
      icon: BeakerIcon,
      title: 'Evidence-based Approach',
      description:
        'Our TMS treatments are grounded in clinically validated methodologies, ensuring safety and efficacy.',
    },
    {
      id: 3,
      icon: UserIcon,
      title: 'Personalized Treatment',
      description:
        'Treatments are tailored to your unique needs, so you receive the right care at the right time.',
    },
    {
      id: 4,
      icon: ClockIcon,
      title: 'Round-the-Clock Support',
      description:
        'Our services can be accessed from wherever you are, at any time of day or night.',
    },
  ]

  const conditions = [
    {
      id: 1,
      title: 'Depression',
      description:
        'Do you feel like your sadness won’t go away or your interest in activities is lost? We can help you find relief.',
      icon: EmojiSadIcon,
    },
    {
      id: 2,
      title: 'Generalised Anxiety Disorder (GAD)',
      description:
        'Are you often stressed, worried or on edge? Learn how we can help you to cope better.',
      icon: ExclamationIcon,
    },
    {
      id: 3,
      title: 'Obsessive Compulsive Disorder (OCD)',
      description:
        'Are you dealing with unwanted thoughts or compulsive behaviors? There are ways to find relief.',
      icon: RefreshIcon,
    },
    {
      id: 4,
      title: 'Bipolar Disorder',
      description:
        'Do you struggle with periods of hopelessness, followed by extreme highs? TMS can help regulate mood swings.',
      icon: LightningBoltIcon,
    },
    {
      id: 5,
      title: 'Adult ADHD',
      description:
        'Have you always struggled with focus, following through on tasks, or managing time? There are strategies to cope.',
      icon: AdjustmentsIcon,
    },
    {
      id: 6,
      title: 'Social Anxiety',
      description:
        'Do social settings make you anxious or fearful? We can help you manage and overcome these feelings.',
      icon: UserGroupIcon,
    },
  ]

  const offerings = [
    {
      id: 1,
      title: 'Therapy & Psychiatry',
      description:
        'Our in-person therapy & psychiatry services are guided by clinical protocols & experienced professionals. We’ll help you discover coping strategies, set goals, and improve your overall well-being.',
      linkText: 'Get Started',
      linkUrl: '#',
      imageUrl:
        'https://cdn.theinnerhour.com/assets/images/homepage/visual-3.svg', // Replace with your own image URL
    },
    {
      id: 2,
      title: 'Self-Care',
      description:
        'The Amaha app is a digital powerhouse of mental health resources. Get access to personalized self-care plans, mindfulness tools, and guided exercises right at your fingertips.',
      linkText: 'Download the app',
      linkUrl: '#',
      imageUrl:
        'https://cdn.theinnerhour.com/assets/images/homepage/visual-3.svg', // Replace with your own image URL
    },
    {
      id: 3,
      title: 'Community',
      description:
        'The Amaha mental health community is a safe, peer-run space for support and shared experiences. Join like-minded individuals who understand what you’re going through.',
      linkText: 'Join the Community',
      linkUrl: '#',
      imageUrl:
        'https://cdn.theinnerhour.com/assets/images/homepage/visual-3.svg', // Replace with your own image URL
    },
  ]

  const symptoms = [
    { src: "/Symptom Icons/Intrusive Thoughts.png", alt: "Intrusive Thoughts" },
    { src: "/Symptom Icons/Repetitive Behaviors.png", alt: "Repetitive Behaviors (Compulsions)" },
    { src: "/Symptom Icons/Need for Order and Symmetry.png", alt: "Need for Order and Symmetry" },
    { src: "/Symptom Icons/Excessive Cleaning or Washing.png", alt: "Excessive Cleaning or Washing" },
    { src: "/Symptom Icons/Checking Rituals.png", alt: "Checking Rituals" },
    { src: "/Symptom Icons/Counting or Repeating.png", alt: "Counting or Repeating" },
    { src: "/Symptom Icons/Arranging Items.png", alt: "Arranging Items" },
    { src: "/Symptom Icons/Mental Compulsions.png", alt: "Mental Compulsions" },
    { src: "/Symptom Icons/Avoidance of Triggers.png", alt: "Avoidance of Triggers" },
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

  const groupedExperts = experts.reduce((acc, expert) => {
    const category = expert.title.includes("Psychologist") ? "Clinical Psychologists" : "Psychiatrists";
    if (!acc[category]) acc[category] = [];
    acc[category].push(expert);
    return acc;
  }, {});


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
          <div className="mt-10 flex items-center justify-center">
            <RequestAppointment
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
      <section className=" py-12">
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
                className="flex flex-col items-center rounded-lg bg-white p-3 text-center  transition-transform duration-200  "
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
          <div className=" flex items-center justify-center">
            <RequestAppointment
              customStyle="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 px-8 text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg"
              name="Book a Consultation"
            />
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Container maxWidth="lg">
        <section className="bg-white py-6 sm:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative w-full h-[180px] md:h-[500px] md:w-[500px] overflow-hidden rounded-xl md:rounded-full shadow-lg">
                <Image
                  src="https://mindfultms.in/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fmwpcmpi5v%2F1733372630195-illustration_20_281_29.webp%3FupdatedAt%3D1733819155146&w=1200&q=75"
                  alt="Illustration of a woman looking upwards, symbolizing hope and guidance"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-left mt-8 md:mt-0 order-2 md:order-1">
              <h1 className="text-2xl md:text-5xl font-bold mb-4 tracking-wide">
                Looking for an Experienced Psychiatrist?
              </h1>
              <p className="text-gray-700 md:text-lg mb-4">
                Get individualized care from dedicated psychiatrists committed to improving your quality of life.
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-semibold">We help with:</span> <br />
                Anxiety | Depression | OCD | Bipolar Disorder | PTSD | Schizophrenia | and more.
              </p>
              <div className="mt-6 flex items-center justify-center">
                <RequestAppointment
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
        <div className="mb-3 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800 text-center">Our Experts</h1>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 text-center my-4">Psychiatrists</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 lg:gap-x-10 text-center md:flex md:justify-center">
            <a className="flex flex-col items-center" href="/doctor/66ffa28f6a3f2ccdb194b62a">
              <div className="mb-2 h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] flex flex-col items-center">
                <img
                  className="h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] object-cover border-[3px] border-orange-400 rounded-full"
                  src="https://mindfultms1.s3.us-east-1.amazonaws.com/1733302040781-sandeep.webp"
                  alt="Dr. Sandeep Govil"
                  style={{ objectPosition: "center top" }}
                />
              </div>
              <div className="mb-1">
                <p className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] text-gray-800 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                  Dr. Sandeep Govil
                </p>
                <p className="text-[11px] md:text-[13px] lg:text-[15px] text-gray-900 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                  Psychiatrist
                </p>
              </div>
            </a>
            <a className="flex flex-col items-center" href="/doctor/66ffa1856a3f2ccdb194b61d">
              <div className="mb-2 h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] flex flex-col items-center">
                <img
                  className="h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] object-cover border-[3px] border-orange-400 rounded-full"
                  src="https://mindfultms1.s3.us-east-1.amazonaws.com/1733302025490-shubham.webp"
                  alt="Dr. Shubham Narnoli"
                  style={{ objectPosition: "center top" }}
                />
              </div>
              <div className="mb-1">
                <p className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] text-gray-800 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                  Dr. Shubham Narnoli
                </p>
                <p className="text-[11px] md:text-[13px] lg:text-[15px] text-gray-900 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                  Psychiatrist
                </p>
              </div>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 text-center my-4">Clinical Psychologists</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 lg:gap-x-10 text-center md:flex md:justify-center">
            <a className="flex flex-col items-center" href="/doctor/6720e7e38de82da2acfe7a98">
              <div className="mb-2 h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] flex flex-col items-center">
                <img
                  className="h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] object-cover border-[3px] border-orange-400 rounded-full"
                  src="https://mindfultms1.s3.us-east-1.amazonaws.com/1733302104083-sonali.webp"
                  alt="Ms. Sonali Das"
                  style={{ objectPosition: "center top" }}
                />
              </div>
              <div className="mb-1">
                <p className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] text-gray-800 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                  Ms. Sonali Das
                </p>
                <p className="text-[11px] md:text-[13px] lg:text-[15px] text-gray-900 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                  Clinical Psychologist
                </p>
              </div>
            </a>
            <a className="flex flex-col items-center" href="/doctor/66fe4d3a6a3f2ccdb194af4b">
              <div className="mb-2 h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] flex flex-col items-center">
                <img
                  className="h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] object-cover border-[3px] border-orange-400 rounded-full"
                  src="https://mindfultms1.s3.us-east-1.amazonaws.com/1742884185829-dr.shilpisharma.png"
                  alt="Ms. Shilpi Sharma"
                  style={{ objectPosition: "center top" }}
                />
              </div>
              <div className="mb-1">
                <p className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] text-gray-800 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                  Ms. Shilpi Sharma
                </p>
                <p className="text-[11px] md:text-[13px] lg:text-[15px] text-gray-900 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                  Counselling Psychologist
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <RequestAppointment
            customStyle="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 py-3 px-8 text-white font-bold transition-all duration-200 focus:ring focus:ring-orange-500 hover:scale-105 hover:shadow-lg"
            name="Book a Consultation"
          />
        </div>
      </section>


      {/* client speaks */}
      <section className='py-5 px-1 bg-gray-100 '>

        <TestimonialComponentSlideV2 smallDevice={true} experts={experts} />

      </section>

      <div>
        <Show_what_we_treat />
      </div>

      <div>
        <SymptomsSection />
      </div>






    </>
  )
}

export default NewAdsLandingPage