"use client"
import { Container } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewResult = ({ params }) => {
    const resultId = params.resultId
    const [testResult, settestResult] = useState([])


    const getData = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}tests/getSubmissionDetails/${resultId}`)
            .then((res) => {
                settestResult(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getData()
    }, [])

    // const getInterpretation = (score) => {
    //     if (score >= 0 && score <= 4) return "Minimal depression";
    //     if (score >= 5 && score <= 9) return "Mild depression";
    //     if (score >= 10 && score <= 14) return "Moderate depression";
    //     if (score >= 15 && score <= 19) return "Moderately severe depression";
    //     if (score >= 20) return "Severe depression";
    //     return "Invalid score";
    // };

    return (
        <Container maxWidth="lg">
                <div className=" ">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">{testResult?.testId?.testName} Test Result</h1>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8 mx-auto">
                <p className="text-lg mb-3"><span className="font-semibold text-gray-700">Name:</span> <span className="text-gray-600 capitalize">{testResult?.name}</span></p>
                <p className="text-lg mb-3"><span className="font-semibold text-gray-700">Email:</span> <span className="text-gray-600">{testResult?.email}</span></p>
                <p className="text-lg mb-3"><span className="font-semibold text-gray-700">Total Score:</span> <span className="text-gray-600">{testResult?.totalScore}</span></p>
                {/* <p className="text-lg mb-3"><span className="font-semibold text-gray-700">Interpretation:</span> <span className="text-blue-600 font-medium">{getInterpretation(testResult?.totalScore)}</span></p> */}
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Detailed Responses</h2>
            <div className="space-y-8  mx-auto">
                {testResult?.answers?.map((answer, index) => (
                    <div key={answer._id} className="bg-white shadow-lg rounded-lg p-6">
                        <p className="text-lg font-semibold mb-4 text-gray-800">Question {index + 1}: {answer.questionId.questionText}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {answer.questionId.choices.map((choice, choiceIndex) => (
                                <div
                                    key={choiceIndex}
                                    className={`p-3 rounded-lg text-center transition-colors duration-200 ${choiceIndex === answer.selectedChoiceIndex
                                            ? 'bg-orange-500 text-white shadow-md'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {choice}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </Container>
    )
}

export default ViewResult