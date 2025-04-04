// import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import AssesmentPage from './AssesmentPage'
import TakeAssessment from './TakeAssessment'
import {assesmentPageSection} from '@/example'
import axios from 'axios'


export async function generateMetadata() {


    return {
     title: 'Free Mental Health Self Assessments | Mindful TMS',
     description:`Evaluate your mental well-being with Mindful TMS's free self-assessment tools for depression, anxiety, and stress. Gain insights and take the first step toward better mental health.`,
   };
  
  }
const AvailableTest = [
    {
        id: 1,
        title: "Take the PHQ-9 Test",
        title2: "Am I Depressed?",
        para: `This test helps evaluate the severity of depression symptoms.`,
        img: '/home/positive2.svg',
        link:'/assesment/depression/selfAssesment'
    },
    {
        id: 2,
        title: "Take the GAD-7 Test",
        title2: "Do I have Anxiety?",
        para: `This test helps evaluate the severity of anxiety symptoms.`,
        img: '/home/positive3.svg',
        link:'/assesment/anxiety/selfAssesment'
    },
    {
        id: 3,
        title: "Take the PSS-10 Test",
        title2: "How stressed am I?",
        para: `This test assesses how stressful you find your life situations.`,
        img: '/home/positive4.svg',
        link:'/assesment/stress/selfAssesment'
    },

]

const defaultTest = {
    id: 4,
    title: "Take the K10 Test",
    title2: "K10 (Kessler Psychological Distress Scale)",
    para: `This test assesses the level of distress you have experienced in the past month. It helps identify symptoms of anxiety and depression, emotional and physical fatigue, and the impact on daily functioning. `,
    img: '/home/positive1.svg',
}

const section1 = {
    header: "Take a Self-Assessment",
    para1: `<p class='text-sm text-center mb-5'>
                       RCI Certified Clinicians provide various tests and Assessments
                    </p>

                    <p class='text-sm text-center'>If you are looking for an psychological assessment reach out to your nearest clinic.
                     </p>`,
    AvailableTest,

}
const section2 = {
    header: "Not sure which test to take?",
    para: `<p class='text-center text-sm'>The K10 is designed to measure general psychological distress and can be an effective initial screening tool to identify whether you may need further assessment or support.  </p>`,
    defaultTest,
}

const section3 = {
    blogs: [
        {
            id: 1,
            img: "dep1.svg",
            title: "TMS for Depression"
        },
        {
            id: 2,
            img: "",
            title: "TMS for OCD"
        },
        {
            id: 3,
            img: "",
            title: "TMS for Anxiety"
        },
    ],
    button: {
        text: "Learn More",
        link: "/",
    }
}

const allSectionStatic = {
    section1,
    section2,
    section3
}
const Assesment = async() => {
    // const router = useRouter()
    let allSection = {}
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}AssessmentSection/getSection`)
    allSection = res.data
  return (
    <>
      {/* {allSection &&  <AssesmentPage allSection={allSection} />} */}
      {allSection &&  <TakeAssessment allSection={allSection} />}
        {/* <AssesmentPage allSection={assesmentPageSection} /> */}
    </>
  )
}

export default Assesment