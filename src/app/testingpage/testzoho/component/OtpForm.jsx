"use client"

import { useState } from "react"
import axios from "axios"
import { Phone, Shield, Send, Check, RotateCcw, Loader2, CheckCircle, ArrowRight } from "lucide-react"

export default function OtpForm({ otpSucceed, setPrefilledData, prefilledData, closeModal }) {
    const [step, setStep] = useState(1)
    const [phone, setPhone] = useState("")
    const [otp, setOtp] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [countryCode, setCountryCode] = useState("+91")
    const handleSendOtp = async () => {
        setLoading(true)
        setMessage("")
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}otp/send-otp`, { phone: `${countryCode}${phone}` })
            if (res.data.success) {
                setStep(2)
                setMessage("OTP sent successfully!")
            }
        } catch (err) {
            setMessage(err.response?.data?.message || "Failed to send OTP")
        } finally {
            setLoading(false)
        }
    }

    const handleVerifyOtp = async () => {
        setLoading(true)
        setMessage("")
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}otp/verify-otp`, { phone: `${countryCode}${phone}`, otp })
            if (res.data.success) {
                setStep(3)
                setPrefilledData({ ...prefilledData, phone, code: countryCode })
            } else {
                setMessage("Invalid OTP ❌")
            }
        } catch (err) {
            setMessage(err.response?.data?.message || "Verification failed")
        } finally {
            setLoading(false)
        }
    }

    const handleNext = () => {
        otpSucceed()
    }

    const getStepIcon = () => {
        switch (step) {
            case 1:
                return <Phone className="w-8 h-8 text-white" />
            case 2:
                return <Shield className="w-8 h-8 text-white" />
            case 3:
                return <CheckCircle className="w-8 h-8 text-white" />
            default:
                return <Phone className="w-8 h-8 text-white" />
        }
    }

    const getStepTitle = () => {
        switch (step) {
            case 1:
                return "Phone Verification"
            case 2:
                return "Enter OTP Code"
            case 3:
                return "Verification Complete"
            default:
                return "Phone Verification"
        }
    }

    const getStepDescription = () => {
        switch (step) {
            case 1:
                return "We'll send you a verification code"
            case 2:
                return `Code sent to ${phone}`
            case 3:
                return "Your phone number has been verified successfully"
            default:
                return "We'll send you a verification code"
        }
    }

    const getGradientColors = () => {
        switch (step) {
            case 1:
                return "from-blue-500 to-purple-600"
            case 2:
                return "from-blue-500 to-purple-600"
            case 3:
                return "from-green-500 to-emerald-600"
            default:
                return "from-blue-500 to-purple-600"
        }
    }

    return (
        <div className="mx-2 mt-10 max-w-md bg-white  rounded-xl">
            <div className="p-8 border rounded-3xl backdrop-blur-sm">
                {/* Header */}
                <div className="text-center mb-8">
                    {step != 3 && <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getGradientColors()} rounded-full mb-4 transition-all duration-500`}
                    >
                        {getStepIcon()}
                    </div>}
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                        {getStepTitle()}
                    </h1>
                    <p className="text-gray-500 text-sm">{getStepDescription()}</p>
                </div>

                {/* Step 1: Phone Input */}
                {step === 1 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-4 gap-4 items-center">
                            <select
                                name="countryCode"
                                value={countryCode}
                                onChange={e => setCountryCode(e.target.value)}
                                className="col-span-1 py-3  border-2 border-gray-200 rounded-2xl bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-gray-800"
                            >
                                <option value="+91">(+91) Ind </option>
                                <option value="+1">(+1) USA </option>
                                <option value="+44">(+44) UK </option>
                                <option value="+61">(+61) Aus </option>
                                <option value="+49">(+49) Ger </option>
                                {/* …add more as needed */}
                            </select>
                            <div className="relative col-span-3">
                                <div className="absolute hidden inset-y-0 left-0 pl-4 md:flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter phone number"
                                    value={phone}
                                    autoFocus
                                    onChange={(e) => setPhone(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendOtp()}
                                    className="w-full pl-12 pr-4 py-4 border-2 text-center border-gray-200 rounded-2xl text-lg font-medium placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none"
                                />
                            </div>
                        </div>
                        <button
                            onClick={handleSendOtp}
                            disabled={loading || !phone.trim()}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold text-lg py-4 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Send OTP
                                </>
                            )}
                        </button>
                    </div>
                )}

                {/* Step 2: OTP Input */}
                {step === 2 && (
                    <div className="space-y-6">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Shield className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Enter 4-digit OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                 onKeyDown={(e) => e.key === 'Enter' && handleVerifyOtp()}
                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-lg font-medium placeholder-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 outline-none text-center tracking-widest"
                                maxLength="6"
                                autoFocus
                            />
                        </div>
                        <button
                            onClick={handleVerifyOtp}
                            disabled={loading || !otp.trim()}
                            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold text-lg py-4 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Verifying...
                                </>
                            ) : (
                                <>
                                    <Check className="w-5 h-5" />
                                    Verify OTP
                                </>
                            )}
                        </button>
                    </div>
                )}

                {/* Step 3: Verification Success */}
                {step === 3 && (
                    <div className="space-y-6" onKeyDown={(e) => e.key === 'Enter' && handleNext()}>
                        {/* Success Animation */}
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6 animate-pulse">
                                <CheckCircle className="w-10 h-10 text-white" />
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
                                <div className="flex items-center justify-center gap-3 text-green-700">
                                    <Check className="w-6 h-6" />
                                    <span className="text-lg font-semibold">OTP Verified Successfully!</span>
                                </div>
                                <p className="text-green-600 text-sm mt-2">Your phone number {phone} has been confirmed</p>
                            </div>
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-semibold text-lg py-4 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            <span>Continue</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                )}

                {/* Message Display (for steps 1 and 2) */}
                {message && step !== 3 && (
                    <div
                        className={`mt-6 p-4 rounded-2xl text-center font-medium ${message.includes("success") || message.includes("✅")
                                ? "bg-green-50 text-green-700 border border-green-200"
                                : "bg-red-50 text-red-700 border border-red-200"
                            }`}
                    >
                        {message}
                    </div>
                )}

                {/* Resend Button (only for step 2) */}
                {step === 2 && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setStep(1)}
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm hover:bg-blue-50 px-4 py-2 rounded-xl transition-all duration-200"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Resend OTP?
                        </button>
                    </div>
                )}

                {/* Progress Indicator */}
                <div className="mt-8 flex justify-center space-x-2">
                    <div
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${step >= 1 ? "bg-blue-500" : "bg-gray-200"}`}
                    />
                    <div
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${step >= 2 ? (step === 2 ? "bg-blue-500" : "bg-green-500") : "bg-gray-200"
                            }`}
                    />
                    <div
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${step >= 3 ? "bg-green-500" : "bg-gray-200"}`}
                    />
                </div>
            </div>
        </div>
    )
}
