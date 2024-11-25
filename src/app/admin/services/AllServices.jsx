"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const AllServices = () => {
    const router = useRouter();
    const services = [
      {
        name:"Therapy",
        slug:'therapy',
      },
      {
        name:"TMS Treatment Page",
        slug:'tms-treatment-page',
  
      },
      {
        name:"Psychiatry",
        slug:'psychiatry',
        
      },
    ]
    return (
      <>
          <div className='p-11'>
              <div className='grid grid-cols-2 md:grid-cols-4  gap-5'>
              {
                  services.map((service, index) => (
                      <div key={index} onClick={()=>{router.push(`/admin/services/${service.slug}`)}}  className='bg-primary-div rounded-xl p-3 cursor-pointer select-none active:shadow-xl active:bg-orange-100'>
                          <h3 className='text-lg font-semibold text-primary-orange'>{service.name}</h3>
                      </div>
                  ))
              }
             
              </div>
              
          </div>
      </>
    )
}

export default AllServices