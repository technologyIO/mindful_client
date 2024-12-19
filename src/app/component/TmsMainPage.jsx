import { Container } from '@mui/material';
import React from 'react';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';
import TmsPageFaqs from './TmsPageFaqs';
import Image from 'next/image';

const TmsMainPage = () => {
    const fourConditions = [
        {
            _id: 2,
            name: "Depression"
        },
        {
            _id: 3,
            name: "OCD"
        },
        {
            _id: 4,
            name: "Migraines"
        },
        {
            _id: 5,
            name: "Chronic pain"
        },
        {
            _id: 1,
            name: "Smoking Addiction"
        },
    ];

    const allConditions = [
        {
            _id: 6,
            name: "Addictions"
        },
        {
            _id: 7,
            name: "Anxiety"
        },
        {
            _id: 8,
            name: "Alzheimer’s disease"
        },
        {
            _id: 9,
            name: "Bipolar disorder"
        },
        {
            _id: 11,
            name: "Eating disorders"
        },
        {
            _id: 12,
            name: "Essential tremor"
        },
        {
            _id: 13,
            name: "Fibromyalgia"
        },
        {
            _id: 14,
            name: "Parkinson’s disease"
        },
        {
            _id: 16,
            name: "Schizophrenia"
        },
        {
            _id: 17,
            name: "Stroke complications"
        },
        {
            _id: 18,
            name: "Tinnitus and auditory hallucinations"
        },
        {
            _id: 19,
            name: "Traumatic brain injury"
        },
        {
            _id: 10,
            name: "Borderline personality disorder (BPD)"
        },
        {
            _id: 15,
            name: "Post-traumatic stress disorder (PTSD)"
        },
    ];


    const MobileView = () => {
        return (
            <>
                <div className="min-h-screen">
                    <div className="">
                        <div>
                            <Image alt="img"  width={500} height={500}  className='w-full' src='https://mindfultms1.s3.us-east-1.amazonaws.com/1733381466442-mindfultms1.webp' />
                        </div>
                        {/* TMS Introduction Section */}
                        <div className=" p-6 lg:p-10 ">
                            <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                                {`Repetitive Transcranial Magnetic Stimulation (rTMS)`}
                            </h3>
                            <p className='text-gray-600 text-center'>Repetitive Transcranial Magnetic Stimulation (rTMS) is a non-invasive and safe treatment for depression, OCD, anxiety, chronic pain and various other psychological and neurological conditions at MindfulTMS. We exclusively offer rTMS as our primary modality for treatment, ensuring you receive the most advanced and tailored care available.  </p>
                            <div className="py-5 md:h-[360px]">
                                <Image alt="img"  width={500} height={500}  src="https://ik.imagekit.io/mwpcmpi5v/rTMS%20Images/tms4.png?updatedAt=1734526214526" className="object-cover h-full" />
                            </div>
                            <p className="text-gray-700 text-md text-center mb-2">
                                {`rTMS uses magnetic pulses to increase or inhibit activity of specific areas of the brain that are not functioning normally.  `}

                            </p>
                            <p className="text-gray-700 text-md text-center mb-4">
                                {`For example, in the case of depression, the brain activity is decreased. With targeted rTMS, the activity in these areas increases.  `}

                            </p>
                            <div className="pt-5 md:h-[360px]">
                                <Image alt="img"  width={500} height={500}  src="https://ik.imagekit.io/mwpcmpi5v/tms5a.png?updatedAt=1734588069673" className="object-cover h-full" />
                            </div>
                        </div>

                        {/* Conditions Section */}
                        <div className="bg-primary-div pt-10 pb-10 px-4 ">
                            {/* FDA Approved Conditions */}
                            <div className='mb-10'>
                                <h3 className="text-3xl font-bold text-center text-gray-800 mb-4 leading-tight">
                                    {`rTMS has been effective in treating`}
                                </h3>
                                <div className="flex flex-wrap justify-center gap-2 ">
                                    {fourConditions.map((condition) => (
                                        <div
                                            key={condition.name}
                                            className="flex items-center  bg-green-100  text-green-700 px-3 py-1.5 rounded-full "
                                        >
                                            <span className='font-semibold'>{condition.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Off-label Conditions */}
                            <div>
                                <h3 className="text-xl font-medium text-center text-gray-800 mb-4 leading-tight">
                                    {``}
                                </h3>
                                <div className="flex flex-wrap justify-center gap-2 ">
                                    {allConditions.map((condition) => (
                                        <div
                                            key={condition.name}
                                            className="flex items-center  bg-green-100 text-sm text-green-700 px-3 py-1.5 rounded-full "
                                        >
                                            <span className='font-semibold'>{condition.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Book Consultation Button */}
                            <div className='flex justify-center mt-5'>
                                <RequestAppointment name={"Book Consultation"} customStyle={"bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold"} />
                            </div>
                        </div>
                        {/* Is TMS for me Section */}
                        <div className="bg-white   px-4 py-8 lg:p-10 ">
                            <h3 className="text-3xl text-center mb-6 font-bold text-[#f6881f] sm:text-xl">
                                {`Is rTMS for me?`}
                            </h3>
                            <p className="text-start  text-gray-700 mb-5">
                                Consider rTMS if you
                            </p>
                            <ul className=" list-disc text-gray-700 text-md px-5">
                                <li className='mb-5'>
                                    <strong>{`Have a Diagnosis:`}</strong> {`You have a diagnosis of major depressive disorder, anxiety disorders, OCD, or PTSD.`}
                                </li>
                                <li className='mb-5'>
                                    <strong>{`Are concerned about side effects of taking medication:`}</strong>{` You don't want to take medication.`}
                                </li>
                                <li className='mb-5'>
                                    <strong>{`Tried Medications:`}</strong> {` You have tried multiple medications without satisfactory results. `}
                                </li>
                                <li className='mb-5'>
                                    <strong>{`Prefer Non-Invasive Options:`}</strong> {`You prefer a non-invasive treatment option with potentially fewer side effects. `}
                                </li>
                                <li className='mb-5'>
                                    <strong>{`Open to Innovative Methods:`}</strong> {` You are open to innovative treatment methods. `}
                                </li>
                                <li className='mb-5'>
                                    <strong>{`Complement Current Treatment`}</strong> {` You are looking to supplement rTMS to your current therapy and/or medication treatment plan  `}
                                </li>
                            </ul>


                            <div className='flex justify-center mt-5'>
                                <RequestAppointment name={"Book Consultation"} customStyle={"bg-[#EF6623] hover:bg-orange-500 uppercase active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold "} />
                            </div>
                        </div>

                        {/* How TMS Works Section */}
                        <div className=" p-6 lg:p-10   bg-primary-div">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
                                {`How rTMS works?`}
                            </h3>
                            <div className="mb-5 md:h-[360px]">
                                <Image alt="img"  width={500} height={500}  src="/tmsPage/tms3.png" className="object-cover h-full" />
                            </div>
                            <div className="space-y-4 mb-6">
                                {/* <p className="text-gray-700 text-lg font-bold">
                            {`During a TMS treatment session:`}
                        </p> */}
                                <ul className="list-decimal list-inside  text-gray-700 text-md">
                                    <li className=''>
                                        <strong>{`Coil Placement:`}</strong> {` A healthcare professional places the rTMS coil on your head, targeting the specific brain area based on your condition. `}
                                        <div className='py-5'>
                                            <Image alt="img"  width={500} height={500} className='w-full' src='https://ik.imagekit.io/mwpcmpi5v/rTMS%20Images/tms_new10.png?updatedAt=1734526215048' />
                                        </div>
                                    </li>

                                    <li className=''>
                                        <strong>{`Stimulate Brain Cells:`}</strong>{` The magnetic pulses help activate or regulate the brain cells (neurons) in those regions where the coil is targeted `}
                                        <div className='py-5'>
                                            <Image alt="img"  width={500} height={500}  src='https://ik.imagekit.io/mwpcmpi5v/rTMS%20Images/tms_new3.png?updatedAt=1734526214919' />
                                        </div>
                                    </li>
                                    <li className=''>
                                        <strong>{`Boost Brain Activity:`}</strong> {` For conditions like Major Depressive Disorder (MDD), some brain areas may be less active. The pulses help increase activity in these areas, improving your mood. `}
                                        <div className='py-5'>
                                            <Image alt="img"  width={500} height={500}  src='https://mindfultms1.s3.amazonaws.com/Boost+Brain+Activity.png' />
                                        </div>
                                    </li>
                                    <li className='mb-5'>
                                        <strong>{`Promote Brain Flexibility:`}</strong> {` Your brain can change and adapt, a feature called neuroplasticity, but it takes time. By giving 25-30 sessions over 5-6 weeks, the magnetic pulses encourage your brain to form new, healthier connections and maintain them, which can help reduce symptoms of your condition. `}
                                    </li>
                                </ul>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <RequestAppointment name={"Book Consultation"} customStyle={"bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold"} />
                            </div>

                        </div>

                        {/* FAQ Section */}

                        <div className='px-4 bg-gray-200 py-6'>
                            <TmsPageFaqs />
                        </div>


                        <div className='flex pt-10 justify-center '>
                            <RequestAppointment name={"Book Consultation"} customStyle={"bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold"} />
                        </div>

                    </div>
                </div>
            </>
        )
    }

    const DesktopView = () => {
        return (
            <>
                <div className="min-h-screen">
                    <div className="">
                        <div className='h-[550px]'>
                            <Image alt="img"  width={900} height={900}  className='w-full h-full object-cover' src='https://mindfultms1.s3.us-east-1.amazonaws.com/1733381466442-mindfultms1.webp' />
                        </div>
                        {/* TMS Introduction Section */}
                        <div className=" p-6 lg:p-10 ">
                            <h3 className="text-4xl font-bold text-gray-800 mb-4 text-center">
                                {`Repetitive Transcranial Magnetic Stimulation (rTMS)`}
                            </h3>
                            {/* here */}
                            <Container maxWidth="lg">
                                <div className='flex flex-row justify-between items-center gap-4'>
                                    <p className='text-gray-600 text-xl w-2/3'>Repetitive Transcranial Magnetic Stimulation (rTMS) is a non-invasive and safe treatment for depression, OCD, anxiety, chronic pain and various other psychological and neurological conditions at MindfulTMS. We exclusively offer rTMS as our primary modality for treatment, ensuring you receive the most advanced and tailored care available.  </p>
                                    <div className="py-5 md:h-[360px]">
                                        <Image alt="img"  width={500} height={500}  src="https://ik.imagekit.io/mwpcmpi5v/rTMS%20Images/tms4.png?updatedAt=1734526214526" className="object-contain h-full" />
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between items-center gap-4'>
                                    <div className="pt-5 md:h-[360px]">
                                        <Image alt="img"  width={500} height={500}  src="https://ik.imagekit.io/mwpcmpi5v/tms5a.png?updatedAt=1734588069673" className="object-contain h-full" />
                                    </div>
                                    <div className='w-2/3'>
                                        <p className="text-gray-700 text-xl text-center mb-2">
                                            {`rTMS uses magnetic pulses to increase or inhibit activity of specific areas of the brain that are not functioning normally.  `}

                                        </p>
                                        <p className="text-gray-700 text-xl text-center mb-4">
                                            {`For example, in the case of depression, the brain activity is decreased. With targeted rTMS, the activity in these areas increases.  `}

                                        </p>
                                    </div>

                                </div>
                            </Container>
                        </div>



                        {/* Conditions Section */}
                        <div className="bg-primary-div pt-10 pb-10 px-4 ">
                            <Container maxWidth="lg">
                                {/* FDA Approved Conditions */}
                            <div className='mb-10'>
                                <h3 className="text-4xl font-bold text-center text-gray-800 mb-6 leading-tight">
                                    {`rTMS has been effective in treating`}
                                </h3>
                                <div className="flex flex-wrap justify-center gap-2 ">
                                    {fourConditions.map((condition) => (
                                        <div
                                            key={condition.name}
                                            className="flex items-center bg-green-100 text-base text-green-700 px-4 py-2 rounded-full "
                                        >
                                            <span className='font-bold text-xl'>{condition.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Off-label Conditions */}
                            <div>
                                <h3 className="text-xl font-semibold text-center text-gray-800 mb-6 leading-tight">
                                    {``}
                                </h3>
                                <div className="flex flex-wrap justify-center gap-2 ">
                                    {allConditions.map((condition) => (
                                        <div
                                            key={condition.name}
                                            className="flex items-center  bg-green-100 text-base text-green-700 px-3 py-1.5 rounded-full "
                                        >
                                            <span className='font-semibold'>{condition.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Book Consultation Button */}
                            <div className='flex justify-center mt-5'>
                                <RequestAppointment name={"Book Consultation"} customStyle={"bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold"} />
                            </div>
                            </Container>
                        </div>
                        {/* Is rTMS for me Section */}
                        <div className="bg-white   px-4 py-8 lg:p-10 ">
                           <Container maxWidth="lg">
                           <h3 className="text-4xl text-center mb-6 font-bold text-[#f6881f] ">
                                {`Is rTMS for me?`}
                            </h3>
                            <p className="text-start  text-gray-700 mb-5">
                                Consider rTMS if you
                            </p>
                            <ul className=" list-disc text-gray-700 text-md px-5">
                                <li className='mb-5'>
                                    <strong>{`Have a Diagnosis:`}</strong> {`You have a diagnosis of major depressive disorder, anxiety disorders, OCD, or PTSD.`}
                                </li>
                                <li className='mb-5'>
                                    <strong>{`Are concerned about side effects of taking medication:`}</strong>{` You don't want to take medication.`}
                                </li>
                                <li className='mb-5'>
                                    <strong>{`Tried Medications:`}</strong> {` You have tried multiple medications without satisfactory results. `}
                                </li>
                                <li className='mb-5'>
                                    <strong>{`Prefer Non-Invasive Options:`}</strong> {`You prefer a non-invasive treatment option with potentially fewer side effects. `}
                                </li>
                                <li className='mb-5'>
                                    <strong>{`Open to Innovative Methods:`}</strong> {` You are open to innovative treatment methods. `}
                                </li>
                                <li className='mb-5'>
                                    <strong>{`Complement Current Treatment`}</strong> {` You are looking to supplement rTMS to your current therapy and/or medication treatment plan  `}
                                </li>
                            </ul>


                            <div className='flex justify-center mt-5'>
                                <RequestAppointment name={"Book Consultation"} customStyle={"bg-[#EF6623] hover:bg-orange-500 uppercase active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold "} />
                            </div>
                           </Container>
                        </div>

                        {/* How TMS Works Section */}
                        <div className=" p-6 lg:p-10   bg-primary-div">
                           <Container maxWidth="lg">
                           <h3 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                                {`How rTMS works?`}
                            </h3>
                            <div className="mb-6 flex justify-center ">
                                <img alt="img"    src="/tmsPage/tms3.png" className="object-cover h-full" />
                            </div>
                            <div className="space-y-4 mb-6">
                                {/* <p className="text-gray-700 text-lg font-bold">
                            {`During a TMS treatment session:`}
                        </p> */}
                                <ul className="list-decimal list-inside  text-gray-700 text-md">
                                    <li className='text-2xl'>
                                        
                                        <strong>{`Coil Placement:`}</strong> {` A healthcare professional places the rTMS coil on your head, targeting the specific brain area based on your condition. `}
                                        
                                        <div className='py-5 h-[400px] flex justify-center'>
                                            <img alt="img"    className='h-full' src='https://ik.imagekit.io/mwpcmpi5v/rTMS%20Images/tms_new10.png?updatedAt=1734526215048' />
                                        </div>
                                    </li>

                                    <li className=' text-2xl'>
                                        <strong>{`Stimulate Brain Cells:`}</strong>{` The magnetic pulses help activate or regulate the brain cells (neurons) in those regions where the coil is targeted `}
                                        <div className='py-5 h-[400px] flex justify-center'>
                                            <img alt="img"    className='h-full' src='https://ik.imagekit.io/mwpcmpi5v/rTMS%20Images/tms_new3.png?updatedAt=1734526214919' />
                                        </div>
                                    </li>
                                    <li className=' text-2xl'>
                                        <strong>{`Boost Brain Activity:`}</strong> {` For conditions like Major Depressive Disorder (MDD), some brain areas may be less active. The pulses help increase activity in these areas, improving your mood. `}
                                        <div className='py-5 h-[400px] flex justify-center'>
                                            <img alt="img"    className='h-full ' src='https://mindfultms1.s3.amazonaws.com/Boost+Brain+Activity.png' />
                                        </div>
                                    </li>
                                    <li className='mb-5 text-2xl'>
                                        <strong>{`Promote Brain Flexibility:`}</strong> {` Your brain can change and adapt, a feature called neuroplasticity, but it takes time. By giving 25-30 sessions over 5-6 weeks, the magnetic pulses encourage your brain to form new, healthier connections and maintain them, which can help reduce symptoms of your condition. `}
                                    </li>
                                </ul>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <RequestAppointment name={"Book Consultation"} customStyle={"bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold"} />
                            </div>
                           </Container>

                        </div>

                        {/* FAQ Section */}

                        <div className=' py-6 bg-gray-200'>
                            <TmsPageFaqs />
                        </div>


                        <div className='flex pt-10 justify-center '>
                            <RequestAppointment name={"Book Consultation"} customStyle={"bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold"} />
                        </div>

                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='md:hidden'>
                <MobileView />
            </div>
            <div className='hidden md:block'>
                <DesktopView />
            </div>
        </>
    );
};

export default TmsMainPage;
