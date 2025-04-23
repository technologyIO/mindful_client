import React from 'react'
import TmsMainPage from '@/app/component/TmsMainPage'

export async function generateMetadata() {


  return {
   title: 'rTMS Treatment in Bengaluru & Delhi | Mindful TMS Clinics',
   description:`Mindful TMS offers safe, medication-free rTMS treatment for depression, anxiety, OCD, chronic pain, trauma, and nicotine addiction in Bengaluru and Delhi.`,
 };

}

const Page = () => {
  return (
    <>
        <TmsMainPage/>
    </>
  )
}

export default Page