import Link from 'next/link'
import React from 'react'

const TakeTest = () => {
  return (
    <section className='py-5'>
     <div>
                        <h1 className='text-2xl  text-center font-sans font-semibold mb-3'>
                            {/* {allSection?.section2?.para1} */}
                            Not sure what you need?
                        </h1>
                        <p className='text-base text-start px-3 '>These self tests can help you understand you are suffering from depression, anxiety, or stress.</p>

                        {/* <p className='text-center font-semibold text-lg'>Take our self-assessment</p> */}
                    </div>

                    <div className='flex flex-col justify-center  bg-[rgba(239, 102, 35, 0.3)]'>
                        {/* <div dangerouslySetInnerHTML={{ __html: allSection?.section2?.html1 }} /> */}
                        <div>
                            <img className='w-full' src='https://ik.imagekit.io/mwpcmpi5v/1733289803168-take_assessment.webp?updatedAt=1733748287527' />
                        </div>

                    </div>
    <div className='flex justify-center'>
        <Link href="/assesment">
            <button className='bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 font-semibold text-sm text-white'>
            Start Self Test
            </button>
        </Link>
    </div>
</section>
  )
}

export default TakeTest


