"use client"
import React, { useEffect, useState } from 'react'
import AdsExperts from '../../../component/AdsExperts'
import AdsExpertsMobile from '../../../component/AdsExpertsMobile'
// import TestimonialComponent from '../../component/TestimonialComponent'
// import TestimonialComponentSlide from '@/app/component/TestimonialComponentSlide'
const AdsCombinePage = ({ condition, expertText, location, iframeSrc }) => {
    const [disableSlide, setDisableSlide] = useState(false)

    const MobileView = () => {

        return (
            <>
                <div className='grid grid-cols-1 
           items-center gap-4 mx-2'>
                    {/* Expert Team */}
                    <section className='min-h-[440px]'>
                        <AdsExpertsMobile iframeSrc={iframeSrc} condition={condition} disableSlide={disableSlide} setDisableSlide={setDisableSlide} expertText={expertText} location={location} />
                    </section>
                    {/* client speaks */}
                    {/* <section className='py-8 '>
                            <TestimonialComponentSlide doctor={doctor} iframeSrc={iframeSrc} condition={condition} location={location} disableSlide={disableSlide} setDisableSlide={setDisableSlide} smallDevice={true} />
                        </section> */}

                </div>
            </>
        )
    }

    const DesktopView = () => {
        return (
            <>
                <div className='grid grid-cols-1 
           items-center gap-4 mx-10'>
                    {/* Expert Team */}
                    <section>
                        <AdsExperts iframeSrc={iframeSrc} condition={condition} disableSlide={disableSlide} setDisableSlide={setDisableSlide} expertText={expertText} location={location} />
                    </section>
                    {/* client speaks */}
                    {/* <section className='py-8 '>
                            <TestimonialComponent condition={condition} location={location} disableSlide={disableSlide} setDisableSlide={setDisableSlide} />
                        </section> */}


                </div>
            </>
        )
    }


    return (
        <>
            <div className=' md:hidden'>
                <MobileView />
            </div>
            <div className='hidden md:block'>
                <DesktopView />
            </div>
        </>
    )
}

export default AdsCombinePage