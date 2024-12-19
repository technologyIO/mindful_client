// "use client"
import React from 'react'
import ImageGallary from './ImageGallary';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
// import PractoWidget from './PractoWidget';
import RequestAppointment from './RequestAppointment';
import ClinicAddress from './ClinicAddress';
import ClinicLocationDoctors from '@/app/component/ClinicLocationDoctors';
import { HomePageSections } from '@/example';
import Link from 'next/link';
const MobileComponent = ({ data, images, city }) => {
    const content = {
        "Bengaluru-Whitefield":{
            iframeSrc: "https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationWhitefieldBangalore/formperma/n7UqoYroFADQJ-HqsYjiuY41_3pJKGRkwARxLp1vVDQ"
            
        },
        "New-Delhi":{
            iframeSrc: "https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationLPGK/formperma/ZSzbxKx_hXcJlDGEB0w3ryiWi8oK-NfameMJkXw7mi4"
        },
        "Bengaluru-Hebbal":{
            iframeSrc: "https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationHebbalBangalore/formperma/RqE9YNKl1bYNAryFgvxELvCqhXm8xkK0jJYOcjk0Htc"

        },
    }
    const allSection = HomePageSections
    const servicesIcon = [
        {
            icon: 'https://ik.imagekit.io/mwpcmpi5v/iconsNew/therapy.webp?updatedAt=1733748349215',
            link: '/services/therapy',
            name: 'Therapy'
        },
        {
            icon: 'https://ik.imagekit.io/mwpcmpi5v/iconsNew/psychiatry.webp?updatedAt=1733748346328',
            link: '/services/psychiatry',
            name: 'Psychiatry'
    
        },
        {
            icon: 'https://ik.imagekit.io/mwpcmpi5v/iconsNew/assessment.webp?updatedAt=1733748342966',
            link: '/assesment',
            name: 'Professional Assessment'
    
        },
        {
            icon: 'https://ik.imagekit.io/mwpcmpi5v/iconsNew/tms.webp?updatedAt=1733748349152',
            link: '/pages/tms',
            name: 'rTMS'
    
        },
    ]

    return (
        <div className=' py-3'>
            <div className='px-4 mb-6'>
                <h1 className='text-2xl text-primary-orange text-center font-[700]'>{data?.addressTitle}</h1>
            </div>

            <div className='px-4 mb-8'>
                <ImageGallary images={images} />
            </div>
               {/* services */}
               <section className='py-5 px-4 bg-primary-div'>
                    <div className=''>
                        <div className='mb-5'>
                            <h1 className='text-3xl font-semibold text-gray-800 text-center'>Services We Offer</h1>
                        </div>
                        {
                            allSection?.section5?.services?.map((service, index) => (
                                <div key={index} className=''>
                                    <div className='grid grid-cols-2 items-center gap-6 justify-center'>
                                        {
                                            service?.array?.map((i, index) => (
                                                <Link href={servicesIcon[index]?.link} key={index} className='flex flex-col cursor-pointer justify-center items-center mb-2'>
                                                    <img src={servicesIcon[index]?.icon} className='w-[80px] h-[80px] mb-4' />
                                                    <p className='text- font-semibold text-center'>{servicesIcon[index]?.name}</p>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

           <div className='px-4 mb-11'>
            <ClinicLocationDoctors city={city}/>
           </div>

            <div className='px-4 mb-11'>
            <RequestAppointment iframeSrc={content[city]?.iframeSrc} city={city} />

            </div>
            <div className='px-4 mb-11'>
                <ClinicAddress images={images} data={data} />
            </div>

         
        </div>
    );
}

export default MobileComponent;

