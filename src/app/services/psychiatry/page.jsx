import React from 'react'
import PsychiatryPage from '@/app/component/PsychiatryPage'

export async function generateMetadata() {


    return {
     title: 'Experienced Psychiatrists in Bengaluru & Delhi | Mindful TMS',
     description:`Our expert psychiatrists offer confidential, personalized psychiatric care with medication management. We treat anxiety, depression, OCD, ADHD & more in Bengaluru & Delhi`,
   };
  
  }
const page = () => {
    return (
        <PsychiatryPage />
    )
}

export default page