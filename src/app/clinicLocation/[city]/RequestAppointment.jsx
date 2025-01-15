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
const RequestAppointment = ({ city, name, customStyle, iframeSrc, iconSize, icon }) => {
    const [queryString, setQueryString] = useState("");
    useEffect(() => {
           // Check if running in the browser
           if (typeof window !== 'undefined') {
               setQueryString(window.location.search); // Get the query string
               console.log(window.location.search) 
           }
       }, []);
    const pathname = usePathname()
    // console.log("city", city)
    const iframeSrcStatic = `https://forms.zohopublic.in/nikhilmindf1/form/ContactUsGeneralEnquiries/formperma/BJAkc91gOqeQ4juDOHD3z-AgKu6XGc7Wg0qdBd7_axc${queryString}`
        // "https://forms.zohopublic.in/nikhilmindf1/form/RequestanAppointment/formperma/GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk?zf_rszfm=1";
        
       //last used // "https://forms.zohopublic.in/nikhilmindf1/form/SelectyourClinic/formperma/Byg-b2YLIH7SjrLKNMIaghP6fUKY1JxPihr6O1YvkXk" 
    
    const containerId = "zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk"

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
                <DialogContent className='w-[310px] md:w-[500px] p-0 m-0 '>
                    
                    <div className='flex justify-end pt-3 px-3'>
                        <p className='' onClick={toggleRequestModal}><img className='w-[30px] cursor-pointer' src='https://ik.imagekit.io/mwpcmpi5v/iconsNew/closee.svg?updatedAt=1733748343028' /></p>
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