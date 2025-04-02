import React from 'react'
import ClinicalAssessment from '../component/ClinicalAssessment'
export async function generateMetadata() {


  return {
   title: 'Clinical Assessments by Clinical Psychologists | Mindful TMS',
   description:`We offer over 90 clinical assessments (BDI, BAI, WAIS, MMPI, TAT, RORSCHACH & more) by RCI-certified psychologists in Bengaluru & Delhi for various conditions. `,
 };

}
const page = () => {
  return (
    <ClinicalAssessment/>
  )
}

export default page