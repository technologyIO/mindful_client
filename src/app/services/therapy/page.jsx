import React from 'react'
import TherapyPage from '@/app/component/TherapyPage'

export async function generateMetadata() {


  return {
   title: 'Experienced Therapists & Psychologists | Mindful TMS',
   description:`We offer a safe space for therapy with psychologists experienced in CBT, DBT, ACT, ERT & more. We treat Adults & Children with anxiety, depression, trauma, ADHD...`,
 };

}

const page = () => {
  return (
   <TherapyPage/>
  )
}

export default page