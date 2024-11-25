"use client"
import React, { useState } from 'react';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';
import { Container } from '@mui/material';

const TmsPageFaqs = () => {
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
        <div className='flex flex-col justify-center items-center '>
            <Container maxWidth="lg">
            <div className='mb-6'>
                <h1 className='text-3xl font-semibold text-gray-800'>TMS FAQs</h1>
            </div>
            <div className='md:w-full'>
                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <div className="grid grid-cols-1 gap-2 justify-center items-center mb-6  rounded-lg md:w-full">
                    {testsToDisplay.length > 0 ? (
                        testsToDisplay.map((test) => (
                            <div
                                key={test._id}
                                onClick={() => toggleExpand(test._id)}
                                className="bg-white rounded-lg cursor-pointer"
                            >
                                <div className='bg-primary-div p-2 rounded-md flex justify-between items-center'>
                                    <h3 className="text-[14px] md:text-lg text-gray-800 font-bold">
                                        {test.name}
                                    </h3>
                                    {/* Arrow Icon */}
                                   <div>
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-6 h-6 transform transition-transform ${
                                            expanded[test._id] ? 'rotate-0' : 'rotate-180'
                                        }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#26303e"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                   </div>
                                </div>
                                {expanded[test._id] && (
                                    <div className='p-2 ' >
                                        <div dangerouslySetInnerHTML={{ __html: test.detail }} />
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-800">No Question found</h3>
                            <p className="text-gray-600 text-center mb-4">{`We couldn't find any Question matching your search.`}</p>
                            <RequestAppointment
                                name={"Contact Us"}
                                customStyle={" bg-[#EF6623] hover:bg-orange-500 text-lg font-semibold active:bg-orange-700 rounded-lg text-white py-2 px-4"}
                            />
                        </div>
                    )}
                </div>

                {/* <div className="flex justify-center">
                    <RequestAppointment
                        name={"Get in Touch"}
                        customStyle={" bg-[#EF6623] hover:bg-orange-500 text-xl active:bg-orange-700 rounded-lg text-white py-1 px-5"}
                    />
                </div> */}
            </div>
            </Container>
        </div>
    );
};

export default TmsPageFaqs;
const allTest = [
    {
        _id: 0,
        name: "What is TMS?",
        icon: "/iconsNew/therapy.png",
        detail: `
        <div class="text-gray-700 text-sm">
            <p class="mb-4">
                <span class="font-bold">TMS</span> is a non-invasive form of neuromodulation, which stimulates neurons in the prefrontal cortex of your brain by delivering highly focused MRI-strength magnetic pulses.
            </p>
            <p class="mb-4">
                TMS was FDA cleared in 2008 for the treatment of depression and in 2018 for the treatment of OCD in patients who have not benefited or had limited benefit from prior medication.
            </p>
            <p class="mb-4">
                Patients undergo treatment five times weekly for approximately six weeks, although it can vary on an individual basis. Patients remain awake and alert throughout the treatment, rendering TMS non-invasive and virtually free of adverse effects.
            </p>
        </div>`
    },
    {
        _id: 1,
        name: "How does TMS work?",
        icon: "/iconsNew/psychiatry.png",
        detail: `
        <div class="text-gray-700 text-sm">
            <p class="mb-4">
                The process is simple. The nerve cells that are responsible for mood are activated using electromagnetic stimulation using the TMS coil.  These magnetic fields are similar to those produced by a magnetic resonance imaging (MRI) machine. They do not affect the whole brain, as they only reach a few centimeters into the brain directly beneath the treatment coil. This provides an accurately focused and targeted treatment.
            </p>
        </div>`
    },
    {
        _id: 2,
        name: "Will TMS help treatment-resistant depression?",
        icon: "/iconsNew/assessment.png",
        detail: `
        <div class="text-gray-700 text-sm">
            <p class="mb-4">
                Yes. TMS is equally helpful for those with treatment-resistant depression, offering a new approach to manage depression.
            </p>
        </div>`
    },
    {
        _id: 3,
        name: "Is TMS used only for treating depression?",
        icon: "/iconsNew/tms.png",
        detail: `
        <div class="text-gray-700 text-sm">
            <p class="mb-4">
                No. This revolutionary technology is used to treat a variety of diseases and disorders. In addition to Depression, TMS is being used to treat Anxiety, OCD, ADHD, schizophrenia, PTSD, tinnitus, multiple sclerosis, ALS, motor disability after a stroke, Alzheimer’s and Parkinson’s and several other psychological and neurological conditions</p>
        </div>`
    },
    {
        _id: 4,
        name: "Who responds the best to TMS treatment?",
        icon: "/iconsNew/therapy.png",
        detail: `
       <div class="text-gray-700 text-sm space-y-4">
    <p>
        <span class="font-bold">Treatment-Resistant Depression:</span> Ideal for those who haven’t found relief with previous antidepressant medications.
    </p>
    <p>
        <span class="font-bold">Non-Invasive Preference:</span> Perfect for individuals seeking medication-free treatment options.
    </p>
    <p>
        <span class="font-bold">Various Mental Health Conditions:</span> Effective for anxiety, OCD, PTSD, chronic pain, and addiction and several other conditions.
    </p>
    <p>
        <span class="font-bold">Suitable Candidates:</span> Adults without metal implants or seizure disorders.
    </p>
    <p>
        <span class="font-bold">Motivated Individuals:</span> Best for those committed to a consistent treatment schedule, and willing to put in the time to get good results.
    </p>
</div>
`
    },
    {
        _id: 5,
        name: "Does TMS treatment have any side effects?",
        icon: "/iconsNew/tms.png",
        detail: `
        <div class="text-gray-700 text-sm space-y-4">
    <p>
        TMS treatments have been performed with virtually no complications or side effects.
    </p>
    <p>
        The most commonly reported side effect related to treatment was mild to moderate scalp discomfort during treatment sessions. Scalp discomfort occurs less frequently after the first week of treatment.
    </p>
    <p>
        TMS therapy also produces a clicking sound, so earplugs are provided for each treatment.
    </p>
    <p>
        In clinical trials, more than 10,000 TMS treatments demonstrated its safety with no occurrence of seizures. However, there is a small risk of a seizure occurring during treatment, estimated at 1 in 10,000. This risk is no greater than what has been observed with oral antidepressant medications.
    </p>
    <p class="font-bold">
        Note:
    </p>
    <p>
        No side effects such as weight gain, sexual problems, stomach problems, sleepiness, or dry mouth were seen during clinical trials. TMS does not impair memory or the ability to concentrate. Like any treatment option, you and our doctor will discuss the risks and success of TMS therapy and work together to find the most appropriate treatment option for you.
    </p>
</div>
`
    },
    {
        _id: 6,
        name: "Will TMS treatment lead to memory loss?",
        icon: "/iconsNew/therapy.png",
        detail: `
        <div class="text-gray-700 text-sm space-y-4">
    <p>
        No. There has not been any memory loss reported to date with TMS.
    </p>
    <p>
        Memory loss typically occurs with Electroconvulsive Therapy (ECT), while TMS is non-invasive and doesn’t require the usage of sedatives.
    </p>
</div>
`
    },
    {
        _id: 7,
        name: "What is the duration of TMS treatment?",
        icon: "/iconsNew/tms.png",
        detail: `
        <div class="text-gray-700 text-sm">
            <p class="mb-4">
               rTMS treatment lasts for 20-40 minutes a day, 5 days a week for 4-6 weeks 
            </p>
        </div>`
    },
    {
        _id: 8,
        name: "What is the TMS Treatment Process?",
        icon: "/iconsNew/therapy.png",
        detail: `
       <div class="text-gray-700 text-sm space-y-4">
    <p>
        During a TMS treatment session, you will sit comfortably in a reclined treatment chair with your head supported in a relaxed position. The magnetic coil is typically placed on the left front side of your head, targeting an area of the brain known as the Left Dorsolateral Prefrontal Cortex (DLPFC).
    </p>
    <p>
        Here’s what happens during the session:
    </p>
    <p>
        <span class="font-bold">Magnetic Pulses:</span> The treatment coil sends bursts of magnetic pulses through your scalp. These pulses create small electric currents in the targeted area of your brain. You won’t feel these currents, similar to how wireless charging works for your phone.
    </p>
    <p>
        <span class="font-bold">Nerve Activation:</span> These electric currents activate nerve cells in the DLPFC. This activation helps stimulate neural pathways and promotes communication between different brain regions.
    </p>
    <p>
        <span class="font-bold">Neuroplasticity:</span> With repeated treatments, rTMS encourages the brain to reorganize and form new neural connections, a process known as neuroplasticity. This helps normalize brain activity and restore it to its optimal functioning before the onset of your condition.
    </p>
    <p>
        Overall, rTMS is a non-invasive and comfortable procedure designed to support your brain's natural ability to heal and improve your mental well-being.
    </p>
</div>
`
    },
    {
        _id: 9,
        name: "How long will the positive effect of TMS treatment last?",
        icon: "/iconsNew/tms.png",
        detail: `
        <div class="text-gray-700 text-sm space-y-4">
    <p class="font-bold">Immediate to Short-Term Benefits:</p>
    <p>
        <span class="font-bold">Initial Response:</span> Many patients begin to notice improvements in their symptoms within the first few weeks of starting TMS treatment. These early changes can include reduced feelings of depression, anxiety, or other targeted symptoms.
    </p>
    <p>
        <span class="font-bold">End of Treatment Course:</span> By the end of a typical 6-week TMS treatment course, most individuals experience significant symptom relief, with lasting effects that extend several weeks beyond the completion of therapy.
    </p>
    
    <p class="font-bold">Long-Term Benefits:</p>
    <p>
        <span class="font-bold">Sustained Improvement:</span> Studies have shown that the positive effects of TMS can last anywhere from 6 months to a year post-treatment. Approximately 60% of patients maintain their symptom relief for several months after the initial treatment course.
    </p>
    <p>
        <span class="font-bold">Extended Remission:</span> For some individuals, the benefits can extend even longer, especially when combined with other forms of therapy such as cognitive-behavioral therapy (CBT) or medication management.
    </p>
    
    <p class="font-bold">Maintenance Sessions:</p>
    <p>
        <span class="font-bold">Booster Treatments:</span> To sustain the benefits of TMS, some patients may opt for maintenance sessions after completing their initial treatment course. These booster sessions can be scheduled monthly or as needed based on individual response.
    </p>
</div>
`
    },
    {
        _id: 10,
        name: "What are the advantages of TMS treatment over medication?",
        icon: "/iconsNew/therapy.png",
        detail: `
       <div class="text-gray-700 text-sm space-y-4">
    <p>
        While medications are a cornerstone in treating many mental health conditions and can be highly effective for numerous individuals, TMS offers an additional option for those seeking a non-medication-based approach or who have not fully responded to traditional treatments.
    </p>
    <p>
        <span class="font-bold">No Systemic Side Effects:</span> Unlike antidepressants, TMS does not introduce chemicals into your body, eliminating the risk of systemic side effects such as weight gain, fatigue, or gastrointestinal issues.
    </p>
    <p>
        <span class="font-bold">No Risk of Dependency:</span> Unlike some medications, TMS does not carry a risk of dependency or withdrawal symptoms.
    </p>
    <p>
        <span class="font-bold">Natural Approach:</span> TMS utilizes magnetic pulses to stimulate brain activity, aligning with those who prefer a medication-free treatment option.
    </p>
</div>
`
    },
    {
        _id: 11,
        name: "What are the benefits of TMS over Electroconvulsive Therapy (ECT)?",
        icon: "/iconsNew/tms.png",
        detail: `
       <div class="text-gray-700 text-sm space-y-4">
    <p>
        <span class="font-bold">No Anesthesia Required:</span> Unlike ECT, which necessitates general anesthesia, TMS is performed while the patient is fully awake and alert. This eliminates the risks associated with anesthesia and allows for a more comfortable treatment experience.
    </p>
    <p>
        <span class="font-bold">No Need for Medication:</span> TMS does not require the use of sedatives or muscle relaxants, reducing the complexity and preparation involved in the procedure.
    </p>
    <p>
        <span class="font-bold">Cognitive Function Preservation:</span> ECT is often associated with cognitive side effects, including memory loss and confusion. TMS, on the other hand, has a significantly lower risk of cognitive impairment, allowing patients to maintain their daily cognitive functions during and after treatment.
    </p>
    <p>
        <span class="font-bold">Less Physical Discomfort:</span> TMS may cause mild scalp discomfort or headache during treatment sessions, but these side effects are typically transient and far less severe than the side effects associated with ECT.
    </p>
    <p>
        <span class="font-bold">Lower Risk of Physical Complications:</span> ECT carries risks such as cardiovascular complications and requires careful medical supervision. TMS has a much safer profile with fewer physical health risks, making it suitable for a broader range of patients.
    </p>
    <p>
        <span class="font-bold">No Induced Seizures:</span> While ECT deliberately induces seizures to achieve therapeutic effects, TMS does not induce seizures, further enhancing its safety and acceptability.
    </p>
    <p>
        <span class="font-bold">Immediate Return to Activities:</span> After a TMS session, patients can immediately resume their normal activities without the grogginess or disorientation often experienced after ECT treatments.
    </p>
</div>
`
    },
    {
        _id: 12,
        name: "Is TMS safe for those who are currently taking antidepressant medication?",
        icon: "/iconsNew/therapy.png",
        detail: `
       <div class="text-gray-700 text-sm space-y-4">
    <p>
        Combining Transcranial Magnetic Stimulation (TMS) with antidepressant medications is safe. By addressing both the chemical and neural aspects of depression or other psychological conditions, this integrated strategy provides a more holistic pathway to mental wellness.
    </p>
    <p>
        Combining TMS with antidepressant medications is often beneficial in the following situations:
    </p>
    <p>
        <span class="font-bold">Treatment-Resistant Depression:</span> When traditional medications haven't provided sufficient relief.
    </p>
    <p>
        <span class="font-bold">Partial Response to Medications:</span> To address lingering symptoms that medications alone may not fully resolve.
    </p>
    <p>
        <span class="font-bold">Enhancing Treatment Efficacy:</span> For a more comprehensive approach targeting both chemical and neural aspects of depression.
    </p>
    <p>
        <span class="font-bold">Reducing Medication Dosage:</span> To minimize side effects while maintaining therapeutic benefits.
    </p>
    <p>
        <span class="font-bold">Addressing Multiple Symptoms:</span> When dealing with co-occurring conditions like anxiety or OCD.
    </p>
    <p>
        At MindfulTMS, our experienced team is dedicated to creating personalized treatment plans that may include the combination of therapy, TMS, and medication. We prioritize your safety, well-being, and long-term mental health, ensuring you receive comprehensive care tailored to your unique needs.
    </p>
</div>
`
    },
    {
        _id: 13,
        name: "Who should not have TMS treatment?",
        icon: "/iconsNew/tms.png",
        detail: `
       <div class="text-gray-700 text-sm space-y-4">
    <p>
        TMS is not for those with:
    </p>
    <p>
        <span class="font-bold">Individuals with Metal Implants or Devices in the Head or Neck</span><br>
        <span class="font-semibold">Examples:</span> Cochlear implants, deep brain stimulators, metallic buckles or pins from surgical procedures.<br>
        <span class="font-semibold">Reason:</span> Strong magnetic fields used in TMS can interact with metal objects near the treatment area.
    </p>
    <p>
        <span class="font-bold">History of Seizure Disorders</span><br>
        <span class="font-semibold">Details:</span> Individuals with a history of seizures or epilepsy.<br>
        <span class="font-semibold">Reason:</span> Although rare, TMS carries a slight risk of inducing seizures.
    </p>
    <p>
        <span class="font-bold">Active Metallic Implants Like Pacemakers</span><br>
        <span class="font-semibold">Examples:</span> Pacemakers, defibrillators, and other cardiac devices.<br>
        <span class="font-semibold">Reason:</span> Magnetic fields can interfere with the functioning of these life-sustaining devices.
    </p>
    <p>
        <span class="font-bold">Tattoos and Piercings in the Treatment Area</span><br>
        <span class="font-semibold">Details:</span> Metallic elements in facial tattoos or piercings.<br>
        <span class="font-semibold">Reason:</span> Metallic objects can interact with magnetic fields; removal or covering may be necessary.
    </p>
    <p>
        <span class="font-bold">Certain Neurological Conditions</span><br>
        <span class="font-semibold">Examples:</span> Multiple Sclerosis (MS) with lesions in treated areas, active or untreated brain tumors near the stimulation site, recent unstable stroke.<br>
        <span class="font-semibold">Reason:</span> These conditions may increase the risks associated with TMS.
    </p>
    <p>
        <span class="font-bold">Sensitivity to Magnetic Fields</span><br>
        <span class="font-semibold">Details:</span> Known hypersensitivity or adverse reactions to magnetic stimulation.<br>
        <span class="font-semibold">Reason:</span> Individuals may experience dizziness, discomfort, or other negative reactions.
    </p>
</div>
`
    },
    {
        _id: 14,
        name: "Will my insurance cover the TMS treatment?",
        icon: "/iconsNew/therapy.png",
        detail: `
        <div class="text-gray-700 text-sm space-y-4">
    <p>
        TMS is not covered by medical insurance in India for private clinics.
    </p>
    <p>
        Recently, the Government of India has directed the medical insurance companies to cover the treatment of mental illness under health insurance. This step has been taken considering the surge in the number of people who are suffering from depression.
    </p>
    <p>
        Some private insurances already provide coverage for CBT and other therapies at a limited capacity.
    </p>
    <p>
        To learn more, check with your insurance provider, or get in touch with us.
    </p>
</div>
`
    },
    {
        _id: 15,
        name: "Is TMS for me?",
        icon: "/iconsNew/tms.png",
        detail: `
       <div class="text-gray-700 text-sm space-y-4">
    <p>
        Currently, TMS therapy is FDA approved for the indication of Major Depressive Disorder, Obsessive Compulsive Disorder, Chronic Pain, Migraine, and Smoking Addiction. TMS should be strongly considered by patients who have failed to receive satisfactory improvement from prior antidepressant medications or have experienced intolerable side effects or choose to take a non-invasive option without medication.
    </p>
    <p>
        There is increasing evidence for the benefit of TMS in treating other off-label indications. Patients with the additional following conditions may benefit from TMS:
    </p>
    <ul class="list-disc list-inside space-y-1">
        <li>Substance Addiction</li>
        <li>ADHD</li>
        <li>Anxiety</li>
        <li>Bipolar Depression</li>
        <li>Eating Disorders</li>
        <li>Insomnia</li>
        <li>Multiple Sclerosis</li>
        <li>Parkinson’s</li>
        <li>Postpartum Depression</li>
        <li>Post-Stroke Recovery</li>
    </ul>
</div>
`
    },
    {
        _id: 16,
        name: "What are the results of TMS Therapy?",
        icon: "/iconsNew/therapy.png",
        detail: `
       <div class="text-gray-700 text-sm space-y-4">
    <p class="font-bold text-base">Depression Relief</p>
    <p>
        <span class="font-semibold">Response Rates:</span> About 70% of individuals with treatment-resistant depression (TRD) experience significant improvements in their symptoms after completing a TMS therapy course.
    </p>
    <p>
        <span class="font-semibold">Remission Rates:</span> Approximately 40% of patients achieve full remission, meaning their depression symptoms are greatly reduced or no longer present.
    </p>
    
    <p class="font-bold text-base">Anxiety Reduction</p>
    <p>
        <span class="font-semibold">Effectiveness:</span> Studies show that 60% of individuals with anxiety disorders report a noticeable decrease in anxiety symptoms following TMS treatment.
    </p>
    
    <p class="font-bold text-base">Obsessive-Compulsive Disorder (OCD) Improvement</p>
    <p>
        <span class="font-semibold">Symptom Reduction:</span> Around 50% of patients with OCD experience significant improvement in their symptoms after undergoing TMS therapy.
    </p>
    
    <p class="font-bold text-base">Key Outcomes:</p>
    <p>
        <span class="font-semibold">High Success Rates:</span> 70% of patients see significant improvements.
    </p>
    <p>
        <span class="font-semibold">Long-Lasting Effects:</span> Benefits can last from six months to over a year, especially with maintenance sessions.
    </p>
    <p>
        <span class="font-semibold">Improved Quality of Life:</span> Most patients experience better daily functioning and emotional well-being.
    </p>
</div>
`
    },
    {
        _id: 17,
        name: "What is rTMS? How is it different from TMS?",
        icon: "/iconsNew/tms.png",
        detail: `
        <div class="text-gray-700 text-sm space-y-4">
    <p>
        rTMS stands for repetitive Transcranial Magnetic Stimulation, which is a specific type of TMS therapy. Today, most TMS treatments use rTMS.
    </p>
    <p>
        <span class="font-bold">Transcranial Magnetic Stimulation (TMS):</span> A non-invasive procedure that uses magnetic fields to stimulate nerve cells in the brain to improve symptoms of depression and other mental health conditions.
    </p>
    <p>
        <span class="font-bold">Repetitive TMS (rTMS):</span> Involves delivering multiple magnetic pulses in <span class="font-semibold">rapid succession</span> to the targeted brain area.
    </p>
</div>
`
    },
    {
        _id: 18,
        name: "What is DeepTMS? How is it different from rTMS?",
        icon: "/iconsNew/therapy.png",
        detail: `
       <div class="text-gray-700 text-sm space-y-4">
    <p>
        DeepTMS is another type of Transcranial Magnetic Stimulation (TMS) that some clinics promote as reaching deeper parts of the brain for enhanced treatment. However, our repetitive TMS (rTMS) using MagVenture equipment is just as effective without the extra marketing buzz.
    </p>
    <p class="font-bold">Think of it like this:</p>
    <p>
        Imagine two smartphones that both allow you to make calls, send texts, and browse the internet reliably. One phone is called the "Standard Model," and the other is branded as the "SuperSmart." While the "SuperSmart" sounds more advanced, both phones perform the essential functions you need every day.
    </p>
    <p class="font-bold">Key Points to Note:</p>
    <p>
        <span class="font-bold">Same Effectiveness:</span> Our rTMS treatments with MagVenture coils effectively target the key areas of the brain to reduce symptoms of depression and anxiety, just like DeepTMS.
    </p>
    <p>
        <span class="font-bold">Quality and Safety:</span> Both rTMS and DeepTMS use FDA-approved machines, ensuring that you receive safe and consistent treatment without the risks associated with lesser-quality equipment.
    </p>
    <p>
        <span class="font-bold">Cost-Effective:</span> Without the additional branding for "Deep" features, our rTMS remains more affordable while still providing top-notch care.
    </p>
</div>
`
    },
    {
        _id: 19,
        name: "Why is it important to consider TMS with a provider that uses FDA-approved machines?",
        icon: "/iconsNew/tms.png",
        detail: `
        <div class="text-gray-700 text-sm space-y-4">
    <p>
        Choosing a provider that uses FDA-approved TMS machines is crucial for several reasons:
    </p>
    <p>
        <span class="font-bold">Safety and Quality:</span> FDA approval ensures that the TMS device has been rigorously tested for safety and effectiveness. Approved machines are designed to prevent issues like scalp burns and ensure consistent performance.
    </p>
    <p>
        <span class="font-bold">Risk Prevention:</span> Unapproved machines may be poorly designed, leading to potential risks such as <span class="font-semibold">scalp burns, ineffective treatment, or other adverse effects</span> that can compromise your well-being.
    </p>
</div>
`
    },
    {
        _id: 20,
        name: "Why is it important to complete a full TMS treatment plan?",
        icon: "/iconsNew/therapy.png",
        detail: `
        <div class="text-gray-700 text-sm space-y-4">
    <p>
        <span class="font-bold">Maximized Effectiveness:</span> TMS therapy typically involves a series of sessions (often 25-30) to ensure consistent stimulation and optimal therapeutic benefits.
    </p>
    <p>
        <span class="font-bold">Neuroplasticity:</span> Repeated stimulation promotes neuroplasticity—the brain's ability to reorganize and form new neural connections—leading to lasting improvements in mood and cognitive function.
    </p>
    <p>
        <span class="font-bold">Sustained Relief:</span> Completing the full course helps maintain symptom relief and reduces the likelihood of relapse.
    </p>
</div>
`
    },
    {
        _id: 21,
        name: "What happens if I take only 5 TMS sessions?",
        icon: "/iconsNew/tms.png",
        detail: `
        <div class="text-gray-700 text-sm space-y-4">
    <p>
        Undergoing only 5 TMS sessions may not provide the full therapeutic benefits of the treatment:
    </p>
    <p>
        <span class="font-bold">Limited Effectiveness:</span> TMS therapy generally requires multiple sessions (usually 20-30) to achieve significant symptom relief. Five sessions are typically insufficient to induce the necessary neuroplastic changes in the brain that are needed for long-term benefits.
    </p>
    <p>
        <span class="font-bold">Partial Symptom Improvement:</span> You might experience minimal or temporary relief, but the long-term benefits are unlikely to materialize without completing the full treatment course.
    </p>
    <p>
        <span class="font-bold">Increased Risk of Relapse:</span> Incomplete treatment may lead to a higher chance of symptoms returning, as the brain may not have fully responded to the therapy.
    </p>
</div>
`
    },
    {
        _id: 22,
        name: "Is there an age limit for TMS?",
        icon: "/iconsNew/therapy.png",
        detail: `
        <div class="text-gray-700 text-sm space-y-4">
    <p>
        The US FDA has approved TMS for adolescents aged 15 and over for treating depression (MDD). For some conditions, TMS can be given to children aged 12 and over.
    </p>
    <p>
        Transcranial Magnetic Stimulation (TMS) is increasingly used in pediatric neurology and psychiatry and has been showing promise in treating conditions like cerebral palsy, ADHD, autism spectrum disorder (ASD).
    </p>
    <p class="font-bold">Off Label Applications:</p>
    <p>
        <span class="font-bold">Cerebral Palsy (CP):</span> TMS improves motor function, reduces spasms, and helps with speech by enhancing brain plasticity.
    </p>
    <p>
        <span class="font-bold">ADHD:</span> TMS enhances attention and executive function, offering an alternative to traditional treatments.
    </p>
    <p>
        <span class="font-bold">ASD:</span> TMS targets brain regions related to social and sensory processing, potentially improving social interaction and reducing repetitive behaviors.
    </p>
    <p class="font-semibold">
        Talk to a medical professional before considering rTMS for your child.
    </p>
</div>
`
    }
];


