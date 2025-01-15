"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CustomRequestForm() {
  const params = useParams();
  // console.log("params", params);
  const [selectLocation, setSelectLocation] = useState("");
  const [step, setStep] = useState(1);
  const [mainStep, setmainStep] = useState(false);
  const [city, setCity] = useState("");
  const [formData, setFormData] = useState({
 
  });

  const handleSelectLocation = (location)=>{
    // setmainStep(true);
    setCity(location);
  }

  useEffect(() => {
    setCity(params.location);
    if (
      params.location === "gk" ||
      params.location === "wf" ||
      params.location === "hb"
    ) {
      setmainStep(true);
    }
  }, [params]);

  const locationWiseContent = {
    gk: {
      city: "New Delhi",
      area: "Greater Kailash 1",
      formHeader: "Schedule a Consultation @ Greater Kailash 1, Delhi",
      formPara:
        "Share your basic details to get started on your mental wellness journey with our expert",
    },
    wf: {
      city: "Bengaluru",
      area: "Whitefield (Varthur Road)",
      formHeader: "Schedule a Consultation @ Whitefield, Bangalore",
      formPara:
        "Share your basic details to get started on your mental wellness journey with our expert",
    },
    hb: {
      city: "Bengaluru",
      area: "Hebbal (Aster CMI Hospital)",
      formHeader: "Schedule a Consultation @ Hebbal, Bangalore",
      formPara:
        "Share your basic details to get started on your mental wellness journey with our expert",
    },
  };

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;



  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    // Update the form data without causing re-renders on every keystroke
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const nextStepMain = () => {
    setmainStep(true);

  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const LocationWiseForm = () => {
    return (
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
                  <p className="font-medium">{step}. Name*</p>
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
                  <p className="font-medium">{step}. Phone *</p>
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
                  <p className="font-medium">{step}. Message (Optional)</p>
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
                </div>
              </>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {step > 1  && (
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
        </div>
      </div>
    );
  };

  const SelectLocation = () => {
    return (
      <>
        <div className=" bg-gradient-to-br  ">
          <div className="">
            <div className="bg-[#f6dccc] p-6">
            <h2 className="text-2xl font-semibold text-orange-800 mb-2">
              Schedule a Consultation
            </h2>
            <p className="text-orange-700 mb-6 text-sm">
              Select your preferred location to get started on your mental
              wellness journey with our expert
            </p>
            </div>

            <form className=" p-5">
              <div className="space-y-2">
                <label className="block text-orange-800 font-medium mb-3">
                  1. Select Location*
                </label>
                <div className="grid gap-3">
                  <button
                  onClick={()=>handleSelectLocation("gk")}
                    type="button"
                    className={`w-full text-left px-4 py-3 rounded-md border border-orange-200 hover:border-orange-500  bg-white transition-colors ${city==="gk"?"outline-none ring-2 ring-orange-500":""}`}
                  >
                    Greater Kailash 1, Delhi
                  </button>

                  <button
                   onClick={()=>handleSelectLocation("wf")}
                    type="button"
                    className={`w-full text-left px-4 py-3 rounded-md border border-orange-200 hover:border-orange-500  bg-white transition-colors ${city==="wf"?"outline-none ring-2 ring-orange-500":""}`}
                  >
                    Whitefield (Varthur Road), Bangalore
                  </button>

                  <button
                   onClick={()=>handleSelectLocation("hb")}
                    type="button"
                    className={`w-full text-left px-4 py-3 rounded-md border border-orange-200 hover:border-orange-500  bg-white transition-colors ${city==="hb"?"outline-none ring-2 ring-orange-500":""}`}
                  >
                    Hebbal (Aster CMI Hospital), Bangalore
                  </button>
                </div>
              </div>

              {/* Navigation */}
          {!mainStep && city &&<div className="flex justify-end mt-8">
            
            <button
              onClick={nextStepMain}
              disabled={step === totalSteps}
              className={`p-2 flex items-center  justify-center font-bold border border-orange-700 text-orange-700 rounded-xl hover:bg-orange-50${
                step === totalSteps ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              ➜
            </button>
          </div>}
            </form>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="select-none">
      {!mainStep && <SelectLocation />}
      {mainStep && <LocationWiseForm />}
    </div>
  );
}
