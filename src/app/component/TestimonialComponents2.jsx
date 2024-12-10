"use client";
import { Dialog, DialogContent } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const TestimonialComponents2 = ({currentVideo}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      videoRef.current.play();
    }
  }, [videoRef.current?.duration]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleSeek = (newProgress) => {
    if (videoRef.current) {
      const newTime = (newProgress[0] / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(newProgress[0]);
    }
  };

  return (
    <div className="rounded-b-lg overflow-hidden p-0">
    
      <div className="space-y-4">
        <div className="relative aspect-video bg-black" onClick={togglePlay}>
          <video
            ref={videoRef}
            className="w-full h-[70vh] object-cover"
            onTimeUpdate={handleProgress}
            src={currentVideo}
          />
          {/* Middle play button */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center text-white"
            >
            <img className="h-[66px]"  src="https://ik.imagekit.io/mwpcmpi5v/iconsNew/newplay.svg?updatedAt=1733748346137"/>
            </button>
          )}
          <div className="absolute bottom-0 left-0 right-0 text-white p-2">
            <div className="flex items-center justify-between mb-2">
              {/* <div className="flex items-center space-x-2">
                {volume > 0 ? (
                  <span className="text-green-500">Unmute</span>
                ) : (
                  <span className="text-red-500">Mute</span>
                )}
              </div> */}
            </div>
            <input
              type="range"
              value={progress}
              max={100}
              step={0.1}
              onChange={(e) => handleSeek([Number(e.target.value)])}
              className="w-full h-[3px]"
            />
            {/* <div className="text-xs mt-1">
              {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
            </div> */}
          </div>
        </div>
    
      </div>
     
    </div>
  );
};



export default TestimonialComponents2;
