import React from 'react'
import ArticlePage from './ArticlePage'


export async function generateMetadata({params}) {


  return {
 robots: "noindex, nofollow",
 };

}
const Page = () => {
  return (
    <ArticlePage/>
  )
}

export default Page