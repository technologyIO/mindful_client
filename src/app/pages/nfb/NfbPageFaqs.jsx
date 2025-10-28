"use client"
import React, { useState } from 'react';
import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment';
import { Container } from '@mui/material';

const NfbPageFaqs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expanded, setExpanded] = useState({});

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleExpand = (id) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id],
        }));
    };

    const allFaqs = [
        {
            _id: 0,
            name: "What is Neurofeedback Training?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    Neurofeedback Training is a form of biofeedback that trains your brain to self-regulate its electrical activity, improving focus, mood, and overall well-being through real-time feedback.
                </p>
            </div>`
        },
        {
            _id: 1,
            name: "How does Neurofeedback work?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    EEG sensors on your scalp monitor brainwave activity and convert it into visual or auditory feedback through games or videos. When your brain produces optimal activity, you receive positive reinforcement, encouraging it to repeat that state.
                </p>
            </div>`
        },
        {
            _id: 2,
            name: "What conditions does Neurofeedback help with?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    It's effective for ADHD, anxiety, depression, PTSD, sleep disorders, and general cognitive enhancement.
                </p>
            </div>`
        },
        {
            _id: 3,
            name: "Is Neurofeedback safe?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    Yes. It's completely non-invasive and drug-free with no known harmful side effects, making it safe for both children (as young as 6) and adults.
                </p>
            </div>`
        },
        {
            _id: 4,
            name: "Is Neurofeedback safe for children?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    Absolutely. Children often enjoy the game-like nature of training, and it avoids concerns associated with psychiatric medications.
                </p>
            </div>`
        },
        {
            _id: 5,
            name: "How is this different from meditation or therapy?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    Neurofeedback provides real-time, precise training of specific brainwave patterns that meditation alone cannot target. It works synergistically with therapy and meditation for enhanced results.
                </p>
            </div>`
        },
        {
            _id: 6,
            name: "How many sessions will I need?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    Most people benefit from 25-40 sessions over 3-6 months, though some notice improvements within 5-10 sessions.
                </p>
            </div>`
        },
        {
            _id: 7,
            name: "What does each session involve?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    Sessions last about 20 minutes. You relax and engage with feedback-based games or videos while our clinicians monitor your progress through EEG data.
                </p>
            </div>`
        },
        {
            _id: 8,
            name: "Do the benefits last after training ends?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    Yes. Like learning to ride a bicycle, your brain retains these patterns long-term due to neuroplastic changes. Occasional refresher sessions may be beneficial.
                </p>
            </div>`
        },
        {
            _id: 9,
            name: "Can Neurofeedback replace my medication?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    It can be used as a complement to medication, but never as a replacement without your doctor's guidance. Many people successfully reduce medication needs over time with medical supervision.
                </p>
            </div>`
        },
        {
            _id: 10,
            name: "Can NFB be combined with other treatments?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    Yes—it can work synergistically with rTMS, psychotherapy, and counselling to accelerate and sustain progress.
                </p>
            </div>`
        },
        {
            _id: 11,
            name: "How is NFB different from rTMS?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    rTMS stimulates your brain regions externally with the use of a coil whereas Neurofeedback trains the brain internally through EEG-based feedback, helping it learn to self-regulate naturally.
                </p>
            </div>`
        },
        {
            _id: 12,
            name: "What equipment do you use?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    We use clinical-grade, EEG systems with engaging interfaces—games, videos, or music that respond to your brain activity in real-time.
                </p>
            </div>`
        },
        {
            _id: 13,
            name: "Why choose an experienced NFB Professional?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    Our experts customize training protocols based on your brain data, ensuring safe, accurate, and effective results. Poorly designed sessions can slow progress or cause mental fatigue.
                </p>
            </div>`
        },
        {
            _id: 14,
            name: "What happens if I only do a few sessions?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    While 5 sessions may bring slight relaxation, lasting symptom improvement requires consistent training over 20-40 sessions for the brain to retain new patterns.
                </p>
            </div>`
        },
        {
            _id: 15,
            name: "Who should not have Neurofeedback training?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    Those with unmanaged seizures, neurological implants, or severe psychiatric instability should consult a medical professional before starting NFB training.
                </p>
            </div>`
        },
        {
            _id: 16,
            name: "Is there an age limit?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    No. NFB is suitable for both children and adults, with protocols adjusted based on age, condition, and individual needs.
                </p>
            </div>`
        },
        {
            _id: 17,
            name: "What results can I expect?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-3">
                    Most clients report better focus, mood, sleep, and emotional control. Regular sessions lead to improved self-regulation and long-term mental stability.
                </p>
            </div>`
        }
    ];

    const filteredFaqs = allFaqs.filter((faq) =>
        faq.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='flex flex-col justify-center items-center'>
            <Container maxWidth="lg">
                <div className='mb-4 md:mb-6'>
                    <h1 className='text-xl md:text-3xl font-bold text-gray-700'>Frequently Asked Questions</h1>
                </div>
                <div className='md:w-full'>
                    {/* Search Bar */}
                    <div className="mb-4 md:mb-6">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                className="w-full pr-10 pl-3 md:pl-4 py-2.5 md:py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF6623] text-sm md:text-base"
                                placeholder="Search FAQs..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <div className="absolute right-3">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Results */}
                    <div className="grid grid-cols-1 gap-3 md:gap-4 justify-center items-center mb-6 rounded-lg md:w-full">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq) => (
                                <div
                                    key={faq._id}
                                    onClick={() => toggleExpand(faq._id)}
                                    className={`bg-white shadow-lg rounded-lg py-2 px-3 md:py-3 md:px-4 ${
                                        expanded[faq._id] ? 'border-2 border-[#EF6623]' : 'border border-gray-200'
                                    } cursor-pointer transition-all hover:shadow-xl`}
                                >
                                    <div className='bg-white rounded-md flex justify-between items-center'>
                                        <h3 className={`text-[14px] md:text-xl font-bold  md:font-semibold ${
                                            expanded[faq._id] ? 'text-red-500' : 'text-gray-700'
                                        }`}>
                                            {faq.name}
                                        </h3>

                                        <div>
                                            <svg
                                                className={`w-5 h-5 md:w-6 md:h-6 transform transition-transform ${
                                                    expanded[faq._id] ? 'rotate-180' : 'rotate-0'
                                                }`}
                                                fill="#EF6623"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M0,0v512h512V0H0z M420.416,207.083L271.083,356.416c-4.16,4.16-9.621,6.251-15.083,6.251 c-5.462,0-10.923-2.091-15.083-6.251L91.584,207.083c-8.341-8.341-8.341-21.824,0-30.165c8.341-8.341,21.824-8.341,30.165,0 L256,311.168l134.251-134.251c8.341-8.341,21.824-8.341,30.165,0C428.757,185.259,428.757,198.741,420.416,207.083z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    {expanded[faq._id] && (
                                        <div className='pt-2 md:pt-3'>
                                            <div dangerouslySetInnerHTML={{ __html: faq.detail }} />
                                            <div className='flex justify-center mt-3'>
                                                <div onClick={(e) => e.stopPropagation()}>
                                                    <RequestAppointment
                                                        name="Book NFB Consultation"
                                                        customStyle="flex justify-center items-center gap-2 text-xs md:text-sm text-orange-600 border bg-orange-100 shadow-md hover:shadow-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-semibold transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 md:p-6">
                                <h3 className="text-base md:text-lg font-semibold text-gray-800">No Question found</h3>
                                <p className="text-gray-600 text-center mb-4 text-sm md:text-base">{`We couldn't find any Question matching your search.`}</p>
                                <RequestAppointment
                                    name="Contact Us"
                                    customStyle="bg-[#EF6623] hover:bg-orange-500 text-sm md:text-base font-semibold active:bg-orange-700 rounded-lg text-white py-2 px-4"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NfbPageFaqs;
