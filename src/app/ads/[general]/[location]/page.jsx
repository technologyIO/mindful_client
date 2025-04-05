import React from 'react'
import AdsPage from '../../components/AdsPage'

export async function generateMetadata({params}) {


  return {
   title: `Mindful TMS | Are you looking for an experienced ${params.general}? `,
   description:`Are you looking for an experienced ${params.general}?. We help people with anxiety, depression, OCD, grief, trauma, and more in a safe space.

Whether you're facing stress, seeking personal growth, or need someone to talk to, our compassionate Psychologists are here for you.`,
robots: {
  index: false,
  follow: false,
},
 };

}

const page = ({params}) => {
  return (
    <AdsPage params={params} />
  )
}

export default page