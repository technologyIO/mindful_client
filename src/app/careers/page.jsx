'use client'

import { useState } from 'react'
// import { ChevronDownIcon } from '@heroicons'
import { Container } from '@mui/material'

export default function CareersPage() {
  const jobs = [
    {
      title: "Clinical Psychologist",
      qualifications: "M.Phil Clinical Psychology (RCI Licensed)",
      location: "Bangalore & Delhi",
      experience: "Min 1 Year post MPhil"
    },
    {
      title: "Counselling Psychologist",
      qualifications: "M.Sc Psychology (Specialization in Clinical Psychology)",
      location: "Bangalore",
      experience: "Min 3-4 Years in Patient counselling"
    }
  ]

  const [openIndexes, setOpenIndexes] = useState([])

  const toggleAccordion = (index) => {
    setOpenIndexes(prevIndexes => 
      prevIndexes.includes(index)
        ? prevIndexes.filter(i => i !== index)
        : [...prevIndexes, index]
    )
  }

  return (
   <Container maxWidth="lg">
     <div className="  py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <h1 className="text-3xl md:text-4xl  font-bold text-center text-orange-900 mb-8">Careers at Mindful TMS</h1>
        <p className="text-lg md:text-xl text-center text-gray-700 mb-6">
          We are always looking out for compassionate psychologists and specialists. If you are interested, you can contact us via the email mentioned below.
        </p>
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg md:text-2xl font-semibold text-orange-900">{job.title}</h2>
                  <svg className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      openIndexes.includes(index) ? 'rotate-180' : ''
                    }`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                </div>
              </button>
              {openIndexes.includes(index) && (
                <div className="px-6 pb-4 md:text-xl md:ml-8">
                  <p className="text-gray-700"><strong>Qualifications:</strong> {job.qualifications}</p>
                  <p className="text-gray-700"><strong>Location:</strong> {job.location}</p>
                  <p className="text-gray-700"><strong>Experience:</strong> {job.experience}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">How to Apply</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-xl">
            <li>Please send your resume</li>
            <li>Mention any specializations/focus areas</li>
            <li>Any past experience with technology led interventions</li>
            <li>What are you passionate about?</li>
          </ul>
          <p className="mt-4 text-xl font-medium">
            Email your application to:{' '}
            <a href="mailto:Careers@mindfultms.in" className="text-blue-600 hover:underline">
              Careers@mindfultms.in
            </a>
          </p>
        </div>
      </div>
    </div>
   </Container>
  )
}

