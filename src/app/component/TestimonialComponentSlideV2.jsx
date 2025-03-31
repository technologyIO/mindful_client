"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { CircularProgress, Dialog, DialogContent, IconButton } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";

const staticTestimonials = [
    {
        "_id": "673bfab2226472f40171216d",
        "type": "text",
        "patientName": "Priyanka Sharma",
        "doctor": {
            "_id": "66ffa1856a3f2ccdb194b61d",
            "name": "Dr. Shubham Narnoli",
            "image": "https://mindfultms1.s3.us-east-1.amazonaws.com/1733302025490-shubham.webp"
        },
        "condition": "Stroke Rehabilitation",
        "treatment": "rTMS",
        "location": "New Delhi - Greater Kailash 1",
        "title": "My husband suffered from stroke and lost his speech and motor functions...  After rTMS he significantly improved under the expert guidance of Dr. Shubham",
        "shortQuote": "My husband suffered from stroke and lost his speech and motor functions...  After rTMS he significantly improved under the expert guidance of Dr. Shubham",
        "fullTestimonial": "My husband suffered from stroke and lost his speech and motor functions in the right side of the body. With Physiotherapy there was only some improvement. But after rTMS he significantly improved under the expert guidance of Dr. Shubham who has an extensive knowledge in rTMS and uses unique protocols which are totally safe and specific for the patient condition. Dr. Shubham guided us very accurately and educated us about the effect of TMS at each step of treatment. Before rTMS my husband could speak only a set of few unclear words. Now he can speak almost most of the words and many words clearly. We are very thankful to him. Totally recommend rTMS under Dr. Shubham.",
        "__v": 0,
        "createdAt": "2024-11-19T02:40:50.366Z",
        "updatedAt": "2024-11-19T02:40:50.366Z"
    },
    {
        "_id": "673bfab2226472f401712154",
        "type": "text",
        "patientName": "Mr Ravinder",
        "doctor": {
            "_id": "66fe4d3a6a3f2ccdb194af4b",
            "name": "Ms. Shilpi Sharma",
            "image": "https://mindfultms1.s3.us-east-1.amazonaws.com/1742884185829-dr.shilpisharma.png"
        },
        "condition": "OCD",
        "treatment": "rTMS,Psychiatrist",
        "location": "New Delhi - Greater Kailash 1",
        "title": "My OCD was very old. I used to hear songs. Now after taking 1 month sessions of TMS, I'm out of devil OCD.",
        "shortQuote": "My OCD was very old. I used to hear songs. Now after taking 1 month sessions of TMS, I'm out of devil OCD.",
        "fullTestimonial": "I consult Mam For OCD. My OCD was very old. I used to hear songs. Now after taking 1 month sessions of TMS, I'm out of devil OCD. \n\nThank you Mam and Doctors there. I'm still taking medicine but thoughts are invisible now. My respect for TMS has been increased.\n\nAll because of Doctor Shipi",
        "__v": 0,
        "createdAt": "2024-11-19T02:40:50.365Z",
        "updatedAt": "2024-11-19T02:40:50.365Z"
    },
    {
        "_id": "673bfab2226472f401712167",
        "type": "text",
        "patientName": "Amita Bakshi",
        "doctor": {
            "_id": "66ffa28f6a3f2ccdb194b62a",
            "name": "Dr. Sandeep Govil",
            "image": "https://mindfultms1.s3.us-east-1.amazonaws.com/1733302040781-sandeep.webp"
        },
        "condition": "",
        "treatment": "Psychiatrist",
        "location": "New Delhi - Greater Kailash 1",
        "title": "my mother of 65 year old has been saved with his understanding of the problem.",
        "shortQuote": "my mother of 65 year old has been saved with his understanding of the problem.",
        "fullTestimonial": "Dr Govil is one of the most courteous doctors in recent times and an expert. His understanding of the problem is so accurate and my mother of 65 year old has been saved with his understanding of the problem.",
        "__v": 0,
        "createdAt": "2024-11-19T02:40:50.366Z",
        "updatedAt": "2024-11-19T02:40:50.366Z"
    },
    {
        "_id": "673bfab2226472f40171217a",
        "type": "text",
        "patientName": "Aishwarya Mylar",
        "doctor": {
            "_id": "66ffa2e86a3f2ccdb194b632",
            "name": "Dr. Abhishek",
            "image": "https://mindfultms1.s3.us-east-1.amazonaws.com/1733302052754-abhishek.webp"
        },
        "condition": "",
        "treatment": "Psychiatrist",
        "location": "Bengaluru -  Whitefield",
        "title": "Dr Abhishek was very nice and patient and understanding of all my concerns.",
        "shortQuote": "Dr Abhishek was very nice and patient and understanding of all my concerns.",
        "fullTestimonial": "Dr Abhishek was very nice and patient and understanding of all my concerns. He thoroughly asked me what symptoms I am facing and gave me some exercises to do which would help me calm my anxiety and he stayed up late night and took up a call and helped me by talking me through the situation",
        "__v": 0,
        "createdAt": "2024-11-19T02:40:50.366Z",
        "updatedAt": "2024-11-19T02:40:50.366Z"
    },
    {
        "_id": "673bfab2226472f401712197",
        "type": "text",
        "patientName": "Inder malviya",
        "doctor": {
            "_id": "66fbe61e7d61644c9bde4bd3",
            "name": "Ms. Navya Shree",
            "image": "https://mindfultms1.s3.us-east-1.amazonaws.com/1733301957224-navya.webp"
        },
        "condition": "Anxiety,Depression",
        "treatment": "Therapy",
        "location": "Bengaluru -  Whitefield",
        "title": "It was very calming experience",
        "shortQuote": "It was very calming experience",
        "fullTestimonial": "It was very calming experience, got to know something new about me. Felt very light after the discussion.",
        "__v": 0,
        "createdAt": "2024-11-19T02:40:50.367Z",
        "updatedAt": "2024-11-19T02:40:50.367Z"
    },
    {
        "_id": "673bfab2226472f40171218e",
        "type": "text",
        "patientName": "Anonymous",
        "doctor": {
            "_id": "66fe27b11941768d6b3e9fc3",
            "name": "Ms. Kavya K",
            "image": "https://mindfultms1.s3.us-east-1.amazonaws.com/1733301974170-kavya.webp"
        },
        "condition": "",
        "treatment": "Therapy",
        "location": "Bengaluru -  Whitefield",
        "title": "She is very professional. Helped me a lot in realising my problem and create awareness.",
        "shortQuote": "She is very professional. Helped me a lot in realising my problem and create awareness.",
        "fullTestimonial": "She is very professional. Helped me a lot in realising my problem and create awareness . Conducted in depth discussions with written, verbal and books to go through to cope oneself; She handled me smoothly and effectively . Would recommend anyone to go for her sessions.",
        "__v": 0,
        "createdAt": "2024-11-19T02:40:50.367Z",
        "updatedAt": "2024-11-19T02:40:50.367Z"
    },
    {
        "_id": "6749abf2b79f03dabd462229",
        "type": "text",
        "patientName": "Anonymous",
        "doctor": {
            "_id": "6720e7e38de82da2acfe7a98",
            "name": "Ms. Sonali Das",
            "image": "https://mindfultms1.s3.us-east-1.amazonaws.com/1733302104083-sonali.webp"
        },
        "condition": "Stress",
        "treatment": "Therapy",
        "location": "New Delhi - Greater Kailash 1",
        "title": "Dr. Sonali listened to me peacefully and discussed about all the possible root causes. It was a good session.",
        "shortQuote": "Dr. Sonali listened to me peacefully and discussed about all the possible root causes. It was a good session.",
        "fullTestimonial": "The session was good and comforting. Dr. Sonali listened to me peacefully and discussed about all the possible root causes. It was a good session.",
        "__v": 0,
        "createdAt": "2024-11-29T11:56:34.450Z",
        "updatedAt": "2024-11-29T11:56:34.450Z"
    },
    {
        "_id": "674a8aefb79f03dabd4631d7",
        "type": "text",
        "patientName": "Anonymous",
        "doctor": {
            "_id": "670e566cc8d65e9d976b745a",
            "name": "Ms. Geetha. S Patel",
            "image": "https://mindfultms1.s3.us-east-1.amazonaws.com/1733302091489-geetha.webp"
        },
        "condition": "Anxiety,Depression",
        "treatment": "Therapy",
        "location": "Bengaluru - Hebbal",
        "title": "Geeta has a very kind, understanding, and simple way of helping you work through emotional struggles.I feel much more confident. ",
        "shortQuote": "Geeta has a very kind, understanding, and simple way of helping you work through emotional struggles.I feel much more confident. ",
        "fullTestimonial": "I was struggling with anxiety and panic attacks for the past few years and was diagnosed with clinical depression earlier this year.\n\nThat’s when I decided to start counseling with Geeta, and I stuck with it for three months.\n\nGeeta has a very kind, understanding, and simple way of helping you work through emotional struggles. What I really liked was how she focused on practical ways to manage my emotions instead of just digging into the root cause of everything.\n\nNow, I feel much more confident about taking care of my emotional and mental well-being. I’ve learned how to handle my anxiety and panic much better than before.\n\nIf you’re looking for someone who’s friendly, approachable, and easy to talk to, I’d definitely recommend Geeta!\"",
        "__v": 0,
        "createdAt": "2024-11-30T03:47:59.138Z",
        "updatedAt": "2024-11-30T03:47:59.138Z"
    },
    {
        "_id": "6797843828890b7ab6603b2f",
        "type": "text",
        "patientName": "Anonymous",
        "doctor": {
            "_id": "679762f728890b7ab66034ed",
            "name": "Ms. Maneena James",
            "image": "https://mindfultms1.s3.us-east-1.amazonaws.com/1737974501521-Dr.maneena%20%281%29.png"
        },
        "condition": "Child Psychology",
        "treatment": "Therapy",
        "location": "Bengaluru -  Whitefield",
        "title": "As a parent, I was worried about my child's behavior. MindfulTMS and Ms. Maneena James were lifesavers!",
        "shortQuote": "As a parent, I was worried about my child's behavior. MindfulTMS and Ms. Maneena James were lifesavers!",
        "fullTestimonial": "As a parent, I was worried about my child's behavior. MindfulTMS and Ms. Maneena James were lifesavers! The child psychology assessment helped us understand what was going on. Therapy sessions made a world of difference. The clinic's kid-friendly atmosphere was perfect. We're so thankful for the positive changes. MindfulTMS is a godsend for families!",
        "__v": 0,
        "createdAt": "2025-01-27T13:03:52.715Z",
        "updatedAt": "2025-01-27T13:03:52.715Z"
    }
];

