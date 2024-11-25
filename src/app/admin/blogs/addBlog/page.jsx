"use client"
import React, { useState } from 'react'
import EditBlogsComponent from '../../components/EditBlogsComponent';
import SingleBlog from '@/app/blogs/[slugs]/SingleBlog';
import { useRouter } from 'next/navigation';
import axios from 'axios';
const AddBlog = () => {
    const router = useRouter()
    const [blog, setBlog] = useState({});




    const updateBlogData = () => {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}blogs/addBlogs`, blog)
            .then((res) => {
                console.log(res.data)
                router.push('/admin/blogs')
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <>

            <div className='p-5'>
                <div className='grid grid-cols-1 md:grid-cols-6 '>
                    <div className='border-2 md:col-span-4 rounded-xl '>
                        <div className='flex p-6 justify-between '>
                            <h1 className=' text-xl font-semibold'>Add Blog</h1>
                            <button onClick={updateBlogData} className='px-10 py-3 active:shadow-lg active:bg-green-500  font-semibold text-green-900 bg-green-400 rounded-lg'>Save</button>
                        </div>
                        <div className='p-4 h-[90vh] overflow-scroll'>
                            <EditBlogsComponent blog={blog} setBlog={setBlog}  isEdit={false} />
                        </div>
                    </div>
                    <div className='border-2 col-span-2 rounded-xl '>
                        <h1 className='text-center p-3 text-2xl font-semibold bg-green-400 rounded-lg mb-3 text-green-900'>Live Preview</h1>
                        <div className='h-[90vh] overflow-scroll'>
                            <SingleBlog blog={blog} />
                            {/* <iframe
                                src={`${process.env.NEXT_PUBLIC_CLIENT_URL}blogs/${blog._id}`} // Adjust this URL based on your needs
                                className="w-full h-full"
                                title="Live Blog Preview"
                                frameBorder="0"
                            ></iframe> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBlog