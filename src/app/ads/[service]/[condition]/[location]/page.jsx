import React from 'react'
// import AdsPage from '../../../components/AdsPage'
import AdsPage2 from '../../../components/AdsPage2';

export async function generateMetadata({params}) {


  return {
   title: `Mindful TMS | Are you looking for an experienced ${params.service}? `,
   description:`Are you looking for an experienced ${params.service}?. We help people with anxiety, depression, OCD, grief, trauma, and more in a safe space.

Whether you're facing stress, seeking personal growth, or need someone to talk to, our compassionate Psychologists are here for you.`,
 robots: "noindex, nofollow",
 };

}

const page = ({params}) => {
  return (
    <>
      <AdsPage2 params={params} />
      {/* <AdsPage params={params} /> */}
    </>
  )
}

export default page