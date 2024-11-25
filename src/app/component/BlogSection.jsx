import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const BlogSection = ({ section }) => {
  const router = useRouter();

  switch (section.type) {
    case 'header':
      return (
        <div className="justify-start flex mt-4">
          <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary-orange'>{section.header}</h1>
        </div>
      );
    case 'content':
      return (
        <div className="mt-4">
          <div className="text-sm md:text-base lg:text-lg" dangerouslySetInnerHTML={{ __html: section.content }} />
        </div>
      );
    case 'image':
      return (
        <div className="mt-4 w-full h-[200px] md:h-[300px] lg:h-[400px]">
          <img src={section.content} alt="section" className="w-full rounded-xl object-cover h-full" />
        </div>
      );
    case 'button':
      return (
        <div className="flex justify-center items-center mt-4">
          <button onClick={() => router.push(section.link)} className='bg-primary-orange hover:bg-orange-500 active:bg-orange-700 rounded-lg px-6 py-2 md:px-8 md:py-3 text-white text-sm md:text-base font-semibold'>{section.text}</button>
        </div>
      );
    case 'accordion':
      return (
        <div className="mt-4">
          <Accordion className='shadow-none'>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-primary-div rounded-xl"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl text-primary-orange font-semibold">{section.title}</h3>
            </AccordionSummary>
            <AccordionDetails className="bg-white">
              {section?.sections?.map((nestedSection, index) => (
                <div key={index} className="p-4">
                  <BlogSection section={nestedSection} />
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      );
    case 'space':
      return <div className="justify-start flex my-6"></div>;
    default:
      return null;
  }
};

export default BlogSection;
