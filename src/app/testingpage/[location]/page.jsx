import React from 'react'
import TestRequestAppointmentGeneral from '../../clinicLocation/[city]/TestRequestAppointmentGeneral'

const page = () => {
  return (
    <div className='flex justify-center'>
                            <TestRequestAppointmentGeneral>
                                <button
                                    className="inline-block bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300"
                                >
                                    Book an Appointment
                                </button>
                            </TestRequestAppointmentGeneral>
                        </div>
  )
}

export default page