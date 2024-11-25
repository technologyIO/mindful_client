"use client"

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Confirmation = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const [reasonModal, setReasonModal] = useState(false);
  return (
    <>
          <div className='select-none'>
            <div className='flex p-6 items-center'>
                <div className='mr-4' onClick={() => router.back()}>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    // className="w-6 h-6"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </div>
                <div>
                <h1 className="text-2xl font-bold ">Appointment
                Confirmed!</h1>

                </div>
            </div>
            <div className=" flex flex-col items-center justify-center bg-background text-foreground px-4">
                <div className="w-full max-w-md bg-card p-6 rounded-lg ">

                    <p className="text-primary-orange text-center mb-4">  Appointment details below</p>
                    <div className="bg-card p-4 border-[#EF6623] rounded-md border border-border mb-4">
                        <div className="flex items-center justify-between px-2 mb-2">
                            <div>

                                <svg xmlns="http://www.w3.org/2000/svg" width="26" color="gray" height="26" fill="#EF6623" className="bi bi-calendar4-event" viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold">20 June 2024 | 11:25</p>
                                <p className="text-muted-foreground text-sm">1hr | One on One</p>
                                <p className="text-muted-foreground text-sm">Asia/Kolkata - IST (+05:30)</p>
                            </div>
                        </div>
                        <div className='border-[.8px] mb-4 border-[#EF6623]'></div>
                        <div className="flex items-center justify-between  mb-2">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" color='gray' fill="#EF6623" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>
                            <div className='ml-7'>
                                <p className="font-semibold">Bangalore North</p>
                                <p className="text-muted-foreground">MindfulTMS @ Aster CMI</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>

                        <p className="text-center text-primary-orange mb-4 text-sm inline-block  underline border-gray-400">
                            Add to Calendar | Download as ICS
                        </p>
                    </div>

                    <button onClick={() => router.push('/consultation/location')} className="w-full font-semibold bg-primary-orange text-white py-3 rounded-lg mb-4 ">BOOK ANOTHER APPOINTMENT</button>
                    <button onClick={() => setOpen(true)} className="w-full text-destructive-foreground text-muted-foreground text-sm inline-block  rounded-lg underline">Cancel Appointment</button>
                </div>

            </div>
        </div>
        <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogContent>
          <div className=''>
            <div className='flex flex-col items-center justify-center mb-6'>
                <h1 className=' text-xl font-semibold   mb-5 '>We’re sad to let you go :(</h1>
                <p className='text-sm text-center'>Are you sure you want to cancel your Appointment?</p>
            </div>
            <div className='flex justify-around'>
                <button onClick={()=>{
                    setReasonModal(true);
                    setOpen(false);
                }} className='py-4 px-7 font-semibold font-semibod text-white  bg-[#58595B] rounded-lg '>
                YES
                </button>
                <button onClick={()=>setOpen(false)} className='py-4 px-7 font-semibold font-semibod text-white bg-primary-orange rounded-lg '>
                NO
                </button>
            </div>

          </div>
        </DialogContent>
        
      </Dialog>
      <Dialog className='w-full' open={reasonModal} onClose={()=>setReasonModal(false)}>
        <DialogContent className='w-full '>
          <div className=''>
            <div className='flex flex-col items-center justify-center mb-6'>
                <div className='mb-3'>
                    <img src='/home/check.svg'/>
                </div>
                <h1 className=' text-xl font-semibold   mb-2'>Appointment Cancelled</h1>
            </div>
            <div className='mb-5'>
                <p className='text-sm text-primary-orange text-center'>Please let us know what went wrong</p>
                <textarea
                 className='w-full border-2  outline-orange-400 border-orange-400 rounded-lg p-2'
                 placeholder='Enter your reason'
                    rows={4}
                  />
            </div>
            <div className='flex justify-around'>
                <button onClick={()=>router.push('/')} className='py-4 px-7 font-semibold font-semibod text-white  bg-primary-orange rounded-lg '>
                Submit
                </button>
               
            </div>

          </div>
        </DialogContent>
        
      </Dialog>
      </>
  )
}

export default Confirmation