import React from 'react'
import TestThankyou from '../components/TestThankyou'



export const generateMetadata = () => {
  return {
    robots: "noindex, nofollow",
  };
};
const page = () => {
  return (
    <TestThankyou/>
  )
}

export default page