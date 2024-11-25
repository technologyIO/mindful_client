"use client"
import React, { useEffect, useState } from 'react'
import EditClinicLocation from './EditClinicLocation'
import AdminPreviewPage from '../../components/AdminPreviewPage'
import axios from 'axios'
import toast from 'react-hot-toast'

const Page = ({params}) => {
    const city = params.location
    const [data, setData] = useState(null); // Initially set data to null
    const [loading, setLoading] = useState(true); // Loading state to handle API request

    const getClinicData = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}clinicLocation/getData/${city}/${city}/clinic`)
        .then((res) => {
            setData(res.data);
            console.log(res.data);
            setLoading(false); // Set loading to false once data is fetched
        }).catch((err) => {
            console.log(err);
            setLoading(false); // Even on error, stop loading
        });
    }
    const saveData = (data) => {
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}clinicLocation/updateData/clinic`, data)
        .then((res) => {
            toast.dismiss()
            toast.success('Data updated successfully')
            console.log(res.data);
            setLoading(false); // Set loading to false once data is fetched
        }).catch((err) => {
            console.log(err);
            setLoading(false); // Even on error, stop loading
        });
    }


    useEffect(() => {
        getClinicData();
    }, []);

    return (
        <div className='px-10 py-4'>
            {loading ? ( // Show a loading message or spinner until data is available
                <div>Loading...</div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-6 '>
                    {data && ( // Render components when data is available
                        <>
                            <div className='col-span-4 border-2 border-gray-200 rounded-xl mx-5'>
                                <EditClinicLocation data={data} saveData={saveData}/>
                            </div>
                            <div className='col-span-2 h-[80vh]'>
                                <AdminPreviewPage url={`${process.env.NEXT_PUBLIC_CLIENT_URL}clinicLocation/${data?.city}`} />
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default Page;
