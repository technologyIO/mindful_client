"use client"
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import RenderZohoform from "./RenderZohoform";
import OtpForm from "./OtpForm";
export default function BookConsult({ children,params, name, customStyle }) {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState("otp"); // otp, form
    const [otpValue, setOtpValue] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        information: "",
    });
    const [prefilledData, setPrefilledData] = useState({});
    const router = useRouter();

    // create portal div on client
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const openModal = () => {
        setIsOpen(true);
        setStep("otp"); // change this to "form" to open the form(for testing only after that change it to "otp")
        setOtpValue("");
    };
    const closeModal = () => setIsOpen(false);

    const otpSucceed = (e) => {
            setStep("form");
    };


    const modalContent = (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div onClick={closeModal} className="absolute inset-0 bg-black opacity-50" />
            {/* Modal */}
            <div className="relative bg-transparent rounded-lg  w-full max-w-xl z-10 mx-3">
               
                {/* <h2 className="text-xl font-bold mb-4 text-center">
                    {step === "otp" ? "Verify OTP" : ""}
                </h2> */}
                {step === "otp" ? 
                <OtpForm otpSucceed={otpSucceed} prefilledData={prefilledData} setPrefilledData={setPrefilledData} closeModal={closeModal}/> 
                :
                 <RenderZohoform params={params}  prefilledData={prefilledData} setPrefilledData={setPrefilledData} closeModal={closeModal}/>}
                {/* {step === "form" && (
                    <button onClick={() => setStep("otp")} className="mt-2 text-sm text-blue-600 hover:underline">
                        Back to OTP
                    </button>
                )} */}
            </div>
        </div>
    );

    return (
        <>
            <div className="w-full" onClick={openModal}>{children}</div>
            
            {mounted && isOpen && createPortal(modalContent, document.body)}
        </>
    );
}
