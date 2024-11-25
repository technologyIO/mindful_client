'use client'

import { useState } from 'react'
// import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from 'lucide-react'

const videos = [
  { id: 1, title: 'Therapy for Depression', speaker: 'Sanjana Mathur', src: '/placeholder.svg?height=400&width=600' },
  { id: 2, title: 'Anxiety Management', speaker: 'John Doe', src: '/placeholder.svg?height=400&width=600' },
  { id: 3, title: 'Stress Relief Techniques', speaker: 'Jane Smith', src: '/placeholder.svg?height=400&width=600' },
]

export default function Component() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  const getVideoIndex = (offset) => {
    return (activeIndex + offset + videos.length) % videos.length
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Clients Speak</h2>
      <div className="relative h-[400px] overflow-hidden">
        <div className="flex items-center justify-center h-full">
          {[-1, 0, 1].map((offset) => {
            const videoIndex = getVideoIndex(offset)
            const video = videos[videoIndex]
            const isActive = offset === 0
            return (
              <div
                key={`${video.id}-${offset}`}
                className={`absolute transition-all duration-300 ease-in-out ${
                  isActive
                    ? 'w-[60%] h-full left-1/2 -translate-x-1/2 z-10'
                    : `w-[30%] h-[80%] ${
                        offset < 0 ? 'left-[15%]' : 'left-[85%]'
                      } -translate-x-1/2 filter blur-sm opacity-70`
                }`}
              >
                <img
                  src={video.src}
                  alt={video.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                {isActive && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full">
                      {/* <PlayIcon className="w-8 h-8" />
                       */}
                       play
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-semibold mb-1">{video.title}</h3>
                      <p className="text-sm">{video.speaker}</p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full"
        >
          {/* <ChevronLeftIcon className="w-6 h-6" />
           */}
           left
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full"
        >
          {/* <ChevronRightIcon className="w-6 h-6" /> */}
          right
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === activeIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}