"use client"
import React, { useEffect, useState } from 'react'
// import ImageGallary from './ImageGallary';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, FormControl, InputLabel, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import PractoWidget from './PractoWidget';
import { usePathname } from 'next/navigation';
import ZohoForm from '@/app/component/ZohoForm'


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
    const pathname = usePathname()
    // console.log("city", city)
    const iframeSrcStatic =
        // "https://forms.zohopublic.in/nikhilmindf1/form/RequestanAppointment/formperma/GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk?zf_rszfm=1";
       //last used // "https://forms.zohopublic.in/nikhilmindf1/form/SelectyourClinic/formperma/Byg-b2YLIH7SjrLKNMIaghP6fUKY1JxPihr6O1YvkXk" 
        "https://forms.zohopublic.in/nikhilmindf1/form/ContactUsGeneralEnquiries/formperma/BJAkc91gOqeQ4juDOHD3z-AgKu6XGc7Wg0qdBd7_axc"
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

            <Dialog open={requestModal} onClose={toggleRequestModal}>
                {/* <DialogTitle className='text-center font-semibold'>Request an Appointment</DialogTitle> */}
                <DialogContent className='w-[310px] md:w-[500px] p-0 m-0'>
                    {/*                 
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <TextField
                        margin="dense"
                        name="phone"
                        label="Phone Number"
                        type="number"
                        fullWidth
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!phoneError} // Show error state if error exists
                        helperText={phoneError} // Display error message
                    />
                    <FormControl fullWidth margin="dense">
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="Delhi" control={<Radio />} label="Delhi" />
                                <FormControlLabel value="Banglore Aster CMI" control={<Radio />} label="Banglore Aster CMI" />
                                <FormControlLabel value="Banglore Whitefield" control={<Radio />} label="Banglore Whitefield" />
                            </RadioGroup>
                        </FormControl>
                        <div className='py-4 flex flex-col justify-center items-center gap-5'>
                            <div className='w-full mb-3'>
                                {!isBusinessHours &&

                                    <>
                                        <TextField
                                            margin="dense"
                                            name="preferredTime"
                                            label="Preferred Time for Callback"
                                            type="time"
                                            fullWidth
                                            value={formData.preferredTime}
                                            onChange={handleChange}
                                        />

                                        {
                                            (!formData?.preferredTime || !isFormValid()) && <p className='text-center text-sm underline font-semibold text-red-500'>Provide  Time For Callback</p>
                                        }
                                    </>
                                }
                            </div>

                           
                            {isBusinessHours ? (
                                <button
                                    className={`select-none flex gap-2 w-full items-center justify-center text-white rounded-lg px-4 py-2 font-semibold text-center ${isFormValid() ? 'cursor-pointer active:shadow-xl active:bg-green-600 bg-green-500' : 'cursor-not-allowed bg-gray-300'}`}
                                    disabled={!isFormValid()}
                                    onClick={() => window.open(`https://wa.me/${formData?.whatsapp || currentLocation?.whatsapp}?text=${encodeURIComponent(`Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Location: ${formData.location}, Message: ${formData.message}`)}`, "_blank")}
                                >
                                    Contact on <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                    </svg>
                                </button>
                            ) : (
                                <>

                                    <button
                                        className={`select-none flex w-full  gap-2 justify-center items-center text-white rounded-lg px-4 py-3  font-semibold text-center ${isFormValid() && formData?.preferredTime ? 'cursor-pointer active:shadow-xl active:bg-blue-600 bg-blue-500' : 'cursor-not-allowed bg-gray-300'}`}
                                        disabled={!isFormValid() || !formData?.preferredTime}
                                        onClick={handleSubmit}
                                    >
                                        Request a Callback
                                    </button>

                                </>
                            )}

                            {!isFormValid() && <div>
                                <p className='text-center text-red-600 font-semibold'>Please fill in the form below to request an appointment.</p>
                            </div>}
                        </div>
                    </FormControl> */}
                    <div className='flex justify-end pt-3 px-3'>
                        <p className='' onClick={toggleRequestModal}><img className='w-[30px] cursor-pointer' src='https://ik.imagekit.io/mwpcmpi5v/iconsNew/closee.svg?updatedAt=1733748343028' /></p>
                    </div>
                    <ZohoForm containerId="zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQkq_"
                        iframeSrc={iframeSrc || iframeSrcStatic}
                    />
                </DialogContent>

            </Dialog>




        </>
    )
}




export default RequestAppointment