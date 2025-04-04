import React from 'react'

import ResultPage from './ResultPage'


export const generateMetadata = () => {
  return {
    robots: "noindex, nofollow",
  };
};

const Page = () => {

  return (
   <ResultPage/>
  )
}

export default Page