"use client"
import { Container, Breadcrumbs, Link, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';




const Admin = () => {
  const router = useRouter();

    var role = localStorage.getItem('role');
    
  
const pages = [
  {
    name: 'Home Page',
    slug: 'homesection',
    disable: role ==0 ? false:true,
  },
  {
    name: 'Test Results',
    slug: 'testresults',
    disable: (role ==0 || role ==1) ? false:true,

    // disable: true,
  },
  {
    name: 'Doctors ',
    slug: 'doctors',
    disable: role ==0 ? false:true,

  },
  {
    name: 'Testimonials ',
    slug: 'testimonials',
    disable: role ==0 ? false:true,

  },
  
  {
    name: 'Self Assessment',
    slug: 'selfassessment',
    disable: role ==0 ? false:true,

  },
  {
    name: 'Our Clinic Locations',
    slug: 'cliniclocation',
    disable: role ==0 ? false:true,

  },
  {
    name: 'Blogs',
    slug: 'blogs',
    disable: role ==0 ? false:true,

  },
  {
    name: 'TMS',
    slug: 'tms',
    disable: role ==0 ? false:true,

  },
  {
    name: 'Services',
    slug: 'services',
    disable: role ==0 ? false:true,

  },
  {
    name: 'Footer',
    slug: 'footer',
    disable: role ==0 ? false:true,

  },

];

  // Logout function
  const handleLogout = () => {
    // Remove role and token from localStorage
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    // Navigate to the login page
    router.push('/auth/login');
  };



  return (
    <Container maxWidth="lg" className='px-10 py-4'>


      <div className='flex justify-center mb-8'>
        <h1 className='text-3xl font-semibold'>Admin</h1>
      </div>
        {/* Logout Button */}
      <div className="mb-8 flex justify-end">
        <button
          className='px-4 py-2 bg-red-500 text-white rounded-lg'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 select-none'>
        {pages.map((page, index) => (
          <div
            className={`px-2 py-5 rounded-lg hover:shadow-lg  flex justify-center ${page.disable ? 'opacity-50 bg-gray-600 cursor-not-allowed' : 'bg-orange-400 cursor-pointer'}`}
            key={index}
            onClick={() => router.push(`${page.disable ? '' : `/admin/${page.slug}`}`)}
          >
            <h1 className='text-white text-xl whitespace-nowrap font-semibold'>{page.name}</h1>
          </div>
        ))}
        
      </div>
    </Container>
  );
};

export default Admin;
