import React from 'react'
import PsychiatryPage from '@/app/component/PsychiatryPage'

export async function generateMetadata() {


    return {
     title: 'Expert Psychiatric Services | Mental Health Care',
     description:`Our experienced psychiatrists offer personalized treatment plans and medication management to help you navigate your mental health journey.`,
   };
  
  }
const page = () => {
    return (
        <PsychiatryPage />
    )
}

export default page