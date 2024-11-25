import Link from 'next/link'
import React from 'react'

const TakeTest = () => {
  return (
    <section className='py-5'>
     <div>
                        <h1 className='text-2xl  text-center font-sans font-semibold'>
                            {/* {allSection?.section2?.para1} */}
                            Not sure where to begin?
                        </h1>
                        {/* <p className='text-center font-semibold text-lg'>Take our self-assessment</p> */}
                    </div>

                    <div className='flex flex-col justify-center  bg-[rgba(239, 102, 35, 0.3)]'>
                        {/* <div dangerouslySetInnerHTML={{ __html: allSection?.section2?.html1 }} /> */}
                        <div>
                            <img className='w-full' src='https://mindfultms1.s3.us-east-1.amazonaws.com/take_assessment_image_4__1_-removebg-preview.png' />
                        </div>

                    </div>
    <div className='flex justify-center'>
        <Link href="/assesment">
            <button className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
            TAKE OUR FREE TEST
            </button>
        </Link>
    </div>
</section>
  )
}

export default TakeTest


