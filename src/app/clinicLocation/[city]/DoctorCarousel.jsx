"use client"
import { useState, useEffect, useRef } from 'react';
const doctors = [
  { name: "DR. RAHUL KUMAR", specialty: "GENERAL MEDICINE", image: "/home/doctor.png" },
  { name: "DR. RAJEEV NANGIA", specialty: "ENT", image: "/home/doctor.png" },
  { name: "DR. RAJNI SHARMA", specialty: "CARDIOLOGY", image: "/home/doctor.png" },
  { name: "DR. SANJEEV DANG", specialty: "ENT", image: "/home/doctor.png" },
  { name: "DR. SUNEEL SAREEN", specialty: "PAEDIATRICS", image: "/home/doctor.png" },
  { name: "DR. ANITA GUPTA", specialty: "GYNAECOLOGY", image: "/home/doctor.png" },
  { name: "DR. VIKRAM SINGH", specialty: "ORTHOPEDICS", image: "/home/doctor.png" },
];

export default function DoctorCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const ref = useRef(null);

  const duplicateDoctors = [...doctors, ...doctors , ...doctors]; // Duplicate the list for infinite effect

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1));
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (startIndex >= doctors.length) {
      setTimeout(() => {
        ref.current.style.transition = 'none';
        setStartIndex(0);
        setTimeout(() => {
          ref.current.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
      }, 500);
    }

    if (startIndex < 0) {
      setTimeout(() => {
        ref.current.style.transition = 'none';
        setStartIndex(doctors.length - 1);
        setTimeout(() => {
          ref.current.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
      }, 500);
    }
  }, [startIndex]);

  return (
    <div className=" px-4">
      <h2 className="text-2xl md:text-3xl  font-semibold mb-6 text-primary-orange">Our Doctors</h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${startIndex * 50}%)` }}
          ref={ref}
        >
          {duplicateDoctors.map((doctor, index) => (
            <div key={index} className="w-full sm:w-1/5 flex-shrink-0 px-2">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="md:text-lg text-sm font-semibold text-blue-600">{doctor.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{doctor.specialty}</p>
                  <button 
                    className="mt-auto w-full bg-orange-500 text-white py-2 px-4 rounded text-sm hover:bg-orange-600 transition duration-300"
                    onClick={() => alert(`Appointment requested with ${doctor.name}`)}
                  >
                    Request an Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          aria-label="Previous doctors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          aria-label="Next doctors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
