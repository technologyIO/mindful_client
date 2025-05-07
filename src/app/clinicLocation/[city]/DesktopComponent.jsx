
"use client"
import { Container } from '@mui/material';
import DoctorCarousel from './DoctorCarousel';
import AppointmentForm from './AppointmentForm';
import ImageGallary from './ImageGallary';
import ImageCarousel from './ImageCarousel';
import RequestAppointment from './RequestAppointment';
import ClinicAddress from './ClinicAddress';
import OurDoctorSection from './OurDoctorSection';
import ClinicLocationDoctors from '@/app/component/ClinicLocationDoctors';
const DesktopComponent = ({ images, data, city }) => {
 
    const currentUrl = typeof window !== 'undefined' ? window.location.href : "";
// const  iframeSrc= `https://forms.zohopublic.in/nikhilmindf1/form/OTPVerifiticationtest/formperma/uqvupaDUHDlIs1hLYWsCUIgydIk4e9EzI3T6ubRgt7Y?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&location=${`website`}&solution=${`psychiatrist`}&from=website`;

//     console.log("content", iframeSrc)
    const content = {
        "Bengaluru-Whitefield":{
            // iframeSrc: "https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationWhitefieldBangalore/formperma/n7UqoYroFADQJ-HqsYjiuY41_3pJKGRkwARxLp1vVDQ"
            iframeSrc:`https://forms.zohopublic.in/nikhilmindf1/form/OTPVerifiticationtest/formperma/uqvupaDUHDlIs1hLYWsCUIgydIk4e9EzI3T6ubRgt7Y?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&location=${`whitefield`}&from=website`
            
        },
        "New-Delhi":{
            // iframeSrc: "https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationLPGK/formperma/ZSzbxKx_hXcJlDGEB0w3ryiWi8oK-NfameMJkXw7mi4"
            iframeSrc:`https://forms.zohopublic.in/nikhilmindf1/form/OTPVerifiticationtest/formperma/uqvupaDUHDlIs1hLYWsCUIgydIk4e9EzI3T6ubRgt7Y?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&location=${`greaterkailash`}&from=website`
        },
        "Bengaluru-Hebbal":{
            // iframeSrc: "https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationHebbalBangalore/formperma/RqE9YNKl1bYNAryFgvxELvCqhXm8xkK0jJYOcjk0Htc"
            iframeSrc:`https://forms.zohopublic.in/nikhilmindf1/form/OTPVerifiticationtest/formperma/uqvupaDUHDlIs1hLYWsCUIgydIk4e9EzI3T6ubRgt7Y?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&location=${`hebbal`}&from=website`

        },
    }
    return (
        <>
            <div className="bg-primary-div md:p-5 select-none mb-8">
                <Container maxWidth="lg" className="py-[65px]">
                    <div className="mx-auto md:p-4">
                        <h1 className="text-[28px] md:text-4xl font-bold text-center text-primary-orange">
                            {data?.addressTitle}
                        </h1>
                    </div>
                </Container>
             
            </div>

            <Container maxWidth="lg" className="py-5">
                <div className='grid md:grid-cols-5 gap-12 '>
                    <div id='photo-gallery' className="col-span-3">
                        <ImageCarousel images={images} />
                    </div>
                    <div id='clinic-location' className="mb-10 col-span-2">
                        {/* clinic location here */}
                        <div className='mb-8'>
                            {/* <RequestAppointment iframeSrc={content[city]?.iframeSrc} city={city} /> */}
                            <RequestAppointment  city={city} />
                        </div>
                        <div>
                            <ClinicAddress images={images} data={data} />
                        </div>
                    </div>
                </div>

                <div>
                <ClinicLocationDoctors city={city}/>
                </div>


            </Container>
        </>
    )
}

export default DesktopComponent