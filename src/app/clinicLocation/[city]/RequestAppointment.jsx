"use client"
import React, { useEffect, useState } from 'react'
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { usePathname } from 'next/navigation';
import ZohoForm from '@/app/component/ZohoForm'
import CustomRequestForm from '@/components/CustomRequestForm'


const locations = [
    {
        name: "Aster CMI",
        area: "Bangalore North",
        bgColor: "bg-primary-orange",
        location: "Banglore Aster CMI",
        whatsapp: +919663095632,
        call: +919663095632,
        params: "Bengaluru-Hebbal"
    },
    {
        name: "Whitefield",
        area: "Bangalore North",
        bgColor: "bg-[#F8A51C]",
        location: "Banglore Whitefield",
        whatsapp: +919663095632,
        call: +919663095632,
        params: "Bengaluru-Whitefield"
    },
    {
        name: "Greater Kailash 1",
        area: "Delhi",
        bgColor: "bg-primary-orange",
        location: "Delhi",
        whatsapp: +919663095632,
        call: +919663095632,
        params: "New-Delhi"
    }
];

// Pages that should be excluded from showing the booking interface
const EXCLUDED_PATH_PREFIXES = [
    '/pages/rtms',
    '/pages/neurofeedback',
];

const EXCLUDED_FULL_PATHS = [];

