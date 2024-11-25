import React from 'react'
import DoctorDetailComponent from '../DoctorDetailComponent'
const page = ({ params }) => {
  const { doctorId } = params
  return (
   <>
    <DoctorDetailComponent doctorId={doctorId}/>
   </>
  )
}

export default page