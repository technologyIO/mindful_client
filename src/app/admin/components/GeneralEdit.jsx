'use client'
import React, { useEffect, useState } from 'react'

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomePage from '@/app/component/HomePage'
import EditHomePage from './EditHomePage';
// import { render } from 'react-dom';
import EditAssesment from './EditAssesment';
import EditTmsPage from './EditTmsPage';
import AssesmentPage from '@/app/assesment/AssesmentPage';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import AdminPreviewPage from './AdminPreviewPage'
import toast from 'react-hot-toast';




const GeneralEdit = ({ params }) => {
    const { page } = params;
    // const location = usePathname();

    const [allSection, setAllSection] = useState();

    const getSection = () => {
        let apiUrl = ''
        if (page === 'homesection') {
            apiUrl = `${process.env.NEXT_PUBLIC_API_URL}homeSection/getHomeSection`;
        }
        else if (page === 'selfassessment') {
            apiUrl = `${process.env.NEXT_PUBLIC_API_URL}AssessmentSection/getSection`;
        }
        
        axios.get(apiUrl)
            .then((res) => {
                // console.log(res.data);
                setAllSection(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getSection();
    }, [])
    const handleSave = () => {
        let apiUrl = ''
        if (page === 'homesection') {
            apiUrl = `${process.env.NEXT_PUBLIC_API_URL}homeSection/udpateHomeSection`;
        }
        else if (page === 'selfassessment') {
            apiUrl = `${process.env.NEXT_PUBLIC_API_URL}AssessmentSection/udpateSection`;
        }
        if (allSection) {
            axios.put(apiUrl, allSection).then((res) => {
                console.log(res.data);
                toast.dismiss()
                toast.success('Section updated successfully')
            }).catch((err) => {
                console.log(err);
            })
        }
    }
    const renderUrlForPreview = () => {
        if (page === 'homesection') {
            return `${process.env.NEXT_PUBLIC_CLIENT_URL}`
        }
        if (page === 'selfassessment') {
            return `${process.env.NEXT_PUBLIC_CLIENT_URL}assesment`
        }
        if (page === 'tms') {
            return `${process.env.NEXT_PUBLIC_CLIENT_URL}pages/tmsPage`
        }
        else{
            return `${process.env.NEXT_PUBLIC_CLIENT_URL}`
        }
    }

    const renderPageComponent = (page, allSection, setAllSection) => {
        if (page === 'homesection') {
            return <EditHomePage allSection={allSection} setAllSection={setAllSection} />;
        }
        else if (page === 'selfassessment') {
            return <EditAssesment allSection={allSection} setAllSection={setAllSection} />;
        }
        else if (page === 'tms') {
            return <EditTmsPage allSection={allSection} setAllSection={setAllSection} />;
        }
        return null;
    }

    const renderPageHeader = (page) => {
        if (page === 'homesection') {
            return <h1 className='text-2xl font-semibold'>Home Page</h1>;
        }
        if (page === 'selfassessment') {
            return <h1 className='text-2xl font-semibold'>Assessment</h1>;
        }
        return null;
    };


    return (
        <>
            <div className='px-4 py-4 flex justify-around'>

                {renderPageHeader(page)}
                <button className='bg-green-500 text-white px-4 py-2 rounded-xl' onClick={handleSave}>Save</button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-4 px-8 py-4 gap-4'>
                <div className='h-[100vh] overflow-y-scroll overflow-x-hidden sm:col-span-3 border-[1px] border-gray-400 p-2 shadow rounded-xl'>
                    {renderPageComponent(page, allSection, setAllSection)}
                </div>
                <div className='col-span-1'>
                    {/* <div className='flex justify-center mb-5 bg-green-500 rounded-xl text-white p-3'>
                        <h1 className='text-2xl font-semibold'>Live Preview</h1>
                    </div> */}
                    <div className='h-[90vh] overflow-y-scroll overflow-x-hidden'>
                        {/* {renderPreviewPage(page, allSection, setAllSection)}
                         */}
                        <AdminPreviewPage url={renderUrlForPreview()} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneralEdit;



// BELOW ARE THE EXAMPLE OF DATA FOR HOME PAGE , ASSESMENT PAGE 

const HomePageSections = {
    heroSection: {
        banner: "/home/banner01.png",
        title: "You Deserve to Feel Better ",
        para: `Get the best care from our experienced psychologists, TMS experts and psychiatrists for help with depression,OCD and more.
With empathy and confidence, our professionals will guide you through every challenge.`,
        button: {
            text: "SCHEDULE CONSULTATION",
            link: "/consultation/location",
        }
    },
    section2: {
        para1: `Not sure what you need?`,
        para2: `These tests can help identify
what you may have and need`,
        para2: `Take a FREE TEST to identify your symptoms`,
        html1: `<p class='text-center mb-5 font-[15px] text-[#3A3A3A]'>These tests can help identify
                        what you may have and need</p>

                    <h1 class='text-2xl text-center text-gray-800'>
                        Take a <span class="font-semibold">FREE TEST</span> to identify your symptoms
                    </h1>`,
        button: {
            text: "FREE TEST",
            link: "/assesment",
        }
    },
    section3: {
        title: "TMS Treatment",
        para1: `A new approach to treat depression, anxiety, OCD and more.`,
        box: {
            banner: "/home/doctor.png",
            para: `<p class='font-bold mb-3 text-gray-700 text-md'>NON-INVASIVE</p>
                    <p class='font-bold mb-3 text-gray-700 text-md'>NO MEDICATION</p>
                    <p class='font-bold mb-3 text-gray-700 text-md'>SAFE</p>
                    <p class='font-bold mb-3 text-gray-700 text-md'>US FDA Approved</p>`
        },
        para2: `<p style="font-size: 15px; color: #3A3A3A; text-align: center">At MindfulTMS, we bring 5+ years of TMS experience with 10+ clinics in India and USA.</p>

        <p style="font-size: 15px; color: #3A3A3A; text-align: center">Is TMS for me? Learn how it works and if it is the right option for you. </p>`,
        button: {
            text: "MORE ABOUT TMS",
            link: "/blog/tms",
        }

    },
    section4: {
        header: `<h1 class='text-2xl font-[30px] text-center '>
                    Why choose <span class='font-semibold'>MindfulTMS?</span>
                </h1>`,
        para: `<p class='text-center'>
                    Your well being is our mission.
                </p>`,
        services: [
            {
                icon: '/home/medical.svg',
                text: 'Personalized care',
            },
            {
                icon: '/home/handshake.svg',
                text: 'Trust',
            },
            {
                icon: '/home/group.svg',
                text: 'Safe',
            },
            {
                icon: '/home/heart.svg',
                text: 'Holistic',
            },
        ]
    },
    section5: {
        header: 'Services we offer',
        services: [
            {
                title: 'Psychology/Therapy',
                array: [
                    {
                        img: "",
                        name: 'Lorem Ipsum dolor qioe',
                    },
                    {
                        img: "",
                        name: 'Lorem Ipsum dolor qioe',
                    },
                    {
                        img: "",
                        name: 'Lorem Ipsum dolor qioe',
                    },
                ],
                button: {
                    text: 'LEARN MORE',
                    link: '/services/Therapy Services'
                }
            }, {
                title: 'Psychiatry',
                array: [
                    {
                        img: "",
                        name: 'Lorem Ipsum dolor qioe',
                    },
                    {
                        img: "",
                        name: 'Lorem Ipsum dolor qioe',
                    },
                    {
                        img: "",
                        name: 'Lorem Ipsum dolor qioe',
                    },
                ],
                button: {
                    text: 'LEARN MORE',
                    link: '/services/TMS Treatment Services'
                }
            }
        ]
    },
    section6: {
        header: 'Our Locations',
        para: `Lorem ipsum dolor sit amet`,
        locations: [
            {
                title: 'Bangalore',
                locationArray: [
                    {
                        title: "Aster CMI",
                        address: "Bangalore North",
                    },
                    {
                        title: "Whitefield",
                        address: "Bangalore East",
                    },
                ]
            },
            {
                title: 'Delhi',
                locationArray: [
                    {
                        title: "Greater Kailash",
                        address: "Delhi",
                    },

                ]
            },
        ]
    },
    section7: {
        header: 'Our Experts',
        expertArray: [
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },

        ]
    }
}

const assesmentPageSection = {
    section1: {
        header: "Take a Self-Assessment",
        para1: `<p class='text-sm text-center mb-5'>
                            Welcome to our self-assessment page.
                            Here, you can choose from a variety of tests to help you understand your mental health better.
                        </p>
    
                        <p class='text-sm text-center'>
                            Select the test that best matches your current feelings and concerns.
                        </p>`,
        AvailableTest: [
            {
                id: 1,
                title: "Take the PHQ-9 Test",
                title2: "Test for Depression",
                para: `This test helps evaluate the severity of depression symptoms.`,
                img: '/home/depression.svg',
                link: '/assesment/phq9/selfAssesment'
            },
            {
                id: 2,
                title: "Take the GAD-7 Test",
                title2: "Test for Anxiety",
                para: `This test helps evaluate the severity of anxiety symptoms.`,
                img: '/home/anxiety.svg',
                link: '/assesment/gad7/selfAssesment'
            },
            {
                id: 3,
                title: "Take the PSS-10 Test",
                title2: "Test for Stress",
                para: `This test assesses how stressful you find your life situations.`,
                img: '/home/stress.svg',
                link: '/assesment/pss10/selfAssesment'
            },

        ],

    },
    section2: {
        header: "Not sure which test to take?",
        para: `<p class='text-center text-sm'>The K10 is designed to measure general psychological distress and can be an effective initial screening tool to identify whether you may need further assessment or support.  </p>`,
        defaultTest: {
            id: 4,
            title: "Take the K10 Test",
            title2: "K10 (Kessler Psychological Distress Scale)",
            para: `This test assesses the level of distress you have experienced in the past month. It helps identify symptoms of anxiety and depression, emotional and physical fatigue, and the impact on daily functioning. `,
            img: '/home/anxiety.svg',
        },
    },
    section3: {
        blogs: [
            {
                id: 1,
                img: "",
                title: "TMS for Depression"
            },
            {
                id: 2,
                img: "",
                title: "TMS for OCD"
            },
            {
                id: 3,
                img: "",
                title: "TMS for Anxiety"
            },
        ],
        button: {
            text: "Learn More",
            link: "/",
        }
    }
}