export default function TestimonialComponentSlideV2({
    location,
    condition,
    disableSlide,
    setDisableSlide,
    mobileView,
    smallDevice,
    doctor,
    experts
}) {
    const pathname = usePathname();
    const [testimonials, setTestimonials] = useState([]);
    const [currentTestimonial, setCurrentTestimonial] = useState({});
    const [isQuoteModal, setisQuoteModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
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
            // Push a new history state when the modal opens so that pressing back will close it.
            window.history.pushState(null, "", window.location.href);
        }
    }, [isQuoteModal]);
    useEffect(() => {
        if (isQuoteModal) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        // Clean up on unmount in case modal is still open
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isQuoteModal]);
    // Fetch testimonials from the API
    const fetchTestimonials = async () => {
        setLoading(true);
        let apiUrl = '';
        if (doctor) {
            apiUrl = `${process.env.NEXT_PUBLIC_API_URL}testimonials/doctor/${doctor?._id}`;
        } else {
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
        if (["/", "/testingpage/temppage"].includes(pathname)) {
            setTestimonials(staticTestimonials);
        } else {
            fetchTestimonials();
        }
    }, [pathname, condition, location, doctor]);

    useEffect(() => {
        if (pathname === "/") {
            setTestimonials(staticTestimonials);
        }
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[440px]">
                <CircularProgress />
            </div>
        );
    } else if (testimonials.length === 0) {
        return (
            <div className="flex justify-center items-center">
                {/* <p>No testimonial found</p> */}
            </div>
        );
    }

    // Updated slider settings without autoplay and dots
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: mobileView ? 1 : 3,
        slidesToScroll: smallDevice ? 1 : 3,
        afterChange: (current) => setCurrentSlide(current),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // Custom Next Button
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className={`absolute z-[2]  transform -translate-y-1/2  justify-center ${smallDevice ? "top-[50%] right-[-25px]" : "top-1/2 right-[-50px]"} `}
            >
                <Image height={50} width={50}
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
                className={`absolute z-[2]  transform -translate-y-1/2  justify-center ${smallDevice ? "top-[50%] left-[-25px]" : "top-1/2 left-[-50px]"} `}

            >
                <Image height={50} width={50}
                    className="text-white cursor-pointer"
                    src="/icons/left arrow.svg"
                    alt="Previous"
                />
            </button>
        );
    };

    const QuoteComponent = ({ testimonial, modalOpen, index }) => {
        const { title, fullTestimonial, patientName, condition, treatment } = testimonial;
        return (
            <>
                {/* Testimonial Card */}
                <div className="bg-white shadow-md rounded-lg p-6 ">
                    <div className="flex items-center mb-4">
                        <div className="w-1 h-10 bg-orange-500 mr-4"></div>
                        <span className="text-xl font-bold text-gray-800">{patientName}</span>
                    </div>
                    <div className="mb-5">
                        <p className="text-gray-700 text-base font-medium line-clamp-3">
                            {title}
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                setCurrentTestimonial(testimonial);
                                setisQuoteModal(true);
                            }}
                            className="text-sm font-semibold text-orange-500 uppercase hover:underline focus:outline-none"
                        >
                            Read More &#709;
                        </button>
                    </div>

                    <div className="mt-4 bg-white p-6   ">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Treated By:</h3>
                        <div className="flex items-center gap-4 mb-6">
                            <Image
                                src={testimonial?.doctor?.image}
                                height={100}
                                width={100}
                                className="h-12 w-12 rounded-full object-cover"
                                alt={testimonial?.doctor?.name}
                            />
                            <span className="text-sm font-semibold text-blue-700">
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

                {/* Expanded Modal Content */}


            </>
        );
    };

    const QuoteComponentModal = ({ testimonial, modalOpen, index }) => {
        const { title, fullTestimonial, patientName, condition, treatment } = testimonial;
        return (
            <>
                <div className="px-6 py-4">
                    <div className="flex items-center mb-2">
                        <div className="w-1 h-10 bg-orange-500 mr-4"></div>
                        <span className="text-xl font-bold text-gray-800">{patientName}</span>
                    </div>
                    <div className="h-[500px] overflow-y-scroll no-scrollbar">
                        <div className="mb-5">
                            <p className="text-gray-700 text-sm font-medium">
                                {fullTestimonial}
                            </p>
                        </div>
                        <div className="mt-4 bg-white p-6">
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
            </>
        );
    };

    return (
        <div className={`${mobileView ? "flex justify-center " : ""}`}>
            {smallDevice && <div className="mb-5 text-center text-3xl font-bold">Testimonials</div>}
            {/* Added "overflow-hidden" here to prevent slider overflow */}
            <div className={`rounded-lg ${mobileView ? "w-[80%]" : "w-full"}  overflow-hidden`}>
                <Slider ref={sliderRef} {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-2">
                            <div className="rounded-lg md:min-h-[440px] px-4">
                                <QuoteComponent key={index} testimonial={testimonial} modalOpen={false} index={index} />
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* Custom Navigation Controls */}
                <div className="flex justify-center items-center">
                    <button
                        onClick={() => sliderRef.current.slickPrev()}
                        className="px-4 py-2 transition"
                    >
                        <Image
                            height={50}
                            width={50}
                            className="text-white cursor-pointer"
                            src="/icons/left arrow.svg"
                            alt="Previous"
                        />
                    </button>
                    <span className="mx-4 text-sm font-semibold text-gray-700">
                        {currentSlide + 1}/{testimonials.length}
                    </span>
                    <button
                        onClick={() => sliderRef.current.slickNext()}
                        className="px-4 py-2 transition"
                    >
                        <Image
                            height={50}
                            width={50}
                            className="text-white cursor-pointer"
                            src="/icons/right arrow.svg"
                            alt="Next"
                        />
                    </button>
                </div>

                {isQuoteModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black opacity-75"
                            onClick={() => setisQuoteModal(false)}
                        ></div>
                        {/* Modal Container with max height and scrolling */}
                        <div className="relative bg-white rounded-lg shadow-xl mx-4 md:mx-0 overflow-hidden max-h-[90vh] overflow-y-auto">
                            {/* Close Button */}
                            <button
                                onClick={() => setisQuoteModal(false)}
                                className="absolute top-6 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
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
                            <div className="p-4 md:p-6">
                                <QuoteComponentModal
                                    modalOpen={true}
                                    index={1}
                                    testimonial={currentTestimonial}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