const RequestAppointment = ({ city, name, customStyle, iframeSrc, iconSize, icon, header, nfb, externalTrigger, onClose }) => {
    const [queryString, setQueryString] = useState("");
    const [currentUrl, setcurrentUrl] = useState("");
    const [finalIframeSrc, setFinalIframeSrc] = useState("");
    const [showCallbackForm, setShowCallbackForm] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const url = typeof window !== "undefined" ? window.location.href : "";
            setQueryString(window.location.search);
            console.log(url)
            setcurrentUrl(url);
        }
    }, []);

    // Check if current path should show booking interface
    const shouldShowBookingInterface = () => {
        if (EXCLUDED_FULL_PATHS.includes(pathname)) {
            return false;
        }
        
        const matchesPrefix = EXCLUDED_PATH_PREFIXES.some(prefix => 
            pathname.startsWith(prefix)
        );
        
        return !matchesPrefix;
    };

    const showBooking = shouldShowBookingInterface();

    const bookingUrl = `https://forms.zohopublic.in/nikhilmindf1/form/BookaConsultation/formperma/bDcJatau7izILCUWrNcMLS5ywSZNGsJIcBdk4UbzNHE?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&from=website`;
    
    const callbackIframeSrc = `https://forms.zohopublic.in/nikhilmindf1/form/NewWebsiteForm2025/formperma/c_0ekKg-MlfFH_W45sMaGGhHWxwaUHYKun261OA_QS4?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&from=website`;

    const [requestModal, setRequestModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        doctor: '',
        location: '',
        message: ''
    });
    const [isValid, setIsValid] = useState(false);
    const [isBusinessHours, setIsBusinessHours] = useState(false);
    
    const currentLocation = locations.find((location) => {
        if (city === location.params) {
            return location
        }
    });

    useEffect(() => {
        console.log("externalTrigger", externalTrigger)
        if (externalTrigger !== undefined) {
            setRequestModal(externalTrigger);
        }
    }, [externalTrigger]);

    useEffect(() => {
        const handlePopState = () => {
            if (requestModal) {
                setRequestModal(false);
                setShowCallbackForm(false);
            }
        };

        if (requestModal) {
            window.history.pushState(null, '');
            window.addEventListener('popstate', handlePopState);
        }

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [requestModal]);

    useEffect(() => {
        const checkBusinessHours = () => {
            const now = new Date();
            const hours = now.getHours();
            if (hours >= 10 && hours < 16) {
                setIsBusinessHours(true);
            } else {
                setIsBusinessHours(false);
            }
        };
        checkBusinessHours();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(value)) {
                setPhoneError("Phone number must be 10 digits.");
            } else {
                setPhoneError("");
            }
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleRequestModal();
    };

    const [phoneError, setPhoneError] = useState("");
    
    const toggleRequestModal = () => {
        const newState = !requestModal;
        setRequestModal(prev => !prev);
        setShowCallbackForm(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            doctor: '',
            location: currentLocation?.location || "",
            message: '',
            preferredTime: ''
        });
        
        if (onClose && !newState) {
            onClose();
        }
    };

    const isFormValid = () => {
        return formData.name && formData.phone && formData.location;
    };

    useEffect(() => {
        const isFormValidBool = isFormValid();
        setIsValid(isFormValidBool)
        if (isFormValidBool) {
            console.log('storedata', formData);
            console.log('isFormValid', isFormValidBool);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);

    useEffect(() => {
        const newWhatsappNumber = locations?.find((location) => {
            return location.location === formData?.location
        })?.whatsapp
        setFormData((prev) => ({
            ...prev,
            whatsapp: newWhatsappNumber,
        }))
    }, [formData?.location]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const baseUrl = iframeSrc || callbackIframeSrc;
            const currentQueryString = window.location.search;
            
            if (currentQueryString) {
                const separator = baseUrl.includes('?') ? '&' : '?';
                const cleanQueryString = currentQueryString.startsWith('?') 
                    ? currentQueryString.substring(1) 
                    : currentQueryString;
                setFinalIframeSrc(baseUrl + separator + cleanQueryString);
            } else {
                setFinalIframeSrc(baseUrl);
            }
        }
    }, [iframeSrc, currentUrl, queryString, callbackIframeSrc]);

    // FIXED: Function to open booking - works on iOS and Android
    const openBookingInNewWindow = () => {
        // Create anchor tag and click it (works better on iOS)
        const link = document.createElement('a');
        link.href = bookingUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        // Append to body, click, and remove (required for iOS)
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {
                name ? 
                <button onClick={toggleRequestModal} className={`${customStyle ? customStyle : "bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 text-white text-sm font-semibold"} `}>
                    {icon ? <img src={icon} alt="icon" className={`${iconSize}`} /> : ""}
                    {name}
                </button>
                : 
                <button onClick={toggleRequestModal} className='text-xl w-full active:bg-orange-400 active:shadow-lg bg-primary-orange text-white px-6 py-2 rounded-lg font-semibold text-center'>
                    {icon ? <img src={icon} alt="icon" className={`w-${iconSize}`} /> : ""}
                    Request an Appointment
                </button>
            }

            {requestModal && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
                        onClick={toggleRequestModal}
                    ></div>
                    
                    {/* Modal */}
                    <div className="relative bg-white rounded-lg shadow-xl w-full max-w-[500px] mx-4 md:mx-0 max-h-[90vh] overflow-hidden z-50 flex flex-col">
                        {/* Header - Fixed at top */}
                        <div className={`flex-shrink-0 flex items-start border-b border-gray-200 ${header || nfb ? "justify-between p-4" : "justify-end pt-2"}`}>
                            {nfb && (
                                <div className="flex flex-col">
                                    <h2 className="text-base font-semibold text-gray-900">  
                                        Neurofeedback Consultation
                                    </h2>
                                    <span className="text-sm text-gray-800 italic">
                                        Book Now or Request a Callback
                                    </span>
                                </div>
                            )}
                            {header && (
                                <div className="flex flex-col">
                                    <h2 className="text-base font-semibold text-gray-900">  
                                        rTMS Consultation
                                    </h2>
                                    <span className="text-sm text-gray-800 italic">
                                        Book Now or Request a Callback
                                    </span>
                                </div>
                            )}
                            <button
                                onClick={toggleRequestModal}
                                className="p-1 rounded hover:bg-gray-100 transition"
                                aria-label="Close modal"
                            >
                                <img
                                    className="w-6 h-6"
                                    src="https://ik.imagekit.io/mwpcmpi5v/iconsNew/closee.svg?updatedAt=1733748343028"
                                    alt="Close"
                                />
                            </button>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto">
                            {/* Show booking interface if not excluded AND callback form is not shown */}
                            {showBooking && !showCallbackForm && (
                                <>
                                    {/* Booking interface - opens in new window */}
                                    <div className="booking-section p-8">
                                        <div className="text-center space-y-6">
                                            {/* Icon */}
                                            <div className="flex justify-center">
                                                <div className="bg-teal-100 p-4 rounded-full">
                                                    <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                    Book an Appointment
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    Select a convenient date and time for your appointment
                                                </p>
                                            </div>

                                          

                                            {/* CTA Button */}
                                            <button
                                                onClick={openBookingInNewWindow}
                                                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                </svg>
                                                <span>Book an Appointment</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                                </svg>
                                            </button>

                                           
                                        </div>
                                    </div>
                                    
                                    {/* Fallback section */}
                                    <div className="border-t border-gray-200 bg-gray-50 p-6">
                                        <p className="text-center text-gray-700 mb-3 text-sm">
                                            {`Couldn't find a time slot that works for you?`}
                                        </p>
                                        <button
                                            onClick={() => setShowCallbackForm(true)}
                                            className="w-full bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-6 py-3 text-white text-sm font-semibold transition-colors"
                                        >
                                            Request a Callback
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* Show callback form when button clicked OR when page is excluded */}
                            {(!showBooking || showCallbackForm) && (
                                <ZohoForm 
                                    containerId="zf_div_callback_form"
                                    iframeSrc={finalIframeSrc || callbackIframeSrc}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default RequestAppointment