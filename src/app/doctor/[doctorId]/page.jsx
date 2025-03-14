import React from 'react'
import DoctorDetailComponent from '../DoctorDetailComponent'
import axios from 'axios';


export async function generateMetadata({ params }) {


   const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}doctors/${params.doctorId}`);
   const doctorDetail = res.data;
   return {
    title: doctorDetail.name ? `${doctorDetail.name} | Doctor Profile` : 'Doctor Profile',
    description: doctorDetail.about
      ? doctorDetail.about.substring(0, 160)
      : 'Detailed doctor profile information.',
  };
 
}
const page = ({ params }) => {
  const { doctorId } = params


  
  return (
   <>
    <DoctorDetailComponent doctorId={doctorId}/>
   </>
  )
}

export default page