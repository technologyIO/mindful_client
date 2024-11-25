"use client"
import { Container } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'
const Page = () => {
    const router = useRouter()
    const locations = [
        {
          name: 'New Delhi ',
          slug: 'new-delhi',
        },
        {
            name: 'Bangluru Whitefield ',
            slug: 'bangluru-whitefield',
          },
          {
            name: 'Bangluru Hebbal ',
            slug: 'bangluru-hebbal',
          },
 
      ];
      const dataArray = [
        {
            addressTitle: 'MindfulTMS @ Greater Kailash 1, New Delhi',
            city: 'New-Delhi',
            address: 'S-35 first floor, Greater Kailash-1, Masjid Moth, Greater Kailash, New Delhi, Delhi 110048',
            googleMapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.749635826523!2d77.2155231871582!3d28.549114000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1da20c0c681%3A0x4bb15098e31edc9c!2smindful%20TMS%20Neurocare%20-%20Best%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20in%20Delhi!5e0!3m2!1sen!2sin!4v1724673517475!5m2!1sen!2sin',
            call: '011 – 415 000 11 / +91 96060 67372',
        },
        {
            addressTitle: 'MindfulTMS @ Bengaluru Whitefield',
            city: 'Bengaluru-Whitefield',
            address: '704, 2nd Floor, ASN Signature, Varthur Road, near Laughing Waters Siddapura, Ramagondanahalli, Bengaluru, Karnataka 560066',
            googleMapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.231653179486!2d77.73074949678954!3d12.95702330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae132558211f3b%3A0x5a7282022d462888!2sMindful%20TMS%20Whitefield%20Clinic%20-%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20Bengaluru!5e0!3m2!1sen!2sin!4v1724673750137!5m2!1sen!2sin',
            call: '080- 41500055 / +91 81973 41114',
        },
        {
            addressTitle: 'MindfulTMS @ Bengaluru Hebbal',
            city: 'Bengaluru-Hebbal',
            address: '#43/2, New Airport Road, NH-7, Outer Ring Rd, Sahakar Nagar, Bengaluru, Karnataka 560092',
            googleMapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7041049286468!2d77.58899097470847!3d13.054496987268534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15250dbbd083%3A0x4e8aba2a52fa8613!2sMindful%20TMS%20Aster%20CMI%20Clinic%20-%20Best%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20Sahakar%20Nagar!5e0!3m2!1sen!2sin!4v1724673904955!5m2!1sen!2sin',
            call: '080 – 415 000 11 / +91 96069 69296',
        },
      ]
      
  return (
    <>
        <Container>
            
      <div className='flex justify-center mb-8'>
        <h1 className='text-3xl font-semibold'>Admin</h1>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {locations.map((location, index) => (
          <div
            className='px-2 py-5 rounded-lg hover:shadow-lg bg-orange-400 cursor-pointer flex justify-center'
            key={index}
            onClick={() => router.push(`/admin/cliniclocation/${location.slug}`)}
          >
            <h1 className='text-white text-xl whitespace-nowrap font-semibold'>{location.name}</h1>
          </div>
        ))}
        
      </div>
        </Container>
    </>
  )
}

export default Page