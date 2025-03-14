import React from 'react'
import TmsMainPage from '@/app/component/TmsMainPage'

export async function generateMetadata() {


  return {
   title: 'Mindful TMS | rTMS Therapy',
   description:`Repetitive Transcranial Magnetic Stimulation (rTMS) is a non-invasive and safe treatment for depression, OCD, anxiety, chronic pain and various other psychological and neurological conditions at MindfulTMS.`,
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