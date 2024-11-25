"use client";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import QuillEditorComponent from "@/components/QuillEditorComponent";
import axios from "axios";
import Image from "next/image";
import TextEditor from "@/components/TextEditor";
const EditHomePage = ({ allSection, setAllSection }) => {
  const [content, setContent] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleChangeImage = () => {
    // Handle image change logic here
  };

  const handleSave = () => {
    if (allSection) {
      axios
        .put(
          process.env.NEXT_PUBLIC_API_URL + "homeSection/udpateHomeSection",
          allSection
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  const handleAddExpert = () => {
    setAllSection((prev) => ({
      ...prev,
      section7: {
        ...prev.section7,
        expertArray: [
          ...prev.section7.expertArray,
          { img: "", name: "", desig: "", location: "" },
        ],
      },
    }));
  };

  const handleRemoveExpert = (index) => {
    const updatedExperts = allSection.section7.expertArray.filter(
      (_, i) => i !== index
    );
    setAllSection((prev) => ({
      ...prev,
      section7: { ...prev.section7, expertArray: updatedExperts },
    }));
  };

  const handleAddVideo = () => {
    setAllSection((prev) => ({
      ...prev,
      section8: {
        ...prev.section8,
        videos: [
          ...prev.section8.videos,
          { id: Date.now(), service: "", speaker: "", src: "" },
        ],
      },
    }));
  };

  const handleRemoveVideo = (id) => {
    const updatedVideos = allSection.section8.videos.filter(
      (video) => video.id !== id
    );
    setAllSection((prev) => ({
      ...prev,
      section8: { ...prev.section8, videos: updatedVideos },
    }));
  };

  return (
    <>

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Home Page Sections"
      >
        <Tab className="font-semibold text-md" label="Section 1" />
        <Tab className="font-semibold text-md" label="Section 2" />
        <Tab className="font-semibold text-md" label="Section 3" />
        <Tab className="font-semibold text-md" label="Section 4" />
        <Tab className="font-semibold text-md" label="Section 5" />
        <Tab className="font-semibold text-md" label="Section 6" />
        <Tab className="font-semibold text-md" label="Section 7" />
        <Tab className="font-semibold text-md" label="Section 8" />
      </Tabs>
      
    {/* SECTION 1 */}
      <TabPanel value={selectedTab} index={0}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Title</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.heroSection?.title || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    heroSection: {
                      ...allSection?.heroSection,
                      title: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Para</label>
              <textarea
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none h-[200px]"
                value={allSection?.heroSection?.para || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    heroSection: {
                      ...allSection?.heroSection,
                      para: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Button</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.heroSection?.button?.text || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    heroSection: {
                      ...allSection?.heroSection,
                      button: {
                        ...allSection?.heroSection?.button,
                        text: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </TabPanel>

    {/* SECTION 2 */}
      <TabPanel value={selectedTab} index={1}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Para1</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section2?.para1 || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section2: {
                      ...allSection?.section2,
                      para1: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Para2</label>
              {/* <QuillEditorComponent
                value={allSection?.section2?.html1 || ""}
                onChange={(e) =>
                  setAllSection({
                    ...allSection,
                    section2: { ...allSection?.section2, html1: e },
                  })
                }
                className="w-full h-[70%] mt-10 bg-white"
              /> */}
              <TextEditor
                value={allSection?.section2?.html1 || ""}
                onChange={(e) =>
                  setAllSection(prev=>({
                    ...prev,
                    section2: { ...prev?.section2, html1: e },
                  }))
                }
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Button</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section2?.button?.text || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section2: {
                      ...allSection?.section2,
                      button: {
                        ...allSection?.section2?.button,
                        text: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </TabPanel>

      {/* SECTION 3 */}
      <TabPanel value={selectedTab} index={2}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Title</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section3?.title || ""}
                onChange={(e) => {
                  setAllSection(prev=>({
                    ...prev,
                    section3: {
                      ...prev?.section3,
                      title: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Para 1</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section3?.para1 || ""}
                onChange={(e) => {
                  setAllSection(prev=>({
                    ...prev,
                    section3: {
                      ...prev?.section3,
                      para1: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <div className="border-2 border-gray-400 rounded-xl p-4">
                <h3 className="text-xl font-semibold mb-4">Box</h3>
                <div className="flex">
                  <input
                    type="file"
                    className=""
                    onChange={handleChangeImage}
                  />
                  {allSection?.section3?.box?.banner && (
                    <Image
                      src={allSection.section3.box.banner}
                      width={100}
                      height={100}
                      alt="Banner Image"
                    />
                  )}
                </div>
                <div>
                  <div className="flex flex-col w-full mb-6">
                    <label className="text-lg font-semibold">Para</label>
                    <TextEditor
                      value={allSection?.section3?.box?.para || ""}
                      onChange={(e) =>
                        setAllSection(prev=>({
                          ...prev,
                          section3: {
                            ...prev?.section3,
                            box: { ...prev?.section3?.box, para: e },
                          },
                        }))
                      }
                      // className="w-full h-[70%] mt-10 bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Para2</label>
              <TextEditor
                value={allSection?.section3?.para2 || ""}
                onChange={(e) =>
                  setAllSection(prev=>({
                    ...prev,
                    section3: { ...prev?.section3, para2: e },
                  }))
                }
                // className="w-full h-[70%] mt-10 bg-white"
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Button</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section3?.button?.text || ""}
                onChange={(e) => {
                  setAllSection(prev=>({
                    ...prev,
                    section3: {
                      ...prev?.section3,
                      button: {
                        ...prev?.section3?.button,
                        text: e.target.value,
                      },
                    },
                  }));
                }}
              />
            </div>

            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Button Link</label>
              <input
                type="text" className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none" 
                value={allSection?.section3?.button?.link || ""}
                onChange={(e) => {
                  setAllSection(prev=>({
                    ...prev,
                    section3: {
                      ...prev?.section3,
                      button: {
                        ...prev?.section3?.button,
                        link: e.target.value,
                      },
                    },
                  }));
                }}
              />
            </div>
          </div>
        </div>
      </TabPanel>

      {/* SECTION 4 */}
      <TabPanel value={selectedTab} index={3}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Title</label>
              <TextEditor
                value={allSection?.section4?.header || ""}
                onChange={(e) =>
                  setAllSection(prev=>({
                    ...prev,
                    section4: { ...prev?.section4, header: e },
                  }))
                }
                // className="w-full h-[70%] mt-10 bg-white"
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Para 1</label>
              <TextEditor
                value={allSection?.section4?.para || ""}
                onChange={(e) =>
                  setAllSection({
                    ...allSection,
                    section4: { ...allSection?.section4, para: e },
                  })
                }
                className="w-full h-[70%] mt-10 bg-white"
              />
            </div>

          </div>
        </div>
      </TabPanel>

      {/* SECTION 5 */}
      <TabPanel value={selectedTab} index={4}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Header</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section5?.header || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section5: {
                      ...allSection?.section5,
                      header: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="w-full mb-6">
              <h3 className="text-2xl font-semibold text-center">Services</h3>
              <div className="border-2 p-6  border-gray-400 rounded-xl">
                <div>
                  {allSection?.section5?.services?.map((service, serviceIndex) => (
                    <div className="flex flex-col w-full mb-6" key={serviceIndex}>
                      <label className="text-lg font-semibold">Service Title</label>
                      <input
                        type="text"
                        className="border-2  rounded-xl p-2 text-xl border-gray-400 outline-none"
                        value={service?.title || ""}
                        onChange={(e) => {
                          const updatedServices = [...allSection.section5.services];
                          updatedServices[serviceIndex] = {
                            ...updatedServices[serviceIndex],
                            title: e.target.value,
                          };

                          setAllSection({
                            ...allSection,
                            section5: {
                              ...allSection.section5,
                              services: updatedServices,
                            },
                          });
                        }}
                      />

                      {service?.array?.map((item, itemIndex) => (
                        <div className="mt-4 ml-10" key={itemIndex}>
                          <label className="text-lg font-semibold">Name {itemIndex + 1}</label>
                          <input
                            type="text"
                            className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                            value={item?.name || ""}
                            onChange={(e) => {
                              const updatedServices = [...allSection.section5.services];
                              updatedServices[serviceIndex] = {
                                ...updatedServices[serviceIndex],
                                array: updatedServices[serviceIndex].array.map((arrayItem, arrayIndex) =>
                                  arrayIndex === itemIndex
                                    ? { ...arrayItem, name: e.target.value }
                                    : arrayItem
                                ),
                              };

                              setAllSection((prevState) => ({
                                ...prevState,
                                section5: {
                                  ...prevState.section5,
                                  services: updatedServices,
                                },
                              }));
                            }}
                          />
                        </div>
                      ))}


                      <div className="flex flex-col ml-6 mt-7 w-full mb-6">
                        <label className="text-lg font-semibold">Button</label>
                        <input
                          type="text"
                          className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                          value={allSection?.section5?.services[serviceIndex]?.button?.text || ""}
                          onChange={(e) => {
                            const newServices = [...allSection.section5.services];
                            newServices[serviceIndex] = {
                              ...newServices[serviceIndex],
                              button: {
                                ...newServices[serviceIndex].button,
                                text: e.target.value,
                              },
                            };

                            setAllSection((prevState) => ({
                              ...prevState,
                              section5: {
                                ...prevState.section5,
                                services: newServices,
                              },
                            }));
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>


              </div>
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Button</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section2?.button?.text || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section2: {
                      ...allSection?.section2,
                      button: {
                        ...allSection?.section2?.button,
                        text: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel value={selectedTab} index={5}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Header</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section6?.header || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section6: {
                      ...allSection?.section6,
                      header: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Paragraph</label>
              <input
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section6?.para || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section6: {
                      ...allSection?.section6,
                      para: e.target.value,
                    },
                  });
                }}
              />
            </div>
            {allSection?.section6?.locations?.map((location, locIndex) => (
              <div key={locIndex} className="border-2 p-4 rounded-xl mb-6">
                <div className="flex flex-col w-full mb-6">
                  <label className="text-lg font-semibold">Location Title</label>
                  <input
                    type="text"
                    className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                    value={location?.title || ""}
                    onChange={(e) => {
                      const updatedLocations = [...allSection.section6.locations];
                      updatedLocations[locIndex].title = e.target.value;
                      setAllSection({
                        ...allSection,
                        section6: {
                          ...allSection.section6,
                          locations: updatedLocations,
                        },
                      });
                    }}
                  />
                </div>
                {location?.locationArray?.map((locItem, locItemIndex) => (
                  <div key={locItemIndex} className="ml-4 mb-6">
                    <label className="text-lg font-semibold">Location Name</label>
                    <input
                      type="text"
                      className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                      value={locItem?.title || ""}
                      onChange={(e) => {
                        const updatedLocations = [...allSection.section6.locations];
                        updatedLocations[locIndex].locationArray[locItemIndex].title = e.target.value;
                        setAllSection({
                          ...allSection,
                          section6: {
                            ...allSection.section6,
                            locations: updatedLocations,
                          },
                        });
                      }}
                    />
                    <label className="text-lg font-semibold">Address</label>
                    <input
                      type="text"
                      className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                      value={locItem?.address || ""}
                      onChange={(e) => {
                        const updatedLocations = [...allSection.section6.locations];
                        updatedLocations[locIndex].locationArray[locItemIndex].address = e.target.value;
                        setAllSection({
                          ...allSection,
                          section6: {
                            ...allSection.section6,
                            locations: updatedLocations,
                          },
                        });
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </TabPanel>
      <TabPanel value={selectedTab} index={6}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-6">
              <label className="text-lg font-semibold">Header</label>
              <input
                type="text"
                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                value={allSection?.section7?.header || ""}
                onChange={(e) => {
                  setAllSection({
                    ...allSection,
                    section7: {
                      ...allSection?.section7,
                      header: e.target.value,
                    },
                  });
                }}
              />
            </div>

            {allSection?.section7?.expertArray?.map((expert, expertIndex) => (
              <div key={expertIndex} className="border-2 p-4 rounded-xl mb-6">
                <div className="flex flex-col w-full mb-6">
                  <label className="text-lg font-semibold">Expert Name</label>
                  <input
                    type="text"
                    className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                    value={expert?.name || ""}
                    onChange={(e) => {
                      const updatedExperts = [...allSection.section7.expertArray];
                      updatedExperts[expertIndex].name = e.target.value;
                      setAllSection({
                        ...allSection,
                        section7: {
                          ...allSection.section7,
                          expertArray: updatedExperts,
                        },
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col w-full mb-6">
                  <label className="text-lg font-semibold">Designation</label>
                  <input
                    type="text"
                    className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                    value={expert?.desig || ""}
                    onChange={(e) => {
                      const updatedExperts = [...allSection.section7.expertArray];
                      updatedExperts[expertIndex].desig = e.target.value;
                      setAllSection({
                        ...allSection,
                        section7: {
                          ...allSection.section7,
                          expertArray: updatedExperts,
                        },
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col w-full mb-6">
                  <label className="text-lg font-semibold">Location</label>
                  <input
                    type="text"
                    className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                    value={expert?.location || ""}
                    onChange={(e) => {
                      const updatedExperts = [...allSection.section7.expertArray];
                      updatedExperts[expertIndex].location = e.target.value;
                      setAllSection({
                        ...allSection,
                        section7: {
                          ...allSection.section7,
                          expertArray: updatedExperts,
                        },
                      });
                    }}
                  />
                </div>
                <div className="flex items-center mb-6">
                  <input type="file" className="" />
                  {expert?.img && (
                    <Image
                      src={expert.img}
                      width={100}
                      height={100}
                      alt="Expert Image"
                    />
                  )}
                </div>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded"
                  onClick={() => handleRemoveExpert(expertIndex)}
                >
                  Remove Expert
                </button>
              </div>
            ))}
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={handleAddExpert}
            >
              Add Expert
            </button>
          </div>
        </div>
      </TabPanel>

      {/* SECTION 8 */}
      <TabPanel value={selectedTab} index={7}>
        <div className="px-10">
          <div className="flex flex-col items-center">
            {allSection?.section8?.videos?.map((video, videoIndex) => (
              <div key={videoIndex} className="border-2 p-4 rounded-xl mb-6">
                <div className="flex flex-col w-full mb-6">
                  <label className="text-lg font-semibold">Service</label>
                  <input
                    type="text"
                    className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                    value={video?.service || ""}
                    onChange={(e) => {
                      const updatedVideos = [...allSection.section8.videos];
                      updatedVideos[videoIndex].service = e.target.value;
                      setAllSection({
                        ...allSection,
                        section8: {
                          ...allSection.section8,
                          videos: updatedVideos,
                        },
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col w-full mb-6">
                  <label className="text-lg font-semibold">Speaker</label>
                  <input
                    type="text"
                    className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                    value={video?.speaker || ""}
                    onChange={(e) => {
                      const updatedVideos = [...allSection.section8.videos];
                      updatedVideos[videoIndex].speaker = e.target.value;
                      setAllSection({
                        ...allSection,
                        section8: {
                          ...allSection.section8,
                          videos: updatedVideos,
                        },
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col w-full mb-6">
                  <label className="text-lg font-semibold">Video File</label>
                  <input
                    type="file"
                    className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                  />
                </div>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded"
                  onClick={() => handleRemoveVideo(video.id)}
                >
                  Remove Video
                </button>
              </div>
            ))}
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={handleAddVideo}
            >
              Add Video
            </button>
          </div>
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

export default EditHomePage;
