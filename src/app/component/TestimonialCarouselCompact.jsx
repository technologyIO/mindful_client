"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const staticTestimonials = [
    // ... your staticTestimonials array
];

export default function TestimonialCarouselCompact({
    location,
    condition,
    doctor,
    doctorArray,
}) {
    const pathname = usePathname();
    const [testimonials, setTestimonials] = useState([]);
    const [currentTestimonial, setCurrentTestimonial] = useState({});
    const [isQuoteModal, setisQuoteModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const sliderRef = useRef(null);

    // Handle Escape key and mobile back button
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setisQuoteModal(false);
            }
        };

        const handlePopState = () => {
            setisQuoteModal(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    useEffect(() => {
        if (isQuoteModal) {
            window.history.pushState(null, "", window.location.href);
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isQuoteModal]);

    // Fetch testimonials
    const fetchTestimonials = async () => {
        setLoading(true);
        let apiUrl = '';
        let requestData = {};

        if (doctor) {
            apiUrl = `${process.env.NEXT_PUBLIC_API_URL}testimonials/doctor/${doctor?._id}`;
        } else if (doctorArray && doctorArray.length > 0) {
            apiUrl = `${process.env.NEXT_PUBLIC_API_URL}testimonials/getAllTestimonials/DoctorArray`;
            requestData = { doctorIds: doctorArray.map(doc => doc._id) };
        } else {
            apiUrl = `${process.env.NEXT_PUBLIC_API_URL}testimonials/search/testimonials/by-location?location=${location || ""}`;
        }

        try {
            let response;
            if (doctor) {
                response = await axios.get(apiUrl);
            } else if (doctorArray && doctorArray.length > 0) {
                response = await axios.post(apiUrl, requestData);
            } else {
                response = await axios.get(apiUrl);
            }
            setLoading(false);
            setTestimonials(response.data || []);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching testimonials:", error);
        }
    };

    useEffect(() => {
        if (["/", "/testingpage/temppage"].includes(pathname)) {
            setTestimonials(staticTestimonials);
            setLoading(false);
        } else {
            fetchTestimonials();
        }
    }, [pathname, condition, location, doctor, doctorArray]);

    // Carousel settings - NO DOTS, auto-play with pause on hover
    const settings = {
        dots: false, // Hide dots
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true, // Pause when hovering
        pauseOnFocus: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // Hide default arrows
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Compact Quote Component - Shows only 2 lines
    const CompactQuoteCard = ({ testimonial }) => {
        const { fullTestimonial, patientName } = testimonial;

        return (
            <div className="bg-white shadow-md rounded-lg p-6 h-[200px] hover:shadow-xl transition-all duration-300 mx-2">
                <div className="flex flex-col justify-between h-full">
                    {/* Header */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-1 h-8 bg-orange-500 mr-3"></div>
                            <span className="text-lg font-bold text-gray-800">{patientName}</span>
                        </div>

                        {/* Testimonial Text - 2 lines only */}
                        <div className="mb-3">
                            <p className="text-gray-700 text-base line-clamp-2">
                                {fullTestimonial}
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <Image
                                src={testimonial?.doctor?.image}
                                height={40}
                                width={40}
                                className="h-10 w-10 rounded-full object-cover flex-shrink-0"
                                alt={testimonial?.doctor?.name}
                            />
                            <span className="text-xs font-semibold text-blue-700 truncate">
                                {testimonial?.doctor?.name}
                            </span>
                        </div>

                        <button
                            onClick={() => {
                                setCurrentTestimonial(testimonial);
                                setisQuoteModal(true);
                            }}
                            className="text-sm text-orange-500 font-semibold hover:underline focus:outline-none whitespace-nowrap ml-2"
                        >
                            Read More →
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // Modal Component
    const QuoteComponentModal = ({ testimonial }) => {
        const { fullTestimonial, patientName, condition, treatment } = testimonial;
        
        return (
            <div className="pl-3 py-3">
                <div className="flex items-center mb-8">
                    <div className="w-1 h-10 bg-orange-500 mr-4 mt-5"></div>
                    <span className="text-xl font-bold mt-5 text-gray-800">{patientName}</span>
                </div>
                <div className="max-h-[450px] overflow-y-scroll no-scrollbar">
                    <div className="mb-5">
                        <p className="text-gray-700 text-lg px-4">
                            {fullTestimonial}
                        </p>
                    </div>
                    <div className="mt-4 bg-white p-2">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">
                            Treated By:
                        </h3>
                        <div className="flex items-center gap-4 mb-6">
                            <Image
                                src={testimonial?.doctor?.image}
                                height={100}
                                width={100}
                                className="h-12 w-12 rounded-full object-cover"
                                alt={testimonial?.doctor?.name}
                            />
                            <span className="text-sm whitespace-nowrap font-semibold text-blue-700">
                                {testimonial?.doctor?.name}
                            </span>
                        </div>
                        {treatment && (
                            <div className="mb-4">
                                <h3 className="text-sm font-semibold text-gray-900">Treatment:</h3>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {treatment.split(",").map((treat, idx) => (
                                        <div
                                            key={idx}
                                            className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                                        >
                                            {treat.trim()}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {condition && (
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">Condition:</h3>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {condition.split(",").map((cond, idx) => (
                                        <div
                                            key={idx}
                                            className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs"
                                        >
                                            {cond.trim()}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // Skeleton Loader
    const SkeletonCard = () => (
        <div className="bg-white shadow-md rounded-lg p-6 h-[200px] animate-pulse mx-2">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="flex items-center mb-4">
                        <div className="w-1 h-8 bg-orange-500 mr-3 rounded"></div>
                        <div className="h-4 w-24 bg-gray-300 rounded"></div>
                    </div>
                    <div className="space-y-2 mb-3">
                        <div className="h-3 bg-gray-300 rounded w-full"></div>
                        <div className="h-3 bg-gray-300 rounded w-11/12"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        <div className="h-3 w-24 bg-gray-300 rounded"></div>
                    </div>
                    <div className="h-3 w-20 bg-orange-300 rounded"></div>
                </div>
            </div>
        </div>
    );

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
                {[1, 2, 3].map((i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        );
    }

    if (testimonials.length === 0) {
        return null;
    }

    return (
        <div className="w-full">
            {/* Carousel - will pause on hover */}
            <div className="rounded-lg overflow-hidden">
                <Slider ref={sliderRef} {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index}>
                            <CompactQuoteCard testimonial={testimonial} />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Modal */}
            {isQuoteModal && (
                <div className="fixed inset-0 flex items-center justify-center z-[9999]">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black opacity-75"
                        onClick={() => setisQuoteModal(false)}
                    ></div>
                    
                    {/* Modal Container */}
                    <div className="relative bg-white rounded-lg shadow-xl mx-4 md:mx-0 overflow-hidden max-h-[90vh] overflow-y-auto">
                        {/* Close Button */}
                        <button
                            onClick={() => setisQuoteModal(false)}
                            className="absolute top-9 right-4 text-gray-600 hover:text-gray-800 focus:outline-none z-10"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        
                        {/* Modal Content */}
                        <div className="md:p-2 md:w-[800px]">
                            <QuoteComponentModal testimonial={currentTestimonial} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
