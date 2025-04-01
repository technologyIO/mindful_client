import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorsSection = ({ expertService, location, expertText }) => {
  const [loading, setLoading] = useState(false);
  // For the "general" case, store separate arrays
  const [psychiatrists, setPsychiatrists] = useState([]);
  const [psychologists, setPsychologists] = useState([]);
  // For a specific expertService, store doctors here
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (expertService === "general") {
      setLoading(true);
      Promise.all([
        axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?location=${location}&designation=Psychiatrist`
        ),
        axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?location=${location}&designation=Psychologist`
        )
      ])
        .then(([resPsychiatrist, resPsychologist]) => {
          setPsychiatrists(resPsychiatrist.data);
          setPsychologists(resPsychologist.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching doctors:", err);
          setLoading(false);
        });
    } else {
      // For a specific service, determine the designation
      let designation;
      if (expertService === "psychologist") {
        designation = "Psychologist";
      } else if (expertService === "psychiatrist") {
        designation = "Psychiatrist";
      } else {
        // fallback based on expertText (if therapist then psychologist)
        designation = expertText === "therapist" ? "Psychologist" : expertText;
      }
      setLoading(true);
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?location=${location}&designation=${designation}`
        )
        .then((res) => {
          setDoctors(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching doctors:", err);
          setLoading(false);
        });
    }
  }, [expertService, location, expertText]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <section className="py-8 px-4 bg-[#FDE4BB]">
      {/* A container to center content on desktop */}
      <div className="mx-auto max-w-6xl">
        {/* Main header always */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Our Experts
          </h1>
        </div>

        {expertService === "general" ? (
          <div className="flex flex-col gap-8">
            {/* Psychologists Section */}
            {psychologists.length > 0 && (
              <div className="w-full">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-700 text-center my-4">
                  Psychologists
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-10 justify-items-center">
                  {psychologists.map((doctor) => (
                    <a
                      key={doctor.id}
                      className="flex flex-col items-center"
                      href={`/doctor/${doctor.id}`}
                    >
                      <div className="mb-2 h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px]">
                        <img
                          className="h-full w-full object-cover border-[3px] border-orange-400 rounded-full"
                          src={doctor.image}
                          alt={doctor.name}
                          style={{ objectPosition: "center top" }}
                        />
                      </div>
                      <div className="mb-1 text-center">
                        <p className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] text-gray-800 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                          {doctor.name}
                        </p>
                        <p className="text-[11px] md:text-[13px] lg:text-[15px] text-gray-900 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                          {doctor.title}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Psychiatrists Section */}
            {psychiatrists.length > 0 && (
              <div className="w-full">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-700 text-center my-4">
                  Psychiatrists
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-10 justify-items-center">
                  {psychiatrists.map((doctor) => (
                    <a
                      key={doctor.id}
                      className="flex flex-col items-center"
                      href={`/doctor/${doctor.id}`}
                    >
                      <div className="mb-2 h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px]">
                        <img
                          className="h-full w-full object-cover border-[3px] border-orange-400 rounded-full"
                          src={doctor.image}
                          alt={doctor.name}
                          style={{ objectPosition: "center top" }}
                        />
                      </div>
                      <div className="mb-1 text-center">
                        <p className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] text-gray-800 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                          {doctor.name}
                        </p>
                        <p className="text-[11px] md:text-[13px] lg:text-[15px] text-gray-900 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                          {doctor.title}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {psychologists.length === 0 && psychiatrists.length === 0 && (
              <p className="text-center mt-6">
                No doctors available at this time.
              </p>
            )}
          </div>
        ) : (
          // For specific expertService ("psychiatrist" or "psychologist")
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-10 justify-items-center">
            {doctors.map((doctor) => (
              <a
                key={doctor._id}
                className="flex flex-col items-center"
                href={`/doctor/${doctor._id}`}
              >
                <div className="mb-2 h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px]">
                  <img
                    className="h-full w-full object-cover border-[3px] border-orange-400 rounded-full"
                    src={doctor.image}
                    alt={doctor.name}
                    style={{ objectPosition: "center top" }}
                  />
                </div>
                <div className="mb-1 text-center">
                  <p className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] text-gray-800 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                    {doctor.name}
                  </p>
                  <p className="text-[11px] md:text-[13px] lg:text-[15px] text-gray-900 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]">
                    {doctor.title}
                  </p>
                </div>
              </a>
            ))}
            {doctors.length === 0 && (
              <p className="text-center w-full mt-6">
                No doctors available at this time.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorsSection;
