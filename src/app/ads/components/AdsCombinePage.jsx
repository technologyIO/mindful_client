"use client"
import React, { useState } from 'react'
import AdsExperts from '../../component/AdsExperts'
import AdsExpertsMobile from '../../component/AdsExpertsMobile'
import TestimonialComponent from '../../component/TestimonialComponent'
const AdsCombinePage = ({condition, expertText, location}) => {
    const [disableSlide, setDisableSlide] = useState(false)

    const MobileView = ()=>{
        return (
            <>
                <div className='grid grid-cols-1 
           items-center gap-4 mx-10'>
                        {/* Expert Team */}
                        <section>
                            <AdsExpertsMobile condition={condition} disableSlide={disableSlide} setDisableSlide={setDisableSlide}  expertText={expertText} location={location}/>
                        </section>
                        {/* client speaks */}
                        <section className='py-8 '>
                            <TestimonialComponent condition={condition} location={location} disableSlide={disableSlide} setDisableSlide={setDisableSlide} />
                        </section>

                    </div>
            </>
        )
    }

    const DesktopView = ()=>{
        return (
            <>
                <div className='grid grid-cols-1 
           items-center gap-4 mx-10'>
                        {/* Expert Team */}
                        <section>
                            <AdsExperts condition={condition} disableSlide={disableSlide} setDisableSlide={setDisableSlide}  expertText={expertText} location={location}/>
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
            <MobileView/>
         </div>
         <div className='hidden md:block'>
            <DesktopView/>
         </div>
    </>
  )
}

export default AdsCombinePage