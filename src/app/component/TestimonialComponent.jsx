"use client";

import React, { useState, useRef, useEffect } from "react";
import TestimonialComponents2 from "./TestimonialComponents2";
import { CircularProgress, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import axios from "axios";

export default function TestimonialComponent({ location, condition, disableSlide, setDisableSlide }) {
  const [testimonials, setTestimonials] = useState([]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isQuoteModal, setisQuoteModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullTestimonial, setShowFullTestimonial] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [direction, setDirection] = useState(1); // To track the animation direction

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
  const modalRef = useRef(null);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}testimonials/search/testimonials?condition=${condition || ""}&location=${location || ""}`
      );
      setTestimonials(response.data || []);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [condition, location]);

  const nextTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setShowFullTestimonial(false);
    }
  };

  useEffect(() => {
    if (testimonials.length > 0 && (!isQuoteModal || !disableSlide)) {
      const interval = setInterval(() => {
        // nextTestimonial();
        setDirection(1); // Slide right

        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials, isQuoteModal, disableSlide]);

  const prevTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setShowFullTestimonial(false);
    }
  };

  const { title, type, fullTestimonial, shortQuote, videoUrl, patientName } =
    testimonials[currentIndex] || {};

  const truncatedTestimonial =
    fullTestimonial && fullTestimonial.length > 100
      ? fullTestimonial.substring(0, 380) + "..."
      : fullTestimonial;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsVideoModalOpen(false);
        setisQuoteModal(false);
        disableSlide(false)
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsVideoModalOpen(false);
        setisQuoteModal(false);
        disableSlide(false)

      }
    };

    const handlePopState = () => {
      setShowVideoModal(false);
      setisQuoteModal(false);
      disableSlide(false)

    };

    if (isVideoModalOpen || showVideoModal || isQuoteModal) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      window.history.pushState(null, null, window.location.href);
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isVideoModalOpen, showVideoModal, isQuoteModal]);

  const QuoteComponent = ({modalOpen}) => {
    if (!fullTestimonial) return null;
    return (
      <blockquote className="text-gray-600 mt-3">
        <div className="text-3xl text-gray-400 leading-none ml-3">
          <img
            className="h-[24px] scale-x-[1] scale-y-[-1]"
            src="/iconsNew/quote.svg"
            alt="Quote"
          />
        </div>
        <div className={`px-5 mb-6  ${modalOpen?"":"max-h-[300px]"} overflow-hidden `}>
          <span className="text-gray-600 text-lg font-semibold ">
            {modalOpen ? fullTestimonial : title}
          </span>
         
        </div>
         {/* patient name */}
         <div className="flex ml-6 mb-4">
                  <div className="w-1 h-10 bg-primary-orange mr-3"></div>
                  <div>
                    <p className="text-lg font-semibold text-gray-700">{patientName}</p>
                    {/* <p className="text-[12px] text-gray-500">Review on Google</p> */}
                  </div>
                </div>
      </blockquote>
    );
  };

  if (testimonials.length === 0) {
    return <div className="flex justify-center h-full items-center"><CircularProgress/></div>;
}
  return (
    <div className=" bg-white rounded-lg overflow-hidden w-full ">

      <motion.div
        className=" text-center"
        key={testimonials[currentIndex]?._id}
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        variants={variants}
      >
        {/* <div className="p-3 w-full text-center bg-primary-div">
          <h2 className="text-lg font-medium text-gray-800">{title || "No Title Available"}</h2>
        </div> */}
        <div className="space-y-4 mb-3">
        {/* quote */}
            <QuoteComponent modalOpen={false}/>
          
          {/* prev next buttons */}
          <div className="flex justify-between items-center px-4 mb-5 ">
            <img
              onClick={prevTestimonial}
              className="text-white cursor-pointer"
              src="/icons/left arrow.svg"
              alt="Previous"
            />
            {fullTestimonial && (
              <button
                onClick={() => {
                  setisQuoteModal(true)
                  setDisableSlide(true)
                }}
                className="px-3 py-2 rounded-xl underline text-orange-500 font-semibold"
              >
                {showFullTestimonial ? "Show Less" : "Read More"}
              </button>
            )}
            <img
              onClick={nextTestimonial}
              className="text-white cursor-pointer"
              src="/icons/right arrow.svg"
              alt="Next"
            />
          </div>
         {/* condition and treatment */}
          <div className="px-3 ">
            {testimonials[currentIndex]?.treatment && <div className="mb-5">
              <h3 className="text-xl text-start font-semibold text-gray-900">Treatment: </h3>
              <div className="mt-3 flex gap-3">
                {testimonials[currentIndex]?.treatment
                  ?.split(",") // Split the string into an array (use space, comma, or any delimiter)
                  .map((treatment, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 bg-green-100 text-green-800 rounded-full"
                    >
                      <span className="text-sm">{treatment}</span>
                    </div>
                  ))}
              </div>
            </div>}
            {testimonials[currentIndex]?.condition && <div className="">
              <h3 className="text-xl text-start font-semibold text-gray-900">Condition: </h3>
              <div className="mt-3 flex gap-3">
              {testimonials[currentIndex]?.condition
                ?.split(",") // Split the string into an array (use space, comma, or any delimiter)
                .map((condition, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-green-100 text-green-800 rounded-full"
                  >
                    <span className="text-sm">{condition}</span>
                  </div>
                ))}
                </div>
            </div>}
          </div>

          <Dialog
            open={isQuoteModal}
            onClose={() => {
              setisQuoteModal(false)
              setDisableSlide(false)

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

            className="m-0"
          >
            <DialogTitle
              className="text-gray-800 font-semibold bg-primary-div text-lg rounded-t-xl p-2"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <span className="px-8 max-w-[405px] truncate">{title}</span>
              <IconButton onClick={() => {
                setisQuoteModal(false)
                setDisableSlide(false)
              }}>
                <img className="w-[30px]" src="/iconsNew/close.svg" />
              </IconButton>
            </DialogTitle>
            <DialogContent className="px-0">
              <QuoteComponent modalOpen={true} />
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
      <Dialog
            open={isQuoteModal}
            onClose={() => {
              setisQuoteModal(false)
              setDisableSlide(false)

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

            className="m-0"
          >
            <DialogTitle
              className="text-gray-800 font-semibold bg-primary-div text-lg rounded-t-xl p-2"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <span className="px-8 max-w-[405px] truncate">{title}</span>
              <IconButton onClick={() => {
                setisQuoteModal(false)
                setDisableSlide(false)
              }}>
                <img className="w-[30px]" src="/iconsNew/close.svg" />
              </IconButton>
            </DialogTitle>
            <DialogContent className="px-0">
              <QuoteComponent modalOpen={true} />
            </DialogContent>
          </Dialog>
    </div>
  );
}
