"use client";
import { Avatar, CircularProgress, Switch } from "@mui/material";
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
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategorySpec, setNewCategorySpec] = useState("");
  const [loading, setLoading] = useState(false);

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const doctorId = pathname.split("/").pop();

  const fetchDoctorDetail = () => {
    if (doctorId) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}doctors/${doctorId}`)
        .then((res) => {
          // ensure new fields exist
          setFormData({
            ...res.data,
            specializationCategories: res.data.specialization_categories || {},
            toggleSpecialization: res.data.toggle_specialization || false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // initialize formData
  useEffect(() => {
    if (pathname === "/admin/doctors/add") {
      setFormData({
        name: "",
        about: "",
        designation: "",
        profession_background: [],
        language_spoken: [],
        specialization: [],
        specializationCategories: {},
        toggleSpecialization: false,
        experience: "",
        image: "",
        phone: "",
        email: "",
        website: "",
        availability: [],
        location: "",
        metaTitle: "",
        metaDescription: "",
      });
    } else {
      fetchDoctorDetail();
    }
  }, [router.pathname]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "toggleSpecialization") {
      setFormData((prev) => ({ ...prev, toggleSpecialization: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // flat specialization
  const addSpecialization = () => {
    if (newSpecialization.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        specialization: [...prev.specialization, newSpecialization.trim()],
      }));
      setNewSpecialization("");
    }
  };
  const removeSpecialization = (index) => {
    setFormData((prev) => ({
      ...prev,
      specialization: prev.specialization.filter((_, i) => i !== index),
    }));
  };

  // language
  const addLanguage = () => {
    if (newLanguage.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        language_spoken: [...prev.language_spoken, newLanguage.trim()],
      }));
      setNewLanguage("");
    }
  };
  const removeLanguage = (index) => {
    setFormData((prev) => ({
      ...prev,
      language_spoken: prev.language_spoken.filter((_, i) => i !== index),
    }));
  };

  // profession background
  const addProfessionBackground = () => {
    if (newProfessionBackground.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        profession_background: [...prev.profession_background, newProfessionBackground.trim()],
      }));
      setNewProfessionBackground("");
    }
  };
  const removeProfessionBackground = (index) => {
    setFormData((prev) => ({
      ...prev,
      profession_background: prev.profession_background.filter((_, i) => i !== index),
    }));
  };

  // availability
  const toggleAvailability = (day) => {
    setFormData((prev) => {
      const isAvailable = prev.availability.includes(day);
      return {
        ...prev,
        availability: isAvailable
          ? prev.availability.filter((d) => d !== day)
          : [...prev.availability, day],
      };
    });
  };

  // categorized specialization
  const addCategory = () => {
    if (newCategoryName.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        specializationCategories: {
          ...prev.specializationCategories,
          [newCategoryName.trim()]: [],
        },
      }));
      setNewCategoryName("");
    }
  };
  const removeCategory = (cat) => {
    setFormData((prev) => {
      const sc = { ...prev.specializationCategories };
      delete sc[cat];
      return { ...prev, specializationCategories: sc };
    });
  };
  const addCategorySpec = (cat) => {
    if (newCategorySpec.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        specializationCategories: {
          ...prev.specializationCategories,
          [cat]: [...prev.specializationCategories[cat], newCategorySpec.trim()],
        },
      }));
      setNewCategorySpec("");
    }
  };
  const removeCategorySpec = (cat, idx) => {
    setFormData((prev) => ({
      ...prev,
      specializationCategories: {
        ...prev.specializationCategories,
        [cat]: prev.specializationCategories[cat].filter((_, i) => i !== idx),
      },
    }));
  };

  // image upload handler
  const handleImageChange = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    if (file) {
      const data = new FormData();
      data.append("image", file);
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}uploads/file`, data)
        .then((res) => {
          setLoading(false);
          setFormData((prev) => ({ ...prev, image: res.data.result }));
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  const createDoctor = () => {
    const payload = {
      ...formData,
      specialization_categories: formData.specializationCategories,
      toggle_specialization: formData.toggleSpecialization,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}doctors`, payload)
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
    const payload = {
      ...formData,
      specialization_categories: formData.specializationCategories,
      toggle_specialization: formData.toggleSpecialization,
    };
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}doctors/${doctorId}`, payload)
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

  if (!formData) return <div className="flex justify-center py-20"><CircularProgress /></div>;

  return (
    <div className="p-5 md:p-10">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* === Image & Basic Info === */}
        <div className="p-6 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="relative group">
            {loading ? (
              <div className="w-32 h-32 flex justify-center items-center lg:w-40 lg:h-40 rounded-full">
                <CircularProgress />
              </div>
            ) : (
              <>
                {formData.image ? (
                  <img
                    src={formData.image}
                    alt="Doctor"
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
                  />
                ) : (
                  <Avatar className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover" />
                )}
              </>
            )}
            <label
              htmlFor="imageUpload"
              className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-full cursor-pointer transition-opacity text-white"
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
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 border p-2 rounded"
              />
            </label>
            <label className="block mt-3 text-gray-600">
              Designation <span className="text-red-500">*</span>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full mt-2 border p-2 rounded"
              />
            </label>
            <label className="block mt-3 text-gray-600">
              Experience <span className="text-red-500">*</span>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full mt-2 border p-2 rounded"
              />
            </label>
          </div>
        </div>

        {/* === About & Location === */}
        <div className="px-6 py-4 border-t">
          <label className="block mt-3 text-gray-600">
            <h3 className="text-xl font-bold text-primary-orange">
              About <span className="text-red-500">*</span>
            </h3>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="w-full mt-2 border-2 border-gray-200 outline-none p-2 rounded"
              rows="8"
            />
          </label>
          <h3 className="text-xl font-bold text-primary-orange mt-4">
            Location <span className="text-red-500">*</span>
          </h3>
          <select
            name="location"
            value={formData.location}
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

        {/* === Specialization Toggle === */}
        <div className="px-6 py-4 border-t flex items-center space-x-2">
          <Switch
            checked={formData.toggleSpecialization}
            onChange={handleChange}
            name="toggleSpecialization"
          />
          <span className="font-medium">Use Categorized Specializations</span>
        </div>

        {/* === Flat Specializations === */}
        {!formData.toggleSpecialization && (
          <div className="px-6 py-4 border-t">
            <h3 className="text-xl font-bold text-primary-orange">Specialization</h3>
            <ul className="list-disc pl-5">
              {formData.specialization.map((item, index) => (
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
            <div className="flex space-x-2 mt-2">
              <input
                type="text"
                value={newSpecialization}
                onChange={(e) => setNewSpecialization(e.target.value)}
                placeholder="Add new specialization"
                className="w-full border p-2 rounded"
              />
              <button
                type="button"
                onClick={addSpecialization}
                className="bg-primary-orange text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
          </div>
        )}

        {/* === Categorized Specializations === */}
        {formData.toggleSpecialization && (
          <div className="px-6 py-4 border-t">
            <h3 className="text-xl font-bold text-primary-orange">Specialization Categories</h3>
            {/* Add Category */}
            <div className="flex space-x-2 mt-2 mb-4">
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Category name"
                className="w-full border p-2 rounded"
              />
              <button
                type="button"
                onClick={addCategory}
                className="bg-primary-orange text-white px-4 py-2 rounded"
              >
                Add Category
              </button>
            </div>
            {/* List Categories */}
            {Object.entries(formData.specializationCategories).map(([cat, specs]) => (
              <div key={cat} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold">{cat}</h4>
                  <button
                    type="button"
                    onClick={() => removeCategory(cat)}
                    className="text-red-500"
                  >
                    Remove Category
                  </button>
                </div>
                <ul className="list-disc pl-5">
                  {specs.map((s, i) => (
                    <li key={i} className="flex justify-between">
                      {s}
                      <button
                        type="button"
                        onClick={() => removeCategorySpec(cat, i)}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-2 mt-2">
                  <input
                    type="text"
                    value={newCategorySpec}
                    onChange={(e) => setNewCategorySpec(e.target.value)}
                    placeholder={`Add to ${cat}`}
                    className="w-full border p-2 rounded"
                  />
                  <button
                    type="button"
                    onClick={() => addCategorySpec(cat)}
                    className="bg-primary-orange text-white px-4 py-2 rounded"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* === Professional Background === */}
        <div className="px-6 py-4 border-t">
          <h3 className="text-xl font-bold text-primary-orange">Professional Background</h3>
          <ul className="list-disc pl-5">
            {formData.profession_background.map((item, index) => (
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
          <div className="flex space-x-2 mt-2">
            <input
              type="text"
              value={newProfessionBackground}
              onChange={(e) => setNewProfessionBackground(e.target.value)}
              placeholder="Add new professional background"
              className="w-full border p-2 rounded"
            />
            <button
              type="button"
              onClick={addProfessionBackground}
              className="bg-primary-orange text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </div>

        {/* === Languages Spoken === */}
        <div className="px-6 py-4 border-t">
          <h3 className="text-xl font-bold text-primary-orange">Languages Spoken</h3>
          <ul className="list-disc pl-5">
            {formData.language_spoken.map((item, index) => (
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
          <div className="flex space-x-2 mt-2">
            <input
              type="text"
              value={newLanguage}
              onChange={(e) => setNewLanguage(e.target.value)}
              placeholder="Add new language"
              className="w-full border p-2 rounded"
            />
            <button
              type="button"
              onClick={addLanguage}
              className="bg-primary-orange text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </div>

        {/* === Availability === */}
        <div className="px-6 py-4 border-t">
          <h3 className="text-xl font-bold text-primary-orange">
            Availability <span className="text-red-500">*</span>
          </h3>
          <div className="flex space-x-2 flex-wrap">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleAvailability(day)}
                className={`px-4 py-2 rounded mb-2 ${
                  formData.availability.includes(day)
                    ? "bg-primary-orange text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* === Testimonials Placeholder === */}
        <div className="px-6 py-4 border-t">
          <h1 className="text-2xl text-primary-orange text-center mb-4 font-semibold">
            Testimonials
          </h1>
          {/* <TestimonialComponent /> */}
        </div>

        {/* === Meta Fields === */}
        <div className="px-6 py-4 border-t">
          <label className="block text-gray-600">
            Meta Title
            <input
              type="text"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
              className="w-full mt-2 border p-2 rounded"
              placeholder="Enter meta title"
            />
          </label>
          <label className="block mt-3 text-gray-600">
            Meta Description
            <textarea
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
              className="w-full mt-2 border p-2 rounded"
              placeholder="Enter meta description"
              rows="4"
            />
          </label>
        </div>

        {/* === Submit === */}
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
