import React from 'react';
import Link from 'next/link';
import { Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Example dynamic data
const pageData = {
  title: 'TMS Treatment',
  section1: {
    title: 'What is TMS?',
    content: [
      "Many mental health conditions like depression, anxiety, PTSD, and OCD are linked to specific parts of the brain not working as they should. When these areas of the brain are underactive, it can lead to constant and challenging symptoms that affect daily life.",
      "Transcranial Magnetic Stimulation (TMS) offers a non-invasive way to address this issue. By using magnetic fields, TMS stimulates nerve cells in the brain areas responsible for mood regulation and mental health. Think of TMS as a method to jump-start these underactive parts of the brain, helping them to function normally again and improving overall mental health."
    ],
    image: '/home/clinicImg.svg',
  },
  section2: {
    title: 'How TMS Works',
    steps: [
      'Identifying the Condition',
      'Activation of Brain Cells',
      'Release of Neurotransmitters',
      'Improved Brain Connections',
    ]
  },
  section3: {
    title: 'What to Expect',
    stages: [
      {
        title: 'Initial Consultation',
        subPoints: [
          {
            paraTitle: 'Evaluation',
            para: 'Your journey begins with a thorough evaluation by a trained clinical psychologist or psychiatrist. They will review your medical history, current medications, and previous treatments, if any. They will then determine if TMS is right for you.'
          }
        ]
      }
    ]
  }
};

const TmsPage = () => {
  return (
    <>
      <section className="select-none">
        <div className="bg-primary-div md:px-[150px] mb-8">
          <Container maxWidth="lg">
            <div className="py-11">
              <h1 className="text-start text-3xl md:text-4xl font-bold text-primary-orange whitespace-nowrap">
                {pageData?.title}
              </h1>
            </div>

            <Link href="/consultation/location" className="flex py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi text-primary-orange font-bold bi-calendar2-week"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
              </svg>
              <p className="text-primary-orange font-bold active:underline hover:underline text-sm ml-2">
                Request an Appointment
              </p>
            </Link>
          </Container>
        </div>

        <Container maxWidth="lg">
          <div className="p-1">
            {/* Accordion Section */}
            <Accordion className="bg-primary-div mb-5">
              <AccordionSummary expandIcon={<ExpandMoreIcon className='text-primary-orange'/>} className=" font-semibold text-primary-orange">
                <Typography className='font-semibold'>{pageData?.section1?.title}</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-white">
                {pageData?.section1?.content?.map((paragraph, index) => (
                  <Typography key={index} className="mb-2 text-sm text-gray-700">
                    {paragraph}
                  </Typography>
                ))}
                <div className="mb-10">
                  <img src={pageData?.section1?.image} alt="Clinic" />
                </div>
                <div className="flex justify-center">
                  <Link href="/consultation/location" className="bg-primary-orange text-white font-semibold p-3 rounded-lg">
                    BOOK A CONSULTATION
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion className="bg-primary-div mb-5">
              <AccordionSummary expandIcon={<ExpandMoreIcon className='text-primary-orange'/>} className=" text-primary-orange">
                <Typography className='font-semibold'>{pageData?.section2?.title}</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-white">
                {pageData?.section2?.steps?.map((step, index) => (
                  <div key={index} className="flex justify-between p-5 mb-3 bg-primary-div rounded-lg md:w-[50%]">
                    <Typography className="text-primary-orange text-sm font-semibold">
                      {index + 1}. {step}
                    </Typography>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#EF6623"
                      stroke="#EF6623"
                      strokeWidth="1"
                      className="bi bi-chevron-right ml-auto"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </div>
                ))}
                <div className="flex justify-center">
                  <Link href="/consultation/location" className="bg-primary-div text-white font-semibold p-3 rounded-lg">
                    BOOK A CONSULTATION
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion className="bg-primary-div mb-5">
              <AccordionSummary expandIcon={<ExpandMoreIcon className='text-primary-orange'/>} className=" text-primary-orange">
                <p className='font-bold'> {pageData?.section3?.title}</p>
              </AccordionSummary>
              <AccordionDetails className="bg-white">
                {pageData?.section3?.stages?.map((stage, index) => (
                  <div key={index} className="mb-6">
                    <Typography className="text-xl text-primary-orange mb-4 font-semibold">
                      {index + 1}. {stage?.title}
                    </Typography>
                    {stage?.subPoints?.map((sp, subIndex) => (
                      <Typography key={subIndex}>
                        <span className="font-bold">{sp?.paraTitle}: </span>
                        {sp?.para}
                      </Typography>
                    ))}
                  </div>
                ))}
                <div className="flex justify-center">
                  <Link href="/consultation/location" className="bg-primary-orange text-white font-semibold p-3 rounded-lg">
                    BOOK A CONSULTATION
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>

           
          </div>
        </Container>
      </section>
    </>
  );
};

export default TmsPage;
