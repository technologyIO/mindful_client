"use client"
import { Container, Breadcrumbs, Link, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

const pages = [
  {
    name: 'Home Page',
    slug: 'homesection',
    // disable: true,
  },
  {
    name: 'Test Results',
    slug: 'testresults',
    // disable: true,
  },
  {
    name: 'Doctors ',
    slug: 'doctors'
  },
  {
    name: 'Testimonials ',
    slug: 'testimonials'
  },
  
  {
    name: 'Self Assessment',
    slug: 'selfassessment'
  },
  {
    name: 'Our Clinic Locations',
    slug: 'cliniclocation'
  },
  {
    name: 'Blogs',
    slug: 'blogs'
  },
  {
    name: 'TMS',
    slug: 'tms'
  },
  {
    name: 'Services',
    slug: 'services'
  },
  {
    name: 'Footer',
    slug: 'footer'
  },

];

const Admin = () => {
  const router = useRouter();

  return (
    <Container maxWidth="lg" className='px-10 py-4'>


      <div className='flex justify-center mb-8'>
        <h1 className='text-3xl font-semibold'>Admin</h1>
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
