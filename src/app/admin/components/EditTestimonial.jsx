"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const EditTestimonial = ({testimonialId}) => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [allDoctors, setAllDoctors] = useState([]);
  const [videoFile, setVideoFile] = useState(null); // State to hold the selected video file
  const [currentVideoLink, setCurrentVideoLink] = useState(null); // State to hold the current video link
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const fetchDoctor = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}testimonials/doctor`)
    .then((res) => {
      setAllDoctors(res.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  const fetchData = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}testimonials/${testimonialId}`)
    .then((res) => {
      const doctor = res.data.doctor?._id;
      setFormData({...res.data, doctor: doctor});
      setCurrentVideoLink(res.data.videoUrl);
    }).catch((err) => {
      console.log(err);
    });
  };

  const updateData = () => {
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}testimonials/${testimonialId}`, formData)
    .then(res => {
      toast.dismiss();
      toast.success('Testimonial updated successfully');
      fetchData();
    }).catch(err => {
      console.log(err);
      toast.dismiss();
      toast.error('Something went wrong');
    });
  };

  const createData = () => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}testimonials`, formData)
    .then(res => {
      toast.dismiss();
      toast.success('Testimonial added successfully');
      router.push('/admin/testimonials');
    }).catch(err => {
      console.log(err);
      toast.dismiss();
      toast.error('Something went wrong');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (testimonialId === "new") {
      createData();
    } else {
      updateData();
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];

    if (file && file.size > 3 * 1024 * 1024) { // 3MB limit
      toast.error("File size exceeds 3MB");
      return;
    }

    setVideoFile(file);

    // Create FormData object to send video file
    const formDataVideo = new FormData();
    formDataVideo.append('video', file);

    // Make API call to upload video and receive a URL
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}uploads/video`, formDataVideo, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      const videoUrl = res.data.result; // Assuming the API responds with a video URL
      setFormData({
        ...formData,
        videoUrl: videoUrl
      });
      setCurrentVideoLink(videoUrl);
      toast.success("Video uploaded successfully");
    })
    .catch(err => {
      console.log(err);
      toast.error("Error uploading video");
    });
  };

  useEffect(() => {
    fetchDoctor();
    if (testimonialId !== "new") {
      fetchData();
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Edit Testimonial</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Patient Name */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientName">Patient Name</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName || ''}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter patient name"
          />
        </div>

        {/* Condition */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="condition">Condition</label>
          <input
            type="text"
            name="condition"
            value={formData.condition || ''}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter patient's condition"
          />
        </div>

        {/* Treatment */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="treatment">Treatment</label>
          <input
            type="text"
            name="treatment"
            value={formData.treatment || ''}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter treatment received"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title || ''}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Short Quote */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortQuote">Short Quote</label>
          <input
            type="text"
            name="shortQuote"
            value={formData.shortQuote || ''}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Full Testimonial */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullTestimonial">Full Testimonial</label>
          <textarea
            name="fullTestimonial"
            rows="4"
            value={formData.fullTestimonial || ''}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Video */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload Video (Max 3MB)</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {currentVideoLink && (
            <video controls className="w-full h-auto rounded-md shadow-md mb-4">
              <source src={currentVideoLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Doctor Dropdown */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctor">Doctor</label>
          <select
            name="doctor"
            value={formData.doctor || ''}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Doctor</option>
            {allDoctors.map((doctor) => (
              <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
            ))}
          </select>
        </div>

        {/* Location Dropdown */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">Location</label>
          <select
            name="location"
            value={formData.location || ''}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
          <option value="">Select Location</option>
            <option value="Bengaluru - Whitefield">Bengaluru - Whitefield</option>
            <option value="Bengaluru - Hebbal">Bengaluru - Hebbal</option>
            <option value="New Delhi - Greater Kailash 1">New Delhi - Greater Kailash 1</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-primary-orange font-semibold text-white p-3 rounded-md hover:bg-orange-700 transition-colors duration-200"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTestimonial;
