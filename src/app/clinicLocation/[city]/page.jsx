// "use client"
import React from 'react'
import City2Component from './City2Component'
import axios from 'axios';
export async function generateMetadata({params}) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}clinicLocation/getData/${params.city}/${params.city}/clinic`);

  const data = res.data;

  return {
   title: data?.addressTitle ? `${data?.addressTitle} | Mindful TMS` : 'Mindful TMS',
   description: data?.addressTitle ? `${data?.addressTitle} | Mindful TMS` : 'Mindful TMS',
 };

}
const page = ({params}) => {
    const {city} = params
    // console.log('city', city)

  return (
    <div>

    <City2Component city={city}/>
    
    </div>
  )
}

export default page






