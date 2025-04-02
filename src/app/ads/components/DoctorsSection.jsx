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
      <div className="mx-auto max-w-6xl">
        {/* Main header always */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Our Experts
          </h1>
        </div>

        {expertService === "general" ? (
          <>
            {/* MOBILE VERSION (< md): Two sections with sub-headers */}
            <div className="block md:hidden">
              {/* Psychologists Section */}
              {psychologists.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-700 text-center my-4">
                    Psychologists
                  </h2>
                  <div className={`flex flex-wrap gap-4 justify-center `}>
                    {psychologists.map((doctor) => (
                      <a
                        key={doctor._id}
                        className="flex flex-col items-center"
                        href={`/doctor/${doctor._id}`}
                      >
                        <div className="mb-2 h-[75px] w-[75px]">
                          <img
                            className="h-full w-full object-cover border-[3px] border-orange-400 rounded-full"
                            src={doctor.image}
                            alt={doctor.name}
                            style={{ objectPosition: "center top" }}
                          />
                        </div>
                        <div className="mb-1 text-center">
                          <p className="font-semibold text-sm text-gray-800 max-w-[150px]">
                            {doctor.name}
                          </p>
                          <label className="text-[13px] lg:text-[15px] text-gray-700 max-w-[200px]">
                      {`(${doctor.designation})`}
                    </label>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Psychiatrists Section */}
              {psychiatrists.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 text-center my-4">
                    Psychiatrists
                  </h2>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {psychiatrists.map((doctor) => (
                      <a
                        key={doctor._id}
                        className="flex flex-col items-center"
                        href={`/doctor/${doctor._id}`}
                      >
                        <div className="mb-2 h-[75px] w-[75px]">
                          <img
                            className="h-full w-full object-cover border-[3px] border-orange-400 rounded-full"
                            src={doctor.image}
                            alt={doctor.name}
                            style={{ objectPosition: "center top" }}
                          />
                        </div>
                        <div className="mb-1 text-center">
                          <p className="font-semibold text-sm text-gray-800 max-w-[150px]">
                            {doctor.name}
                          </p>
                          <label className="text-[13px] lg:text-[15px] text-gray-700 max-w-[200px]">
                      {`(${doctor.designation})`}
                    </label>
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

            {/* DESKTOP VERSION (≥ md): All experts in one flex-wrapped container */}
            <div className="hidden md:flex flex-wrap justify-center gap-[90px]">
              {(() => {
                const allDoctors = [...psychologists, ...psychiatrists];
                if (allDoctors.length === 0) {
                  return (
                    <p className="text-center mt-6">
                      No doctors available at this time.
                    </p>
                  );
                }
                return allDoctors.map((doctor) => (
                  <a
                    key={doctor._id}
                    className="flex flex-col items-center"
                    href={`/doctor/${doctor._id}`}
                  >
                    <div className="mb-2 h-[100px] w-[100px] lg:h-[110px] lg:w-[110px]">
                      <img
                        className="h-full w-full object-cover border-[3px] border-orange-400 rounded-full"
                        src={doctor.image}
                        alt={doctor.name}
                        style={{ objectPosition: "center top" }}
                      />
                    </div>
                    <div className="mb-1 text-center">
                      <p className="font-semibold text-[16px] lg:text-[18px] text-gray-800 max-w-[200px]">
                        {doctor.name}
                      </p>
                      {/* Designation below name */}
                      <p className="text-[13px] lg:text-[15px] text-gray-900 max-w-[200px]">
                        {doctor.title}
                      </p>
                      <label className="text-[13px] lg:text-[15px] text-gray-700 max-w-[200px]">
                      {`(${doctor.designation})`}
                    </label>
                    </div>
                  </a>
                ));
              })()}
            </div>
          </>
        ) : (
          // For specific expertService ("psychiatrist" or "psychologist")
          <>
            {/* MOBILE VERSION (< md) remains as grid */}
            <div className="block md:hidden">
              <div className="flex flex-wrap gap-4 justify-center">
                {doctors.map((doctor) => (
                  <a
                    key={doctor._id}
                    className="flex flex-col items-center"
                    href={`/doctor/${doctor._id}`}
                  >
                    <div className="mb-2 h-[75px] w-[75px]">
                      <img
                        className="h-full w-full object-cover border-[3px] border-orange-400 rounded-full"
                        src={doctor.image}
                        alt={doctor.name}
                        style={{ objectPosition: "center top" }}
                      />
                    </div>
                    <div className="mb-1 text-center">
                      <p className="font-semibold text-sm text-gray-800 max-w-[150px]">
                        {doctor.name}
                      </p>
                      <label className="text-[13px] lg:text-[15px] text-gray-700 max-w-[200px]">
                      {`(${doctor.designation})`}
                    </label>
                    </div>
                  </a>
                ))}
                {doctors.length === 0 && (
                  <p className="text-center w-full mt-6">
                    No doctors available at this time.
                  </p>
                )}
              </div>
            </div>

            {/* DESKTOP VERSION (≥ md): Use flex-wrap for centering */}
            <div className="hidden md:flex flex-wrap justify-center gap-[90px] ">
              {doctors.map((doctor) => (
                <a
                  key={doctor._id}
                  className="flex flex-col items-center"
                  href={`/doctor/${doctor._id}`}
                >
                  <div className="mb-2 h-[100px] w-[100px] lg:h-[110px] lg:w-[110px]">
                    <img
                      className="h-full w-full object-cover border-[3px] border-orange-400 rounded-full"
                      src={doctor.image}
                      alt={doctor.name}
                      style={{ objectPosition: "center top" }}
                    />
                  </div>
                  <div className="mb-1 text-center">
                    <p className="font-semibold text-[16px] lg:text-[18px] text-gray-800 max-w-[200px]">
                      {doctor.name}
                    </p>
                    <p className="text-[13px] lg:text-[15px] text-gray-900 max-w-[200px]">
                      {doctor.title}
                    </p>
                    <label className="text-[13px] lg:text-[15px] text-gray-700 max-w-[200px]">
                      {`(${doctor.designation})`}
                    </label>
                  </div>
                </a>
              ))}
              {doctors.length === 0 && (
                <p className="text-center w-full mt-6">
                  No doctors available at this time.
                </p>
              )}
            </div>
          </>
        )}
      </div>
  );
};

export default DoctorsSection;
