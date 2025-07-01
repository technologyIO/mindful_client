import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Thankyoupage2 from './component/Thankyoupage2'
import { Suspense } from 'react';
export async function generateMetadata({params}) {


    return {
   robots: "noindex, nofollow",
   };
  
  }
const Page = () => {



    return (
       <Suspense fallback={<div>Loading...</div>}>
      <Thankyoupage2 />
    </Suspense>
    )
}

export default Page