"use client";
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const OurDoctorSection = ({ designation }) => {
  const [ourExperts, setOurExperts] = useState([]);
  const [filteredExperts, setFilteredExperts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const slugify = (name) => 
  name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  const apiUrl = designation 
    ? `${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?designation=${designation === 'therapist' ? 'Psychologist' : designation}`
    : `${process.env.NEXT_PUBLIC_API_URL}doctors`;

  const getOurExperts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const res = await axios.get(apiUrl, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      });

      // Group doctors by location
      const groupedExperts = res.data.reduce((acc, expert) => {
        if (expert.location === "Bengaluru - Whitefield") {
          acc["Bengaluru - Whitefield"] = [...(acc["Bengaluru - Whitefield"] || []), expert];
        } else if (expert.location === "Bengaluru - Hebbal") {
          acc["Bengaluru - Hebbal"] = [...(acc["Bengaluru - Hebbal"] || []), expert];
        } else if (expert.location === "New Delhi - Greater Kailash 1") {
          acc["New Delhi - GK 1"] = [...(acc["New Delhi - GK 1"] || []), expert];
        }
        return acc;
      }, {});

      setFilteredExperts(groupedExperts);
      setOurExperts(res.data);
    } catch (error) {
      console.error("Error fetching experts:", error);
      setError(error.message || "Failed to fetch doctor data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOurExperts();
  }, [apiUrl]); // Added apiUrl as dependency to refetch when designation changes

  // Loading state
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-8 pb-4 px-1">
          <div className="mb-11 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Our Experts</h1>
          </div>
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-400 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Loading our experts...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-8 pb-4 px-1">
          <div className="mb-11 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Our Experts</h1>
          </div>
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="text-center">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Experts</h2>
              <p className="text-gray-600 mb-4">{error}</p>
              <button 
                onClick={() => getOurExperts()}
                className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // No experts found state
  if (Object.keys(filteredExperts).length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-8 pb-4 px-1">
          <div className="mb-11 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Our Experts</h1>
          </div>
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="text-center">
              <div className="text-gray-400 text-6xl mb-4">👨‍⚕️</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">No Experts Found</h2>
              <p className="text-gray-600">
                {designation 
                  ? `No ${designation} experts available at the moment.`
                  : "No experts available at the moment."
                }
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-8 pb-4 px-1">
        <div className="mb-11 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Our Experts</h1>
        </div>

        {Object.entries(filteredExperts).map(([location, experts], index) => (
          <div key={index} className="mb-5 md:mb-8 md:mx-[80px] lg:mx-[120px]">
            {/* Location Header */}
            <h2 className="text-2xl md:text-2xl font-semibold text-center text-gray-600 mb-4 md:mb-6">{location}</h2>

            {/* Experts Grid - Changed to grid layout for 4 items per row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 place-items-center">
              {experts.map((expert, idx) => (
                <Link 
                  href={`/doctor/${expert?._id}/${slugify(expert?.name)}`}
                  key={`${expert?._id}-${idx}`}
                  className="flex flex-col items-center mb-2 cursor-pointer hover:opacity-80 transition-opacity duration-200 w-full group"
                  prefetch={false}
                >
                  <div className="mb-2 h-[75px] w-[75px] md:h-[120px] md:w-[120px] lg:h-[140px] lg:w-[140px] flex items-center justify-center">
                    <Image 
                      height={500} 
                      width={500} 
                      className="h-[75px] w-[75px] md:h-[120px] md:w-[120px] lg:h-[140px] lg:w-[140px] object-cover border-[3px] border-orange-400 rounded-full pointer-events-none group-hover:border-orange-500 transition-colors duration-200"
                      style={{ objectPosition: "top" }}
                      src={expert?.image }
                      alt={`${expert?.name}'s profile`}
                      priority={false}
                      onError={(e) => {
                        e.target.src = `https://avatar.iran.liara.run/username?username=${expert?.name}`; // Add fallback image
                      }}
                    />
                  </div>
                  <div className="mb-1 text-center">
                    <p className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] text-gray-800 max-w-[150px] md:max-w-[180px] lg:max-w-[200px] text-nowrap overflow-hidden text-ellipsis group-hover:text-orange-600 transition-colors duration-200">
                      {expert?.name}
                    </p>
                    <p className="text-[11px] md:text-[13px] lg:text-[15px] text-gray-900 max-w-[150px] md:max-w-[180px] lg:max-w-[200px] overflow-hidden text-ellipsis">
                      {expert?.designation}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurDoctorSection;
