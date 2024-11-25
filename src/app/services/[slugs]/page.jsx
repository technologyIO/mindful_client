
import React from 'react'
import Services from './Services';
const services = [
    {
        id: 1,
        title: 'Therapy Services',
        para:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
         Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus`,
        avail:[
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
        para:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus`,
        avail:[
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
const Page = ({params , searchParams}) => {
    const {slugs} = params;
    const service = services.find(service => service.title === decodeURIComponent(slugs));

  return (
    <>
    <Services params={params} searchParams={searchParams} service={service}/>
</>
  )
}

export default Page