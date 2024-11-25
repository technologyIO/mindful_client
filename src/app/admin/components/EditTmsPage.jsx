import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

// Initial pageData structure
const initialPageData = {
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

const EditTmsPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [pageData, setPageData] = useState(initialPageData);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Function to handle changes in the input fields
  const handleInputChange = (section, field, value) => {
    setPageData({
      ...pageData,
      [section]: {
        ...pageData[section],
        [field]: value,
      },
    });
  };

  // Function to handle content or array updates in section1 and section2
  const handleArrayChange = (section, arrayField, index, value) => {
    const updatedArray = [...pageData[section][arrayField]];
    updatedArray[index] = value;
    setPageData({
      ...pageData,
      [section]: {
        ...pageData[section],
        [arrayField]: updatedArray,
      },
    });
  };

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="TMS Page Sections"
      >
        <Tab label="Page Title" />
        <Tab label="Section 1" />
        <Tab label="Section 2" />
        <Tab label="Section 3" />
      </Tabs>

      {/* Page Title Tab */}
      <TabPanel value={selectedTab} index={0}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Page Title</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={pageData?.title || ""}
                onChange={(e) => handleInputChange(null, "title", e.target.value)}
              />
            </div>
          </div>
        </div>
      </TabPanel>

      {/* Section 1 Tab */}
      <TabPanel value={selectedTab} index={1}>
        <div className="px-10">
          <div className="flex flex-col w-full mb-6">
            <label className="text-lg font-semibold">Section 1 Title</label>
            <input
              type="text"
              className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
              value={pageData?.section1?.title || ""}
              onChange={(e) => handleInputChange("section1", "title", e.target.value)}
            />
          </div>
          {pageData?.section1?.content?.map((paragraph, index) => (
            <div key={index} className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Content Paragraph {index + 1}</label>
              <textarea
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none h-[100px]"
                value={paragraph || ""}
                onChange={(e) =>
                  handleArrayChange("section1", "content", index, e.target.value)
                }
              />
            </div>
          ))}
          <div className="flex flex-col w-full mb-6">
            <label className="text-lg font-semibold">Section 1 Image</label>
            <input
              type="text"
              className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
              value={pageData?.section1?.image || ""}
              onChange={(e) => handleInputChange("section1", "image", e.target.value)}
            />
          </div>
        </div>
      </TabPanel>

      {/* Section 2 Tab */}
      <TabPanel value={selectedTab} index={2}>
        <div className="px-10">
          <div className="flex flex-col w-full mb-6">
            <label className="text-lg font-semibold">Section 2 Title</label>
            <input
              type="text"
              className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
              value={pageData?.section2?.title || ""}
              onChange={(e) => handleInputChange("section2", "title", e.target.value)}
            />
          </div>
          {pageData?.section2?.steps?.map((step, index) => (
            <div key={index} className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Step {index + 1}</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={step || ""}
                onChange={(e) =>
                  handleArrayChange("section2", "steps", index, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      </TabPanel>

      {/* Section 3 Tab */}
      <TabPanel value={selectedTab} index={3}>
        <div className="px-10">
          <div className="flex flex-col w-full mb-6">
            <label className="text-lg font-semibold">Section 3 Title</label>
            <input
              type="text"
              className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
              value={pageData?.section3?.title || ""}
              onChange={(e) => handleInputChange("section3", "title", e.target.value)}
            />
          </div>
          {pageData?.section3?.stages?.map((stage, stageIndex) => (
            <div key={stageIndex} className="mb-10">
              <label className="text-lg font-semibold">Stage {stageIndex + 1} Title</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none mb-3"
                value={stage?.title || ""}
                onChange={(e) =>
                  handleArrayChange("section3", "stages", stageIndex, e.target.value)
                }
              />
              {stage?.subPoints?.map((subPoint, subIndex) => (
                <div key={subIndex} className="flex flex-col mb-6">
                  <label className="text-lg font-semibold">
                    Sub Point {subIndex + 1} Title
                  </label>
                  <input
                    type="text"
                    className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none mb-3"
                    value={subPoint?.paraTitle || ""}
                    onChange={(e) => {
                      const updatedSubPoints = [...pageData.section3.stages[stageIndex].subPoints];
                      updatedSubPoints[subIndex].paraTitle = e.target.value;
                      handleArrayChange("section3", "stages", stageIndex, {
                        ...stage,
                        subPoints: updatedSubPoints,
                      });
                    }}
                  />
                  <label className="text-lg font-semibold">Sub Point {subIndex + 1} Paragraph</label>
                  <textarea
                    className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none h-[100px]"
                    value={subPoint?.para || ""}
                    onChange={(e) => {
                      const updatedSubPoints = [...pageData.section3.stages[stageIndex].subPoints];
                      updatedSubPoints[subIndex].para = e.target.value;
                      handleArrayChange("section3", "stages", stageIndex, {
                        ...stage,
                        subPoints: updatedSubPoints,
                      });
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </TabPanel>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default EditTmsPage;
