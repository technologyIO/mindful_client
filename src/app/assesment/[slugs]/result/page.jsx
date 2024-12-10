"use client";

import React from "react";
import { Container } from "@mui/material";
import { useSearchParams } from "next/navigation";
import AnimatedMeter from "@/app/component/AnimatedMeter";
import RequestAppointment from "@/app/clinicLocation/[city]/RequestAppointment";

const resultMessages = {
    Depression: [
        { range: [0, 4], label: "Minimal Depression", message: "You're experiencing minimal symptoms of depression. Continue to take care of your mental health.", emoji: "😊" },
        { range: [5, 9], label: "Mild Depression", message: "You may be experiencing mild depressive symptoms. Consider reaching out to a mental health professional for support.", emoji: "🙂" },
        { range: [10, 14], label: "Moderate Depression", message: "Your responses indicate moderate depression. It's advisable to seek professional guidance.", emoji: "😐" },
        { range: [15, 19], label: "Moderately Severe Depression", message: "You may be dealing with moderately severe depression. Please consult a mental health specialist.", emoji: "😟" },
        { range: [20, 27], label: "Severe Depression", message: "Your results suggest severe depression. It's important to seek immediate professional help.", emoji: "😢" }
    ],
    Anxiety: [
        { range: [0, 4], label: "Minimal Anxiety", message: "You're experiencing minimal anxiety symptoms. Keep maintaining your mental well-being.", emoji: "😊" },
        { range: [5, 9], label: "Mild Anxiety", message: "You may be feeling mildly anxious. Consider practices like meditation or consulting a professional.", emoji: "🙂" },
        { range: [10, 14], label: "Moderate Anxiety", message: "Your responses indicate moderate anxiety. It may be beneficial to seek support from a mental health professional.", emoji: "😐" },
        { range: [15, 21], label: "Severe Anxiety", message: "You may be experiencing severe anxiety. It's important to reach out to a mental health specialist promptly.", emoji: "😟" }
    ],
    Stress: [
        { range: [0, 13], label: "Low Stress", message: "You're experiencing low levels of stress. Continue your current practices to maintain balance.", emoji: "😊" },
        { range: [14, 26], label: "Moderate Stress", message: "You're currently managing moderate stress. Consider stress-reduction techniques or consulting a professional.", emoji: "😐" },
        { range: [27, 40], label: "High Stress", message: "You're experiencing high levels of stress. It's advisable to seek support from a mental health expert.", emoji: "😟" }
    ]
};
const getMessageForScore = (score, testType) => {
  const messages = resultMessages[testType];
  if (!messages) return { label: "Unknown", message: "No message available for this score.", emoji: "🤔" };

  for (let i = 0; i < messages.length; i++) {
    const { range, label, message, emoji } = messages[i];
    if (score >= range[0] && score <= range[1]) {
      return { label, message, emoji };
    }
  }
  return { label: "Unknown", message: "No message available for this score.", emoji: "🤔" };
};

const Result = () => {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get("score"), 10) || 0;
  const testType = searchParams.get("test") || "Depression";

  const { label, message } = getMessageForScore(score, testType);

  const maxScores = {
    Depression: 27,
    Anxiety: 21,
    Stress: 40
};

const maxScore = maxScores[testType] || 100; // Default to 100 if testType is unknown
const percentage = Math.min((score / maxScore) * 100, 100); // Clamp percentage to 100


  return (
    <Container maxWidth="lg">
      <div className="flex flex-col items-center justify-center h-[60vh] gap-6 mt-10">
        {/* Animated Gauge Chart */}
        <AnimatedMeter value={percentage} />

        {/* Score Display */}
        <div className="text-center">
          <p className="text-primary-orange text-lg md:text-2xl font-semibold">Your score is</p>
          <p className="text-5xl font-bold mt-2">{score}</p>
          <p className="text-lg text-gray-700 mt-4 font-semibold md:text-2xl">{label}</p>
          <p className="text-sm text-gray-500 mt-2 md:text-xl">{message}</p>
        </div>
        <div>
        <p className="text-lg text-gray-700 mt-4 font-semibold md:text-xl">If you need support to improve your emotional health, we're here to help:</p>
        <div className="flex mt-4 justify-center items-center">
        <RequestAppointment customStyle={"bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-base md:text-lg font-semibold"} name={"Book Consultation"}/>
        </div>
        </div>

        {/* Additional Elements */}
        {/* <div className="flex flex-col items-center gap-4">
          <p className="font-semibold">Get a detailed report</p>
          <input
            type="text"
            placeholder="Enter your WhatsApp Number"
            className="border-2 border-orange-400 outline-none p-2 rounded-lg px-6 text-center"
          />
          <button className="bg-primary-orange text-white font-semibold px-6 py-2 rounded-lg">
            GET OTP
          </button>
        </div> */}
      </div>
    </Container>
  );
};

export default Result;
