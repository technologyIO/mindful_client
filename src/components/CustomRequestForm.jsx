"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CustomRequestForm() {
  const router = useRouter();
  const params = useParams();
  // console.log("params", params);
  const [city, setCity] = useState("");

  const [mainStep, setmainStep] = useState(false);
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
  const handleSelectLocation = (location) => {
    // setmainStep(true);
    setCity(location);
  };

  const nextStepMain = () => {
    setmainStep(true);
  };

  const totalSteps = 4;

  // lcoation component
  const LocationWiseForm = () => {
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

    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({});
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
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length === 0) {
        if (step === 3) {
          handleSubmit();
        } else {
          setStep((prev) => prev + 1);
        }
      } else {
        setErrors(validationErrors);
      }
    };

    const prevStep = () => {
      setStep((prev) => prev - 1);
    };
    const validateForm = () => {
      const validationErrors = {};
      if (step === 1) {
        if (!formData.Name_First || /\d/.test(formData.Name_First)) {
          validationErrors.Name_First =
            "First name must be a string and cannot contain numbers";
        }
        if (!formData.Name_Last || /\d/.test(formData.Name_Last)) {
          validationErrors.Name_Last =
            "Last name must be a string and cannot contain numbers";
        }
      }
      if (step === 2) {
        if (
          !formData.PhoneNumber_countrycode ||
          !/^\d{10}$/.test(formData.PhoneNumber_countrycode)
        ) {
          validationErrors.PhoneNumber_countrycode =
            "Phone number must be 10 digits";
        }
      }
      return validationErrors;
    };

    // const handleSubmit = () => {
    //   const formDataObj = new FormData();

    //   Object.entries(formData).forEach(([key, value]) => {
    //     formDataObj.append(key, value);
    //   });

    //   formDataObj.append("SingleLine", locationWiseContent[city]?.area);
    //   formDataObj.append("SingleLine1", "Website API");

    //   const now = new Date();

    //   const options = {
    //     day: '2-digit',
    //     month: 'short',
    //     year: 'numeric',
    //     hour: '2-digit',
    //     minute: '2-digit',
    //     hour12: true,
    //   };
    
    //   // Format the date
    //   const formattedDateTime = now
    //     .toLocaleDateString('en-US', options)
    //     .replace(',', '') // Remove comma after the day if present
    //     .replace(/\//g, '-'); // Replace slashes with dashes
    //   // const currentDateTime = new Date().toISOString(); // Example: "2025-01-16T07:01:57Z"
    //   // formDataObj.append("DateTime_date", formattedDateTime);

    //   // console.log("formattedDateTime", formattedDateTime)
    //   axios
    //     .post(
    //       `https://forms.zohopublic.in/nikhilmindf1/form/BookAnAppointment/formperma/Uq93G4qa5TH5tt-fhqy7GRrag0ttrrIj56ob9mELPXA/htmlRecords/submit`,
    //       formDataObj,
    //       {
    //         headers: {
    //           "Content-Type": "multipart/form-data",
    //         },
    //       }
    //     )
    //     .then((response) => {
    //       console.log(response);
    //       // Handle the response here
    //       setStep(4);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       // Handle the error here
    //     });
    // };

    // method 3
    const handleSubmit = () => {
     

      const data = {
        Name: { Name_First: "Sahil", Name_Last: "updated" },
        PhoneNumber: "1212121212",
        SingleLine: "gk test",
        MultiLine: "Test",
        SingleLine1: "Test",
        // DateTime: "15-Jan-2025 06:16 PM",
        REFERRER_NAME: "Test",
        GOOGLE_CLICK_ID: "Test",
        UTM_PARAM: {
          utm_source: "Test",
          utm_medium: "Test",
          utm_campaign: "Test",
          utm_term: "Test",
          utm_content: "Test",
          gclid: "Test",
          referrername: "Test",
        },
      };
      axios
        .post(
          `https://flow.zoho.in/60031053169/flow/webhook/incoming?zapikey=1001.a02dc432de7f7b04d260802e806ab11e.0cbda7eed401e3cfee5040c5fc5eb377&isdebug=false`,
          data
        )
        .then((response) => {
          console.log(response);
          // Handle the response here
          setStep(4);
        })
        .catch((error) => {
          console.error(error);
          // Handle the error here
        })
        .finally(() => {
          // Handle the final state here
          // router.push("/thankyou/mindful2");

        });
    };

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
            {step === 1 && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <p className="font-medium">{step}. Name*</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="Name_First"
                      value={formData.Name_First}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                    />
                    <label className="text-xs text-gray-500 mt-1">
                      First Name
                    </label>
                    {errors.Name_First && (
                      <p className="text-red-500 text-xs">
                        {errors.Name_First}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="Name_Last"
                      value={formData.Name_Last}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                    />
                    <label className="text-xs text-gray-500 mt-1">
                      Last Name
                    </label>
                    {errors.Name_Last && (
                      <p className="text-red-500 text-xs">{errors.Name_Last}</p>
                    )}
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
                    type="number"
                    name="PhoneNumber_countrycode"
                    value={formData.PhoneNumber_countrycode}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                  />
                  {errors.PhoneNumber_countrycode && (
                    <p className="text-red-500 text-xs">
                      {errors.PhoneNumber_countrycode}
                    </p>
                  )}
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
                    name="MultiLine"
                    value={formData.MultiLine}
                    onChange={handleInputChange}
                    placeholder="Message..."
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 h-24"
                  />
                </div>
              </>
            )}

            {step === 4 && <></>}
          </div>

          {/* Navigation */}
          <div
            className={`flex mt-8 ${
              step === totalSteps ? "justify-end" : "justify-between"
            }`}
          >
            {step > 1 && step < totalSteps && (
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
              className={`p-2 flex items-center  justify-center font-bold border border-orange-700 text-orange-700 rounded-xl hover:bg-orange-50`}
            >
              {step === 3 ? "Submit" : step === totalSteps ? "Done" : "➜"}
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
                    onClick={() => handleSelectLocation("gk")}
                    type="button"
                    className={`w-full text-left px-4 py-3 rounded-md border border-orange-200 hover:border-orange-500  bg-white transition-colors ${
                      city === "gk" ? "outline-none ring-2 ring-orange-500" : ""
                    }`}
                  >
                    Greater Kailash 1, Delhi
                  </button>

                  <button
                    onClick={() => handleSelectLocation("wf")}
                    type="button"
                    className={`w-full text-left px-4 py-3 rounded-md border border-orange-200 hover:border-orange-500  bg-white transition-colors ${
                      city === "wf" ? "outline-none ring-2 ring-orange-500" : ""
                    }`}
                  >
                    Whitefield (Varthur Road), Bangalore
                  </button>

                  <button
                    onClick={() => handleSelectLocation("hb")}
                    type="button"
                    className={`w-full text-left px-4 py-3 rounded-md border border-orange-200 hover:border-orange-500  bg-white transition-colors ${
                      city === "hb" ? "outline-none ring-2 ring-orange-500" : ""
                    }`}
                  >
                    Hebbal (Aster CMI Hospital), Bangalore
                  </button>
                </div>
              </div>

              {/* Navigation */}
              {!mainStep && city && (
                <div className="flex justify-end mt-8">
                  <button
                    onClick={nextStepMain}
                    className={`p-2 flex items-center  justify-center font-bold border border-orange-700 text-orange-700 rounded-xl hover:bg-orange-50$`}
                  >
                    ➜
                  </button>
                </div>
              )}
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
