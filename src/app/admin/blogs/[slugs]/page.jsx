"use client"
import SingleBlog from '@/app/blogs/[slugs]/SingleBlog'
import React, { useEffect, useRef, useState } from 'react'
import EditBlogsComponent from '../../components/EditBlogsComponent'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import PreviewPage from '@/app/component/PreviewPage'

const BlogEditPage = ({ params }) => {
    const { slugs } = params
    const router = useRouter()
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    const getBlogData = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}blogs/getBlogData/${slugs}/blog`)
            .then((res) => {
                setBlog(res.data)
                setLoading(false); // Set loading to false after data is fetched
            }).catch((err) => {
                console.log(err)
                setLoading(false); // Set loading to false even if there's an error
            })
    }

    useEffect(() => {
        getBlogData()
    }, [])

    const deleteBlog = () => {
        if (!blog) return; // Check if blog exists
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}blogs/deleteBlogData/${blog?._id}/blog`)
            .then((res) => {
                toast.dismiss()
                toast.success('Blog deleted successfully')
                router.push('/admin/blogs')
            }).catch((err) => {
                toast.dismiss()
                toast.error('Something went wrong')
                console.log(err)
            })
    }

    const updateBlogData = () => {
        if (!blog) return; // Check if blog exists
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}blogs/updateBlogData/${blog?._id}/blog`, blog)
            .then((res) => {
                toast.dismiss()
                toast.success('Blog updated successfully')
                console.log(res.data)
            }).catch((err) => {
                toast.dismiss()
                toast.error('Something went wrong')
                console.log(err)
            })
    }

    if (loading) {
        return <div>Loading...</div>; // Display loading indicator
    }

    return (
        <div className='p-5'>
            <div className='grid grid-cols-1 md:grid-cols-6 '>
                <div className='border-2 md:col-span-4 rounded-xl '>
                    <div className='flex p-6 justify-between '>
                        <h1 className=' text-xl font-semibold'>Edit Blog</h1>
                        <div className='flex gap-3'>
                        <button onClick={deleteBlog} className='px-10 py-3 active:shadow-lg active:bg-red-500 font-semibold text-red-900 bg-red-400 rounded-lg'>Delete</button>
                        <button onClick={updateBlogData} className='px-10 py-3 active:shadow-lg active:bg-green-500 font-semibold text-green-900 bg-green-400 rounded-lg'>Save</button>
                        </div>
                    </div>
                    <div className='p-4 h-[90vh] overflow-scroll'>
                        <EditBlogsComponent blog={blog} setBlog={setBlog} slugs={slugs} isEdit={true} />
                    </div>
                </div>
                <div className='border-2 col-span-2 rounded-xl '>
                    <div className='h-[100%] overflow-scroll'>
                        {/* <SingleBlog blog={blog} /> */}
                        <PreviewPage data={blog} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogEditPage
