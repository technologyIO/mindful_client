import React from 'react'
// import BookConsult from './component/BookConsult'
import BookConsult from '@/zohoFormv2/component/BookConsult'
const page = () => {
  return (
    <div>
        
        <div className='w-full h-full flex justify-center items-center'>
            <BookConsult>
                <button  className="bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 text-white text-sm font-semibold">

                Book Consult
                </button>
            </BookConsult>
        </div>
    </div>
  )
}

export default page