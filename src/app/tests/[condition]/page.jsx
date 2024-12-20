import React from 'react'
import TestCom from '../components/TestCom'
const page = ({params}) => {
    const {condition} = params
  return (
    <TestCom condition={condition}/>
  )
}

export default page