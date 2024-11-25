'use client'

import { useState, useRef, useEffect } from 'react';

// Define the type for a single video object
interface Video {
    id: string;
    src: string;
    service: string;
    speaker: string;
}

// Use the defined type in the function parameter
export default function Component({ videos }: { videos: Video[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsPlaying(false);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
        setIsPlaying(false);
    };

    const getVideoIndex = (offset: number) => {
        return (activeIndex + offset + videos.length) % videos.length;
    };

    const togglePlayPause = () => {
        if (videoRefs.current[activeIndex]) {
            if (isPlaying) {
                videoRefs.current[activeIndex]?.pause();
            } else {
                videoRefs.current[activeIndex]?.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === activeIndex && isPlaying) {
                    video.play();
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    }, [activeIndex, isPlaying]);

    return (
        <div className="py-8">
            <h2 className="text-3xl font-bold text-center mb-6">Clients Speak</h2>
            <div className="relative h-[330px] md:h-[500px] overflow-hidden bg-gray-100 rounded-lg">
                <div className="flex items-center justify-center h-full">
                    {[-1, 0, 1].map((offset) => {
                        const videoIndex = getVideoIndex(offset);
                        const video = videos[videoIndex];
                        const isActive = offset === 0;
                        return (
                            <div
                                onClick={isActive ? togglePlayPause : undefined}
                                key={`${video.id}-${offset}`}
                                className={`absolute transition-all duration-300 cursor-pointer h-[330px] md:h-full ease-in-out ${isActive ? 'md:w-[60%] w-[70%] h-[90%] z-20' : 'md:w-[60%] w-[100%] h-[90%] bg-white z-10'}`}
                                style={{
                                    transform: `translateX(${offset * 35}%)`,
                                    visibility: isActive ? 'visible' : 'hidden', // Hide non-active videos
                                }}
                            >
                                <video
                                    ref={(el) => {
                                        videoRefs.current[videoIndex] = el;
                                    }}
                                    src={video.src}
                                    className="w-full md:h-full object-cover rounded-xl shadow-md h-[330px]"
                                    playsInline
                                />
                                {isActive && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10 rounded-xl">
                                        <button
                                            onClick={togglePlayPause}
                                            aria-label={isPlaying ? "Pause video" : "Play video"}
                                        >
                                            {isPlaying ? (
                                                <>
                                                    {/* Add Pause Icon if needed */}
                                                </>
                                            ) : (
                                                <>
                                                    <img src='/home/play.svg' />
                                                </>
                                            )}
                                        </button>
                                        <div className="absolute bg-yellow-500 rounded-t-xl text-center top-0 p-2 md:p-6 left-0 right-0 text-white">
                                            <h3 className="text-sm md:text-2xl font-semibold mb-1">{video.service}</h3>
                                        </div>
                                        <div className="absolute bg-primary-orange rounded-xl text-center bottom-3 px-2 py-1 text-white">
                                            <h3 className="text-sm md:text-sm font-semibold">{video.speaker}</h3>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 h-[50px] md:h-[80px] -translate-y-1/2 text-white p-2 rounded-full z-30"
                    aria-label="Previous slide"
                >
                    <img className='h-full' src='/home/left.svg' />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 h-[50px] md:h-[80px] -translate-y-1/2 text-white p-2 rounded-full z-30"
                    aria-label="Next slide"
                >
                    <img className='h-full' src='/home/right.svg' />
                </button>
            </div>
            <div className="flex justify-center mt-4">
                {videos.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 ${index === activeIndex ? 'bg-orange-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
}
