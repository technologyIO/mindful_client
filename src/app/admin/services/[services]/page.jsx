"use client"
import React, { useEffect } from 'react'
import EditServices from './EditServices'
import AdminPreviewPage from '../../components/AdminPreviewPage'
const allData = [
    {
        id: 1,
        title: 'Therapy Services',
        slug: 'therapy',
        para: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
         Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus`,
        avail: [
            {
                id: 1,
                title: 'THERAPY FOR C/B',
            },
            {
                id: 2,
                title: 'THERAPY FOR CHILDREN',
            },
            {
                id: 3,
                title: 'GENERAL THERAPY',
            },
            {
                id: 4,
                title: 'GENERAL THERAPY',
            }
        ]
    },
    {
        id: 2,
        title: 'TMS Treatment Services',
        slug: 'tms-treatment-page',
        para: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus`,
        avail: [
            {
                id: 1,
                title: 'TMS FOR DEPRESSION',
            },
            {
                id: 2,
                title: 'TMS FOR DEPRESSION',
            },
            {
                id: 3,
                title: 'TMS FOR ANXIETY',
            },
            {
                id: 4,
                title: 'TMS FOR MOOD DISORDER',
            }
        ]
    },
    {
        id: 3,
        title: 'Psychiatry',
        slug: 'psychiatry',
        para: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus`,
        avail: [
            {
                id: 1,
                title: 'TMS FOR DEPRESSION',
            },
            {
                id: 2,
                title: 'TMS FOR DEPRESSION',
            },
            {
                id: 3,
                title: 'TMS FOR ANXIETY',
            },
            {
                id: 4,
                title: 'TMS FOR MOOD DISORDER',
            }
        ]
    }
]


const page = ({params}) => {
    const {services} = params
    const data = allData.find(data => data.slug === services)
    console.log('data', data)
  return (
    <>
          <div className='grid grid-cols-1 sm:grid-cols-4 px-8 py-4 gap-4'>
                <div className='h-[100vh] overflow-y-scroll overflow-x-hidden sm:col-span-3 border-[1px] border-gray-400 p-2 shadow rounded-xl'>
                    <EditServices data={data}/>
                </div>
                <div className='col-span-1'>
                    {/* <div className='flex justify-center mb-5 bg-green-500 rounded-xl text-white p-3'>
                        <h1 className='text-2xl font-semibold'>Live Preview</h1>
                    </div> */}
                    <div className='h-[90vh] overflow-y-scroll overflow-x-hidden'>
                        {/* {renderPreviewPage(page, allSection, setAllSection)}
                         */}
                        <AdminPreviewPage url={`/services/${services}`} />
                    </div>
                </div>
            </div>
    </>
  )
}

export default page