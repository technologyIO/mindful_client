"use client"
import React, { useState } from 'react';
import { IconButton, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';

const AllTestWithSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState({});
  const [testsToShow, setTestsToShow] = useState(6);

  // Use media query to determine if it's a mobile device.
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleExpand = (id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };

  const loadMoreTests = () => {
    setTestsToShow((prev) => prev + 6);
  };

  // Use the full filtered list on desktop; on mobile, show a limited list.
  const filteredTests = allTest.filter((test) =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.detail.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const testsToDisplay = isMobile
    ? filteredTests.slice(0, testsToShow)
    : filteredTests;

  return (
    <div className="min-h-screen  py-8">
      <div className=" mx-auto px-4">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              className="w-full pl-4 pr-12 py-3 border-2 border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search by assessment name..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <img src="/home/search.svg" alt="search" className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-h-[600px] thin-scroller overflow-y-auto">
          {testsToDisplay.length > 0 ? (
            testsToDisplay.map((test) => (
              <div
                key={test._id}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 capitalize ">
                    {test.name}
                  </h3>
                  {/* Small devices */}
                  {/* <p className="text-gray-600 text-sm md:hidden">
                    {expanded[test._id]
                      ? test.detail
                      : test.detail.substring(0, 50) + '...'}
                  </p> */}
                  {/* Large devices */}
                  <p className="text-gray-600 text-sm ">
                    {test.detail}
                  </p>
                </div>
                <div className="mt-2 flex justify-end">
                  {/* <IconButton
                    onClick={() => toggleExpand(test._id)}
                    className="text-blue-500"
                  >
                    {(expanded[test._id] && isMobile)? (
                      <>
                        <ExpandLessIcon /> <span className="ml-1 text-xs">Read less</span>
                      </>
                    ) : isMobile ?(
                      <>
                        <ExpandMoreIcon /> <span className="ml-1 text-xs">Read more</span>
                      </>
                    ):null}
                  </IconButton> */}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No Assessment Found
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {`We couldn't find any Assessment tests matching your search.`}
              </p>
              <RequestAppointment
                name={"Contact Us"}
                customStyle={
                  "bg-orange-500 hover:bg-orange-600 text-lg font-semibold rounded-lg text-white py-2 px-6"
                }
              />
            </div>
          )}
        </div>

        {/* Load More Button - only visible on mobile */}
        {isMobile && testsToDisplay.length < filteredTests.length && (
          <div className="flex justify-center">
            <button
              onClick={loadMoreTests}
              className="bg-white border border-gray-300 text-gray-800 py-2 px-6 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300"
            >
              Load More...
            </button>
          </div>
        )}
      </div>
    </div>
  );
};



const allTest  = [
    {
        "_id": 14,
        "name": "BDI",
        "detail": "Beck Depression Inventory - Used to assess Depression Severity."
    },
    
    {
        "_id": 37,
        "name": "HAM-D",
        "detail": "Hamilton Depression Rating Scale - Used to assess Depression Severity."
    },
    {
        "_id": 47,
        "name": "MMSE",
        "detail": "Mini Mental State Examination - Used to evaluate Cognitive Impairment."
    },
    {
        "_id": 48,
        "name": "MOCA",
        "detail": "Montreal Cognitive Assessment - Used to measure Cognitive Abilities."
    },
    {
        "_id": 36,
        "name": "HAM-A",
        "detail": "Hamilton Anxiety Rating Scale - Used to measure Anxiety Levels."
    },
    {
        "_id": 28,
        "name": "DASS",
        "detail": "Depression Anxiety Stress Scale - Used to assess Depression, Anxiety, and Stress Levels."
    },
    {
        "_id": 1,
        "name": "16PF",
        "detail": "16 Personality Factors - Used to test Personality Traits."
    },
    {
        "_id": 2,
        "name": "ACE",
        "detail": "Adverse Childhood Experiences - Used to assess Childhood Trauma."
    },
    {
        "_id": 3,
        "name": "ADAS",
        "detail": "Alzheimer's Disease Assessment Scale - Used to evaluate Alzheimer's Symptoms."
    },
    {
        "_id": 4,
        "name": "ADDENBROOKE",
        "detail": "Addenbrooke Cognitive Examination - Used to measure Cognitive Function."
    },
    {
        "_id": 5,
        "name": "ADHD",
        "detail": "Attention-Deficit/Hyperactivity Disorder Test - Used to assess ADHD Symptoms."
    },
    {
        "_id": 6,
        "name": "ADHD for Adults",
        "detail": "Adult Attention-Deficit/Hyperactivity Disorder Test - Used to evaluate Adult ADHD Symptoms."
    },
    {
        "_id": 7,
        "name": "ADHD for Children",
        "detail": "Child Attention-Deficit/Hyperactivity Disorder Test - Used to assess Child ADHD Symptoms."
    },
    {
        "_id": 8,
        "name": "AQ",
        "detail": "Autism Spectrum Quotient - Used to measure Autism Spectrum Traits."
    },
    {
        "_id": 9,
        "name": "ASR",
        "detail": "Adult Self Report Inventory - Used to assess Self-Reported Psychological Symptoms."
    },
    {
        "_id": 10,
        "name": "ASRS for Adults",
        "detail": "Adult ADHD Self-Report Scale - Used to evaluate Adult ADHD Symptoms."
    },
    {
        "_id": 11,
        "name": "AUDIT",
        "detail": "Alcohol Use Disorders Identification Test - Used to detect Alcohol Use Disorders."
    },
    {
        "_id": 12,
        "name": "Autism",
        "detail": "Modified Checklist for Autism in Toddlers - Used to screen for Autism in Toddlers."
    },
    {
        "_id": 13,
        "name": "BAI",
        "detail": "Beck Anxiety Inventory - Used to measure Anxiety Levels."
    },
    
    {
        "_id": 15,
        "name": "BDRS",
        "detail": "Bipolar Disorder Rating Scale - Used to evaluate Bipolar Disorder Symptoms."
    },
    {
        "_id": 16,
        "name": "BIS",
        "detail": "Body Image Scale - Used to assess Body Image Perceptions."
    },
    {
        "_id": 17,
        "name": "BKT",
        "detail": "Binet Kamat Test of Intelligence - Used to measure Intelligence."
    },
    {
        "_id": 18,
        "name": "BPQ",
        "detail": "Borderline Personality Questionnaire - Used to identify Borderline Personality Traits."
    },
    {
        "_id": 19,
        "name": "BPRS",
        "detail": "Brief Psychiatric Rating Scale - Used to evaluate Psychiatric Symptoms."
    },
    {
        "_id": 20,
        "name": "Burnout Scale",
        "detail": "Burnout Scale - Used to measure Burnout Levels."
    },
    {
        "_id": 21,
        "name": "BYI for Youths",
        "detail": "Beck Youth Inventory - Used to assess Emotional and Social Impairment in Youth."
    },
    {
        "_id": 22,
        "name": "CAARS",
        "detail": "Conners' Adult ADHD Rating Scales–Self Report - Used to evaluate Adult ADHD Symptoms."
    },
    {
        "_id": 23,
        "name": "CARS",
        "detail": "Childhood Autism Rating Scale - Used to assess Autism Severity in Children."
    },
    {
        "_id": 24,
        "name": "CAT",
        "detail": "Children Apperception Test - Used to evaluate Children's Perceptions."
    },
    {
        "_id": 25,
        "name": "CBCL",
        "detail": "Child Behavior Checklist - Used to identify Behavioral and Emotional Problems in Children."
    },
    {
        "_id": 26,
        "name": "CUDIT-R",
        "detail": "Cannabis Use Disorders Identification Test – Revised - Used to detect Cannabis Use Disorders."
    },
    {
        "_id": 27,
        "name": "DAPT",
        "detail": "Draw A Person Test - Used to evaluate Intelligence and Personality."
    },
    
    {
        "_id": 29,
        "name": "DDST",
        "detail": "Denver Developmental Screening Test - Used to detect Developmental Delays in Children."
    },
    {
        "_id": 30,
        "name": "DPCL",
        "detail": "Development Psychopathology Checklist - Used to assess Developmental Psychopathology."
    },
    {
        "_id": 31,
        "name": "DST",
        "detail": "Developmental Screening Test - Used to screen for Developmental Issues."
    },
    {
        "_id": 32,
        "name": "DST+VSMS",
        "detail": "Developmental Screening Test + Vineland Social Maturity Scale - Used to assess Developmental and Social Maturity."
    },
    {
        "_id": 33,
        "name": "EPQR",
        "detail": "Eysenck Personality Questionnaire - Used to assess Personality Traits."
    },
    {
        "_id": 34,
        "name": "GDS",
        "detail": "Geriatric Depression Scale - Used to assess Depression in the Elderly."
    },
    {
        "_id": 35,
        "name": "GIDYQ-AA",
        "detail": "Gender Identity Dysphoria Questionnaire for Adolescents and Adults - Used to identify Gender Identity Dysphoria."
    },
   
    {
        "_id": 38,
        "name": "ICMR-NCTB",
        "detail": "ICMR Neuro Cognitive Toolbox - Used to evaluate Neuro Cognitive Abilities."
    },
    {
        "_id": 39,
        "name": "IDEAS",
        "detail": "Indian Disability Evaluation & Assessment Scale - Used for Disability Evaluation."
    },
    {
        "_id": 40,
        "name": "IPDE",
        "detail": "International Personality Disorder Examination - Used to assess Personality Disorders."
    },
    {
        "_id": 41,
        "name": "IQ Test",
        "detail": "Intelligence Quotient Assessment - Used to measure Intelligence Quotient."
    },
    {
        "_id": 42,
        "name": "ISSA",
        "detail": "Indian Scale for Identification of Autism - Used for Autism Identification."
    },
    {
        "_id": 43,
        "name": "KADS",
        "detail": "Kutcher Adolescent Depression Scale - Used to measure Adolescent Depression."
    },
    {
        "_id": 44,
        "name": "LSAS",
        "detail": "Liebowitz Social Anxiety Scale - Used to assess Social Anxiety."
    },
    {
        "_id": 45,
        "name": "MCMI",
        "detail": "Millon Clinical Multiaxial Inventory - Used to diagnose Personality Disorders."
    },
    {
        "_id": 46,
        "name": "MMPI",
        "detail": "Minnesota Multiphasic Personality Inventory - Used to assess Psychopathology and Personality."
    },
    
    {
        "_id": 49,
        "name": "mPCQ",
        "detail": "Modified Pain-Coping Questionnaire - Used to assess Pain Coping Strategies."
    },
    {
        "_id": 50,
        "name": "NIMHANS SLD",
        "detail": "NIMHANS Specific Learning Disability Assessment - Used to identify Specific Learning Disabilities."
    },
    {
        "_id": 51,
        "name": "PANSS",
        "detail": "Positive And Negative Syndrome Scale - Used to measure Schizophrenia Symptoms."
    },
    {
        "_id": 52,
        "name": "PDQ",
        "detail": "Perceived Deficits Questionnaire - Used to assess Cognitive Deficits."
    },        

    {"_id": 54, "name": "PGIBBD", "detail": "PGI Battery of Brain Dysfunction - Used to detect Brain Dysfunction."},
    {"_id": 55, "name": "PHQ", "detail": "Physical Health Questionnaire - Used to assess Physical Health Symptoms."},
    {"_id": 56, "name": "RAADS-R", "detail": "Ritvo Autism Asperger Diagnostic Scale-Revised - Used to evaluate Autism Spectrum Disorders."},
    {"_id": 57, "name": "RCAD", "detail": "Revised Child Anxiety and Depression Scale - Used to assess Anxiety and Depression in Children."},
    {"_id": 58, "name": "RCPT", "detail": "Raven's Controlled Projection Test - Used to evaluate Cognitive Processing."},
    {"_id": 59, "name": "Rorschach", "detail": "Rorschach Inkblot Assessment - Used to analyze Personality Characteristics."},
    {"_id": 60, "name": "SADQ", "detail": "Somatization Anxiety Depression Questionnaire - Used to assess Somatization, Anxiety, and Depression."},
    {"_id": 61, "name": "SCARED", "detail": "Screening for Child Anxiety Related Emotional Disorders - Used to assess Child Anxiety Disorders."},
    {"_id": 62, "name": "SCT", "detail": "Sentence Completion Test - Used to evaluate Personality Traits and Conflicts."},
    {"_id": 63, "name": "SHAI", "detail": "Short Health Anxiety Inventory - Used to assess Health Anxiety."},
    {"_id": 64, "name": "SIAS", "detail": "Social Interaction Anxiety Scale - Used to assess Social Interaction Anxiety."},
    {"_id": 65, "name": "TAT", "detail": "Thematic Apperception Test - Used to evaluate Personality and Emotional Functioning."},
    {"_id": 66, "name": "TCI", "detail": "Temperament and Character Inventory - Used to assess Temperament and Character."},
    {"_id": 67, "name": "TFI", "detail": "Tinnitus Functional Index - Used to assess Tinnitus Impact."},
    {"_id": 68, "name": "VABS", "detail": "Vineland Adaptive Behavior Scales - Used to assess Adaptive Behavior."},
    {"_id": 69, "name": "WAIS", "detail": "Wechsler Adult Intelligence Scale - Used to evaluate Adult Intelligence."},
    {"_id": 70, "name": "WAPIS", "detail": "Wechsler Adult Performance Intelligence Scale - Used to assess Adult Performance Intelligence."},
    {"_id": 71, "name": "WISC", "detail": "Wechsler Intelligence Scale for Children - Used to assess Child Intelligence."},
    {"_id": 72, "name": "Y-BOCS", "detail": "Yale-Brown Obsessive Compulsive Scale - Used to evaluate Obsessive-Compulsive Symptoms."},
    {"_id": 73, "name": "YMRS", "detail": "Young Mania Rating Scale - Used to assess Mania Symptoms."},
    {"_id": 74, "name": "YSQ", "detail": "Young Schema Questionnaire - Used to assess Schema and Beliefs."},
]


export default AllTestWithSearch;
