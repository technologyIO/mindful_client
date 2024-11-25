"use client";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import axios from "axios";
// import { testimonials } from "@/example";

const Testimonials = () => {
  const router = useRouter(); // Initialize useRouter
  const [testimonials, setTestimonials] = useState([]);
  const [showBulkUploadModal, setShowBulkUploadModal] = useState(false);
  const [bulkFile, setBulkFile] = useState(null);
  const fetchTestimonials =  () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}testimonials`)
    .then((response) => {
      setTestimonials(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }
  useEffect(() => {
    fetchTestimonials()
  },[])

  const handleBulkFileChange = (event) => {
    setBulkFile(event.target.files[0]);
  };

  const handleBulkUpload = () => {
    if (!bulkFile) {
      alert("Please select a file to upload.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", bulkFile); // Append the file to the FormData
  
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}testimonials/bulk-upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type for file upload
        },
      })
      .then((response) => {
        setShowBulkUploadModal(false);
        fetchTestimonials(); // Refresh testimonials after successful upload
        alert("Bulk upload successful!");
      })
      .catch((error) => {
        console.error("Bulk upload error:", error);
        alert("Failed to upload testimonials.");
      });
  };
  // State for the filter values
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Extract unique values for filters
  const doctors = [...new Set(testimonials.map((t) => t.doctor?.name))];
  const conditions = [...new Set(testimonials.map((t) => t.condition))];
  const treatments = [...new Set(testimonials.map((t) => t.treatment))];
  const locations = [...new Set(testimonials.map((t) => t.location))];

  // Filter testimonials based on selected values
  const filteredTestimonials = testimonials.filter((testimonial) => {
    return (
      (selectedDoctor === "" || testimonial?.doctor?.name === selectedDoctor) &&
      (selectedCondition === "" || testimonial.condition === selectedCondition) &&
      (selectedTreatment === "" || testimonial.treatment === selectedTreatment) &&
      (selectedLocation === "" || testimonial.location === selectedLocation)
    );
  });

  // Navigate to add testimonial page
  const handleAddTestimonial = () => {
    const _id = "new"; // Use "new" for creating a new testimonial
    router.push(`/admin/testimonials/${_id}`);
  };


  const handleDeleteTestimonial = (id) => {
      axios
        .delete(`${process.env.NEXT_PUBLIC_API_URL}testimonials/${id}`)
        .then(() => {
          fetchTestimonials(); // Refresh the testimonials list
        })
        .catch((error) => {
          console.error("Error deleting testimonial:", error);
        });
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl text-primary-orange font-bold text-center mb-6">
        Testimonials
      </h2>

      {/* Filter Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Doctor Filter */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Doctor
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">All Doctors</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>

        {/* Condition Filter */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Condition
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
            value={selectedCondition}
            onChange={(e) => setSelectedCondition(e.target.value)}
          >
            <option value="">All Conditions</option>
            {conditions.map((condition, index) => (
              <option key={index} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>

        {/* Treatment Filter */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Treatment
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
            value={selectedTreatment}
            onChange={(e) => setSelectedTreatment(e.target.value)}
          >
            <option value="">All Treatments</option>
            {treatments.map((treatment, index) => (
              <option key={index} value={treatment}>
                {treatment}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Location
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Button to add new testimonial */}
      <div className="flex justify-center mb-6">
        <button
          onClick={handleAddTestimonial}
          className="bg-primary-orange text-white px-4 py-2 rounded-lg hover:bg-primary-orange-dark focus:outline-none focus:ring-2 focus:ring-primary-orange"
        >
          Add New Testimonial
        </button>
        <button
          onClick={() => setShowBulkUploadModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Bulk Upload
        </button>
      </div>

      {showBulkUploadModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Bulk Upload Testimonials
            </h3>
            <div className="flex justify-between items-center mb-4">
              <input
                type="file"
                // accept=".csv, .xlsx"
                onChange={handleBulkFileChange}
                className="w-full mb-4 p-2 border rounded-lg"
              />
              {/* Download Example Button */}
              <a
                href="/bulkUpload/format.xlsx"
                download
                className="text-blue-500 hover:text-blue-700 underline ml-2"
              >
                Download Example Excel
              </a>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowBulkUploadModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleBulkUpload}
                className="bg-primary-orange text-white px-4 py-2 rounded-lg hover:bg-primary-orange-dark"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-primary-div flex flex-col  rounded-lg shadow-lg overflow-hidden p-6 "
           
          >
            <div  onClick={() => router.push(`/admin/testimonials/${testimonial._id}`)}>
              <h3 className="text-xl cursor-pointer hover:underline text-primary-orange font-semibold mb-4">
                {testimonial.title}
              </h3>
            </div>

            <div className="flex flex-col justify-between ">
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Patient Name:</strong> {testimonial.patientName}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Doctor:</strong> {testimonial?.doctor?.name}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Condition:</strong> {testimonial.condition}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Treatment:</strong> {testimonial.treatment}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Location:</strong> {testimonial.location}
                </p>

                <p className="italic mb-4">{testimonial.shortQuote}</p>
                <p className="text-gray-700 mb-4">
                  {testimonial.fullTestimonial}
                </p>
              </div>
{ testimonial.videoUrl &&
              <video
                controls
                className="w-full h-48 rounded-lg object-cover"
                src={testimonial.videoUrl}
              ></video>}

               
            </div>
            {/* Delete Button */}
            <button
                onClick={() => handleDeleteTestimonial(testimonial._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-600"
              >
                Delete
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
