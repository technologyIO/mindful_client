"use client"
import React, { useState } from 'react';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';
import { Container } from '@mui/material';
import TestRequestAppointmentGeneral from '../clinicLocation/[city]/RequestAppointmentGeneral';

const TmsPageFaqs = () => {
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

    const allTest = [
        {
            _id: 0,
            name: "What is rTMS?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-4">
                    <span class="font-bold">rTMS</span> is a non-invasive form of neuromodulation, which stimulates neurons in the prefrontal cortex of your brain by delivering highly focused MRI-strength magnetic pulses.
                </p>
                <p class="mb-4">
                    rTMS was FDA cleared in 2008 for the treatment of depression and in 2018 for the treatment of OCD in patients who have not benefited or had limited benefit from prior medication.
                </p>
                <p class="mb-4">
                    Patients undergo treatment five times weekly for approximately six weeks, although it can vary on an individual basis. Patients remain awake and alert throughout the treatment, rendering rTMS non-invasive and virtually free of adverse effects.
                </p>
            </div>`
        },
        {
            _id: 1,
            name: "How does rTMS work?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-4">
                    The process is simple. The nerve cells that are responsible for mood are activated using electromagnetic stimulation using the rTMS coil.  These magnetic fields are similar to those produced by a magnetic resonance imaging (MRI) machine. They do not affect the whole brain, as they only reach a few centimeters into the brain directly beneath the treatment coil. This provides an accurately focused and targeted treatment.
                </p>
            </div>`
        },
        {
            _id: 46,
            name: "For which conditions does rTMS help?",
            detail: `<div class="text-gray-700 text-sm md:text-lg space-y-6">
      <!-- Psychological Conditions -->
      <div>
        <h2 class="font-semibold text-lg mb-2">Psychological Conditions</h2>
        <ol class="list-decimal pl-6 space-y-1">
          <li>Major Depressive Disorder (MDD)</li>
          <li>Treatment-Resistant Depression</li>
          <li>Obsessive-Compulsive Disorder (OCD)</li>
          <li>Generalized Anxiety Disorder (GAD)</li>
          <li>Post-Traumatic Stress Disorder (PTSD)</li>
          <li>Bipolar Disorder (Depressive Episodes)</li>
          <li>Schizophrenia (Auditory Hallucinations)</li>
          <li>Attention-Deficit/Hyperactivity Disorder (ADHD)</li>
          <li>Social Anxiety Disorder</li>
          <li>Anorexia Nervosa and Other Eating Disorders</li>
          <li>Addiction (Substance Use Disorders)</li>
          <li>Autism Spectrum Disorder (ASD)</li>
        </ol>
      </div>
    
      <!-- Neurological Conditions -->
      <div>
        <h2 class="font-semibold text-lg mb-2">Neurological Conditions</h2>
        <ol class="list-decimal pl-6 space-y-1">
          <li>Migraine with Aura</li>
          <li>Chronic Pain</li>
          <li>Tinnitus</li>
          <li>Parkinson's Disease</li>
          <li>Stroke Rehabilitation</li>
          <li>Alzheimer's Disease and Other Dementias</li>
          <li>Traumatic Brain Injury (TBI)</li>
          <li>Multiple Sclerosis (MS)</li>
          <li>Huntington's Disease</li>
          <li>Tourette's Syndrome</li>
          <li>Restless Legs Syndrome (RLS)</li>
        </ol>
      </div>
    
      <!-- Note -->
      <p class="text-sm md:text-lg italic">
        While some treatments with specific machines are FDA approved, treatments for some conditions are still under investigation/clinical research. However, these have shown positive results.
      </p>
    </div>
    
            `
        },
        {
            _id: 2,
            name: "Will rTMS help treatment-resistant depression?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-4">
                    Yes. rTMS is equally helpful for those with treatment-resistant depression, offering a new approach to manage depression.
                </p>
            </div>`
        },
        {
            _id: 3,
            name: "Is rTMS used only for treating depression?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-4">
                    No. This revolutionary technology is used to treat a variety of diseases and disorders. In addition to Depression, rTMS is being used to treat Anxiety, OCD, ADHD, schizophrenia, PTSD, tinnitus, multiple sclerosis, ALS, motor disability after a stroke, Alzheimer's and Parkinson's and several other psychological and neurological conditions.
                </p>
            </div>`
        },
        {
            _id: 4,
            name: "Who responds the best to rTMS treatment?",
            detail: `
           <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p class="mb-4">
            <span class="font-bold">Treatment-Resistant Depression:</span> Ideal for those who haven't found relief with previous antidepressant medications.
        </p>
        <p class="mb-4">
            <span class="font-bold">Non-Invasive Preference:</span> Perfect for individuals seeking medication-free treatment options.
        </p>
        <p class="mb-4">
            <span class="font-bold">Various Mental Health Conditions:</span> Effective for anxiety, OCD, PTSD, chronic pain, and addiction and several other conditions.
        </p>
        <p class="mb-4">
            <span class="font-bold">Suitable Candidates:</span> Adults without metal implants or seizure disorders.
        </p>
        <p class="mb-4">
            <span class="font-bold">Motivated Individuals:</span> Best for those committed to a consistent treatment schedule, and willing to put in the time to get good results.
        </p>
    </div>
    `
        },
        {
            _id: 5,
            name: "Does rTMS treatment have any side effects?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p class="mb-4">
            rTMS treatments have been performed with virtually no complications or side effects.
        </p>
        <p class="mb-4">
            The most commonly reported side effect related to treatment was mild to moderate scalp discomfort during treatment sessions. Scalp discomfort occurs less frequently after the first week of treatment.
        </p>
        <p class="mb-4">
            rTMS therapy also produces a clicking sound, so earplugs are provided for each treatment.
        </p>
        <p class="mb-4">
            In clinical trials, more than 10,000 rTMS treatments demonstrated its safety with no occurrence of seizures. However, there is a small risk of a seizure occurring during treatment, estimated at 1 in 10,000. This risk is no greater than what has been observed with oral antidepressant medications.
        </p>
        <p class="font-bold mb-4">
            Note:
        </p>
        <p class="mb-4">
            No side effects such as weight gain, sexual problems, stomach problems, sleepiness, or dry mouth were seen during clinical trials. rTMS does not impair memory or the ability to concentrate. Like any treatment option, you and our doctor will discuss the risks and success of rTMS therapy and work together to find the most appropriate treatment option for you.
        </p>
    </div>
    `
        },
        {
            _id: 6,
            name: "Will rTMS treatment lead to memory loss?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p class="mb-4">
            No. There has not been any memory loss reported to date with rTMS.
        </p>
        <p class="mb-4">
            Memory loss typically occurs with Electroconvulsive Therapy (ECT), while rTMS is non-invasive and doesn't require the usage of sedatives.
        </p>
    </div>
    `
        },
        {
            _id: 7,
            name: "What is the duration of rTMS treatment?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg">
                <p class="mb-4">
                   rTMS treatment lasts for 20-40 minutes a day, 5 days a week for 4-6 weeks 
                </p>
            </div>`
        },
        {
            _id: 8,
            name: "What is the rTMS Treatment Process?",
            detail: `
           <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p class="mb-4">
            During a rTMS treatment session, you will sit comfortably in a reclined treatment chair with your head supported in a relaxed position. The magnetic coil is typically placed on the left front side of your head, targeting an area of the brain known as the Left Dorsolateral Prefrontal Cortex (DLPFC).
        </p>
        <p class="mb-4">
            Here's what happens during the session:
        </p>
        <p class="mb-4">
            <span class="font-bold">Magnetic Pulses:</span> The treatment coil sends bursts of magnetic pulses through your scalp. These pulses create small electric currents in the targeted area of your brain. You won't feel these currents, similar to how wireless charging works for your phone.
        </p>
        <p class="mb-4">
            <span class="font-bold">Nerve Activation:</span> These electric currents activate nerve cells in the DLPFC. This activation helps stimulate neural pathways and promotes communication between different brain regions.
        </p>
        <p class="mb-4">
            <span class="font-bold">Neuroplasticity:</span> With repeated treatments, rTMS encourages the brain to reorganize and form new neural connections, a process known as neuroplasticity. This helps normalize brain activity and restore it to its optimal functioning before the onset of your condition.
        </p>
        <p class="mb-4">
            Overall, rTMS is a non-invasive and comfortable procedure designed to support your brain's natural ability to heal and improve your mental well-being.
        </p>
    </div>
    `
        },
        {
            _id: 9,
            name: "How long will the positive effect of rTMS treatment last?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p class="font-bold mb-4">Immediate to Short-Term Benefits:</p>
        <p class="mb-4">
            <span class="font-bold">Initial Response:</span> Many patients begin to notice improvements in their symptoms within the first few weeks of starting rTMS treatment. These early changes can include reduced feelings of depression, anxiety, or other targeted symptoms.
        </p>
        <p class="mb-4">
            <span class="font-bold">End of Treatment Course:</span> By the end of a typical 6-week rTMS treatment course, most individuals experience significant symptom relief, with lasting effects that extend several weeks beyond the completion of therapy.
        </p>
        
        <p class="font-bold mb-4">Long-Term Benefits:</p>
        <p class="mb-4">
            <span class="font-bold">Sustained Improvement:</span> Studies have shown that the positive effects of rTMS can last anywhere from 6 months to a year post-treatment. Approximately 60% of patients maintain their symptom relief for several months after the initial treatment course.
        </p>
        <p class="mb-4">
            <span class="font-bold">Extended Remission:</span> For some individuals, the benefits can extend even longer, especially when combined with other forms of therapy such as cognitive-behavioral therapy (CBT) or medication management.
        </p>
        
        <p class="font-bold mb-4">Maintenance Sessions:</p>
        <p class="mb-4">
            <span class="font-bold">Booster Treatments:</span> To sustain the benefits of rTMS, some patients may opt for maintenance sessions after completing their initial treatment course. These booster sessions can be scheduled monthly or as needed based on individual response.
        </p>
    </div>
    `
        },
        {
            _id: 10,
            name: "What are the advantages of rTMS treatment over medication?",
            detail: `
           <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p>
            While medications are a cornerstone in treating many mental health conditions and can be highly effective for numerous individuals, rTMS offers an additional option for those seeking a non-medication-based approach or who have not fully responded to traditional treatments.
        </p>
        <p>
            <span class="font-bold">No Systemic Side Effects:</span> Unlike antidepressants, rTMS does not introduce chemicals into your body, eliminating the risk of systemic side effects such as weight gain, fatigue, or gastrointestinal issues.
        </p>
        <p>
            <span class="font-bold">No Risk of Dependency:</span> Unlike some medications, rTMS does not carry a risk of dependency or withdrawal symptoms.
        </p>
        <p>
            <span class="font-bold">Natural Approach:</span> rTMS utilizes magnetic pulses to stimulate brain activity, aligning with those who prefer a medication-free treatment option.
        </p>
    </div>
    `
        },
        {
            _id: 11,
            name: "What are the benefits of rTMS over Electroconvulsive Therapy (ECT)?",
            detail: `
           <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p>
            <span class="font-bold">No Anesthesia Required:</span> Unlike ECT, which necessitates general anesthesia, rTMS is performed while the patient is fully awake and alert. This eliminates the risks associated with anesthesia and allows for a more comfortable treatment experience.
        </p>
        <p>
            <span class="font-bold">No Need for Medication:</span> rTMS does not require the use of sedatives or muscle relaxants, reducing the complexity and preparation involved in the procedure.
        </p>
        <p>
            <span class="font-bold">Cognitive Function Preservation:</span> ECT is often associated with cognitive side effects, including memory loss and confusion. rTMS, on the other hand, has a significantly lower risk of cognitive impairment, allowing patients to maintain their daily cognitive functions during and after treatment.
        </p>
        <p>
            <span class="font-bold">Less Physical Discomfort:</span> rTMS may cause mild scalp discomfort or headache during treatment sessions, but these side effects are typically transient and far less severe than the side effects associated with ECT.
        </p>
        <p>
            <span class="font-bold">Lower Risk of Physical Complications:</span> ECT carries risks such as cardiovascular complications and requires careful medical supervision. rTMS has a much safer profile with fewer physical health risks, making it suitable for a broader range of patients.
        </p>
        <p>
            <span class="font-bold">No Induced Seizures:</span> While ECT deliberately induces seizures to achieve therapeutic effects, rTMS does not induce seizures, further enhancing its safety and acceptability.
        </p>
        <p>
            <span class="font-bold">Immediate Return to Activities:</span> After a rTMS session, patients can immediately resume their normal activities without the grogginess or disorientation often experienced after ECT treatments.
        </p>
    </div>
    `
        },
        {
            _id: 12,
            name: "Is rTMS safe for those who are currently taking antidepressant medication?",
            detail: `
           <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p>
            Combining Transcranial Magnetic Stimulation (rTMS) with antidepressant medications is safe. By addressing both the chemical and neural aspects of depression or other psychological conditions, this integrated strategy provides a more holistic pathway to mental wellness.
        </p>
        <p>
            Combining rTMS with antidepressant medications is often beneficial in the following situations:
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
            At MindfulTMS, our experienced team is dedicated to creating personalized treatment plans that may include the combination of therapy, rTMS, and medication. We prioritize your safety, well-being, and long-term mental health, ensuring you receive comprehensive care tailored to your unique needs.
        </p>
    </div>
    `
        },
        {
            _id: 13,
            name: "Who should not have rTMS treatment?",
            detail: `
           <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p>
            rTMS is not for those with:
        </p>
        <p>
            <span class="font-bold">Individuals with Metal Implants or Devices in the Head or Neck</span><br>
            <span class="font-semibold">Examples:</span> Cochlear implants, deep brain stimulators, metallic buckles or pins from surgical procedures.<br>
            <span class="font-semibold">Reason:</span> Strong magnetic fields used in rTMS can interact with metal objects near the treatment area.
        </p>
        <p>
            <span class="font-bold">History of Seizure Disorders</span><br>
            <span class="font-semibold">Details:</span> Individuals with a history of seizures or epilepsy.<br>
            <span class="font-semibold">Reason:</span> Although rare, rTMS carries a slight risk of inducing seizures.
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
            <span class="font-semibold">Reason:</span> These conditions may increase the risks associated with rTMS.
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
            name: "Will my insurance cover the rTMS treatment?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p>
            rTMS is not covered by medical insurance in India for private clinics.
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
            name: "Is rTMS for me?",
            detail: `
           <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p>
            Currently, rTMS therapy is FDA approved for the indication of Major Depressive Disorder, Obsessive Compulsive Disorder, Chronic Pain, Migraine, and Smoking Addiction. rTMS should be strongly considered by patients who have failed to receive satisfactory improvement from prior antidepressant medications or have experienced intolerable side effects or choose to take a non-invasive option without medication.
        </p>
        <p>
            There is increasing evidence for the benefit of rTMS in treating other off-label indications. Patients with the additional following conditions may benefit from rTMS:
        </p>
        <ul class="list-disc list-inside space-y-1">
            <li>Substance Addiction</li>
            <li>ADHD</li>
            <li>Anxiety</li>
            <li>Bipolar Depression</li>
            <li>Eating Disorders</li>
            <li>Insomnia</li>
            <li>Multiple Sclerosis</li>
            <li>Parkinson's</li>
            <li>Postpartum Depression</li>
            <li>Post-Stroke Recovery</li>
        </ul>
    </div>
    `
        },
        {
            _id: 16,
            name: "What are the results of rTMS Therapy?",
            detail: `
           <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p class="font-bold text-base">Depression Relief</p>
        <p>
            <span class="font-semibold">Response Rates:</span> About 70% of individuals with treatment-resistant depression (TRD) experience significant improvements in their symptoms after completing a rTMS therapy course.
        </p>
        <p>
            <span class="font-semibold">Remission Rates:</span> Approximately 40% of patients achieve full remission, meaning their depression symptoms are greatly reduced or no longer present.
        </p>
        
        <p class="font-bold text-base">Anxiety Reduction</p>
        <p>
            <span class="font-semibold">Effectiveness:</span> Studies show that 60% of individuals with anxiety disorders report a noticeable decrease in anxiety symptoms following rTMS treatment.
        </p>
        
        <p class="font-bold text-base">Obsessive-Compulsive Disorder (OCD) Improvement</p>
        <p>
            <span class="font-semibold">Symptom Reduction:</span> Around 50% of patients with OCD experience significant improvement in their symptoms after undergoing rTMS therapy.
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
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
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
            detail: `
           <div class="text-gray-700 text-sm md:text-lg space-y-4">
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
            name: "Why is it important to consider rTMS with a provider that uses FDA-approved machines?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p>
            Choosing a provider that uses FDA-approved rTMS machines is crucial for several reasons:
        </p>
        <p>
            <span class="font-bold">Safety and Quality:</span> FDA approval ensures that the rTMS device has been rigorously tested for safety and effectiveness. Approved machines are designed to prevent issues like scalp burns and ensure consistent performance.
        </p>
        <p>
            <span class="font-bold">Risk Prevention:</span> Unapproved machines may be poorly designed, leading to potential risks such as <span class="font-semibold">scalp burns, ineffective treatment, or other adverse effects</span> that can compromise your well-being.
        </p>
    </div>
    `
        },
        {
            _id: 20,
            name: "Why is it important to complete a full rTMS treatment plan?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p>
            <span class="font-bold">Maximized Effectiveness:</span> rTMS therapy typically involves a series of sessions (often 25-30) to ensure consistent stimulation and optimal therapeutic benefits.
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
            name: "What happens if I take only 5 rTMS sessions?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p>
            Undergoing only 5 rTMS sessions may not provide the full therapeutic benefits of the treatment:
        </p>
        <p>
            <span class="font-bold">Limited Effectiveness:</span> rTMS therapy generally requires multiple sessions (usually 20-30) to achieve significant symptom relief. Five sessions are typically insufficient to induce the necessary neuroplastic changes in the brain that are needed for long-term benefits.
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
            name: "Is there an age limit for rTMS?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
        <p>
            The US FDA has approved rTMS for adolescents aged 15 and over for treating depression (MDD). For some conditions, rTMS can be given to children aged 12 and over.
        </p>
        <p>
            Transcranial Magnetic Stimulation (TMS) is increasingly used in pediatric neurology and psychiatry and has been showing promise in treating conditions like cerebral palsy, ADHD, autism spectrum disorder (ASD).
        </p>
        <p class="font-bold">Off Label Applications:</p>
        <p>
            <span class="font-bold">Cerebral Palsy (CP):</span> rTMS improves motor function, reduces spasms, and helps with speech by enhancing brain plasticity.
        </p>
        <p>
            <span class="font-bold">ADHD:</span> rTMS enhances attention and executive function, offering an alternative to traditional treatments.
        </p>
        <p>
            <span class="font-bold">ASD:</span> rTMS targets brain regions related to social and sensory processing, potentially improving social interaction and reducing repetitive behaviors.
        </p>
        <p class="font-semibold">
            Talk to a medical professional before considering rTMS for your child.
        </p>
    </div>
    `
        },
        {
            _id: 23,
            name: "Does rTMS help with Major Depressive Disorder (MDD)?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS is an effective treatment for Major Depressive Disorder (MDD), especially in individuals who have not responded to traditional antidepressant medications. Clinical studies report response rates of approximately 50-60%, with remission rates around 30-40%.
                </p>
            </div>
            `
        },
        {
            _id: 24,
            name: "Does rTMS help with Treatment-Resistant Depression?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS is particularly beneficial for treatment-resistant depression, offering relief to patients who have not found success with standard therapies. Approximately 50-60% of patients experience significant symptom improvement.
                </p>
            </div>
            `
        },
        {
            _id: 25,
            name: "Does rTMS help with Obsessive-Compulsive Disorder (OCD)?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS has been shown to reduce the severity of obsessive-compulsive symptoms by targeting brain regions involved in habit formation and impulse control. Clinical trials indicate symptom relief in 30-40% of patients.
                </p>
            </div>
            `
        },
        {
            _id: 26,
            name: "Does rTMS help with Generalized Anxiety Disorder (GAD)?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, emerging research suggests that rTMS can alleviate symptoms of Generalized Anxiety Disorder (GAD) by modulating neural circuits associated with stress responses. Around 40-50% of patients report symptom improvement.
                </p>
            </div>
            `
        },
        {
            _id: 27,
            name: "Does rTMS help with PTSD?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    rTMS may help reduce PTSD symptoms by targeting brain areas involved in fear and memory processing. Approximately 35-45% of patients experience a reduction in intrusive thoughts and hyperarousal symptoms.
                </p>
            </div>
            `
        },
        {
            _id: 28,
            name: "Does rTMS help with Bipolar Disorder (Depressive Episodes)?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS can be effective in treating depressive episodes in individuals with Bipolar Disorder by enhancing mood-regulating brain activity. About 40-50% of patients experience symptom improvement.
                </p>
            </div>
            `
        },
        {
            _id: 29,
            name: "Does rTMS help with Schizophrenia (Auditory Hallucinations)?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS has been shown to reduce auditory hallucinations in schizophrenia by targeting the temporoparietal cortex. Approximately 30-40% of patients report a significant decrease in hallucination frequency.
                </p>
            </div>
            `
        },
        {
            _id: 30,
            name: "Does rTMS help with Attention-Deficit/Hyperactivity Disorder (ADHD)?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, emerging studies suggest that rTMS may improve attention and reduce hyperactivity symptoms in individuals with ADHD. Around 35-45% of patients experience noticeable improvements.
                </p>
            </div>
            `
        },
        {
            _id: 31,
            name: "Does rTMS help with Social Anxiety Disorder?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS may alleviate symptoms of Social Anxiety Disorder by targeting brain regions involved in fear and social processing. Initial studies have shown that approximately 30-40% of individuals experience a reduction in anxiety symptoms following rTMS treatment.
                </p>
            </div>
            `
        },
        {
            _id: 32,
            name: "Does rTMS help with Anorexia Nervosa and Other Eating Disorders?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, preliminary research indicates that rTMS can help reduce obsessive thoughts and improve mood in individuals with Anorexia Nervosa and other eating disorders by modulating neural circuits related to impulse control and body image. Response rates are promising but currently vary, with about 25-35% of patients showing significant improvement.
                </p>
            </div>
            `
        },
        {
            _id: 33,
            name: "Does rTMS help with Addiction (Substance Use Disorders)?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS has been explored as a treatment for various substance use disorders by targeting brain regions associated with cravings and impulse control. Studies report that roughly 30-40% of patients experience reduced cravings and improved abstinence rates following rTMS therapy.
                </p>
            </div>
            `
        },
        {
            _id: 34,
            name: "Does rTMS help with Autism Spectrum Disorder (ASD)?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, preliminary studies suggest that rTMS may improve social, cognitive, and behavioral symptoms in individuals with Autism Spectrum Disorder (ASD) by enhancing neural connectivity and plasticity. However, evidence is still limited, with response rates around 20-30%, and further research is necessary.
                </p>
            </div>
            `
        },
        {
            _id: 35,
            name: "Does rTMS help with Migraine with Aura?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS can help reduce the frequency and intensity of migraine attacks with aura by targeting the occipital cortex to interrupt migraine pathways. Clinical trials have shown that up to 58% of patients experience relief from migraine symptoms following rTMS treatment.
                </p>
            </div>
            `
        },
        {
            _id: 36,
            name: "Does rTMS help with Chronic Pain?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS is used to manage various chronic pain conditions, including fibromyalgia and neuropathic pain, by modulating pain-processing brain regions. Efficacy varies by condition, with approximately 30-50% of patients reporting significant pain relief. Outcomes can depend on the specific pain disorder and rTMS protocol used.
                </p>
            </div>
            `
        },
        {
            _id: 37,
            name: "Does rTMS help with Tinnitus?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS has been investigated as a treatment for tinnitus by targeting the auditory cortex to reduce the perception of ringing in the ears. Studies show that around 25-35% of tinnitus patients experience a noticeable decrease in symptoms following rTMS therapy.
                </p>
            </div>
            `
        },
        {
            _id: 38,
            name: "Does rTMS help with Parkinson's Disease?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, preliminary research suggests that rTMS may improve motor symptoms and cognitive functions in Parkinson's Disease by stimulating motor and prefrontal regions. Response rates vary, with approximately 30-40% of patients experiencing improvement.
                </p>
            </div>
            `
        },
        {
            _id: 39,
            name: "Does rTMS help with Stroke Rehabilitation?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS is used in stroke rehabilitation to enhance neuroplasticity and improve motor and cognitive recovery by stimulating affected brain areas. Clinical studies report that about 35-45% of stroke patients show significant functional improvements following rTMS therapy.
                </p>
            </div>
            `
        },
        {
            _id: 40,
            name: "Does rTMS help with Alzheimer's Disease and Other Dementias?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, early research explores rTMS for enhancing cognitive functions and slowing cognitive decline in Alzheimer's Disease and other dementias by targeting memory-related brain regions. Preliminary studies indicate that up to 30% of patients may experience cognitive improvements, though evidence remains limited and more research is needed.
                </p>
            </div>
            `
        },
        {
            _id: 41,
            name: "Does rTMS help with Traumatic Brain Injury (TBI)?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS is being investigated for improving cognitive and motor functions post-Traumatic Brain Injury (TBI) by promoting neural plasticity. Initial studies suggest that approximately 30-40% of TBI patients benefit from enhanced cognitive performance and motor recovery following rTMS treatment.
                </p>
            </div>
            `
        },
        {
            _id: 42,
            name: "Does rTMS help with Multiple Sclerosis (MS)?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS is explored as a treatment for managing symptoms of Multiple Sclerosis (MS), such as fatigue, pain, and spasticity, by modulating neural activity in affected brain regions. Response rates vary, with about 25-40% of MS patients experiencing symptom relief from rTMS therapy.
                </p>
            </div>
            `
        },
        {
            _id: 43,
            name: "Does rTMS help with Huntington's Disease?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, investigational studies suggest that rTMS may help manage motor symptoms and improve cognitive function in Huntington's Disease by stimulating relevant brain areas. Early research indicates that around 20-30% of patients may experience symptom improvements, though more comprehensive trials are needed.
                </p>
            </div>
            `
        },
        {
            _id: 44,
            name: "Does rTMS help with Tourette's Syndrome?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, rTMS has shown potential in reducing the frequency and severity of tics in individuals with Tourette's Syndrome by targeting motor and prefrontal regions. Studies report that approximately 30-40% of patients experience a decrease in tic symptoms following rTMS treatment.
                </p>
            </div>
            `
        },
        {
            _id: 45,
            name: "Does rTMS help with Restless Legs Syndrome (RLS)?",
            detail: `
            <div class="text-gray-700 text-sm md:text-lg space-y-4">
                <p>
                    Yes, limited studies suggest that rTMS may alleviate symptoms of Restless Legs Syndrome (RLS) by stimulating sensory and motor pathways in the brain. Preliminary findings indicate that around 25-35% of RLS patients experience symptom relief, though further research is necessary to confirm efficacy.
                </p>
            </div>
            `
        }
    ];

    // Helper function to strip HTML tags for schema
    const stripHtml = (html) => {
        return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    };

    // Generate FAQ Schema for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": allTest.map(faq => ({
            "@type": "Question",
            "name": faq.name,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": stripHtml(faq.detail)
            }
        }))
    };

    const filteredTests = allTest.filter((test) =>
        test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stripHtml(test.detail).toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* Add FAQ Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className='flex flex-col justify-center items-center'>
                <Container maxWidth="lg">
                    <div className='mb-6'>
                        <h1 className='text-3xl md:text-5xl font-extrabold text-gray-700'>FAQs</h1>
                    </div>
                    <div className='md:w-full'>
                        {/* Search Bar */}
                        <div className="mb-6">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    className="w-full pr-10 pl-4 py-2 md:py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Search FAQs..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    aria-label="Search frequently asked questions"
                                />
                                <div className="absolute right-3">
                                    <svg 
                                        className="w-5 h-5 text-gray-400" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Results */}
                        <div className="grid grid-cols-1 gap-5 md:gap-6 justify-center items-center mb-6 rounded-lg md:w-full">
                            {filteredTests.length > 0 ? (
                                filteredTests.map((test) => (
                                    <div
                                        key={test._id}
                                        className={`bg-white shadow-xl rounded-lg md:py-3 md:px-3 ${
                                            expanded[test._id] ? 'border-2 border-red-400' : 'border border-gray-200'
                                        } transition-all hover:shadow-2xl`}
                                        itemScope
                                        itemProp="mainEntity"
                                        itemType="https://schema.org/Question"
                                    >
                                        <button
                                            onClick={() => toggleExpand(test._id)}
                                            className='bg-white p-2 rounded-md flex justify-between items-center w-full text-left'
                                            aria-expanded={expanded[test._id]}
                                            aria-controls={`faq-answer-${test._id}`}
                                            id={`faq-question-${test._id}`}
                                        >
                                            <h3 
                                                className={`text-[14px] md:text-xl font-bold md:font-semibold ${
                                                    expanded[test._id] ? 'text-red-500' : 'text-gray-700'
                                                }`}
                                                itemProp="name"
                                            >
                                                {test.name}
                                            </h3>

                                            <div>
                                                <svg 
                                                    className={`w-6 h-6 transform transition-transform ${
                                                        expanded[test._id] ? 'rotate-180' : 'rotate-0'
                                                    }`} 
                                                    fill="#ff0000" 
                                                    viewBox="0 0 512 512"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M0,0v512h512V0H0z M420.416,207.083L271.083,356.416c-4.16,4.16-9.621,6.251-15.083,6.251 c-5.462,0-10.923-2.091-15.083-6.251L91.584,207.083c-8.341-8.341-8.341-21.824,0-30.165c8.341-8.341,21.824-8.341,30.165,0 L256,311.168l134.251-134.251c8.341-8.341,21.824-8.341,30.165,0C428.757,185.259,428.757,198.741,420.416,207.083z"></path>
                                                </svg>
                                            </div>
                                        </button>
                                        
                                        <div
                                            id={`faq-answer-${test._id}`}
                                            role="region"
                                            aria-labelledby={`faq-question-${test._id}`}
                                            className={`p-2 ${!expanded[test._id] ? 'hidden' : ''}`}
                                            itemScope
                                            itemProp="acceptedAnswer"
                                            itemType="https://schema.org/Answer"
                                        >
                                            <div itemProp="text" dangerouslySetInnerHTML={{ __html: test.detail }} />
                                            <div className='flex justify-center mt-4'>
                                                <div onClick={(e) => e.stopPropagation()}>
                                                    <TestRequestAppointmentGeneral>
                                                        <div className="flex justify-center items-center gap-2 text-xs md:text-sm text-orange-600 border bg-orange-100 shadow-md hover:shadow-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-semibold transition-all">
                                                            Book an rTMS Consultation
                                                        </div>
                                                    </TestRequestAppointmentGeneral>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 md:p-6">
                                    <h3 className="text-base md:text-lg font-semibold text-gray-800">No Question found</h3>
                                    <p className="text-gray-600 text-center mb-4 text-sm md:text-base">
                                        We couldn't find any Question matching your search.
                                    </p>
                                    <RequestAppointment
                                        name="Contact Us"
                                        customStyle="bg-[#EF6623] hover:bg-orange-500 text-sm md:text-lg font-semibold active:bg-orange-700 rounded-lg text-white py-2 px-4"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default TmsPageFaqs;
