import React from 'react'
import AdsPage from '../../../components/AdsPage'

export async function generateMetadata({params}) {
  return {
   title: `Mindful TMS | Break Free from ${params.condition}`,
   description:`Break Free from ${params.condition}. Our compassionate and skilled Psychologists will help you understand your ${params.condition}, learn effective coping mechanisms and achieve positive change.`,
 };

}
const page = ({params}) => {
  return (
    <AdsPage params={params} condition={params.condition}/>
  )
}

export default page