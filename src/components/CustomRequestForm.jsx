"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CustomRequestForm() {
  const params = useParams();
  console.log('params', params);
  const [step, setStep] = useState(1);
  const [city, setCity] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  useEffect(()=>{
    setCity(params.location)
  },[params])


  const locationWiseContent = {
    "gk": {
        city: 'New Delhi',
        area: "Greater Kailash 1",
        formHeader:"Schedule a Consultation @ Greater Kailash 1, Delhi",
        formPara:"Share your basic details to get started on your mental wellness journey with our expert"
    },
    "wf": {
        city: 'Bengaluru',
        area: "Whitefield (Varthur Road)",
        formHeader:"Schedule a Consultation @ Whitefield, Bangalore",
        formPara:"Share your basic details to get started on your mental wellness journey with our expert"
    },
    "hb": {
        city: 'Bengaluru',
        area: "Hebbal (Aster CMI Hospital)", 
        formHeader:"Schedule a Consultation @ Hebbal, Bangalore",
        formPara:"Share your basic details to get started on your mental wellness journey with our expert"
    }
  }

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const LocationWiseForm = ()=>{
    
  }

  return (
    <div className="select-none">
      <div className="">
        {/* Progress bar */}
        <div className="w-full h-2 bg-[#f6c1ab]">
          <div
            className="h-full bg-[#cc6e11] transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header */}
        <div className="bg-[#f6dccc] p-6 ">
          <h2 className="text-xl md:text-2xl text-[#cc6e11] font-medium">
            {locationWiseContent[city]?.formHeader}
          </h2>
          <p className="text-[#cc6e11] mt-2 text-sm">
            {locationWiseContent[city]?.formPara}
          </p>
        </div>

        {/* Form content */}
        <div className="p-6">
          <div className="mb-6">
            {/* <div className="flex items-center justify-between mb-4">
              <p className="font-medium">
                {step}. {step === 1 ? "Name" : "Phone"} *
              </p>
             
            </div> */}

            {step === 1 && (
             <>
             <div className="flex items-center justify-between mb-4">
              <p className="font-medium">
                {step}. Name*
              </p>
             
            </div>
                 <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                  />
                  <label className="text-xs text-gray-500 mt-1">
                    First Name
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                  />
                  <label className="text-xs text-gray-500 mt-1">
                    Last Name
                  </label>
                </div>
              </div>
             </>
            )}

            {step === 2 && (
               <>
                <div className="flex items-center justify-between mb-4">
                <p className="font-medium">
                  {step}. Phone *
                </p>
               
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                />
              </div>
              </>
            )}

            {step === 3 && (
             <>
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">
                  {step}. Message (Optional)
                </p>
                
               
              </div>
              <div className="mb-4 text-xs">
                {`Briefly Describe why you're looking for support. You could answer basic information such as: How long have you been feeling this way? What do you find the hardest to deal with? This is optional. You can leave this section blank.`}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message..."
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 h-24"
                />
              </div></>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="p-2 flex items-center rotate-180 justify-center font-bold border border-orange-700 text-orange-700 rounded-xl hover:bg-orange-50"
              >
                ➜
              </button>
            )}
            {step === 1 && <div />}
            <button
              onClick={nextStep}
              disabled={step === totalSteps}
              className={`p-2 flex items-center  justify-center font-bold border border-orange-700 text-orange-700 rounded-xl hover:bg-orange-50${
                step === totalSteps ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              ➜
            </button>
          </div>

          {/* Step indicators */}
          {/* <div className="flex justify-center gap-2 mt-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i === step
                    ? "bg-orange-500"
                    : i < step
                    ? "bg-orange-300"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
