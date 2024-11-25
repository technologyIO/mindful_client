'use client'
import React, { useState } from 'react'
import EditHomePage from '@/app/admin/components/EditHomePage'
import Editconsultation from '@/app/admin/components/Editconsultation'
import EditAssesment from '@/app/admin/components/EditAssesment'
import GeneralEdit from '@/app/admin/components/GeneralEdit'
const Section = ({params}) => {
    const {page} = params;

    return (
       <>
        
        <GeneralEdit params={params}/>
       </>
    )
}

export default Section
