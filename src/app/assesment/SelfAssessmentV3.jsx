import React from 'react'

const SelfAssessmentV3 = () => {
  return (
     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">MindfulTMS</h1>
              <p className="text-blue-100 text-sm">Mental Health Self-Assessment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Main Content Card */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
          {/* Progress Bar */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full w-1/4 rounded-r-full"></div>
          </div>

          <div className="p-8 lg:p-12">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                Before You Begin
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">About MindfulTMS Self-Assessments</h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed text-lg">
                {`  This is a self-assessment tool to help you understand your stress/anxiety/depression levels using
                  standard mental health scales. It gives you an idea of where you stand, but it's not a medical
                  diagnosis.`}
                </p>
              </div>
            </div>

            {/* Information Section */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">What Happens to Your Information</h3>
                </div>
                <p className="text-gray-700 mb-6 font-semibold text-lg">When you take this test:</p>
                <div className="grid gap-4">
                  {[
                    "We'll ask for your name and phone number to show you personalized results",
                    "Your answers are saved so we can improve our services",
                    "We may contact you about mental health services that could help you",
                    "We keep your information private and secure",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-white rounded-lg p-4 shadow-sm border border-green-100"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Information */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Important to Know</h3>
                </div>
                <div className="grid gap-4">
                  {[
                    "You must be 18+ to take this test (or have parent's permission if younger)",
                    "For a proper diagnosis, you need to see an RCI certified clinical psychologist",
                    "You can ask us to delete your data anytime - just email talk2us@mindfultms.in",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-white rounded-lg p-4 shadow-sm border border-amber-100"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {index === 2 ? (
                          <>
                            You can ask us to delete your data anytime - just email{" "}
                            <a
                              href="mailto:talk2us@mindfultms.in"
                              className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors duration-200"
                            >
                              talk2us@mindfultms.in
                            </a>
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Consent Section */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Ready to Start?</h3>
                </div>

                <div className="space-y-6">
                  {[
                    "I'm 18+ years old (or have parental consent)",
                    "I understand this is a self-assessment tool and agree to the above",
                  ].map((text, index) => (
                    <label
                      key={index}
                      className="flex items-start cursor-pointer group bg-white rounded-xl p-6 shadow-sm border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all duration-200"
                    >
                      <div className="relative">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-6 h-6 border-2 border-gray-300 rounded-md peer-checked:bg-gradient-to-br peer-checked:from-purple-500 peer-checked:to-indigo-600 peer-checked:border-transparent transition-all duration-200 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-4 text-gray-700 group-hover:text-gray-900 font-medium leading-relaxed">
                        {text}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact and Start Section */}
            <div className="text-center">
              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Questions?</span> Contact us at{" "}
                  <a
                    href="mailto:talk2us@mindfultms.in"
                    className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors duration-200"
                  >
                    talk2us@mindfultms.in
                  </a>
                </p>
              </div>

              <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="relative z-10 flex items-center justify-center">
                  Start Assessment
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2024 MindfulTMS. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </div>
  )
}

export default SelfAssessmentV3