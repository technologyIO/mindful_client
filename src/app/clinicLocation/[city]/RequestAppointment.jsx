"use client"
import React, { useEffect, useState } from 'react'
// import ImageGallary from './ImageGallary';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, FormControl, InputLabel, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import PractoWidget from './PractoWidget';
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
const RequestAppointment = ({ city, name, customStyle, iframeSrc, iconSize, icon , header}) => {
    const [queryString, setQueryString] = useState("");
    const [currentUrl, setcurrentUrl] = useState("");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const url = typeof window !== "undefined" ? window.location.href : "";
            setQueryString(window.location.search);
            setcurrentUrl(url);
        }
    }, []);
    // useEffect(() => {
    //        // Check if running in the browser
    //        if (typeof window !== 'undefined') {
    //            setQueryString(window.location.search); // Get the query string
    //         //    console.log(window.location.search) 
    //        }
    //    }, []);
    const pathname = usePathname()
    // console.log("city", city)
    const iframeSrcStatic = `https://forms.zohopublic.in/nikhilmindf1/form/NewWebsiteForm2025/formperma/c_0ekKg-MlfFH_W45sMaGGhHWxwaUHYKun261OA_QS4?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&from=website`
    //    const iframeSrcStatic = `https://forms.zohopublic.in/nikhilmindf1/form/OTPVerifiticationtest/formperma/uqvupaDUHDlIs1hLYWsCUIgydIk4e9EzI3T6ubRgt7Y?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&location=website&from=website`
    // const iframeSrcStatic = `https://forms.zohopublic.in/nikhilmindf1/form/ContactUsGeneralEnquiries/formperma/BJAkc91gOqeQ4juDOHD3z-AgKu6XGc7Wg0qdBd7_axc${queryString}`
    // "https://forms.zohopublic.in/nikhilmindf1/form/RequestanAppointment/formperma/GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk?zf_rszfm=1";

    //last used // "https://forms.zohopublic.in/nikhilmindf1/form/SelectyourClinic/formperma/Byg-b2YLIH7SjrLKNMIaghP6fUKY1JxPihr6O1YvkXk" 

    const containerId = "zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk"
    // console.log("zohoform url ",iframeSrc|| iframeSrcStatic)
    // console.log(city, pathname)
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
    })
    useEffect(() => {
        const handlePopState = () => {
            if (requestModal) {
                setRequestModal(false);
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

        // Validate phone number when the "phone" field changes
        if (name === "phone") {
            const phoneRegex = /^[0-9]{10}$/; // Regex for 10-digit number
            if (!phoneRegex.test(value)) {
                setPhoneError("Phone number must be 10 digits."); // Set error message
            } else {
                setPhoneError(""); // Clear error if valid
            }
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        toggleRequestModal();
    }
    const [phoneError, setPhoneError] = useState("");
    const toggleRequestModal = () => {
        setRequestModal(prev => !prev);
        setFormData({
            name: '',
            email: '',
            phone: '',
            doctor: '',
            location: currentLocation?.location || "",
            message: '',
            preferredTime: ''
        });
    }

    const isFormValid = () => {
        return formData.name && formData.phone && formData.location;
    }
    useEffect(() => {
        const isFormValidBool = isFormValid();
        setIsValid(isFormValidBool)
        if (isFormValidBool) {
            console.log('storedata', formData);
            console.log('isFormValid', isFormValidBool);
        }
    }, [formData])

    useEffect(() => {
        const newWhatsappNumber = locations?.find((location) => {
            return location.location === formData?.location
        })?.whatsapp
        setFormData((prev) => ({
            ...prev,
            whatsapp: newWhatsappNumber,
        }))
        // console.log(newWhatsappNumber)
    }, [formData?.location])
    return (
        <>
            {
                name ? <button onClick={toggleRequestModal} className={`${customStyle ? customStyle : "bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 text-white text-sm font-semibold"} `}>
                    {
                        icon ? <img src={icon} alt="icon" className={`${iconSize}`} /> : ""
                    }
                    {name}</button>
                    : <button onClick={toggleRequestModal} className='text-xl w-full active:bg-orange-400 active:shadow-lg bg-primary-orange text-white px-6 py-2 rounded-lg font-semibold text-center'>
                        {
                            icon ? <img src={icon} alt="icon" className={`w-${iconSize}`} /> : ""
                        }
                        Request an Appointment</button>
            }

            <Dialog open={requestModal} onClose={toggleRequestModal} className=''>
                <DialogContent className=' md:w-[500px] p-0 m-0 '>

                  <div className={`flex  items-start border-b border-gray-200 ${header? "justify-between  p-4":"justify-end pt-2"}`}>
                      {
                        header &&   <div className="flex flex-col">
                            <h2 className="text-base font-semibold text-gray-900">  
                                Book Now or Request a Callback
                            </h2>
                            <span className="text-sm text-gray-800 italic">
                                Share your name and number - we'll reach out shortly
                            </span>
                        </div>
                      }
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

                    <ZohoForm containerId="zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQkq_"
                        iframeSrc={iframeSrc || iframeSrcStatic}
                    />
                    {/* <CustomRequestForm/> */}
                </DialogContent>

            </Dialog>




        </>
    )
}




export default RequestAppointment