import React, { useRef } from 'react'

const PreviewPage = ({data}) => {
    const iframeRef = useRef(null);
    const reloadIframe = () => {
        if (iframeRef.current) {
            iframeRef.current.src = iframeRef.current.src;
        }
    };

  return (
   <>
     <div className='flex justify-between items-center bg-green-400 p-3 rounded-lg mb-3'>
                            <h1 className='text-2xl font-semibold text-green-900'>Live Preview</h1>
                            <button onClick={reloadIframe} className='px-5 py-2 bg-green-500 text-white rounded-lg'>Reload</button>
                        </div>
                    <div className='h-[100%] overflow-scroll'>
                        <iframe
                         ref={iframeRef}
                                src={`${process.env.NEXT_PUBLIC_CLIENT_URL}blogs/${data?._id}`} // Adjust this URL based on your needs
                                className="w-full h-full"
                                title="Live Blog Preview"
                                frameBorder="0"
                            ></iframe>
                    </div>
   </>
  )
}

export default PreviewPage