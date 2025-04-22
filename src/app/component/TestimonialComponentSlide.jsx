"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { CircularProgress, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const staticTestimonials =[
    {
        "_id": "673bfab2226472f40171216d",
        "type": "text",
        "patientName": "Priyanka Sharma",
        "doctor": {
            "_id": "66ffa1856a3f2ccdb194b61d",
            "name": "Dr. Shubham Narnoli"
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
            "name": "Ms. Shilpi Sharma"
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
            "name": "Dr. Sandeep Govil"
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
            "name": "Dr. Abhishek"
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
            "name": "Ms. Navya Shree"
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
            "name": "Ms. Kavya K"
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
        "_id": "674a8aefb79f03dabd4631d7",
        "type": "text",
        "patientName": "Anonymous",
        "doctor": {
            "_id": "670e566cc8d65e9d976b745a",
            "name": "Ms. Geetha. S Patel"
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
            "name": "Ms. Maneena James"
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
    },
   
]
export default function TestimonialComponentSlide({
    location,
    condition,
    disableSlide,
    setDisableSlide,
    mobileView,
    smallDevice,
    doctor,
    oneSlide
}) {

    const pathname = usePathname(); 
    const [testimonials, setTestimonials] = useState([]);
    const [currentTestimonial, setCurrentTestimonial] = useState({});
    const [isQuoteModal, setisQuoteModal] = useState(false);
    const [loading, setLoading] = useState(false);
    // Fetch testimonials from the API
    const fetchTestimonials = async () => {
        // if fetch on basis of doctors
        setLoading(true);
        let apiUrl = '';
        if (doctor) {
            apiUrl = `${process.env.NEXT_PUBLIC_API_URL}testimonials/doctor/${doctor?._id}`
        }
        else {
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
        // Check the current route and decide whether to use static testimonials or fetch from the API
        if (["/","/testingpage/temppage"].includes(pathname) ) {
          setTestimonials(staticTestimonials);
        //   console.log(pathname)

        //   console.log("hehe")
        } else {
          fetchTestimonials();
        //   console.log(pathname)
        //   console.log("hehesjdkfjs")

        }
      }, [pathname, condition, location, doctor]);


      useEffect(() => {
        // Check the current route and decide whether to use static testimonials or fetch from the API
        if (pathname === "/") {
          setTestimonials(staticTestimonials);
        } 
      }, []);

    if (loading) {
        return <div className="flex justify-center h-full items-center min-h-[440px]"><CircularProgress /></div>;
    } else if (testimonials.length === 0) {
        return (
            <div className="flex justify-center h-full items-center">
                {/* <p>No testimonial found</p> */}
            </div>
        )
    }
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

//    console.log('small device ', smallDevice)
//    console.log('mobile view ', mobileView)

    const settings = {
        // dots: smallDevice ? false : true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: mobileView ? 1 : 3,
        autoplay: true, // Enable auto-slide
        autoplaySpeed: 5000, // Slide every 5 seconds
        slidesToScroll:  (smallDevice || oneSlide) ? 1 : 3,
        customPaging: (i) => (
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#FBA21B", // default dot color
              }}
            ></div>
          ),
          appendDots: (dots) => (
            <div
              style={{
                marginTop: "20px",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  padding: "0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                //   gap: "10px",
                  listStyle: "none",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
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
                    <div className="text-3xl text-gray-400 mt-3 mb-3  leading-none ">
                        <Image height={50} width={50} 
                            className="h-[24px] scale-x-[1] scale-y-[-1]"
                            src="https://ik.imagekit.io/mwpcmpi5v/iconsNew/quote.svg"
                            alt="Quote"
                        />
                    </div>
                    <div className={`  ${modalOpen ? "" : "max-h-[115px] px-5"} overflow-hidden `}>
                        {isQuoteModal ? <p className="text-gray-600  mx-3 text-base font-semibold ">
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
                    <div className={`flex items-center mb-4 mt-3 ${modalOpen ? "" : "ml-6 "}`}>
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
                    {/* {smallDevice && <div className="mt-4">
                        <h3 className="text-base text-start font-semibold text-gray-900">Treated By: </h3>
                        <div className="mt-3 flex gap-3">
                                    <div
                                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
                                    >
                                        <span className="text-sm">{testimonial?.doctor?.name}</span>
                                    </div>
                        </div>
                    </div>} */}
                    <div className="mt-4">
                        <h3 className="text-base text-start font-semibold text-gray-900">Treated By: </h3>
                        <div className="mt-3 flex gap-3">
                                    <div
                                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
                                    >
                                        <span className="text-sm">{testimonial?.doctor?.name}</span>
                                    </div>
                        </div>
                    </div>
                </div>
{/* 
                {smallDevice &&
                    <div>
                    <h3 className="text-base text-start font-semibold text-gray-900">Condition: </h3>
                    <div className=" flex mt-5">

                        <h3 className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-lg">{testimonial?.doctor?.name}</h3>
                    </div>
                    
                    </div>
                    } */}
            </>
        )
    }

    return (
        
        <div className={`${mobileView ? "flex justify-center w-full" : ""}`}>
            {smallDevice && <div className="mb-7 text-center text-3xl font-bold text-orange-500">Testimonials</div>}
            <div className={` rounded-lg   ${mobileView ? "w-[80%]" : "w-full"} p-4`}>
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
                                    <div className="bg-gray-100 rounded-lg min-h-[440px] py-4 px-4">
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
                            backgroundColor: 'rgba(0, 0, 0, 0.94)', // Darker backdrop
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
                        <Image height={100} width={100}  className="w-[30px]" src="https://ik.imagekit.io/mwpcmpi5v/iconsNew/close.svg?updatedAt=1733748343360" />
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
