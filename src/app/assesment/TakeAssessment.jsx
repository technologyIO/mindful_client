import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const TakeAssessment = ({ allSection }) => {

    const testsList = [
        {
            title: "Test for Depression",
            description: "This test helps evaluate the severity of depression symptoms.",
            action: "Take the PHQ-9 Test",
            link:'/assesment/depression/selfAssesment'
        },
        {
            title: "Test for Anxiety",
            description: "This test helps evaluate the severity of anxiety symptoms.",
            action: "Take the GAD-7 Test",
            link:'/assesment/anxiety/selfAssesment'
        },
        {
            title: "Test for Stress",
            description: "This test assesses how stressful you find your life situations.",
            action: "Take the PSS-10 Test",
            link:'/assesment/stress/selfAssesment'
        }
    ]
    return (
        <>
          <Container maxWidth="xl">
          <div className="min-h-screen  p-4 sm:p-6 h-screen lg:p-8">
                <div className=" mx-auto h-full">
                    <div className="bg-primary-div rounded-t-lg p-6 mb-6">
                        <h1 className="text-3xl font-bold text-primary-orange mb-2">Take a Self-Assessment</h1>
                        <p className="text-primary-orange text-opacity-90">
                            Welcome to our self-assessment page. Here, you can choose from a variety of tests to help you
                            understand your mental health better. Select the test that best matches your current feelings and concerns.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg  p-6 mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Available Tests</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {testsList.map((test, index) => (
                                <div key={index} className="bg-white rounded-lg  shadow-lg hover:shadow-lg transition-shadow duration-300">
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold mb-2">{test.title}</h3>
                                        <p className="text-gray-600 mb-4">{test.description}</p>
                                        <Link href={test?.link ?? '#'} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                                            {test.action}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <div className="bg-primary-div rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Not sure which test to take?</h2>
                        <p className="text-gray-600 mb-6">
                            The K10 is designed to measure general psychological distress and can be an effective initial screening
                            tool to identify whether you may need further assessment or support.
                        </p>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-2">K10 (Kessler Psychological Distress Scale)</h3>
                            <p className="text-gray-600 mb-4">
                                This test assesses the level of distress you have experienced in the past month.
                                It helps identify symptoms of anxiety and depression, emotional and physical fatigue,
                                and the impact on daily functioning.
                            </p>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                                Take the K10 Test
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
          </Container>
        </>
    )
}

export default TakeAssessment
