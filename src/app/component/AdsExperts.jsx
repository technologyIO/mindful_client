"use client";
import React, { useState, useEffect } from "react";
import RequestAppointment from "../clinicLocation/[city]/RequestAppointment";
import axios from "axios";
import TestimonialComponent from "./TestimonialComponent";
import TestimonialComponentSlide from "./TestimonialComponentSlide";
import { Container } from "@mui/material";

const AdsExperts = ({ expertText, location, condition, disableSlide, setDisableSlide, iframeSrc }) => {
    const [doctorsData, setDoctorsData] = useState([]); // To store doctors data

    const getDoctor = () => {
        let apiUrl = '';
        if(expertText){
            apiUrl = `${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?location=${location || ""}&designation=${expertText==='therapist'?'Psychologist':expertText}`
        }
        if(condition){
        apiUrl=`${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?location=${location || ""}`
        }
        axios
            .get(apiUrl)
            .then((res) => {
                console.log(location);
                setDoctorsData(res.data);
            });
    };

    useEffect(() => {
        getDoctor();
    }, []);

    return (
        <section className="mx-3 py-6">
            <Container maxWidth="lg">
                {/* {condition ? (
                    <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">
                    Our Experts
                    </h2>
                ) : (
                    <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">
                    Our Expert Team of <span className="text-orange-500">{expertText}s</span>
                    </h2>
                )} */}
                <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">
                Our Team of Experts
                    </h2>
                <div className="grid grid-cols-1 gap-6">
                    {doctorsData?.map((doctor,i) => (
                        <div key={i} className="grid grid-cols-3">
                            <div
                                key={doctor._id}
                                className="bg-white rounded-lg col-span-1  p-6 text-center"
                            >
                                <img
                                    src={doctor?.image}
                                    alt={doctor?.name}
                                    width={200}
                                    height={200}
                                    className="mx-auto mb-4 rounded-full"
                                />
                                <h3 className="text-xl font-bold text-blue-600">{doctor?.name}</h3>
                                {/* <p className="font-semibold text-pink-500 text-base">SERVICES</p> */}
                                <p className="mb-2">{doctor?.designation}</p>
                                <p className="text-pink-500 font-semibold text-base">SPECIALIZATION</p>
                                <div className="h-[123px] overflow-y-hidden">
                                    <p className="mb-4 font-semibold text-sm">
                                        {doctor?.specialization?.join(", ")}
                                    </p>
                                </div>
                            </div>
                            {/* <TestimonialComponent condition={condition} location={location} disableSlide={disableSlide} setDisableSlide={setDisableSlide} /> */}
                            <div className="col-span-2">
                                <TestimonialComponentSlide doctor={doctor} condition={condition} location={location} mobileView={true} disableSlide={disableSlide} setDisableSlide={setDisableSlide}/>
                            </div>


                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-5">
                    <RequestAppointment iframeSrc={iframeSrc}
                        customStyle={
                            "flex  items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 md:mx-10"
                        }
                        name="Request an Appointment"
                    />
                </div>
            </Container>
        </section>
    );
};

export default AdsExperts;
