import React from 'react'
import TherapyPage from '@/app/component/TherapyPage'

export async function generateMetadata() {


  return {
   title: 'Personalised Therapy | Mindful TMS',
   description:`Discover a safe space with our experienced therapists. We offer tailored support to help you overcome challenges with confidence.`,
 };

}

const page = () => {
  return (
   <TherapyPage/>
  )
}

export default page