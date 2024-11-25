"use client";
import React, { useEffect, useState } from 'react';
import DoctorCard from '../../component/DoctorCard';
import AddDoctorModal from "./AddDoctorModal "
import { useRouter } from 'next/navigation';
import axios from 'axios';
const doctors = [
  {
    _id: 1,
    name: 'Dr. John Smith',
    image: '/doctor/Dr Subham.jpg',
    experience: 10,
    location: 'New York, USA',
    designation: 'MD, PhD in Cardiology',
  },
  {
    _id: 2,
    name: 'Dr. Jane Doe',
    image: '/doctor/Dr Subham.jpg',

    experience: 8,
    location: 'Los Angeles, USA',
    designation: 'MBBS, MS in Surgery',
  },
  {
    _id: 3,
    name: 'Dr. Mark Lee',
    image: '/doctor/Dr Subham.jpg',

    experience: 12,
    location: 'San Francisco, USA',
    designation: 'MD, PhD in Neurology',
  },
  {
    _id: 4,
    name: 'Dr. Jane Doe',
    image: '/doctor/Dr Subham.jpg',

    experience: 8,
    location: 'Los Angeles, USA',
    designation: 'MBBS, MS in Surgery',
  },
  {
    _id: 5,
    name: 'Dr. Mark Lee',
    image: '/doctor/Dr Subham.jpg',

    experience: 12,
    location: 'San Francisco, USA',
    designation: 'MD, PhD in Neurology',
  },
  {
    _id: 6,
    name: 'Dr. Jane Doe',
    image: '/doctor/Dr Subham.jpg',

    experience: 8,
    location: 'Los Angeles, USA',
    designation: 'MBBS, MS in Surgery',
  },
  {
    _id: 7,
    name: 'Dr. Mark Lee',
    image: '/doctor/Dr Subham.jpg',

    experience: 12,
    location: 'San Francisco, USA',
    designation: 'MD, PhD in Neurology',
  },
  {
    _id: 8,
    name: 'Dr. Jane Doe',
    image: '/doctor/Dr Subham.jpg',

    experience: 8,
    location: 'Los Angeles, USA',
    designation: 'MBBS, MS in Surgery',
  },
  {
    _id: 9,
    name: 'Dr. Mark Lee',
    image: '/doctor/Dr Subham.jpg',

    experience: 12,
    location: 'San Francisco, USA',
    designation: 'MD, PhD in Neurology',
  },
];
const AdminDoctors = () => {
  const [doctorsList, setDoctorsList] = useState([]);
  const router = useRouter();

  const getAllDoctor =()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}doctors`)
    .then(res=>{
      setDoctorsList(res.data)
    })
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    getAllDoctor()
  },[])


  return (
    <div className="m-[50px] select-none">
      <div className="flex justify-center">
        <h1 className="text-3xl md:text-5xl text-primary-orange font-semibold">Our Doctors</h1>
      </div>
      <div className='flex justify-end'>
        <button
          className='bg-primary-orange font-semibold text-white px-4 active:shadow-xl active:bg-orange-700 py-2 rounded-lg'
          onClick={() => router.push("/admin/doctors/add")}
        >
          Add Doctor
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
        {doctorsList.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} onMove={getAllDoctor}/>
        ))}
      </div>


    </div>
  );
};

export default AdminDoctors;
