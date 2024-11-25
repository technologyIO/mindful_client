import React from 'react'
import AdsPage from '../../../components/AdsPage'
const page = ({params}) => {
  return (
    <AdsPage params={params} condition={params.condition}/>
  )
}

export default page