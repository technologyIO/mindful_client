"use client";
import { Container } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const OurDoctorSection = () => {
  const [ourExperts, setOurExperts] = useState([]);
  const [filteredExperts, setFilteredExperts] = useState({});

  const getOurExperts = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}doctors`, {
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
    } catch (error) {
      console.error("Error fetching experts:", error);
    }
  };

  useEffect(() => {
    getOurExperts();
  }, []);

  return (
    <Container maxWidth="lg">
      <section className="pt-8 pb-4 px-1">
      <div className="mb-11 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">Our Experts</h1>
      </div>

      {Object.entries(filteredExperts).map(([location, experts], index) => (
        <div key={index} className="mb-5 md:mb-8 md:mx-[80px] lg:mx-[120px]">
          {/* Location Header */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-600 mb-4 md:mb-6">{location}</h2>

          {/* Experts Grid */}
          {/* <div className="flex flex-wrap  gap-4 md:gap-[80px] text-center justify-center "> */}
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center justify-center ">
            {experts.map((expert, idx) => (
              <Link href={`/doctor/${expert?._id}`} key={idx} className="flex flex-col items-center mb-2">
                <div className="mb-2 h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[130px] lg:w-[130px] flex items-center">
                  <Image height={500} width={500} 
                    className="h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[130px] lg:w-[130px] object-cover border-[3px] border-orange-400 rounded-full"
                    style={{ objectPosition: "top" }}
                    src={expert?.image}
                    alt={`${expert?.name}'s profile`}
                  />
                </div>
                <div className="mb-1 text-center">
                  <p className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] text-gray-800 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                    {expert?.name}
                  </p>
                  <p className="text-[11px] md:text-[13px] lg:text-[15px] text-gray-900 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                    {expert?.designation}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
    </Container>
  );
};

export default OurDoctorSection;
