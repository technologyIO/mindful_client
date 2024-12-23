import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment'
import RequestAppointmentGeneral from '@/app/clinicLocation/[city]/RequestAppointmentGeneral'
import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const TestCom = ({ condition }) => {

    const cleanCondition = condition ? condition?.replace(/%20/g, ' ').replace(/,/g, '') : ""
    const symptomsDynamic = [
        { id: 1, symptom: "Excessive Worrying", description: "Constant and overwhelming worry about various aspects of life.", category: "Anxiety", icons: "Excessive Worrying.png" },
        { id: 2, symptom: "Restlessness", description: "Inability to relax and feeling tense.", category: "Anxiety", icons: "Restlessness.png" },
        { id: 3, symptom: "Fatigue", description: "Persistent tiredness and lack of energy despite adequate rest.", category: "Anxiety", icons: "Fatigue.png" },
        { id: 4, symptom: "Difficulty Concentrating", description: "Trouble focusing, remembering, or making decisions.", category: "Anxiety", icons: "Difficulty Concentrating.png" },
        { id: 5, symptom: "Muscle Tension", description: "Persistent muscle tightness or soreness without physical exertion.", category: "Anxiety", icons: "Muscle Tension.png" },
        { id: 6, symptom: "Sleep Disturbances", description: "Problems falling asleep, staying asleep, or experiencing restful sleep.", category: "Anxiety", icons: "Sleep Disturbances.png" },
        { id: 7, symptom: "Irritability", description: "Easily annoyed or frustrated.", category: "Anxiety", icons: "Irritability.png" },
        { id: 8, symptom: "Gastrointestinal Issues", description: "Digestive problems like stomachaches or diarrhea.", category: "Anxiety", icons: "Gastrointestinal Issues.png" },
        { id: 9, symptom: "Cognitive Impairments", description: "Challenges with memory and concentration.", category: "Anxiety", icons: "Cognitive Impairment.png" },
        { id: 1, symptom: "Persistent Sadness or Emptiness", description: "Ongoing feelings of sadness, hopelessness, or emptiness.", category: "Depression", icons: "Persistent Sadness or Emptiness.png" },
        { id: 2, symptom: "Loss of Interest in Activities", description: "No longer enjoying hobbies or activities that were once pleasurable.", category: "Depression", icons: "Loss of Interest in Activities.png" },
        { id: 3, symptom: "Changes in Appetite or Weight", description: "Significant weight loss or gain, or changes in eating habits.", category: "Depression", icons: "Changes in Appetite or Weight.png" },
        { id: 4, symptom: "Fatigue or Low Energy", description: "Constantly feeling tired or lacking energy despite adequate rest.", category: "Depression", icons: "Fatigue or Low Energy.png" },
        { id: 5, symptom: "Difficulty Concentrating", description: "Trouble focusing, remembering, or making decisions.", category: "Depression", icons: "Difficulty Concentrating.png" },
        { id: 6, symptom: "Feelings of Worthlessness or Guilt", description: "Feeling worthless, excessively guilty, or self-critical.", category: "Depression", icons: "Feelings of Worthlessness or Guilt.png" },
        { id: 7, symptom: "Sleep Disturbances", description: "Problems falling asleep, staying asleep, or experiencing restful sleep.", category: "Depression", icons: "Sleep Disturbances.png" },
        { id: 8, symptom: "Psychomotor Agitation or Retardation", description: "Moving or speaking slowly, or feeling restless and unable to sit still.", category: "Depression", icons: "Psychomotor Agitation or Retardation.png" },
        { id: 9, symptom: "Thoughts of Death or Suicide", description: "Persistent thoughts about death or suicide, planning, or attempting suicide.", category: "Depression", icons: "Thoughts of Death or Suicide.png" },
        { id: 1, symptom: "Persistent Sadness or Emptiness", description: "Ongoing feelings of sadness, hopelessness, or emptiness.", category: "General", icons: "Persistent Sadness or Emptiness.png" },
        { id: 2, symptom: "Excessive Worrying", description: "Constant and overwhelming worry about various aspects of life without reason.", category: "General", icons: "Excessive Worrying.png" },
        { id: 3, symptom: "Loss of Interest in Activities", description: "No longer enjoying hobbies or activities once pleasurable.", category: "General", icons: "Loss of Interest in Activities.png" },
        { id: 4, symptom: "Intrusive Thoughts", description: "Unwanted, persistent thoughts that are difficult to control.", category: "General", icons: "Intrusive Thoughts.png" },
        { id: 5, symptom: "Repetitive Behaviors (Compulsions)", description: "Engaging in repetitive actions to reduce anxiety, such as hand-washing or checking locks.", category: "General", icons: "Repetitive Behaviors.png" },
        { id: 6, symptom: "Panic Attacks", description: "Sudden episodes of intense fear with physical symptoms like heart racing, sweating, shaking.", category: "General", icons: "Panic Attacks.jpg" },
        { id: 7, symptom: "Restlessness", description: "Inability to relax and feeling tense or keyed up.", category: "General", icons: "Restlessness.png" },
        { id: 8, symptom: "Sleep Disturbances", description: "Problems falling asleep, staying asleep, or experiencing restful sleep.", category: "General", icons: "Sleep Disturbances.png" },
        { id: 9, symptom: "Difficulty Concentrating", description: "Trouble focusing, remembering, or making decisions.", category: "General", icons: "Difficulty Concentrating.png" },
        { id: 1, symptom: "Intrusive Thoughts", description: "Unwanted, persistent thoughts that are difficult to control.", category: "OCD", icons: "Intrusive Thoughts.png" },
        { id: 2, symptom: "Repetitive Behaviors (Compulsions)", description: "Engaging in actions to reduce anxiety from obsessions, such as hand-washing or checking locks.", category: "OCD", icons: "Repetitive Behaviors.png" },
        { id: 3, symptom: "Need for Order and Symmetry", description: "Strong desire for things to be arranged in a specific, orderly manner.", category: "OCD", icons: "Need for Order and Symmetry.png" },
        { id: 4, symptom: "Excessive Cleaning or Washing", description: "Frequent hand-washing or cleaning rituals to remove perceived contaminants.", category: "OCD", icons: "Excessive Cleaning or Washing.png" },
        { id: 5, symptom: "Checking Rituals", description: "Repeatedly checking things like locks, lights, or appliances to prevent a feared event.", category: "OCD", icons: "Checking Rituals.png" },
        { id: 6, symptom: "Counting or Repeating", description: "Performing actions a certain number of times to feel better.", category: "OCD", icons: "Counting or Repeating.png" },
        { id: 7, symptom: "Arranging Items", description: "Organizing items until they feel 'just right.'", category: "OCD", icons: "Arranging Items.png" },
        { id: 8, symptom: "Mental Compulsions", description: "Engaging in mental acts like praying or counting to neutralize obsessive thoughts.", category: "OCD", icons: "Mental Compulsions.png" },
        { id: 9, symptom: "Avoidance of Triggers", description: "Avoiding situations that trigger obsessions, leading to limiting behaviors.", category: "OCD", icons: "Avoidance of Triggers.png" },
        { id: 6, symptom: "Clumsiness or Physical Discomfort", description: "Feeling physically awkward or uncomfortable in certain situations.", category: "Social Anxiety", icons: "Clumsiness or Physical Discomfort.png" },
        { id: 7, symptom: "Excessive Self-Monitoring", description: "Constantly checking oneself or behavior to ensure it is acceptable.", category: "Social Anxiety", icons: "Excessive Self-Monitoring.png" },
        { id: 8, symptom: "Difficulty Speaking", description: "Struggling to speak in groups or public settings.", category: "Social Anxiety", icons: "Difficulty Speaking.png" },
        { id: 1, symptom: "Intense Fear of Social Situations", description: "Extreme anxiety in social interactions or performance settings.", category: "Social Anxiety", icons: "Intense Fear of Social Situations.png" },
        { id: 9, symptom: "Avoiding Eye Contact", description: "Avoiding eye contact during interactions to reduce anxiety.", category: "Social Anxiety", icons: "Avoiding Eye Contact.png" },
        { id: 2, symptom: "Avoidance of Social Interactions", description: "Steering clear of social gatherings or interactions to prevent anxiety.", category: "Social Anxiety", icons: "Avoidance of Social Interactions.png" },
        { id: 3, symptom: "Physical Symptoms in Social Settings", description: "Experiencing blushing, sweating, or trembling when interacting with others.", category: "Social Anxiety", icons: "Physical Symptoms in Social Settings.png" },
        { id: 4, symptom: "Self-Consciousness", description: "Being overly concerned about how others perceive you.", category: "Social Anxiety", icons: "Self-Consciousness.png" },
        { id: 5, symptom: "Fear of Being Judged", description: "Worrying about being judged or embarrassed by others.", category: "Social Anxiety", icons: "Fear of Being Judged.png" },
    ]
    //  /assesment/phq9/selfAssesment
    // /assesment/gad7/selfAssesment
    // /assesment/pss10/selfAssesment

    const conditionContent = {
        "depression": {
            link: "/assesment/phq9/selfAssesment?testPage=true",
        },
        "anxiety": {
            link: "/assesment/gad7/selfAssesment?testPage=true",
        },
        "stress": {
            link: "/assesment/pss10/selfAssesment?testPage=true",
        }
    }

    const ShowSymptoms = ({ category }) => {
        const filteredSymptoms = symptomsDynamic?.filter((symptom) => symptom?.category.toLowerCase() === category?.toLowerCase());
        return (
            <>
                {/* Symptoms */}
                <section className=" pt-4">
                    <Container maxWidth="lg">
                        <div className="mx-auto">
                            <h2 className="mb-4 text-center text-2xl md:text-4xl font-bold text-orange-500">
                                Are you experiencing any of the following symptoms?
                            </h2>
                            <p className="mb-4 text-lg md:text-xl text-center text-gray-600">
                                If Yes, you may benefit from talking to someone
                            </p>
                            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 px-4 lg:grid-cols-5">
                                {filteredSymptoms.map((symptom) => (
                                    <div key={symptom.name} className="flex flex-col items-center rounded-lg bg-white p-3 text-center shadow">
                                        <img
                                            src={`/Symptom Icons/${symptom.icons}`}
                                            alt={symptom.symptom}
                                            width={100}
                                            height={100}
                                            className="mb-4 h-[70px] w-full rounded object-contain"
                                            style={{
                                                filter: "invert(46%) sepia(83%) saturate(4000%) hue-rotate(5deg) brightness(105%) contrast(90%)",
                                            }}
                                        />
                                        <span className="text-base md:text-lg text-gray-800 font-semibold">{symptom.symptom}</span>
                                    </div>
                                ))}



                            </div>
                        </div>
                    </Container>
                </section>
            </>
        )
    }
    return (
        <div className=" ">
            {/* Hero Section */}
            <section className="bg-primary-div text-gray-800 py-8">
                <Container maxWidth="lg">
                    <div className="flex items-center flex-col px-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Test For <span className='capitalize '> {condition}</span> </h1>
                        <p className="text-xl mb-8">
                            Take our quick assessment to understand your mental health better.
                        </p>
                        <div className='flex justify-start items-center '>

                            <Link
                                href={conditionContent[condition]?.link}

                                className="inline-block bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300"
                            >
                                Take  <span className='capitalize '> {condition}</span> Test
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>



            {/* Symptoms */}
            {condition && <ShowSymptoms category={cleanCondition} />}
            <div className='flex justify-center pt-6'>
                <div className='flex justify-start items-center '>

                    <Link
                        href={conditionContent[condition]?.link}

                        className="inline-block bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300"
                    >
                        Take  <span className='capitalize '> {condition}</span> Test
                    </Link>
                </div>
            </div>


            <section className='mt-8 py-8 px-4 mb-3 bg-primary-div '>
                <div className='mb-8'>
                    <h1 class="text-[27px] md:text-4xl text-center font-sans font-semibold mb-5">Why Choose <span class="font-bold"> MindfulTMS?</span></h1>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-[70px] items-center justify-center">
                        <div className="flex flex-col justify-center items-center">
                            <img
                                loading="lazy"
                                width="100"
                                height="100"
                                decoding="async"
                                className=" w-[64px] h-[64px] md:w-[80px] md:h-[80px] text-center"
                                src="/home/medical.svg"
                                alt="Personalized care"
                                style={{ color: "transparent", maxWidth: "100%", height: "auto" }}
                            />
                            <p className="text-base md:text-lg font-semibold mt-3">Personalized care</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img
                                loading="lazy"
                                width="100"
                                height="100"
                                decoding="async"
                                className=" w-[64px] h-[64px] md:w-[80px] md:h-[80px]  text-center"
                                src="/home/handshake.svg"
                                alt="Trust"
                                style={{ color: "transparent", maxWidth: "100%", height: "auto" }}
                            />
                            <p className="text-base md:text-lg font-semibold mt-3">Trust</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img
                                loading="lazy"
                                width="100"
                                height="100"
                                decoding="async"
                                className=" w-[64px] h-[64px] md:w-[80px] md:h-[80px]  text-center"
                                src="/home/group.svg"
                                alt="Safe"
                                style={{ color: "transparent", maxWidth: "100%", height: "auto" }}
                            />
                            <p className="text-base md:text-lg font-semibold mt-3">Safe</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img
                                loading="lazy"
                                width="100"
                                height="100"
                                decoding="async"
                                className=" w-[64px] h-[64px] md:w-[80px] md:h-[80px]  text-center"
                                src="/home/heart.svg"
                                alt="Holistic"
                                style={{ color: "transparent", maxWidth: "100%", height: "auto" }}
                            />
                            <p className="text-base md:text-lg font-semibold mt-3">Holistic</p>
                        </div>
                    </div>
                </div>

                <div className=' w-full mt-10'>

                    <div className='flex justify-center'>
                        <RequestAppointmentGeneral>
                            <button
                                className="inline-block bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300"
                            >
                                Book an Appointment
                            </button>
                        </RequestAppointmentGeneral>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default TestCom