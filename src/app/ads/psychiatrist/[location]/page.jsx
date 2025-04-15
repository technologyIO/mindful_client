import React from 'react'
import AdsPage from '../../components/AdsPage'


export async function generateMetadata({ params }) {
  return {
    robots: {
      index: false,
      follow: false,
    },
  }
}
const page = ({params}) => {
  return (
    <AdsPage params={params}/>
  )
}
export default page