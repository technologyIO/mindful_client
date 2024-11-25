import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
  return (
    <div className='py-3'>
      <div className='flex justify-center'>
        <h1 className='text-2xl font-semibold'>Contact Us</h1>
      </div>
      <div className='p-4 flex items-center overflow-x-scroll  gap-4'>
        <div className='bg-primary-orange py-3 px-3 rounded-lg shadow min-w-[170px]'>
          <div className='flex justify-center mb-3'>
            <div className='w-[40px]'>
              <Image src='/home/wassup.svg' width={100} height={100} />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-white '>
            <p className='font-semibold text-sm'>Aster CMI</p>
            <h1 className='text-lg font-semibold  '>Bangalore North</h1>
          </div>
        </div>
        <div className='bg-[#F8A51C] py-3 px-3 rounded-lg shadow min-w-[170px]'>
          <div className='flex justify-center mb-3'>
            <div className='w-[40px]'>
              <Image src='/home/wassup.svg' width={100} height={100} />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-white '>
            <p className='font-semibold text-sm'>Aster CMI</p>
            <h1 className='text-lg font-semibold  '>Bangalore North</h1>
          </div>
        </div>
        <div className='bg-primary-orange py-3 px-3 rounded-lg shadow min-w-[170px]'>
          <div className='flex justify-center mb-3'>
            <div className='w-[40px]'>
              <Image src='/home/wassup.svg' width={100} height={100} />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-white '>
            <p className='font-semibold text-sm'>Aster CMI</p>
            <h1 className='text-lg font-semibold  '>Bangalore North</h1>
          </div>
        </div>
      </div>

      <div className='border-[1.5px] mt-2 mb-6 border-t-[#F8A51C] mx-6 '>

      </div>

      <form className='mb-4 px-6'>

        <div className='mb-4 flex justify-center' >
          <h1 className='text-lg font-semibold'>Request a Callback</h1>
        </div>
        <div className='grid grid-cols-1 mb-6'>
          <div className='flex flex-col mb-3'>
            <label className='text-sm mb-1'>Full Name</label>
            <input type="text" className='border-2 py-3 border-orange-400 outline-none  p-2 rounded-lg px-6' />
          </div>
          <div className='flex flex-col mb-3'>
            <label className='text-sm mb-1'>Phone Number </label>
            <input type="text" className='border-2 py-3 border-orange-400 outline-none  p-2 rounded-lg px-6' />
          </div>
          <div className='flex flex-col mb-3'>
            <label className='text-sm mb-1'>Email</label>
            <input type="text" className='border-2 py-3 border-orange-400 outline-none  p-2 rounded-lg px-6' />
          </div>

        </div>
        <div className='mb-6'>
          <p className='text-sm mb-2'>Choose a preferred time to call</p>
          <div className='flex gap-3 items-center overflow-x-scroll'>
            <button className='border-2 bg-primary-orange text-white p-4 rounded-lg font-semibold min-w-[120px]'>
              09:00 AM
            </button>

            <button className='border-2 border-orange-400 p-4 rounded-lg font-semibold min-w-[120px]'>
              11:00 AM
            </button>

            <button className='border-2 border-orange-400 p-4 rounded-lg font-semibold min-w-[120px]'>
              03:00 PM
            </button>

            <button className='border-2 border-orange-400 p-4 rounded-lg font-semibold min-w-[120px]'>
              05:00 PM
            </button>
          </div>

        </div>
        <div className='mb-6'>
          <label className='text-sm  mb-2'>Message</label>
          <textarea className='w-full border-2 border-orange-400 outline-none  p-2 rounded-lg px-6 h-32' />
        </div>
        <div className='flex justify-center'>
          <button type='submit' className='bg-primary-orange text-white font-semibold w-[75%] rounded-lg py-3'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactUs