"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
const AdminBlogs = () => {
  const router = useRouter()
  const [blogs, setBlogs] = useState([])
  const fetchBlogs = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}blogs/getAllBlogs`)
      .then((res) => {
        setBlogs(res.data)
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <>
      <div className='px-11 mx-11'>
      <div className='flex justify-between mb-8'>
        <h1 className='text-2xl font-semibold'>Blogs</h1>
        <button onClick={() => router.push(`/admin/blogs/addBlog`)}  className='bg-green-600 font-semibold text-white px-4 active:shadow-xl active:bg-green-700 py-2 rounded-lg'>Add Blog</button>
      </div>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          {
            blogs.map((blog, index) => (
              <div key={index} onClick={() => router.push(`/admin/blogs/${blog._id}`)} className='bg-primary-div rounded-xl p-3 cursor-pointer select-none  text-primary-orange font-semibold active:shadow-xl active:bg-orange-100 text-center '>
                <h4 className='text-lg'>{blog.title}</h4>
              </div>
            ))
          }
         

        </div>
      </div>
    </>
  )
}

export default AdminBlogs