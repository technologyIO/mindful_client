import React from 'react'
import ClinicalAssessment from '../component/ClinicalAssessment'
export async function generateMetadata() {


  return {
   title: 'Clinical Assessments | Mindful TMS',
   description:`Whether for a diagnosis or progress tracking, our therapists and RCI-certified Clinical Psychologists will provide you with evidence-based, effective care that is customized to meet your needs.`,
 };

}
const page = () => {
  return (
    <ClinicalAssessment/>
  )
}

export default page