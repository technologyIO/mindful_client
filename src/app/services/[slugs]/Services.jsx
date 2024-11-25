
import { Container } from '@mui/material';
import Link from 'next/link';
import React from 'react'
// import { useParams } from 'next/navigation'
const services = [
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
const Services = ({ params, searchParams }) => {
    // const {slugs} = useParams()
    const { slugs } = params;
    const service = services.find(service => service.slug === slugs);

    return (
        <Container maxWidth="lg" >
            <div className='md:px-4'>
                <div className='flex p-3 items-center justify-center'>
                    {/* <div className='mr' onClick={() => navigate('/')}>
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
            </div> */}
                    <div>

                    </div>
                    <div className=' md:flex justify-center  '>
                        <h1 className="text-2xl font-semibold">{service?.title}</h1>

                    </div>


                </div>
                <div>
                    <div className='px-4'>
                        {service?.para.split('\n').map((para, index) => (
                            <p k={index} className='text-sm text-gray-600 mb-2 text-center' key={index}>{para}</p>
                        ))}
                    </div>
                </div>
                <div className='px-4 py-3 md:flex justify-center md:flex-col items-center '>
                    {
                        service?.avail?.map((i, index) => (
                            <div key={index} className='flex cursor-pointer justify-between items-center md:w-2/3  px-4 py-6 bg-primary-div rounded-lg mb-3'>
                                <h1 className='font-semibold text-sm  text-gray-700 '>{i.title}</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#EF6623" stroke="#EF6623" strokeWidth="1" className="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>


                        ))

                    }
                </div>
                <div className='flex justify-center'>
                    <Link href='/contactUs' className=' w-[75%] md:w-1/2 '>
                        <button className='bg-primary-orange w-full py-3 text-white font-semibold rounded-lg'>
                            CONTACT US
                        </button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Services