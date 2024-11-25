import React from 'react'
import SingleBlog from "@/app/blogs/[slugs]/SingleBlog"
import axios from 'axios'

const works = [
    {
        id: 1,
        title: 'Identifying the Condition',
    },
    {
        id: 2,
        title: 'Activation of Brain Cells',
    },
    {
        id: 3,
        title: 'Release of Neurotransmitters',
    },
    {
        id: 4,
        title: 'Improved Brain Connections',
    }
]

const stages = [
    {
        id: 1,
        title: 'Initial Consultation',
        subPoints:[
            { 
                paraTitle: 'Evaluation',
                para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
            },
            { 
                paraTitle: 'Evaluation',
                para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
            },{ 
                paraTitle: 'Evaluation',
                para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
            },

        ]
       },
       {
        id: 1,
        title: 'Initial Consultation',
        subPoints:[
            { 
                paraTitle: 'Evaluation',
                para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
            },
            { 
                paraTitle: 'Evaluation',
                para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
            },{ 
                paraTitle: 'Evaluation',
                para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
            },

        ]
       },
       {
        id: 1,
        title: 'Initial Consultation',
        subPoints:[
            { 
                paraTitle: 'Evaluation',
                para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
            },
            { 
                paraTitle: 'Evaluation',
                para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
            },{ 
                paraTitle: 'Evaluation',
                para: ` Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you. `
            },

        ]
       },
]

// const blog ={
//     "title": "A Journey Through the Mountains",
//     "mainImage": "https://picsum.photos/200/300",
//     "sections": [
//       {
//         "type": "content",
//         "content": "<p>This is the first paragraph describing the journey.</p>",
//         "order": 1
//       },
//       {
//         "type": "image",
//         "content": "https://picsum.photos/200/300",
//         "order": 2
//       },
//       {
//         "type": "content",
//         "content": "<p>This section provides more details about the mountain ranges.</p>",
//         "order": 3
//       },
//       {
//         "type": "button",
//         "text": "Read More",
//         "link": "/",
//         "order": 3
//       },
//       {
//         "type":"accordion",
//         "order":4,
//         "sections": [
//             {
//               "type": "content",
//               "content": "<p>Details about the first part of the journey inside the accordion.</p>",
//               "order": 1
//             },
//             {
//               "type": "image",
//               "content": "https://picsum.photos/200/300",
//               "order": 2
//             },
//             {
//               "type": "content",
//               "content": "<p>Additional information inside the accordion section.</p>",
//               "order": 3
//             }
//           ],
//       }
     
//     ]
//   }
  

const page = async({params}) => {
    const {slugs} = params;
    let blog ={}
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}blogs/getBlogData/${slugs}/blog`);
        blog = res.data
    //    console.log('res', blog)
    } catch (error) {
        console.log(error)
    }
   
  return (
    <> 
       <SingleBlog blog={blog}/>
    </>
  )
}

export default page