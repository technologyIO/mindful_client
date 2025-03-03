import React, { useState, useEffect, useMemo } from "react";
import Slider from "react-slick";
import RequestAppointment from "../clinicLocation/[city]/RequestAppointment";
import axios from "axios";
import Image from "next/image";
import TestimonialComponentSlide from "./TestimonialComponentSlide";
import { CircularProgress } from "@mui/material";

const AdsExpertsMobile = ({ expertText, location, condition, disableSlide, setDisableSlide, iframeSrc }) => {
    const [doctorsData, setDoctorsData] = useState([]); // Store doctors data
    const [doctor, setDoctor] = useState(null); // Store selected doctor
    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current index

    const getDoctor = () => {
        setLoading(true);
        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?location=${location || ""}&designation=${
                    expertText === "therapist" ? "Psychologist" : expertText
                }`
            )
            .then((res) => {
                setLoading(false);
                setDoctorsData(res.data);
                setDoctor(res.data[0]); // Set the first doctor initially
            }).catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getDoctor();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1,
        afterChange: (current) => {
            setDoctor(doctorsData[current]); // Update doctor state on slide change
        },
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // Memoize the DoctorComponent to prevent re-renders
    const DoctorComponent = useMemo(() => {
        return (
            <div>
                <h2 className="mb-12 text-center text-3xl font-bold text-orange-500">Our Team of Experts</h2>
                <Slider {...settings}>
                    {doctorsData?.map((data) => (
                        <div className="mx-auto max-w-md text-center" key={data._id}>
                            <img
                                src={data?.image}
                                alt={data?.name}
                                width={200}
                                height={200}
                                className="mx-auto mb-4 rounded-full"
                            />
                            <h3 className="text-xl font-bold text-blue-600">{data?.name}</h3>
                            <p className="mb-2">{data?.designation}</p>
                            <p className="text-pink-500 font-semibold text-base">SPECIALIZATION</p>
                            <div className="h-[100px] overflow-y-hidden">
                                <p className="mb-4 font-semibold text-sm">{data?.specialization?.join(", ")}</p>
                            </div>
                        </div>
                    ))}
                    {
                        doctorsData?.length===1 &&(
                            <></>
                        )
                    }
                </Slider>
            </div>
        );
    }, [doctorsData]);

      if (loading) {
            return <div className="flex justify-center h-full items-center "><CircularProgress /></div>;
        } 
    return (
        <section className="mx-3 py-6">
            {doctorsData.length > 0 && DoctorComponent}
            <div className="flex items-center justify-center mt-5">
                <RequestAppointment
                    iframeSrc={iframeSrc}
                    customStyle={
                        "flex w-full items-center justify-center gap-2 rounded bg-orange-500 p-3 text-white hover:bg-orange-600 focus:ring focus:ring-orange-500 md:mx-10"
                    }
                    name="Request an Appointment"
                />
            </div>
            <section className="py-8">
                <TestimonialComponentSlide
                    doctor={doctor}
                    iframeSrc={iframeSrc}
                    condition={condition}
                    location={location}
                    disableSlide={disableSlide}
                    setDisableSlide={setDisableSlide}
                    smallDevice={true}
                />
            </section>
        </section>
    );
};

// Custom Next and Prev Buttons
const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute z-[2] transform -translate-y-1/2 top-[50%] right-[-20px]"
    >
        <Image height={50} width={50} className="cursor-pointer" src="/icons/right arrow.svg" alt="Next" />
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute z-[2] transform -translate-y-1/2 top-[50%] left-[-20px]"
    >
        <Image height={50} width={50} className="cursor-pointer" src="/icons/left arrow.svg" alt="Previous" />
    </button>
);

export default AdsExpertsMobile;
