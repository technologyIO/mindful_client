"use client";
import { Avatar, CircularProgress } from "@mui/material";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditDoctorDetail = () => {
  const [formData, setFormData] = useState();
  const router = useRouter();
  const pathname = usePathname();
  const [newSpecialization, setNewSpecialization] = useState("");
  const [newLanguage, setNewLanguage] = useState("");
  const [newProfessionBackground, setNewProfessionBackground] = useState("");
  const [loading, setLoading] = useState(false);
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const doctorId = pathname.split("/").pop();

  const fetchDoctorDetail = () => {
    if (doctorId) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}doctors/${doctorId}`)
        .then((res) => {
          setFormData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // UseEffect to populate formData based on route
  useEffect(() => {
    // Check if the current route is /admin/doctors/add
    if (pathname === "/admin/doctors/add") {
      // Clear form data for adding a new doctor
      setFormData({
        name: "",
        about: "",
        designation: "",
        profession_background: [],
        language_spoken: [],
        specialization: [],
        experience: "",
        image: "",
        phone: "",
        email: "",
        website: "",
        availability: [],
        location: "",
        metaTitle: "",         // New meta title field
        metaDescription: "",   // New meta description field
      });
    } else {
      // Pre-fill form data with existing doctor details
      fetchDoctorDetail();
    }
  }, [router.pathname]);

  // Handle toggling availability
  const toggleAvailability = (day) => {
    setFormData((prevData) => {
      const isAvailable = prevData.availability.includes(day);
      return {
        ...prevData,
        availability: isAvailable
          ? prevData.availability.filter((availableDay) => availableDay !== day)
          : [...prevData.availability, day],
      };
    });
  };

  // Other handlers (add/remove specializations, languages, and profession background)
  const addSpecialization = () => {
    if (newSpecialization.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        specialization: [...prevData.specialization, newSpecialization.trim()],
      }));
      setNewSpecialization("");
    }
  };

  const removeSpecialization = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      specialization: prevData.specialization.filter((_, i) => i !== index),
    }));
  };

  const addLanguage = () => {
    if (newLanguage.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        language_spoken: [...prevData.language_spoken, newLanguage.trim()],
      }));
      setNewLanguage("");
    }
  };

  const removeLanguage = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      language_spoken: prevData.language_spoken.filter((_, i) => i !== index),
    }));
  };

  const addProfessionBackground = () => {
    if (newProfessionBackground.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        profession_background: [...prevData.profession_background, newProfessionBackground.trim()],
      }));
      setNewProfessionBackground("");
    }
  };

  const removeProfessionBackground = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      profession_background: prevData.profession_background.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createDoctor = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}doctors`, formData)
      .then((res) => {
        router.push("/admin/doctors");
        toast.dismiss();
        toast.success("Doctor added successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.dismiss();
        toast.error("Something went wrong");
      });
  };

  const editDoctorDetail = () => {
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}doctors/${doctorId}`, formData)
      .then((res) => {
        router.push("/admin/doctors");
        toast.dismiss();
        toast.success("Doctor updated successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.dismiss();
        toast.error("Something went wrong");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation for required fields
    if (
      !formData?.name ||
      !formData?.designation ||
      !formData?.experience ||
      !formData?.location ||
      formData?.availability.length === 0
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    if (pathname === "/admin/doctors/add") {
      createDoctor();
    } else {
      editDoctorDetail();
    }
  };

  const handleImageChange = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}uploads/file`, formData)
        .then((res) => {
          setLoading(false);
          setFormData((prevData) => ({
            ...prevData,
            image: res.data.result,
          }));
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <div className="p-5 md:p-10">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="relative group">
            {loading ? (
              <div className='w-32 h-32 flex justify-center items-center lg:w-40 lg:h-40 rounded-full'>
                <CircularProgress />
              </div>
            ) : (
              <>
                {formData?.image ? (
                  <img
                    src={formData?.image}
                    alt="Doctor's profile"
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
                  />
                ) : (
                  <Avatar className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover" />
                )}
              </>
            )}
            <label
              htmlFor="imageUpload"
              className="absolute inset-0 flex justify-center text-white items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-full cursor-pointer transition-opacity"
            >
              Edit
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          <div className="text-center lg:text-left">
            <label className="block text-gray-600">
              Name <span className="text-red-500">*</span>
              <input
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleChange}
                className="w-full mt-2 border p-2 rounded"
              />
            </label>

            <label className="block mt-3 text-gray-600">
              Designation <span className="text-red-500">*</span>
              <input
                type="text"
                name="designation"
                value={formData?.designation}
                onChange={handleChange}
                className="w-full mt-2 border p-2 rounded"
              />
            </label>

            <label className="block mt-3 text-gray-600">
              Experience <span className="text-red-500">*</span>
              <input
                type="number"
                name="experience"
                value={formData?.experience}
                onChange={handleChange}
                className="w-full mt-2 border p-2 rounded"
              />
            </label>
          </div>
        </div>

        <div className="px-6 py-4 border-t">
          <label className="block mt-3 text-gray-600">
            <h3 className="text-xl font-bold text-primary-orange">About <span className="text-red-500">*</span></h3>
            <textarea
              name="about"
              value={formData?.about}
              onChange={handleChange}
              className="w-full mt-2 border-2 border-gray-200 outline-none p-2 rounded"
              placeholder="Write a short description about the doctor"
              rows="8"
            />
          </label>
          <h3 className="text-xl font-bold text-primary-orange">Location <span className="text-red-500">*</span></h3>
          <select
            name="location"
            value={formData?.location}
            onChange={handleChange}
            className="w-full mt-2 border p-2 rounded"
            required
          >
            <option value="">Select Location</option>
            <option value="Bengaluru - Whitefield">Bengaluru - Whitefield</option>
            <option value="Bengaluru - Hebbal">Bengaluru - Hebbal</option>
            <option value="New Delhi - Greater Kailash 1">New Delhi - Greater Kailash 1</option>
          </select>
        </div>

        <div className="px-6 py-4 border-t">
          <h3 className="text-xl font-bold text-primary-orange">Specialization</h3>
          <ul className="list-disc pl-5">
            {formData?.specialization.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                {item}
                <button
                  type="button"
                  className="text-red-500 ml-2"
                  onClick={() => removeSpecialization(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            name="newSpecialization"
            value={newSpecialization}
            onChange={(e) => setNewSpecialization(e.target.value)}
            placeholder="Add new specialization"
            className="w-full mt-2 border p-2 rounded"
          />
          <button
            type="button"
            onClick={addSpecialization}
            className="mt-2 bg-primary-orange text-white px-4 py-2 rounded"
          >
            Add Specialization
          </button>
        </div>

        <div className="px-6 py-4 border-t">
          <h3 className="text-xl font-bold text-primary-orange">Professional Background</h3>
          <ul className="list-disc pl-5">
            {formData?.profession_background.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                {item}
                <button
                  type="button"
                  className="text-red-500 ml-2" 
                  onClick={() => removeProfessionBackground(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            name="newProfessionBackground"
            value={newProfessionBackground}
            onChange={(e) => setNewProfessionBackground(e.target.value)}
            placeholder="Add new professional background"
            className="w-full mt-2 border p-2 rounded"
          />
          <button
            type="button"
            onClick={addProfessionBackground}
            className="mt-2 bg-primary-orange text-white px-4 py-2 rounded"
          >
            Add Background
          </button>
        </div>

        <div className="px-6 py-4 border-t">
          <h3 className="text-xl font-bold text-primary-orange">Languages Spoken</h3>
          <ul className="list-disc pl-5">
            {formData?.language_spoken.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                {item}
                <button
                  type="button"
                  className="text-red-500 ml-2"
                  onClick={() => removeLanguage(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            name="newLanguage"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            placeholder="Add new language"
            className="w-full mt-2 border p-2 rounded"
          />
          <button
            type="button"
            onClick={addLanguage}
            className="mt-2 bg-primary-orange text-white px-4 py-2 rounded"
          >
            Add Language
          </button>
        </div>

        <div className="px-6 py-4 border-t">
          <h3 className="text-xl font-bold text-primary-orange">Availability <span className="text-red-500">*</span></h3>
          <div className="flex space-x-2">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleAvailability(day)}
                className={`px-4 py-2 rounded ${
                  formData?.availability.includes(day) ? "bg-primary-orange text-white" : "bg-gray-300 text-black"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 py-4 border-t">
          <h1 className="text-2xl text-primary-orange text-center mb-4 font-semibold">Testimonials</h1>
          {/* <TestimonialComponent /> */}
        </div>

        {/* New Meta Fields */}
        <div className="px-6 py-4 border-t">
          <label className="block text-gray-600">
            Meta Title
            <input
              type="text"
              name="metaTitle"
              value={formData?.metaTitle}
              onChange={handleChange}
              className="w-full mt-2 border p-2 rounded"
              placeholder="Enter meta title"
            />
          </label>
          <label className="block mt-3 text-gray-600">
            Meta Description
            <textarea
              name="metaDescription"
              value={formData?.metaDescription}
              onChange={handleChange}
              className="w-full mt-2 border p-2 rounded"
              placeholder="Enter meta description"
              rows="4"
            />
          </label>
        </div>

        <div className="px-6 py-4 border-t text-center">
          <button
            type="submit"
            className="w-full py-4 bg-primary-orange text-white font-bold rounded-lg hover:bg-orange-600 transition duration-200"
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDoctorDetail;
