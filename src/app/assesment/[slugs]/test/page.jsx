"use client";

import { CircularProgress, Container } from '@mui/material';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
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
  const { slugs } = useParams();
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(null);
  const [testId, setTestId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
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
      openModal()
      // setLoader(false);
      // closeModal(); // Close the modal after email input
      // setIsModalOpen(false);
      setTotalScore(response.data.totalScore);
      // router.push(
      //   `/assesment/${slugs}/result?score=${response.data.totalScore}&test=${test.condition}&email=${encodeURIComponent(
      //     formData.email
      //   )}&phone=${formData.phone}`
      // );
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

  return (
    <Container maxWidth="lg">
      <div className="flex p-6 items-center">
        <div className="mr" onClick={() => router.back()}>
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
        <h1 className="text-xl font-semibold ">{test.title}</h1>
      </div>

      <div className="p-4  mx-auto">
        <h2 className="font-semibold mb-4 text-primary-orange">
          Please select the answer that is applicable to you
        </h2>

        {questions?.map((question, index) => (
          <div className="mb-6" key={question._id}>
            <p className="mb-2 md:text-xl font-semibold">{index + 1}. {question.questionText}</p>
            <div className="ml-4">
              {question.choices.map((choice, choiceIndex) => (
                <label className="flex md:text-lg items-center mb-2" key={choiceIndex}>
                  <input
                    type="radio"
                    name={`question-${question._id}`}
                    className="form-radio text-primary"
                    onChange={() => handleAnswerChange(question._id, choiceIndex)}
                  />
                  <span className="ml-2">{choice}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center mb-6">
          <button
            onClick={handleEmailSubmit}
            className="bg-primary-orange text-white py-3 px-14 rounded-lg font-semibold"
          >
            SUBMIT
          </button>
        </div>

        {/* Modal for Email Input */}
        {isModalOpen && (
          <>
            <div
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
            onClick={closeModal} // Close modal when clicking on the overlay
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg mx-4 w-96"
              onClick={(e) => e.stopPropagation()} // Prevent click from propagating to overlay
            >
              {/* <h2 className="text-lg font-semibold mb-4">Enter Your Details</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEmailSubmit();
                }}
              >

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleFormDataChange('name', e.target.value)}
                  className={`border-2  p-2 rounded-lg w-full mb-4`}
                  required
                />


                <input
                  type="number"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleFormDataChange('phone', e.target.value)}
                  className={`border-2 ${/^\d{10}$/.test(formData.phone) ? 'border-gray-300' : 'border-red-500'
                    } p-2 rounded-lg w-full mb-4`}
                  required
                />
                {formData.phone && !/^\d{10}$/.test(formData.phone) && (
                  <p className="text-red-500 text-sm mb-4">Please enter a valid 10-digit phone number.</p>
                )}

                <div className="flex justify-end">
                  <button type="button" onClick={closeModal} className="mr-2 text-gray-500">
                    Cancel
                  </button>
                  <button type="submit" className="bg-primary-orange text-white py-2 px-4 rounded-lg">
                    {loader ? <div className='flex justify-center'>
                      <CircularProgress color="inherit" size={20} />
                    </div> : 'Submit'}
                  </button>
                </div>
              </form> */}
              <div style={{ width: "100%", height: "500px" }}>
      <iframe
        aria-label="Self-Assessment Test"
        frameBorder="0"
        style={{
          height: "100%",
          width: "100%",
          border: "none",
        }}
        src={`https://forms.zohopublic.in/nikhilmindf1/form/SelfAssessmentTest/formperma/wQFLTUbc4MiqMDLoRnkr6NrkITyrOhdYn7ezRkLSFjk?source=Website%20(Self%20Assessment)&test=${test.condition}&score=${totalScore}`}
      ></iframe>
    </div>
            </div>
          </div>
          

          </>
       
          
        )}

      </div>
    </Container>
  );
};

export default Test;
