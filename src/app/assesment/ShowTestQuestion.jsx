"use client";

import { CircularProgress, Container } from '@mui/material';
import axios from 'axios';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Define test data
const tests = [
  {
    title: 'PHQ-9 Depression Test',
    link: '/assesment-page/phq9',
    id: 'phq9',
    condition: "Depression",
    paragraph: `The PHQ-9 consists of 9 questions that ask about feelings of sadness, hopelessness, and loss of interest in activities, among other symptoms.

By answering these questions, you can gain insights into your depressive symptoms and determine if you might benefit from further support or professional help.`
  },
  {
    title: 'PSS-10 Stress Assessment',
    link: '/assesment-page/pss10',
    id: 'pss10',
    condition: "Stress",
    paragraph: `This test measures your perception of stress and how you handle life's challenges.

The PSS-10 consists of 10 questions that ask about your feelings and thoughts during the last month, including how often you felt nervous, stressed, or unable to control important things in your life.`
  },
  {
    title: 'GAD-7 Anxiety Test',
    link: '/assesment-page/gad7',
    id: 'gad7',
    condition: "Anxiety",
    paragraph: `This questionnaire helps you evaluate the severity of your anxiety symptoms over the past two weeks.

The GAD-7 consists of 7 questions that ask about feelings of nervousness, worry, and restlessness, among other symptoms. By answering these questions honestly, you can get a clearer picture of your anxiety levels and determine if you might benefit from further support or professional help.`
  },
  {
    title: 'K10 (Kessler Psychological Distress Scale)',
    link: '/assesment-page/k10',
    id: 'k10',
    paragraph: `The K10 is a simple and effective tool designed to measure your level of psychological distress over the past month. This test can help you gain insights into your mental health, especially if you're feeling anxious, depressed, or generally overwhelmed.

The K10 consists of 10 questions that ask about feelings of nervousness, hopelessness, restlessness, and fatigue, among other symptoms. By answering these questions, you can get a better understanding of your current emotional state and whether you might benefit from further support or professional help.`
  }
];



const Test = () => {
  const searchParams = useSearchParams();
  const testPage = searchParams.get("testPage") || false;
  const { slugs } = useParams();
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(null);
  const [testId, setTestId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const test = tests.find(t => t.id === slugs);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}tests/getQuestions/${test.condition}`);
        setQuestions(response.data.questions);
        setTestId(response.data.questions[0].testId);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    if (test) fetchQuestions();
  }, [test]);

  const handleAnswerChange = (questionId, selectedChoiceIndex) => {
    setAnswers({
      ...answers,
      [questionId]: selectedChoiceIndex,
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
    window.history.pushState({ modalOpen: true }, "modal");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.history.back();
  };

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  });

  // Function to handle form data changes
  const handleFormDataChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Function to handle email and phone submission
  const handleEmailSubmit = async () => {
    setLoader(true);
    try {
      const payload = {
        ...formData,
        testId: testId,
        answers: Object.keys(answers).map((questionId) => ({
          questionId,
          selectedChoiceIndex: answers[questionId],
        })),
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}tests/submitTest`,
        payload
      );
      openModal();
      setTotalScore(response.data.totalScore);
    } catch (error) {
      setLoader(false);
      console.error('Error submitting answers:', error);
    }
  };

  // Close modal on Escape key and handle back button
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    const handleBackButton = () => {
      if (isModalOpen) {
        setIsModalOpen(false);
        window.history.forward();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [isModalOpen]);

  const conditionIframe = {
    "Anxiety": `https://forms.zohopublic.in/nikhilmindf1/form/SelfAssessmentTestAnxiety/formperma/Cv0aOlyHjS1THflfwBSEEEGidbLVKykg4btlwXwrp0k?source=Website%20(Self%20Assessment)&test=Anxiety&score=${totalScore}`,
    "Depression": `https://forms.zohopublic.in/nikhilmindf1/form/SelfAssessmentTest/formperma/wQFLTUbc4MiqMDLoRnkr6NrkITyrOhdYn7ezRkLSFjk?source=Website%20(Self%20Assessment)&test=Depression&score=${totalScore}`,
    "Stress": `https://forms.zohopublic.in/nikhilmindf1/form/SelfAssessmentTestStress/formperma/nsBzSHgvrxjEHZOuNo0IfKGsc0AxG-I1R-C2yZzQxjA?source=Website%20(Self%20Assessment)&test=Stress&score=${totalScore}`,
  };

  const TestPageconditionIframe = {
    "Anxiety": `https://forms.zohopublic.in/nikhilmindf1/form/TestAnxiety/formperma/Es1-KWvfDKTU6WuI3HICeG4ufcf_ok47JrsnRTMu_U4?source=Website%20(test)&test=Anxiety&score=${totalScore}`,
    "Depression": `https://forms.zohopublic.in/nikhilmindf1/form/TestDepression/formperma/GdNH4q2FAzrNJvfOdC5j7ZLZ9Rq_Hc0O2ut7JV6oeCI?source=Website%20(test)&test=Depression&score=${totalScore}`,
    "Stress": `https://forms.zohopublic.in/nikhilmindf1/form/TestStress/formperma/lDDSNZId2A7wQzYn_T1pR4INI-ragCkW8lQsq13KOgc?source=Website%20(test)&test=Stress&score=${totalScore}`,
  };

  return (
    <Container maxWidth="lg">
      <div className="flex items-center py-6">
        <div className="mr-4 cursor-pointer" onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold">{test.title}</h1>
      </div>

      <div className="p-4 space-y-4 ">
        <h2 className="font-semibold mb-4 text-black text-xl text-center">
          Please select the answer that is applicable to you
        </h2>

        {questions?.map((question, index) => (
          <div
            key={question._id}
            className="bg-white rounded-lg shadow p-6 space-y-4 border border-gray-100"
          >
            <p className="text-xl font-semibold">
              {index + 1}. {question.questionText} ?
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              {question.choices.map((choice, choiceIndex) => {
                const isSelected = answers[question._id] === choiceIndex;
                return (
                  <button
                    type="button"
                    key={choiceIndex}
                    onClick={() => handleAnswerChange(question._id, choiceIndex)}
                    className={`w-full md:w-auto py-2 px-4 rounded border-2 font-bold text-base transition duration-200 whitespace-normal ${
                      isSelected
                        ? "bg-primary-orange border-primary-orange text-white hover:bg-orange-600 active:bg-orange-700"
                        : "bg-white border-orange-500 text-orange-500 hover:bg-orange-200"
                    }`}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <button
            onClick={handleEmailSubmit}
            className="bg-primary-orange text-white py-3 px-12 rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
          >
            SUBMIT
          </button>
        </div>

        {/* Modal for Email Input */}
        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg mx-4 w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ width: "100%", minHeight: "80vh" }}>
                <iframe
                  aria-label="Self-Assessment Test"
                  frameBorder="0"
                  style={{
                    height: "80vh",
                    width: "100%",
                    border: "none",
                  }}
                  src={
                    testPage
                      ? TestPageconditionIframe[test?.condition]
                      : conditionIframe[test?.condition]
                  }
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Test;
