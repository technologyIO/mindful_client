import React from 'react'

const ClinicAddress = ({images, data}) => {
  return (
    <>
          <div className="grid grid-cols-1 justify-center">
                            <div className="mb-11">
                                <h2 className="text-2xl md:text-3xl text-center font-semibold text-primary-orange mb-8 border-b">
                                    Clinic Address
                                </h2>
                                <div className="flex h-full flex-col justify-start items-start">
                                    <p className="font-semibold mb-4">Address: {data?.addressTitle}</p>
                                    <span>{data?.address}</span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl text-center md:text-3xl font-semibold text-primary-orange mb-8 border-b">
                                    Location Map
                                </h2>
                                <div className="bg-gray-300 h-64 flex items-center justify-center">
                                    <iframe
                                        title="Google Map"
                                        src={data?.googleMapLink}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default ClinicAddress