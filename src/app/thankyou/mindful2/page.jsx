import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Thankyoupage2 from './component/Thankyoupage2'

export async function generateMetadata({params}) {


    return {
   robots: "noindex, nofollow",
   };
  
  }
const Page = () => {



    return (
       <Thankyoupage2/>
    )
}

export default Page