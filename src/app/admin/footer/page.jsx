"use client"
import React from 'react'
import EditFooter from './EditFooter'
import AdminPreviewPage from '../components/AdminPreviewPage'

const page = () => {
   
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-4 px-8 py-4 gap-4'>
                <div className='h-[100vh] overflow-y-scroll overflow-x-hidden sm:col-span-3 border-[1px] border-gray-400 p-2 shadow rounded-xl'>
                    <EditFooter />
                </div>
                <div className='col-span-1'>
                    {/* <div className='flex justify-center mb-5 bg-green-500 rounded-xl text-white p-3'>
                        <h1 className='text-2xl font-semibold'>Live Preview</h1>
                    </div> */}
                    <div className='h-[90vh] overflow-y-scroll overflow-x-hidden'>
                        {/* {renderPreviewPage(page, allSection, setAllSection)}
                         */}
                        <AdminPreviewPage url={'/'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page