"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { motion, AnimatePresence } from "framer-motion";
import RequestAppointment from "../clinicLocation/[city]/RequestAppointment";
import axios from "axios";
const AdsExpertsMobile = ({ expertText, location, condition, disableSlide, setDisableSlide, iframeSrc }) => {
    const [doctorsData, setDoctorsData] = useState([]); // To store doctors data
    const [currentIndex, setCurrentIndex] = useState(0); // To track the current doctor index
    const [direction, setDirection] = useState(1); // To track the animation direction

    const getDoctor = () => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?location=${location || ""}&specialization=${condition || ""}`)
            .then((res) => {
                console.log(location);
                setDoctorsData(res.data);
            });
    };

    useEffect(() => {
        getDoctor();
    }, []);

    // useEffect(() => {
    //     if (!disableSlide) {
    //         const interval = setInterval(() => {
    //             setDirection(1); // Slide right
    //             setCurrentIndex((prevIndex) => (prevIndex + 1) % doctorsData.length);
    //         }, 5000); // Change doctor every 3.5 seconds

    //         return () => clearInterval(interval);
    //     } // Cleanup on unmount
    // }, [doctorsData, disableSlide]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            transition: { duration: 0.5 },
        }),
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true, // Enable auto-slide
        autoplaySpeed: 3000, // Slide every 5 seconds
        slidesToScroll: 1,
        // nextArrow: <NextArrow />, 
        // prevArrow: <PrevArrow />, 
        responsive: [
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const DoctorComponent = () => {
        // if (!data) return null;
        return (
            <>
                {expertText ? (
                    <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">
                        Our Experts
                    </h2>
                ) : (
                    <h2 className="mb-12 text-center text-3xl font-bold text-teal-700">
                        Our Expert
                    </h2>
                )}
                <Slider {...settings}>
                    {
                        doctorsData.map((data, index) => {
                            return (
                                <>
                                    <div
                                        className="mx-auto max-w-md text-center"
                                        key={data._id}
                                    // custom={direction}
                                    // initial="enter"
                                    // animate="center"
                                    // exit="exit"
                                    // variants={variants}
                                    >
                                        <img
                                            src={data?.image}
                                            alt={data?.name}
                                            width={200}
                                            height={200}
                                            className="mx-auto mb-4 rounded-full"
                                        />
                                        <h3 className="text-xl font-bold text-blue-600">{data?.name}</h3>
                                        <p className="font-semibold text-pink-500 text-base">SERVICES</p>
                                        <p className="mb-2">{data?.designation}</p>
                                        <p className="text-pink-500 font-semibold text-base">SPECIALIZATION</p>
                                        <div className="h-[100px] overflow-y-hidden">
                                            <p className="mb-4 font-semibold text-sm">
                                                {data?.specialization?.join(", ")}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </Slider>
            </>
        );
    };

    return (
        <section className="mx-3 py-6">
            {doctorsData.length > 0 && (
                <DoctorComponent />
            )}
            <div className="flex items-center justify-center mt-5">
                <RequestAppointment iframeSrc={iframeSrc}
                    customStyle={
                        "flex w-full items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 md:mx-10"
                    }
                    name="Request an Appointment"
                />
            </div>
        </section>
    );
};

export default AdsExpertsMobile;

