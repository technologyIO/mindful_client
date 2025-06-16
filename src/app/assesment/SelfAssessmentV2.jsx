"use client";
import { Container } from "@mui/material"

import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";


const tests = [
    {
        title: "PHQ-9 Depression Test",
        link: "/assesment/phq9/test",
        id: "depression",
        condition: "Depression",
        paragraph: `The PHQ-9 consists of 9 questions that ask about feelings of sadness, hopelessness, and loss of interest in activities, among other symptoms.

By answering these questions, you can gain insights into your depressive symptoms and determine if you might benefit from further support or professional help.`,
    },
    {
        title: "PSS-10 Stress Assessment",
        link: "/assesment/pss10/test",
        id: "stress",
        condition: "Stress",
        paragraph: `This test measures your perception of stress and how you handle life's challenges.

The PSS-10 consists of 10 questions that ask about your feelings and thoughts during the last month, including how often you felt nervous, stressed, or unable to control important things in your life.`,
    },
    {
        title: "GAD-7 Anxiety Test",
        link: "/assesment/gad7/test",
        id: "anxiety",
        condition: "Anxiety",
        paragraph: `This questionnaire helps you evaluate the severity of your anxiety symptoms over the past two weeks.

The GAD-7 consists of 7 questions that ask about feelings of nervousness, worry, and restlessness, among other symptoms. By answering these questions honestly, you can get a clearer picture of your anxiety levels and determine if you might benefit from further support or professional help.`,
    },
    {
        title: "K10 (Kessler Psychological Distress Scale)",
        link: "/assesment/k10/test",
        id: "k10",
        paragraph: `The K10 is a simple and effective tool designed to measure your level of psychological distress over the past month. This test can help you gain insights into your mental health, especially if you're feeling anxious, depressed, or generally overwhelmed.

The K10 consists of 10 questions that ask about feelings of nervousness, hopelessness, restlessness, and fatigue, among other symptoms. By answering these questions, you can get a better understanding of your current emotional state and whether you might benefit from further support or professional help.`,
    },
    {
        title: "PHQ-9 Depression Test",
        link: "/assesment/phq9/test",
        id: "phq9",
        condition: "Depression",
        paragraph: `The PHQ-9 consists of 9 questions that ask about feelings of sadness, hopelessness, and loss of interest in activities, among other symptoms.

By answering these questions, you can gain insights into your depressive symptoms and determine if you might benefit from further support or professional help.`,
    },
    {
        title: "PSS-10 Stress Assessment",
        link: "/assesment/pss10/test",
        id: "pss10",
        condition: "Stress",
        paragraph: `This test measures your perception of stress and how you handle life's challenges.

The PSS-10 consists of 10 questions that ask about your feelings and thoughts during the last month, including how often you felt nervous, stressed, or unable to control important things in your life.`,
    },
    {
        title: "GAD-7 Anxiety Test",
        link: "/assesment/gad7/test",
        id: "gad7",
        condition: "Anxiety",
        paragraph: `This questionnaire helps you evaluate the severity of your anxiety symptoms over the past two weeks.

The GAD-7 consists of 7 questions that ask about feelings of nervousness, worry, and restlessness, among other symptoms. By answering these questions honestly, you can get a clearer picture of your anxiety levels and determine if you might benefit from further support or professional help.`,
    },
    {
        title: "K10 (Kessler Psychological Distress Scale)",
        link: "/assesment/k10/test",
        id: "k10",
        paragraph: `The K10 is a simple and effective tool designed to measure your level of psychological distress over the past month. This test can help you gain insights into your mental health, especially if you're feeling anxious, depressed, or generally overwhelmed.

The K10 consists of 10 questions that ask about feelings of nervousness, hopelessness, restlessness, and fatigue, among other symptoms. By answering these questions, you can get a better understanding of your current emotional state and whether you might benefit from further support or professional help.`,
    },
];
const SelfAssessmentV2 = () => {
        const { slugs } = useParams();
        const searchParams = useSearchParams();
        const testPage = searchParams.get("testPage") || false;
        // console.log("testpage", testPage);
        const router = useRouter();
        const test = tests.find((t) => t.id === slugs);
        
    const [isAdultChecked, setIsAdultChecked] = useState(false);
    const [isConsentChecked, setIsConsentChecked] = useState(false);
        useEffect(() => {
            if (slugs === "phq9") {
              router.replace("/assesment/depression/selfAssesment");
            } else if (slugs === "gad7") {
              router.replace("/assesment/anxiety/selfAssesment");
            } else if (slugs === "pss10") {
              router.replace("/assesment/stress/selfAssesment");
            }
          }, [slugs, router]);
    return (
            <Container maxWidth="lg">
                <div className=" mx-auto bg-white rounded-lg p-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className=" text-2xl md:text-3xl  font-bold text-gray-900 mb-5 mt-4">Before You Begin</h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">About MindfulTMS Self-Assessments</h2>
                        <p className="text-gray-700 text-base md:text-lg font-semibold leading-relaxed mb-6">
                           {` This is a self-assessment tool to help you understand your ${test?.id} levels using standard
                            mental health scales. It gives you an idea of where you stand, but it's not a medical diagnosis.`}
                        </p>
                    </div>

                    {/* What Happens to Your Information */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">What Happens to Your Information</h3>
                        <p className="text-gray-700 mb-4 font-medium">When you take this test:</p>
                        <ul className="space-y-3 ml-4">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    We'll ask for your name and phone number to show you personalized results
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">Your answers are saved so we can improve our services</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">We may contact you about mental health services that could help you</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">We keep your information private and secure</span>
                            </li>
                        </ul>
                    </div>

                    {/* Important to Know */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Important to Know</h3>
                        <ul className="space-y-3 ml-4">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    You must be 18+ to take this test (or have parent's permission if younger)
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    For a proper diagnosis, you need to see an RCI certified clinical psychologist
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    You can ask us to delete your data anytime - just email{" "}
                                    <a href="mailto:talk2us@mindfultms.in" className="text-blue-600 hover:text-blue-800 underline">
                                        talk2us@mindfultms.in
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Ready to Start */}
                    {/* Ready to Start */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Ready to Start?</h3>
                    <div className="space-y-4">
                        <label className="flex items-start cursor-pointer group">
                            <input
                                type="checkbox"
                                className="mt-1 mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                checked={isAdultChecked}
                                onChange={e => setIsAdultChecked(e.target.checked)}
                            />
                            <span className="text-gray-700 group-hover:text-gray-900">
                                I'm 18+ years old (or have parental consent)
                            </span>
                        </label>

                        <label className="flex items-start cursor-pointer group">
                            <input
                                type="checkbox"
                                className="mt-1 mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                checked={isConsentChecked}
                                onChange={e => setIsConsentChecked(e.target.checked)}
                            />
                            <span className="text-gray-700 group-hover:text-gray-900">
                                I understand this is a self-assessment tool and agree to the above
                            </span>
                        </label>
                    </div>
                </div>

                    {/* Questions Contact */}
                    <div className="border-t pt-6">
                        <p className="text-gray-600 text-sm">
                            <span className="font-medium">Questions?</span> Contact us at{" "}
                            <a href="mailto:talk2us@mindfultms.in" className="text-blue-600 hover:text-blue-800 underline">
                                talk2us@mindfultms.in
                            </a>
                        </p>
                    </div>

                    {/* Start Button */}
                   <div className="mt-8 text-center">
                    <button
                      onClick={() => {
                            if (test?.link) {
                                router.push(`${test.link}?testPage=${testPage}`);
                            }
                        }}
                        disabled={!(isAdultChecked && isConsentChecked)}
                        className={`
                            ${isAdultChecked && isConsentChecked
                                ? "bg-orange-500 hover:bg-orange-600"
                                : "bg-gray-300 cursor-not-allowed"}
                            text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-md hover:shadow-lg
                        `}
                    >
                        Start Assessment
                    </button>
                </div>
                </div>
            </Container>

    )
}

export default SelfAssessmentV2