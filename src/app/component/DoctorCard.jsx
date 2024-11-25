"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import axios from 'axios'; // Import axios for making API calls

const DoctorCard = ({ doctor, onMove }) => {
  const router = useRouter();

  // Function to move the doctor up
  const handleMoveUp = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}doctors/move-up/${doctor._id}`);
      onMove(); // Trigger the onMove callback to refresh the list of doctors
    } catch (error) {
      console.error("Error moving doctor up:", error);
    }
  };

  // Function to move the doctor down
  const handleMoveDown = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}doctors/move-down/${doctor._id}`);
      onMove(); // Trigger the onMove callback to refresh the list of doctors
    } catch (error) {
      console.error("Error moving doctor down:", error);
    }
  };

  return (
    <div className='p-4'>
      <div className="bg-primary-div shadow-md hover:shadow-lgoverflow-hidden  rounded-lg p-2 ">
      <div className=' h-[250px] cursor-pointer '  onClick={() => router.push(`/admin/doctors/${doctor._id}`)}>
      <div className='flex justify-center'>
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-[76px] h-[76px] object-cover rounded-full mb-4"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-2">{doctor.name}</h2>
        <p className="text-gray-600 text-center">{doctor.designation}</p>
        <div className="mt-4">
          <p><strong>Experience:</strong> {doctor.experience} years</p>
          <p><strong>Location:</strong> {doctor.location}</p>
        </div>
      </div>
        {/* Move Up and Move Down Buttons */}
      <div className="flex justify-between mt-2">
        <button
          onClick={handleMoveUp}
          className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-700"
        >
          Move Up
        </button>
        <button
          onClick={handleMoveDown}
          className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-700"
        >
          Move Down
        </button>
      </div>
      </div>
      
      
    </div>
  );
};

export default DoctorCard;
