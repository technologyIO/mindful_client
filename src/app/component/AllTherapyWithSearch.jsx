"use client"
import React, { useState } from 'react';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';
// import TestRequestAppointmentGeneral from '../clinicLocation/[city]/RequestAppointmentGeneral';

const AllTherapyWithSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expanded, setExpanded] = useState({});
    const [testsToShow, setTestsToShow] = useState(4);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleExpand = (id) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id],
        }));
    };

    const filteredTests = allTest.filter((test) =>
        test.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const testsToDisplay = filteredTests;

    const quickLinks = [
        "Is therapy Confidential?",
        "How Long Does therapy Take?",
        "How Do I Get Started with therapy?"
    ];

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='mb-6 w-full'>
                <h1 className='text-3xl text-start md:text-5xl font-extrabold text-gray-700'>FAQs</h1>
            </div>
            <div className='md:w-full'>
                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            className="w-full pr-10 pl-4 py-2 md:py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <div className="absolute right-3">
                            <img src="/home/search.svg" alt="search" className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Search Results */}
                <div className="grid grid-cols-1 gap-5  md:gap-6 justify-center items-center mb-6  rounded-lg md:w-full">
                    {testsToDisplay.length > 0 ? (
                        testsToDisplay.map((test) => (
                            <div
                                key={test._id}
                                onClick={() => toggleExpand(test._id)}
                                className={`bg-white shadow-xl rounded-lg md:py-3 md:px-3 ${expanded[test._id] ? 'border-2 border-red-400' : ''} cursor-pointer`}
                            >
                                <div className='bg-white p-2 rounded-md flex justify-between items-center '>
                                <h3 className={`text-[14px] md:text-xl font-bold  md:font-semibold ${expanded[test._id] ? 'text-red-500' : 'text-gray-700'}`}>
                                        {test.name}
                                    </h3>
                                    {/* Arrow Icon */}
                                   <div>
                                 
                                    <svg className={`w-6 h-6 transform transition-transform ${
                                            expanded[test._id] ? 'rotate-180' : 'rotate-0'
                                        }`} fill="#ff0000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" space="preserve" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,0v512h512V0H0z M420.416,207.083L271.083,356.416c-4.16,4.16-9.621,6.251-15.083,6.251 c-5.462,0-10.923-2.091-15.083-6.251L91.584,207.083c-8.341-8.341-8.341-21.824,0-30.165c8.341-8.341,21.824-8.341,30.165,0 L256,311.168l134.251-134.251c8.341-8.341,21.824-8.341,30.165,0C428.757,185.259,428.757,198.741,420.416,207.083z"></path> </g> </g> </g></svg>
                                  
                                   </div>
                                </div>
                                {expanded[test._id] && (
                                   <>
                                    <div className='p-2'>
                                        <div dangerouslySetInnerHTML={{ __html: test.detail }} />
                                    </div>
                                    <div className='flex justify-center pb-2'>
                                                <div onClick={(e)=>e.stopPropagation()}>
                                                {/* <TestRequestAppointmentGeneral>
                                                    <div className="flex justify-center items-center gap-4 text-sm text-orange-600 border bg-orange-100 font-semibold shadow-md hover:shadow-sm px-3 py-1 rounded-lg hover:bg-orange-100">
                                                      Book a Therapy Session
                                                    </div>
                                                </TestRequestAppointmentGeneral> */}
                                                  <RequestAppointment
                                                name="Book a Therapy Session"
                                                customStyle="flex justify-center items-center gap-4 text-sm text-orange-600 border bg-orange-100 font-semibold shadow-md hover:shadow-sm px-3 py-1 rounded-lg hover:bg-orange-100"
                                            />
                                                </div>
                                               
                                            </div>
                                   </>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-800">No Therapy found</h3>
                            <p className="text-gray-600 text-center mb-4">{`We couldn't find any Therapy matching your search.`}</p>
                            <RequestAppointment
                                name={"Contact Us"}
                                customStyle={" bg-[#EF6623] hover:bg-orange-500 text-lg font-semibold active:bg-orange-700 rounded-lg text-white py-2 px-4"}
                            />
                        </div>
                    )}
                </div>

                {/* <div className="flex justify-center">
                    <RequestAppointment
                        name={"Contact Us"}
                        customStyle={" bg-[#EF6623] hover:bg-orange-500 text-xl active:bg-orange-700 rounded-lg text-white py-1 px-2"}
                    />
                </div> */}
            </div>
        </div>
    );
};

export default AllTherapyWithSearch;

const allTest = [
    {
        _id: 0,
        name: "What is Psychotherapy?",
        icon: "/therapy.png",
        detail: `<p class="text-sm md:text-lg ">
        <span class="font-bold">Psychotherapy</span>, also known as 
        <span class="font-bold">talk therapy</span> or just 
        <span class="font-bold">therapy</span>, is a collaborative treatment that involves working with a trained mental health professional to understand and overcome emotional and psychological challenges. It provides a 
        <span class="font-bold">safe space</span> to explore your thoughts, feelings, and behaviors to promote personal growth and improve mental well-being.
    </p>`
    },
    {
        _id: 1,
        name: "How Does therapy Work?",
        icon: "/psychiatry.png",
        detail: `<div>
        <p class="text-sm md:text-lg  font-bold">Psychotherapy works</p>
<p class="text-sm md:text-lg  mb-2">by fostering a trusting relationship between you and your therapist.</p>

<p class="text-sm md:text-lg  mb-2">Through regular conversations, you can:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1">
    <li><span class="font-bold">Identify Patterns:</span> Recognize and understand negative thoughts and behaviours.</li>
    <li><span class="font-bold">Develop Coping Strategies:</span> Learn tools to handle stress, anxiety, and other emotions.</li>
    <li><span class="font-bold">Set Goals:</span> Define personal objectives and work towards achieving them.</li>
    <li><span class="font-bold">Gain Insight:</span> Explore underlying issues contributing to your current struggles.</li>
</ul>
</div>`
    },
    {
        _id: 2,
        name: "What Types of therapy Are Available?",
        icon: "/assessment.png",
        detail: `<p class="text-sm md:text-lg  mb-2">There are several approaches to psychotherapy, including:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1">
    <li><span class="font-bold">Cognitive Behavioural Therapy (CBT):</span> Focuses on changing negative thought patterns and behaviours.</li>
    <li><span class="font-bold">Dialectical Behaviour Therapy (DBT):</span> Combines CBT with mindfulness techniques to manage emotions.</li>
    <li><span class="font-bold">Psychodynamic Therapy:</span> Explores unconscious processes and past experiences.</li>
    <li><span class="font-bold">Humanistic Therapy:</span> Emphasizes personal growth and self-fulfillment.</li>
    <li><span class="font-bold">Family Therapy:</span> Addresses issues within family dynamics and relationships.</li>
</ul>

<p class="text-sm md:text-lg  mt-4">There are many more such approaches, and our experts are trained to choose the best approach for your requirements.</p>
`
    },
    {
        _id: 3,
        name: "What Conditions Can therapy Help With?",
        icon: "/tms.png",
        detail: `<p class="text-sm md:text-lg  mb-2">Psychotherapy is effective in treating a wide range of mental health conditions, including:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1">
    <li><span class="font-bold">Depression</span></li>
    <li><span class="font-bold">Anxiety Disorders</span></li>
    <li><span class="font-bold">Post-Traumatic Stress Disorder (PTSD)</span></li>
    <li><span class="font-bold">Obsessive-Compulsive Disorder (OCD)</span></li>
    <li><span class="font-bold">Eating Disorders</span></li>
    <li><span class="font-bold">Substance Abuse</span></li>
    <li><span class="font-bold">Bipolar Disorder</span></li>
    <li><span class="font-bold">Grief and Loss</span></li>
    <li><span class="font-bold">Relationship Issues</span></li>
    <li><span class="font-bold">Stress Management</span></li>
</ul>
`
    },
    {
        _id: 4,
        name: "How Long Does therapy Take?",
        icon: "/therapy.png",
        detail: `<p class="text-sm md:text-lg  mb-2">The duration of psychotherapy varies based on individual needs:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1">
    <li><span class="font-bold">Short-Term Therapy:</span> Typically, 6-12 sessions, focusing on specific issues.</li>
    <li><span class="font-bold">Long-Term Therapy:</span> Ongoing sessions, sometimes lasting several years, for deeper exploration and sustained personal growth.</li>
</ul>
`
    },
    {
        _id: 5,
        name: "How Many Therapy Sessions Will I Need?",
        icon: "/tms.png",
        detail: `<p class="text-sm md:text-lg  mb-2">The number of sessions required depends on:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1">
    <li><span class="font-bold">Nature of the Issue:</span> Severity and complexity of the problem.</li>
    <li><span class="font-bold">Therapeutic Goals:</span> Specific objectives you wish to achieve.</li>
    <li><span class="font-bold">Individual Progress:</span> How you respond and progress in therapy. On average, many individuals find significant improvement within <span class="font-bold">12-20 sessions</span>, but some may require more.</li>
</ul>
`
    },
    {
        _id: 6,
        name: "How Do I Know if therapy is Right for Me?",
        icon: "/therapy.png",
        detail: `<p class="text-sm md:text-lg  mb-2">Consider psychotherapy if you:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1">
    <li><span class="font-bold">Feel Overwhelmed:</span> Struggling to cope with daily life.</li>
    <li><span class="font-bold">Experience Emotional Distress:</span> Persistent sadness, anxiety, or anger.</li>
    <li><span class="font-bold">Face Relationship Issues:</span> Conflicts with family, friends, or partners.</li>
    <li><span class="font-bold">Have Traumatic Experiences:</span> Difficulty moving past trauma or loss.</li>
    <li><span class="font-bold">Seek Personal Growth:</span> Desire to understand yourself better and improve your life.</li>
</ul>
`
    },
    {
        _id: 7,
        name: "What Should I Expect in My First Therapy Session?",
        icon: "/tms.png",
        detail: `<p class="text-sm md:text-lg  mb-2">During your first session, you can expect to:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1">
    <li><span class="font-bold">Introduce Yourself:</span> Share basic information about yourself and your background.</li>
    <li><span class="font-bold">Discuss Goals:</span> Explain what you hope to achieve through therapy.</li>
    <li><span class="font-bold">Assessment:</span> The therapist may ask questions to understand your situation and determine the best approach.</li>
    <li><span class="font-bold">Confidentiality Explanation:</span> Learn about the privacy and confidentiality policies of therapy.</li>
</ul>
`
    },
    {
        _id: 8,
        name: "Is therapy Confidential?",
        icon: "/therapy.png",
        detail: `<p class="text-sm md:text-lg  mb-2">Yes, psychotherapy is confidential. This means:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1">
    <li><span class="font-bold">Privacy Protected:</span> What you share in therapy stays between you and your therapist.</li>
    <li><span class="font-bold">Limited Exceptions:</span> In cases of imminent harm to yourself or others, therapists may be required to break confidentiality to ensure safety.</li>
</ul>
`
    },
    {
        _id: 9,
        name: "What is the Cost of Psychotherapy?",
        icon: "/therapy.png",
        detail: `<p class="text-sm md:text-lg  mb-2">The cost of psychotherapy varies based on:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1">
    <li><span class="font-bold">Therapist’s Experience:</span> More experienced therapists may charge higher fees.</li>
    <li><span class="font-bold">Session Length:</span> Standard sessions are typically 60 minutes.</li>
    <li><span class="font-bold">Location:</span> Costs can vary by geographic area.</li>
    <li><span class="font-bold">Insurance Coverage:</span> Some insurance plans may cover a portion of the cost.</li>
</ul>

<p class="text-sm md:text-lg  mt-4">Get in touch with us at your nearest MindfulTMS clinic to understand our pricing.</p>
`
    },
    {
        _id: 10,
        name: "Do You Accept Insurance?",
        icon: "/therapy.png",
        detail: `<p class="text-sm md:text-lg  mb-2">Yes, we do. However, as only select insurances offer mental health coverage, determine your coverage first:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1">
    <li><span class="font-bold">Check with Your Provider:</span> Contact your insurance company to inquire about mental health benefits.</li>
    <li><span class="font-bold">Consult with Us:</span> Our team at MindfulTMS can assist you in understanding your coverage.</li>
</ul>
`
    },
    {
        _id: 11,
        name: "How Do I Choose the Right Therapist?",
        icon: "/therapy.png",
        detail: `<p class="text-sm md:text-lg  mb-2">Consider the following when selecting a therapist:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1">
    <li><span class="font-bold">Specialization:</span> Ensure the therapist has experience with your specific concerns.</li>
    <li><span class="font-bold">Credentials:</span> Check their qualifications and licensing.</li>
    <li><span class="font-bold">Therapeutic Approach:</span> Find a therapist whose methods align with your preferences.</li>
    <li><span class="font-bold">Comfort and Rapport:</span> It’s important to feel comfortable and understood by your therapist.</li>
</ul>
`
    },
    {
        _id: 12,
        name: "Can I Switch Therapists If I'm Not Comfortable?",
        icon: "/therapy.png",
        detail: `<p class="text-sm md:text-lg  mb-2">Absolutely. It’s important to feel comfortable and supported in therapy.</p>

<p class="text-sm md:text-lg  mb-2">If you’re not satisfied with your current therapist:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1">
    <li><span class="font-bold">Communicate Concerns:</span> Share your feelings with your therapist; they may adjust their approach.</li>
    <li><span class="font-bold">Find a New Therapist:</span> It’s perfectly acceptable to seek a different therapist who better fits your needs.</li>
</ul>
`
    },
    {
        _id: 13,
        name: "What Should I Do if I Miss a Session?",
        icon: "/therapy.png",
        detail: `<p class="text-sm md:text-lg  mb-2">Life can be unpredictable. If you need to miss a session, call your centre and inform them as soon as possible.</p>

<p class="text-sm md:text-lg ">You may be taking a slot from someone that needs it. To help others, please notify in advance so that we can reschedule your appointment and offer your currently booked slot to another person in need.</p>
`
    },
    {
        _id: 14,
        name: "How Do I Get Started with therapy?",
        icon: "/therapy.png",
        detail: `<p class="text-sm md:text-lg  mb-2">Starting therapy is simple:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1 mb-4">
    <li><span class="font-bold">Contact Us:</span> Reach out to MindfulTMS via Whatsapp, email, our website or Practo.</li>
</ul>

<p class="text-sm md:text-lg  mb-2">Getting started involves:</p>

<ul class="list-disc list-inside text-sm md:text-lg  space-y-1">
    <li><span class="font-bold">Initial Consultation:</span> Schedule a session to discuss your needs and goals.</li>
    <li><span class="font-bold">Personalized Plan:</span> Work with your therapist to create a treatment plan tailored to you.</li>
    <li><span class="font-bold">Begin Sessions:</span> Start your journey towards improved mental well-being.</li>
</ul>
`
    }
];
