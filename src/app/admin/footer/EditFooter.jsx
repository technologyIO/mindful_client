"use client";
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import axios from "axios";
// const locations = [
//   {
//     _id: "66dadf4c7996ed67752cba9c",
//     details: {
//       name: "Greater Kailash 1",
//       area: "Delhi",
//       bgColor: "bg-primary-orange",
//       location: "Delhi",
//       whatsapp: "+919663095632",
//       call: "+919663095632",
//       officeOpen: 10,
//       officeClose: 18,
//     },
//   },
//   {
//     _id: "66dadf897996ed67752cba9e",
//     details: {
//       name: "Whitefield",
//       area: "Bangalore North",
//       bgColor: "bg-[#F8A51C]",
//       location: "Bangalore Whitefield",
//       whatsapp: "+919663095632",
//       call: "+919663095632",
//       officeOpen: 10,
//       officeClose: 18,
//     },
//   },
//   {
//     _id: "66dadfb77996ed67752cbaa0",
//     details: {
//       name: "Aster CMI",
//       area: "Bangalore North",
//       bgColor: "bg-primary-orange",
//       location: "Bangalore Aster CMI",
//       whatsapp: "+919663095632",
//       call: "+919663095632",
//       officeOpen: 10,
//       officeClose: 24,
//     },
//   },
// ];
const EditFooter = () => {
  const [formData, setFormData] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [locations, setLocations] = useState([]);

  const getLocationData = ()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}clinicLocation/getAllContactDetails`)
    .then(res=>{
      const details = res?.data?.map((item)=>{
        return item.details;
      });
      console.log(details)
      setLocations(details)
      console.log('details', res?.data)
    }).catch(err=>console.log(err))
  }

  useEffect(() => {
    getLocationData();
  }, [])

  useEffect(() => {
    setFormData(locations)
  }, [locations])

  const handleChange = (e, id, field) => {
      const updatedData = formData.map((location) =>
        location._id === id
          ? {
              ...location,
              details: {
                ...location.details,
                [field]: e.target.value,
              },
            }
          : location
      );
      setFormData(updatedData);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data Submitted:", formData);
    };
    

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>

<Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Home Page Sections"
      >
        <Tab className="font-semibold text-md" label="Card" />
        <Tab className="font-semibold text-md" label="Mobile Section" />
        <Tab className="font-semibold text-md" label=" Logo" />
       
      </Tabs>

      {/* SECTION 1 */}
      <TabPanel value={selectedTab} index={0}>
      <div className="p-6">
      <form onSubmit={handleSubmit}>
        {formData.map((location) => (
          <div
            key={location._id}
            className={`mb-4 p-4 rounded-lg shadow `}
          >
            <input value={location?.name} className="text-xl font-bold mb-2"/>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Area:</label>
                <input
                  type="text"
                  value={location?.area}
                  onChange={(e) => handleChange(e, location._id, "area")}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="block font-medium">Location:</label>
                <input
                  type="text"
                  value={location?.location}
                  onChange={(e) => handleChange(e, location._id, "location")}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="block font-medium">WhatsApp:</label>
                <input
                  type="text"
                  value={location?.whatsapp}
                  onChange={(e) => handleChange(e, location._id, "whatsapp")}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="block font-medium">Call:</label>
                <input
                  type="text"
                  value={location?.call}
                  onChange={(e) => handleChange(e, location._id, "call")}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="block font-medium">Office Open:</label>
                <input
                  type="number"
                  value={location?.officeOpen}
                  onChange={(e) =>
                    handleChange(e, location._id, "officeOpen")
                  }
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="block font-medium">Office Close:</label>
                <input
                  type="number"
                  value={location?.officeClose}
                  onChange={(e) =>
                    handleChange(e, location._id, "officeClose")
                  }
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
      </TabPanel>
      

    </>
  )
}

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

export default EditFooter