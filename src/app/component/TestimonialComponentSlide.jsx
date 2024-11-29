"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { CircularProgress, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";

export default function TestimonialComponentSlide({
    location,
    condition,
    disableSlide,
    setDisableSlide,
    mobileView,
    smallDevice,
    doctor
}) {
    const [testimonials, setTestimonials] = useState([]);
    const [currentTestimonial, setCurrentTestimonial] = useState({});
    const [isQuoteModal, setisQuoteModal] = useState(false);
    const [loading , setLoading] = useState(false);
    // Fetch testimonials from the API
    const fetchTestimonials = async () => {
        // if fetch on basis of doctors
        setLoading(true);
        let apiUrl  = '';
        if(doctor){
            apiUrl = `${process.env.NEXT_PUBLIC_API_URL}testimonials/doctor/${doctor?._id}`
        }
        else{
            apiUrl = `${process.env.NEXT_PUBLIC_API_URL}testimonials/search/testimonials?condition=${condition || ""}&location=${location || ""}`;
        }
        try {
            const response = await axios.get(apiUrl);
            setLoading(false);
            setTestimonials(response.data || []);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching testimonials:", error);
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, [condition, location]);

    if (loading) {
        return <div className="flex justify-center h-full items-center"><CircularProgress /></div>;
    }else if(testimonials.length === 0){
        return (
            <div className="flex justify-center h-full items-center">
                <p>No testimonial found</p>
            </div>
        )
    }
    // Custom Next Button
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className={`absolute z-[2]  transform -translate-y-1/2  justify-center ${smallDevice?"top-[50%] right-[-25px]":"top-1/2 right-[-50px]"} `}
            >
                <img
                    className="text-white cursor-pointer"
                    src="/icons/right arrow.svg"
                    alt="Next"
                />
            </button>
        );
    };

    // Custom Prev Button
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                // className="absolute z-[2] top-1/2 left-[-50px] transform -translate-y-1/2  justify-center "
                className={`absolute z-[2]  transform -translate-y-1/2  justify-center ${smallDevice?"top-[50%] left-[-25px]":"top-1/2 left-[-50px]"} `}

            >
                <img
                    className="text-white cursor-pointer"
                    src="/icons/left arrow.svg"
                    alt="Previous"
                />
            </button>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: mobileView ? 2 : 3,
        autoplay: true, // Enable auto-slide
        autoplaySpeed: 3000, // Slide every 5 seconds
        slidesToScroll: 1,
        nextArrow: <NextArrow />, // Use the custom Next button
        prevArrow: <PrevArrow />, // Use the custom Prev button
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

    const QuoteComponent = ({ testimonial, modalOpen, index }) => {
        const {
            title,
            fullTestimonial,
            patientName,
            condition,
            treatment,
        } = testimonial;
        return (
            <>

                <div className="    ">
                    <div className="text-3xl text-gray-400 mt-3 mb-3 leading-none ml-3">
                        <img
                            className="h-[24px] scale-x-[1] scale-y-[-1]"
                            src="/iconsNew/quote.svg"
                            alt="Quote"
                        />
                    </div>
                    <div className={`  ${modalOpen ? "" : "max-h-[115px] px-5"} overflow-hidden `}>
                        {isQuoteModal ? <p className="text-gray-600  text-justify text-base font-semibold ">
                            {fullTestimonial}
                        </p> :
                            <span className="text-gray-600 text-justify text-base font-semibold ">
                                <p>
                                        {`${title}... `}
                                        {/* {!isQuoteModal && <span onClick={() => {
                                            setCurrentTestimonial(testimonial);
                                            setisQuoteModal(true)
                                        }} className="text-base  text-orange-500 cursor-pointer">Read_More</span>} */}
                                    </p>
                                  
                            </span>
                        }

                    </div>
                    {!isQuoteModal && <span onClick={() => {
                        setCurrentTestimonial(testimonial);
                        setisQuoteModal(true)
                    }} className="text-base ml-6 text-orange-500 cursor-pointer">Read More</span>}
                    {/* patient name */}
                    <div className={`flex items-center mb-4 mt-3 ${modalOpen?"":"ml-6 "}`}>
                        <div className="w-[2px] h-[30px] bg-primary-orange mr-3"></div>
                        <div>
                            <span className="text-[16px] font-semibold text-gray-700">{patientName}</span>
                            {/* <p className="text-[12px] text-gray-500">Review on Google</p> */}
                        </div>
                    </div>
                </div>

                {/* condition and treatmen */}

                <div className={` ${isQuoteModal ? "grid grid-cols-2 " : "px-3"}`}>
                    {treatment && <div className="mb-5">
                        <h3 className={`text-base text-start font-semibold text-gray-900 `}>Treatment: </h3>
                        <div className="mt-3 flex gap-3">
                            {treatment
                                ?.split(",") // Split the string into an array (use space, comma, or any delimiter)
                                .map((treatment, index) => (
                                    <div
                                        key={index}
                                        className="px-2 py-1 bg-green-100 text-green-800 rounded-full"
                                    >
                                        <span className="text-sm">{treatment}</span>
                                    </div>
                                ))}
                        </div>
                    </div>}
                    {condition && <div className="">
                        <h3 className="text-base text-start font-semibold text-gray-900">Condition: </h3>
                        <div className="mt-3 flex gap-3">
                            {condition
                                ?.split(",") // Split the string into an array (use space, comma, or any delimiter)
                                .map((condition, index) => (
                                    <div
                                        key={index}
                                        className="px-2 py-1 bg-green-100 text-green-800 rounded-full"
                                    >
                                        <span className="text-sm">{condition}</span>
                                    </div>
                                ))}
                        </div>
                    </div>}
                </div>
            </>
        )
    }

    return (
        <div className={`${mobileView?"flex justify-center w-full":""}`}>
            <div className={` rounded-lg   ${mobileView?"w-[80%]":"w-full"} p-4`}>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => {
                    const {
                        title,
                        fullTestimonial,
                        patientName,
                        condition,
                        treatment,
                    } = testimonial;

                    return (
                        <>
                            <div key={index} className="px-2 ">
                                <div className="bg-gray-100 rounded-lg h-[440px] py-2">
                                    {/* <div className="p-3 w-full text-center h-[75px] overflow-hidden rounded-t-md bg-primary-div">
                                        <h2 className="text-lg font-medium text-gray-800">
                                            {title || "No Title Available"}
                                        </h2>
                                    </div> */}
                                    <div className="">
                                        <QuoteComponent key={index} testimonial={testimonial} modalOpen={isQuoteModal} index={index} />
                                    </div>
                                </div>
                            </div>

                        </>
                    );
                })}
            </Slider>
            <Dialog
                open={isQuoteModal}
                onClose={() => {
                    setisQuoteModal(false)
                    //   setDisableSlide(false)

                }}
                BackdropProps={{
                    style: {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)', // Darker backdrop
                    },
                }}
                PaperProps={{
                    style: {
                        borderRadius: '16px',  // Set the dialog corners to be 30px rounded
                        overflow: 'hidden' // Ensure content doesn't overflow the edges
                    }
                }}

                className="m-0 px-0"
            >
                {/* <DialogTitle
                    className="text-gray-800 font-semibold bg-primary-div text-lg rounded-t-xl p-2"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <span className="px-8 max-w-[405px] truncate">{currentTestimonial?.title}</span>
                    <IconButton onClick={() => {
                        setisQuoteModal(false)
                        // setDisableSlide(false)
                    }}>
                        <img className="w-[30px]" src="/iconsNew/close.svg" />
                    </IconButton>
                </DialogTitle> */}
                <DialogContent className="px-4 md:px-6">
                    <QuoteComponent modalOpen={true} index={1} testimonial={currentTestimonial} />
                </DialogContent>
            </Dialog>
        </div>
        </div>
    );
}
