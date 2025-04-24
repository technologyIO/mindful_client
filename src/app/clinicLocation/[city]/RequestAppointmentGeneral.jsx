"use client"
import React, { useEffect, useState } from 'react'
// import ImageGallary from './ImageGallary';
import { Dialog, DialogContent,  } from '@mui/material';
// import PractoWidget from './PractoWidget';
// import { usePathname } from 'next/navigation';
import ZohoForm from '@/app/component/ZohoForm'



const TestRequestAppointmentGeneral = ({ children, iframeSrc }) => {


     const [queryString, setQueryString] = useState("");
     const [currentUrl, setcurrentUrl] = useState("");
     useEffect(() => {
        if (typeof window !== 'undefined') {
            const url = typeof window !== "undefined" ? window.location.href : "";
            setQueryString(window.location.search);
            setcurrentUrl(url);
        
        }
    }, []);
    const iframeSrcStatic = `https://forms.zohopublic.in/nikhilmindf1/form/OTPVerifiticationtest/formperma/uqvupaDUHDlIs1hLYWsCUIgydIk4e9EzI3T6ubRgt7Y?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&location=website&from=website`

    //  const iframeSrcStatic = `https://forms.zohopublic.in/nikhilmindf1/form/ContactUsGeneralEnquiries/formperma/BJAkc91gOqeQ4juDOHD3z-AgKu6XGc7Wg0qdBd7_axc${queryString}`
    // const containerId = "zf_div_GIA-DDTpKkpkN-kh9Kxyt6j0Imrq1AmKX_cUSYhHZQk"

    // console.log(city, pathname)
    const [requestModal, setRequestModal] = useState(false);

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

    // useEffect(() => {
    //     const checkBusinessHours = () => {
    //         const now = new Date();
    //         const hours = now.getHours();
    //         if (hours >= 10 && hours < 16) {
    //             setIsBusinessHours(true);
    //         } else {
    //             setIsBusinessHours(false);
    //         }
    //     };
    //     checkBusinessHours();
    // }, []);

    const toggleRequestModal = () => {
        setRequestModal(prev => !prev);
   
    }

    return (
        <>
            <div onClick={toggleRequestModal}>
                {children}
            </div>

            <Dialog open={requestModal} onClose={toggleRequestModal}>
                {/* <DialogTitle className='text-center font-semibold'>Request an Appointment</DialogTitle> */}
                <DialogContent className='w-[310px] md:w-[500px] p-0 m-0'>
                  
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




export default TestRequestAppointmentGeneral