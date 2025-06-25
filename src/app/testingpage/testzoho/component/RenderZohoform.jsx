'use client'

import { useState, useRef } from 'react'
import { User, Phone, CheckCircle, Calendar, ArrowRight, X } from "lucide-react"

export default function RenderZohoform({prefilledData, closeModal}) {
  const [formData, setFormData] = useState({
    Name_First: '',
    Name_Last: '',
    PhoneNumber_countrycodeVal: '' || prefilledData.phone,
    Radio: ''
  })
  const formRef = useRef(null)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    formRef.current.submit()
  }

  return (
   <div className="flex items-start justify-center px-4 ">
      <form
        ref={formRef}
        action="https://forms.zohopublic.in/nikhilmindf1/form/NativeFormIntegrationTest/formperma/oHFN5Oab03v8hwd0iRPv1mky3-MYeEsIiKVdWl8c92M/htmlRecords/submit"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 "
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-4 py-4 text-center relative overflow-hidden ">
          <div className=""></div>
          <div className=" ">
            <div className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
              <User className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">New LP Form 2025</h2>
            <p className="text-teal-100 text-sm">Fill out the form below to get started</p>
          </div>
          <div className="absolute top-4 right-4">
            <button onClick={closeModal}>
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
          {/* Decorative elements */}
          
        </div>

        <div className="px-8 py-10 space-y-4 max-h-[400px] overflow-y-auto ">
          {/* Name Fields */}
          <div className="space-y-6 mb-3 ">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="first-name"
                    name="Name_First"
                    type="text"
                    maxLength={255}
                    value={formData.Name_First}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="last-name"
                    name="Name_Last"
                    type="text"
                    maxLength={255}
                    value={formData.Name_Last}
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-1 pl-4 flex items-center pointer-events-none">
                  {/* <Phone className="h-5 w-5 text-gray-400" /> */}
                </div>
                <input
                  id="PhoneNumber_countrycodeVal"
                  name="PhoneNumber_countrycodeVal"
                  disabled={prefilledData.phone ? true : false}
                  type="text"
                  maxLength={255}
                  value={formData.PhoneNumber_countrycodeVal}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className={`w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 text-gray-800 placeholder-gray-400 ${
                    prefilledData.phone ? "bg-gray-100 cursor-not-allowed" : "bg-gray-50 focus:bg-white"
                  }`}
                />
                {prefilledData.phone && (
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Radio Choices */}
          <div className="space-y-6 mb-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Booking Preference</h3>
            </div>

            <fieldset className="space-y-4">
              <legend className="text-gray-700 font-semibold text-base">
                Choose One <span className="text-red-500">*</span>
              </legend>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="Radio"
                    value="Request Callback"
                    checked={formData.Radio === "Request Callback"}
                    onChange={handleChange}
                    required
                    className="sr-only"
                  />
                  <div
                    className={`p-6 border-2 rounded-xl transition-all duration-200 ${
                      formData.Radio === "Request Callback"
                        ? "border-teal-500 bg-teal-50 shadow-lg"
                        : "border-gray-600 shadow-lg bg-white hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.Radio === "Request Callback" ? "border-teal-500 bg-teal-500" : "border-gray-300"
                        }`}
                      >
                        {formData.Radio === "Request Callback" && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Request Callback</div>
                        <div className="text-sm text-gray-600">{`We'll contact you`}</div>
                      </div>
                    </div>
                  </div>
                </label>

                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="Radio"
                    value="Book Immediately"
                    checked={formData.Radio === "Book Immediately"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div
                    className={`p-6 border-2 rounded-xl transition-all duration-200 ${
                      formData.Radio === "Book Immediately"
                        ? "border-teal-500 bg-teal-50 shadow-lg"
                        : "border-gray-200 shadow-lg bg-white hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.Radio === "Book Immediately" ? "border-teal-500 bg-teal-500" : "border-gray-300"
                        }`}
                      >
                        {formData.Radio === "Book Immediately" && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Book Immediately</div>
                        <div className="text-sm text-gray-600">Schedule now</div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </fieldset>
          </div>

          {/* Helper Text */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div className="text-sm text-blue-800 leading-relaxed">
                Select <strong className="font-semibold">Request Callback</strong> to submit the form and our team will
                reach out to you, or choose <strong className="font-semibold">Book Immediately</strong> {`to be redirected to our booking partner's page to schedule your appointment.`}
              </div>
            </div>
          </div>

         
        </div>
         {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-3 group"
            >
              <span>Submit Form</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
      </form>
    </div>
  )
}








