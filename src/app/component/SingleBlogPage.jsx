"use client"
import Link from 'next/link'
import React from 'react'


const SingleBlogPage = ({works, stages}) => {
  return (
    <>  
     <div className='px-4'>

    <div className='flex justify-start p-6 items-center mb-6'>
        <Link className='mr' href={'/'}>
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
        </Link>

        <div>
            <h1 className="text-2xl font-semibold "> TMS Treatment</h1>

        </div>


    </div>
    <div className='px-4'>

        <div className='mb-4'>
            <h1 className='text-xl text-primary-orange  mb-2 font-semibold'>What is TMS ?</h1>
            <p className='mb-2 text-sm text-gray-700'>Many mental health conditions like depression, anxiety, PTSD, and OCD are linked to specific parts of the brain not working as they should. When these areas of the brain are underactive, it can lead to constant and challenging symptoms that affect daily life.</p>
            <p className='mb-5 text-sm text-gray-700'>Transcranial Magnetic Stimulation (TMS) offers a non-invasive way to address this issue. By using magnetic fields, TMS stimulates nerve cells in the brain areas responsible for mood regulation and mental health. Think of TMS as a method to &apos;jump-start&apos; these underactive parts of the brain, helping them to function normally again and improving overall mental health. </p>
            <div>
                <img src='/home/clinicImg.svg' />
            </div>
        </div>
        <div className='mb-10'>
            <h1 className='text-xl text-primary-orange  mb-4 font-semibold '>How TMS Works:</h1>
            <div className='mb-6'>
                {
                    works?.map((i, index) => (
                        <div key={index} className='flex justify-between p-5 mb-3 bg-primary-div rounded-lg '>
                            <h1 className='text-primary-orange text-sm font-semibold'>{index + 1}. {i?.title}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#EF6623" stroke="#EF6623" stroke-width="1" className="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center'>
                <button className='bg-primary-orange  text-white font-semibold w-[75%] rounded-lg py-3'>BOOK A CONSULTATION</button>
            </div>
        </div>

        <div className='mb-10'>
            <h1 className='text-center text-2xl font-semibold mb-3 '>Stages in TMS Therapy?</h1>
            <p className='text-gray-700 text-center text-[13px] mb-6'>What can I expect when receiving a TMS therapy? </p>
            {
                stages?.map((i, index) => (
                    <div key={index} className='mb-6'>
                        <h1 className='text-xl text-primary-orange  mb-4 font-semibold'>{index+1}. {i?.title}</h1>
                        <div>
                            <div className='h-[201px] w-full rounded-lg mb-4 bg-primary-div border-orange-500 border-2'></div>
                            {
                                i.subPoints?.map((sp, index)=> (
                                    <div key={index} className='d-flex mb-3'>
                                <p> <span className='font-bold '>{sp?.paraTitle}: </span>{sp?.para}</p>
                            </div>
                                ))
                            }
                            
                        </div>
                    </div>
                ))
            }
           
        </div>

        <div className='flex justify-center mb-10'>
            <button className='bg-primary-orange  text-white font-semibold w-[75%] rounded-lg py-3'>BOOK A CONSULTATION</button>
        </div>
    </div>
</div>

    </>
  )
}

// const works = [
//     {
//         id: 1,
//         title: 'Identifying the Condition',
//     },
//     {
//         id: 2,
//         title: 'Activation of Brain Cells',
//     },
//     {
//         id: 3,
//         title: 'Release of Neurotransmitters',
//     },
//     {
//         id: 4,
//         title: 'Improved Brain Connections',
//     }
// ]

// const stages = [
//     {
//         id: 1,
//         title: 'Initial Consultation',
//         subPoints:[
//             { 
//                 paraTitle: 'Evaluation',
//                 para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
//             },
//             { 
//                 paraTitle: 'Evaluation',
//                 para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
//             },{ 
//                 paraTitle: 'Evaluation',
//                 para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
//             },

//         ]
//        },
//        {
//         id: 1,
//         title: 'Initial Consultation',
//         subPoints:[
//             { 
//                 paraTitle: 'Evaluation',
//                 para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
//             },
//             { 
//                 paraTitle: 'Evaluation',
//                 para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
//             },{ 
//                 paraTitle: 'Evaluation',
//                 para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
//             },

//         ]
//        },
//        {
//         id: 1,
//         title: 'Initial Consultation',
//         subPoints:[
//             { 
//                 paraTitle: 'Evaluation',
//                 para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
//             },
//             { 
//                 paraTitle: 'Evaluation',
//                 para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
//             },{ 
//                 paraTitle: 'Evaluation',
//                 para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
//             },

//         ]
//        },
// ]

export default SingleBlogPage