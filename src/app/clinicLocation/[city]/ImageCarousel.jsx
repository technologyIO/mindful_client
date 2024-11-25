"use client"
import React, { useState, useEffect } from 'react';

const ImageCarousel = ({images}) => {
    // const images = [
    //     { src: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
    //     { src: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
    //     { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
    //     { src: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
    //     { src: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
    //     { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
    //     { src: '/home/clinicImg2.jpg', alt: 'Company Image 1' },
    //     { src: '/home/clinicImg3.jpg', alt: 'Company Image 2' },
    //     { src: '/home/clinicImg4.jpg', alt: 'Company Image 2' },
    // ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setIsAnimating(false);
        }, 500); // Match the duration with transition
    };

    const handleNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setIsAnimating(false);
        }, 500); // Match the duration with transition
    };

    useEffect(() => {
        const autoSlide = setInterval(() => {
            handleNext();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(autoSlide);
    }, [currentIndex]);

    return (
        <div className="relative w-full h-[580px]">
            <div className="overflow-hidden rounded-lg h-full relative">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        } ${isAnimating && index === currentIndex ? 'opacity-0' : ''}`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={handlePrevious}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 focus:outline-none"
            >
                &lt;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 focus:outline-none"
            >
                &gt;
            </button>
        </div>
    );
};

export default ImageCarousel;
