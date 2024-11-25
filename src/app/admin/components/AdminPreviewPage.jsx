import React, { useRef } from 'react'

const AdminPreviewPage = ({url}) => {
    console.log('url ', url)
    const iframeRef = useRef(null);
    const reloadIframe = () => {
        if (iframeRef.current) {
            iframeRef.current.src = url;
        }
    };

  return (
   <>
     <div className='flex h-[10%] justify-between items-center bg-green-400 p-3 rounded-lg mb-3'>
                            <h1 className='text-2xl font-semibold text-green-900'>Live Preview</h1>
                            <button onClick={reloadIframe} className='px-5 py-2 bg-green-500 text-white rounded-lg'>Reload</button>
                        </div>
                    <div className='h-[80%] overflow-scroll'>
                        <iframe
                         ref={iframeRef}
                                src={url} // Adjust this URL based on your needs
                                className="w-full h-full"
                                title="Live Blog Preview"
                                frameBorder="0"
                            ></iframe>
                    </div>
   </>
  )
}

export default AdminPreviewPage