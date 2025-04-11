import React from 'react';
import dynamic from 'next/dynamic';
// import TestimonialComponent from '../component/TestimonialComponent';
import axios from 'axios';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';
import AboutComponent from './AboutComponent';
import BackButton from '@/app/component/BackButton';
import { Container } from '@mui/material';
const TestimonialComponentSlide = dynamic(
  () => import('@/app/component/TestimonialComponentSlide'),
  { ssr: false }
);

const DoctorDetailComponent = async ({ doctorId }) => {
  const doctorStatic = { _id: doctorId };
  let doctorDetail = {};
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}doctors/${doctorId}`
  );
  doctorDetail = res.data;

  // Pull in the new fields, with sensible defaults
  const {
    specialization = [],
    specialization_categories = {},
    toggle_specialization = false,
    language_spoken = [],
    profession_background = [],
    availability = [],
    name,
    image,
    designation,
    experience,
    about,
  } = doctorDetail;

  return (
    <div className="p-5 md:p-10">
      <Container maxWidth="lg">
        <BackButton />
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Doctor's Basic Info */}
          <div className="p-6 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
            <img
              src={image}
              alt="Doctor's profile"
              className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
            />
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-semibold">{name}</h2>
              <p className="text-lg text-primary-orange mt-2">
                {designation}
              </p>
              <p className="mt-3 text-gray-600">
                <span className="font-semibold">Experience:</span> {experience}{' '}
                years
              </p>
              {name === 'Dr. Sandeep Govil' && (
                <div className="bg-gray-100 mt-4 text-gray-800 rounded-lg p-1 shadow-sm">
                  <span className="text-gray-600 block font-medium">
                    Monday from 2 pm to 4 pm
                  </span>
                  <span className="text-gray-600 block font-medium">
                    Wednesday and Friday from 11 am to 4 pm
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Book Appointment */}
          <div className="flex justify-center mb-6">
            <RequestAppointment name={'BOOK APPOINTMENT'} />
          </div>

          {/* About Section */}
          {about && <AboutComponent aboutText={about} />}

          {/* Specialization Section */}
          <div className="px-6 py-4 border-t">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-orange">
              Specializations
            </h3>

            {/* Categorized view */}
            {toggle_specialization ? (
              <div className="mt-4 space-y-6 text-gray-700">
                {Object.entries(specialization_categories).map(
                  ([category, specs]) => (
                    <div key={category}>
                      <h4 className="font-semibold">{category}</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        {specs.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            ) : (
              /* Flat list view */
              <ul className="mt-2 space-y-1 text-gray-700 list-disc pl-5">
                {specialization.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Languages Spoken */}
          {language_spoken.length > 0 && (
            <div className="px-6 py-4 border-t">
              <h3 className="text-2xl md:text-3xl  font-bold text-primary-orange">
                Languages Spoken
              </h3>
              <ul className="mt-2 space-y-1 text-gray-700 list-disc pl-5">
                {language_spoken.map((lang, idx) => (
                  <li key={idx}>{lang}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Testimonials */}
          <div className="py-8 px-8">
            <h1 className="text-3xl  text-primary-orange text-center mb-4 font-bold">
              Testimonials
            </h1>
            <TestimonialComponentSlide doctor={doctorStatic} />
          </div>

          {/* Second Book Appointment */}
          <div className="flex justify-center mb-6">
            <RequestAppointment name={'BOOK APPOINTMENT'} />
          </div>

          {/* Professional Background */}
          {profession_background.length > 0 && (
            <div className="px-6 py-4 border-t">
              <h3 className="text-2xl md:text-3xl  font-bold text-primary-orange">
                Professional Background
              </h3>
              <ul className="mt-2 space-y-1 text-gray-700 list-disc pl-5">
                {profession_background.map((bg, idx) => (
                  <li key={idx}>{bg}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Availability */}
          <div className="px-6 py-4 border-t flex flex-col lg:flex-row lg:justify-between">
            <div className="mt-6 lg:mt-0">
              <h3 className="text-2xl md:text-3xl  font-bold text-primary-orange">
                Availability
              </h3>

              {name === 'Dr. Sandeep Govil' ? (
                <div className="bg-gray-100 mt-4 text-gray-800 rounded-lg p-2 shadow-sm">
                  <span className="text-gray-600 block font-medium">
                    Monday from 2 pm to 4 pm
                  </span>
                  <span className="text-gray-600 block font-medium">
                    Wednesday and Friday from 11 am to 4 pm
                  </span>
                </div>
              ) : (
                <div className="mt-2 text-gray-700 space-y-2">
                  {[
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                  ].map((day) => (
                    <div
                      key={day}
                      className="flex items-center space-x-2"
                    >
                      <span className="text-sm">{day}</span>
                      {availability.includes(day) ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500"
                          fill="none"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500"
                          fill="none"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DoctorDetailComponent;
