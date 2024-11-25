"use client"
import React from 'react'
import BlogSection from "@/app/component/BlogSection"

const SingleBlog = ({ blog }) => {
  return (
    <div className="px-4 ">
      <div className="text-center my-8">
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-primary-orange'>{blog?.title}</h2>
      </div>
      {blog?.mainImage && (
        <div className='h-[300px] md:h-[400px] lg:h-[500px] w-full  mx-auto px-6'>
          <img src={blog?.mainImage} alt="section" className="w-full rounded-xl object-cover h-full" />
        </div>
      )}
      <div className="my-8 grid gap-8">
        {blog?.sections?.map((section, index) => (
          <div key={index} className='px-4 md:px-8 lg:px-12'>
            <BlogSection key={index} section={section} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SingleBlog
