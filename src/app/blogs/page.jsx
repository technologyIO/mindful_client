import axios from 'axios'
import Link from 'next/link'
import React from 'react'
const Blogs = async () => {
  let blogs = []
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}blogs/getAllBlogs`) 
  blogs = res.data


  return (
    <div className='p-11'>
      <div className='grid grid-cols-2 md:grid-cols-4  gap-5'>
        {
          blogs.map((blog,index) => {
            return (
              <Link href={`/blogs/${blog?._id}`} key={index} className='bg-primary-div rounded-xl p-3 active:bg-orange-100 active:shadow-lg text-primary-orange font-semibold cursor-pointer select-none'>
                <h3 className='text-lg'>{blog.title}</h3>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Blogs