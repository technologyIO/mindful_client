"use client"
import { Container } from '@mui/material';
import React, { useState } from 'react';
import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment';
import NfbPageFaqs from './NfbPageFaqs';

import { 
    Brain, 
    Shield, 
    Target, 
    TrendingUp, 
    UserCheck,
    ChevronDown,
    ChevronUp,
    Search
} from 'lucide-react';

const NeurofeedbackPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [activeTab, setActiveTab] = useState('clinic');

    const benefits = [
        "Improved mood",
        "Better sleep quality",
        "Sharper focus and concentration",
        "Reduced Anxiety",
        "Calmer mind"
    ];

    const whoIsItFor = [
        { id: '3A', text: 'Children with ADHD and attention challenges', link: '#children-adhd' },
        { id: '3B', text: 'Individuals with low or fluctuating moods', link: '#mood-issues' },
        { id: '3C', text: 'Individuals with poor sleep', link: '#sleep-issues' },
        { id: '3D', text: 'Adults with ADHD and focus issues', link: '#adult-adhd' },
        { id: '3E', text: 'Adults with excessive worrying and anxiety problems', link: '#anxiety' },
        { id: '3F', text: 'Individuals seeking Peak performance', link: '#peak-performance' }
    ];

    const whyChooseNfb = [
        {
            icon: <Brain size={32} />,
            title: "Additive effects",
            description: "to ongoing therapy and medication"
        },
        {
            icon: <Shield size={32} />,
            title: "Natural and safe",
            description: "training method"
        },
        {
            icon: <Target size={32} />,
            title: "Non-invasive",
            description: "and simple to setup"
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Permanent results",
            description: "with regular training"
        },
        {
            icon: <UserCheck size={32} />,
            title: "Expert guidance",
            description: "and training protocol development"
        }
    ];

    const faqs = [
        {
            question: "What is Neurofeedback Training?",
            answer: "Neurofeedback Training is a form of biofeedback that trains your brain to self-regulate its electrical activity, improving focus, mood, and overall well-being through real-time feedback."
        },
        {
            question: "How does Neurofeedback work?",
            answer: "EEG sensors on your scalp monitor brainwave activity and convert it into visual or auditory feedback through games or videos. When your brain produces optimal activity, you receive positive reinforcement, encouraging it to repeat that state."
        },
        {
            question: "What conditions does Neurofeedback help with?",
            answer: "It's effective for ADHD, anxiety, depression, PTSD, sleep disorders, and general cognitive enhancement."
        },
        {
            question: "Is Neurofeedback safe?",
            answer: "Yes. It's completely non-invasive and drug-free with no known harmful side effects, making it safe for both children (as young as 6) and adults."
        },
        {
            question: "Is Neurofeedback safe for children?",
            answer: "Absolutely. Children often enjoy the game-like nature of training, and it avoids concerns associated with psychiatric medications."
        },
        {
            question: "How is this different from meditation or therapy?",
            answer: "Neurofeedback provides real-time, precise training of specific brainwave patterns that meditation alone cannot target. It works synergistically with therapy and meditation for enhanced results."
        },
        {
            question: "How many sessions will I need?",
            answer: "Most people benefit from 25-40 sessions over 3-6 months, though some notice improvements within 5-10 sessions."
        },
        {
            question: "What does each session involve?",
            answer: "Sessions last about 20 minutes. You relax and engage with feedback-based games or videos while our clinicians monitor your progress through EEG data."
        },
        {
            question: "Do the benefits last after training ends?",
            answer: "Yes. Like learning to ride a bicycle, your brain retains these patterns long-term due to neuroplastic changes. Occasional refresher sessions may be beneficial."
        },
        {
            question: "Can Neurofeedback replace my medication?",
            answer: "It can be used as a complement to medication, but never as a replacement without your doctor's guidance. Many people successfully reduce medication needs over time with medical supervision."
        },
        {
            question: "Can NFB be combined with other treatments?",
            answer: "Yes—it can work synergistically with rTMS, psychotherapy, and counselling to accelerate and sustain progress."
        },
        {
            question: "How is NFB different from rTMS?",
            answer: "rTMS stimulates your brain regions externally with the use of a coil whereas Neurofeedback trains the brain internally through EEG-based feedback, helping it learn to self-regulate naturally."
        },
        {
            question: "What equipment do you use?",
            answer: "We use clinical-grade, EEG systems with engaging interfaces—games, videos, or music that respond to your brain activity in real-time."
        },
        {
            question: "Why choose an experienced NFB Professional?",
            answer: "Our experts customize training protocols based on your brain data, ensuring safe, accurate, and effective results. Poorly designed sessions can slow progress or cause mental fatigue."
        },
        {
            question: "What happens if I only do a few sessions?",
            answer: "While 5 sessions may bring slight relaxation, lasting symptom improvement requires consistent training over 20-40 sessions for the brain to retain new patterns."
        },
        {
            question: "Who should not have Neurofeedback training?",
            answer: "Those with unmanaged seizures, neurological implants, or severe psychiatric instability should consult a medical professional before starting NFB training."
        },
        {
            question: "Is there an age limit?",
            answer: "No. NFB is suitable for both children and adults, with protocols adjusted based on age, condition, and individual needs."
        },
        {
            question: "What results can I expect?",
            answer: "Most clients report better focus, mood, sleep, and emotional control. Regular sessions lead to improved self-regulation and long-term mental stability."
        }
    ];

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return (
        <div className="min-h-screen">
            {/* Banner */}
            <div className="w-full h-[35vh] md:h-[60vh] bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-2">Neurofeedback Training</h1>
                    <p className="text-sm md:text-xl text-gray-600">Train Your Brain, Transform Your Life</p>
                </div>
            </div>

            {/* Section 1: What is NFB */}
            <div className="px-4 py-8 md:py-12 bg-white">
                <Container maxWidth="lg">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-5 text-center md:text-left">
                        What is Neurofeedback Training (NFB)?
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <div className="w-full md:w-2/3">
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                Think of neurofeedback training as a gym workout for your brain. Just like you train your muscles to become stronger, neurofeedback training strengthens your brain to work more efficiently and effectively, relieving clinical symptoms of various neuropsychological challenges.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="w-full h-[180px] md:h-[240px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                                <span className="text-gray-500 text-xs text-center px-2">Brain Training Image</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Benefits Buttons */}
            <div className="bg-primary-div px-4 py-8 md:py-[60px]">
                <Container maxWidth="lg">
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-green-100 text-green-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full font-semibold text-xs md:text-sm"
                            >
                                {benefit}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-6 py-2.5 md:px-8 md:py-3 text-white text-sm md:text-base font-semibold uppercase shadow-md transition-all w-full md:w-auto">
                            Learn the Science Behind It
                        </button>
                    </div>
                </Container>
            </div>

            {/* Section 2: How does NFB work */}
            <div className="px-4 py-8 md:py-12 bg-white">
                <Container maxWidth="lg">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-5 text-center">
                        How does Neurofeedback Training work?
                    </h2>
                    <div className="w-full h-[200px] md:h-[300px] bg-gradient-to-br from-blue-100 to-green-100 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-gray-500 text-xs text-center px-2">NFB Process Diagram</span>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                     {`   NFB is an evidence-based brain exercise. It's a supplementary aid that helps your brain learn to self-regulate better. The beauty of this approach is that you're teaching your brain to help itself, creating lasting changes without medications or invasive procedures.`}
                    </p>
                    <ol className="list-decimal list-inside text-gray-700 text-sm md:text-base space-y-2 md:space-y-3">
                        <li>{`During an NFB session, we place small sensors on your scalp that detect your brain's electrical activity (called brainwaves). These sensors are completely safe and painless. They only listen to your brain.`}</li>
                        <li>You play games that are controlled by your brain without touching the screen.</li>
                        <li>The games reward you when your brain produces desired patterns.</li>
                        <li>By repeating 3-4 sessions a week, after about <strong>25-40 sessions</strong>, your brain learns to maintain optimal activity on its own.</li>
                    </ol>
                </Container>
            </div>

            {/* Section 3: Who is it for */}
            <div className="px-4 py-8 md:py-12 bg-primary-div">
                <Container maxWidth="lg">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
                        Who is Neurofeedback Training for?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {whoIsItFor.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                className="block bg-white hover:bg-green-50 rounded-lg p-3 md:p-4 shadow-sm hover:shadow-md transition-all"
                            >
                                <p className="text-[#EF6623] font-semibold text-sm md:text-base">{item.text}</p>
                            </a>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Section 4: Where can you train - WITH TABS */}
            <div className="px-4 py-8 md:py-12 bg-white">
                <Container maxWidth="lg">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
                        Where can you train?
                    </h2>
                    
                    {/* Tabs */}
                    <div className="flex gap-2 mb-5 md:mb-6">
                        <button
                            onClick={() => setActiveTab('clinic')}
                            className={`flex-1 py-2.5 md:py-3 px-3 md:px-4 rounded-lg font-semibold text-sm md:text-base transition-all ${
                                activeTab === 'clinic'
                                    ? 'bg-[#EF6623] text-white shadow-md'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            In-Clinic NFB
                        </button>
                        <button
                            onClick={() => setActiveTab('home')}
                            className={`flex-1 py-2.5 md:py-3 px-3 md:px-4 rounded-lg font-semibold text-sm md:text-base transition-all ${
                                activeTab === 'home'
                                    ? 'bg-[#EF6623] text-white shadow-md'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            At-Home NFB
                        </button>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'clinic' && (
                        <div className="space-y-3 md:space-y-4 animate-fadeIn">
                            <div className="border-l-4 border-green-500 pl-3 md:pl-4 bg-green-50 py-3 pr-3 md:py-4 md:pr-4 rounded-r-lg">
                                <h5 className="font-bold text-gray-800 text-sm md:text-base mb-1">Brain Mapping (QEEG)</h5>
                                <p className="text-gray-700 text-xs md:text-sm">You visit the clinic where we begin with comprehensive brain mapping to identify specific patterns and areas for improvement.</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-3 md:pl-4 bg-green-50 py-3 pr-3 md:py-4 md:pr-4 rounded-r-lg">
                                <h5 className="font-bold text-gray-800 text-sm md:text-base mb-1">Clinical Assessment</h5>
                                <p className="text-gray-700 text-xs md:text-sm">Our specialists evaluate your results alongside your goals and medical history to develop a training program for you.</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-3 md:pl-4 bg-green-50 py-3 pr-3 md:py-4 md:pr-4 rounded-r-lg">
                                <h5 className="font-bold text-gray-800 text-sm md:text-base mb-1">Protocol Development</h5>
                                <p className="text-gray-700 text-xs md:text-sm">Based on your brain map and assessment, we create a personalized training protocol.</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-3 md:pl-4 bg-green-50 py-3 pr-3 md:py-4 md:pr-4 rounded-r-lg">
                                <h5 className="font-bold text-gray-800 text-sm md:text-base mb-1">Regular Training Schedule</h5>
                                <p className="text-gray-700 text-xs md:text-sm">You come to the clinic and do your training sessions as scheduled.</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-3 md:pl-4 bg-green-50 py-3 pr-3 md:py-4 md:pr-4 rounded-r-lg">
                                <h5 className="font-bold text-gray-800 text-sm md:text-base mb-1">Progress Monitoring</h5>
                                <p className="text-gray-700 text-xs md:text-sm">To evaluate progress, our expert clinicians will monitor your progress and keep you updated on your scores.</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'home' && (
                        <div className="space-y-3 md:space-y-4 animate-fadeIn">
                            <div className="border-l-4 border-blue-500 pl-3 md:pl-4 bg-blue-50 py-3 pr-3 md:py-4 md:pr-4 rounded-r-lg">
                                <h5 className="font-bold text-gray-800 text-sm md:text-base mb-1">Brain Mapping (QEEG)</h5>
                                <p className="text-gray-700 text-xs md:text-sm">You visit the clinic initially where we begin with comprehensive brain mapping to identify specific patterns and areas for improvement. It is recommended that you bring a relative or close one with you to observe the process of setting it up.</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-3 md:pl-4 bg-blue-50 py-3 pr-3 md:py-4 md:pr-4 rounded-r-lg">
                                <h5 className="font-bold text-gray-800 text-sm md:text-base mb-1">Clinical Assessment</h5>
                                <p className="text-gray-700 text-xs md:text-sm">On the same day, our specialists evaluate your results alongside your training goals and medical history.</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-3 md:pl-4 bg-blue-50 py-3 pr-3 md:py-4 md:pr-4 rounded-r-lg">
                                <h5 className="font-bold text-gray-800 text-sm md:text-base mb-1">Protocol Development</h5>
                                <p className="text-gray-700 text-xs md:text-sm">Based on your brain map and assessment, we create a personalized training protocol.</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-3 md:pl-4 bg-blue-50 py-3 pr-3 md:py-4 md:pr-4 rounded-r-lg">
                                <h5 className="font-bold text-gray-800 text-sm md:text-base mb-1">Regular Training Schedule</h5>
                                <p className="text-gray-700 text-xs md:text-sm">Once we have thoroughly explained the implementation steps, you can take the home-neurofeedback kit with you and conduct your training sessions at your convenience, as per the schedule aligned by your clinician.</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-3 md:pl-4 bg-blue-50 py-3 pr-3 md:py-4 md:pr-4 rounded-r-lg">
                                <h5 className="font-bold text-gray-800 text-sm md:text-base mb-1">Progress Monitoring</h5>
                                <p className="text-gray-700 text-xs md:text-sm">To evaluate progress, our expert clinicians will regularly monitor your progress and keep you updated on your scores.</p>
                            </div>
                        </div>
                    )}
                </Container>
            </div>

            {/* Section 5: Why Choose NFB */}
            <div className="px-4 py-8 md:py-12 bg-primary-div">
                <Container maxWidth="lg">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
                        Why Choose Neurofeedback Training?
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
                        {whyChooseNfb.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-3 md:p-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
                            >
                                <div className="text-[#EF6623] mb-2">{item.icon}</div>
                                <h5 className="font-bold text-gray-800 text-xs md:text-sm mb-1">{item.title}</h5>
                                <p className="text-gray-600 text-xs">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Section 6: CTA */}
            <div className="px-4 py-8 md:py-12 bg-white text-center">
                <Container maxWidth="md">
                    <h2 className="text-xl md:text-3xl font-bold text-[#EF6623] mb-2 md:mb-3">
                        Ready to Train Your Brain?
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
                        Take the first step toward a calmer, sharper, and more balanced mind—book your NFB consultation today!
                    </p>
                    <RequestAppointment 
                        name="Book Consultation" 
                        customStyle="bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-600 rounded-lg px-6 py-2.5 md:px-8 md:py-3 text-white text-sm md:text-base font-semibold w-full md:w-auto"
                    />
                </Container>
            </div>

            {/* Section 7: FAQs */}
            <div className="px-4 py-8 md:py-12 bg-gray-100">
                <NfbPageFaqs />
            </div>

            {/* Final CTA */}
            <div className="px-4 py-10 md:py-14 bg-white text-center">
                <RequestAppointment 
                    name="Book Consultation" 
                    customStyle="bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-600 rounded-lg px-8 py-3 md:px-10 md:py-4 text-white text-base md:text-lg font-bold w-full md:w-auto"
                />
            </div>
        </div>
    );
};

export default NeurofeedbackPage;
