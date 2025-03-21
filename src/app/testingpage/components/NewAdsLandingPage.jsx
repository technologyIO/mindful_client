import React from 'react'
import Image from 'next/image'
import { Container } from '@mui/material'
import { ClipboardCheckIcon, BeakerIcon, UserIcon, ClockIcon,
  EmojiSadIcon,
  ExclamationIcon,
  RefreshIcon,
  LightningBoltIcon,
  AdjustmentsIcon,
  UserGroupIcon,
 } from '@heroicons/react/outline'

const NewAdsLandingPage = () => {

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
  return (
    <>
      <Container maxWidth="lg">
        <section className="bg-white py-16 sm:py-24">
          {/* Container */}
          <div className=" mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center">

            {/* Left Text Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-semibold mb-4 ">
                Are you looking for an experienced Psychiatrist?
              </h1>
              <p className="text-black md:text-lg mb-4">
                Rewire Your Brain, Rediscover Yourself.
              </p>
              <p className="text-black mb-6">
                Mindful TMS is dedicated to providing personalized Transcranial Magnetic Stimulation (TMS)
                therapy and compassionate mental health care. Our mission is to help individuals overcome
                depression, anxiety, and other mental health conditions through a non-invasive, safe, and
                evidence-based approach.
              </p>
              <button className=" bg-[#EA7C5B] hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full">
                Learn More
              </button>
            </div>

            {/* Right Image Section */}
            <div className="md:w-1/2 w-full flex justify-center md:justify-end">
              {/* You can wrap your image in a shaped container if you want a custom shape */}
              <div
                className="relative h-[300px] w-full md:h-[500px] md:w-[500px] overflow "
              >
                <Image
                  src={`https://mindfultms.in/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fmwpcmpi5v%2F1733372630195-illustration_20_281_29.webp%3FupdatedAt%3D1733819155146&w=1200&q=75`} // Update with your actual image path
                  alt="Woman looking up"
                  fill
                  className='rounded-xl md:rounded-full'
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
      <section className="bg-primary-div py-16 sm:py-24 text-gray-800">
      <Container maxWidth="lg">
      <div className=" mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          Why Mindful TMS?
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
          Our platform is built by psychiatrists, therapists, and mental health experts 
          with immense global experience.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 2. Map over the features array to render each item */}
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center rounded-xl px-2 py-2 text-center">
              <feature.icon className="w-12 h-12 mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </section>

    <section className="bg-white py-16">
    <Container maxWidth="lg">
      <div className=" mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          What are you struggling with?
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Amaha is here to support you with your mental health needs.
        </p>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition) => (
            <div
              key={condition.id}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <condition.icon className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {condition.title}
              </h3>
              <p className="text-gray-600 mb-4">{condition.description}</p>
              <a
                href="#"
                className="text-orange-600 font-medium hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        {/* View More Conditions */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-orange-600 font-medium hover:underline uppercase text-sm"
          >
            View More Conditions
          </a>
        </div>

        {/* Additional Info */}
        <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto">
          We specialize in treating a wide range of mental health concerns.
          Get in touch to know more.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4 mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
            Consult a Coach for Free
          </button>
          <button className="bg-white border border-orange-500 hover:bg-orange-50 text-orange-500 font-semibold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </div>
    </Container>
    </section>

    <section className="py-16 bg-primary-div">
     <Container maxWidth="lg">
     <div className=" mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our mental healthcare offerings
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We are a mental health ecosystem that brings together multiple treatment solutions
          to create an experience that makes getting help easy and accessible.
          From assessments to treatments, we’ll stay with you every step of the way.
        </p>

        {/* Offerings List */}
        <div className="space-y-12">
          {offerings.map((offering, index) => (
            <div
              key={offering.id}
              className={`
                flex flex-col md:flex-row items-center justify-center md:items-start gap-6
                ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}
              `}
              style={{alignItems:"center"}}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={offering.imageUrl}
                  alt={offering.title}
                  className="w-full h-[300px] rounded "
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-2">{offering.title}</h3>
                <p className="text-gray-600 mb-4">{offering.description}</p>
                <a
                  href={offering.linkUrl}
                  className="text-orange-600 font-medium hover:underline"
                >
                  {offering.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
     </Container>
    </section>
    </>
  )
}

export default NewAdsLandingPage