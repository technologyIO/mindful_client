import React, { useState } from 'react';

const AddDoctorModal = ({ showModal, setShowModal, addDoctor }) => {
  const [doctor, setDoctor] = useState({
    name: '',
    profilePic: '',
    experience: '',
    location: '',
    qualification: '',
  });
  const [formData, setFormData] = useState({
    name: 'Dr Subham',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    profession_background: ['M.Phill - Clinical Psychologist', 'M.Sc. - Psychology', 'B.Sc. - Psychology'],
    language_spoken: ['English', 'Kannada', 'Malayalam', 'Hindi', 'Tamil'],
    specialization: ['Anxiety', 'Depression', 'Bipolar Disorder', 'EMDR'],
    experience: 30,
    fees: 500,
    image: '/doctor/Dr Subham.jpg',
    phone: '123-456-7890',
    email: '5bIaS@example.com',
    website: 'www.davidsamson.com',
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], // Initial availability
  });

  const [newSpecialization, setNewSpecialization] = useState('');
  const [newLanguage, setNewLanguage] = useState('');
  const [newProfessionBackground, setNewProfessionBackground] = useState('');

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


  const handleInputChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addDoctor(doctor);
    setShowModal(false);
  };
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
    if (newSpecialization.trim() !== '') {
      setFormData((prevData) => ({
        ...prevData,
        specialization: [...prevData.specialization, newSpecialization.trim()],
      }));
      setNewSpecialization('');
    }
  };

  const removeSpecialization = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      specialization: prevData.specialization.filter((_, i) => i !== index),
    }));
  };

  const addLanguage = () => {
    if (newLanguage.trim() !== '') {
      setFormData((prevData) => ({
        ...prevData,
        language_spoken: [...prevData.language_spoken, newLanguage.trim()],
      }));
      setNewLanguage('');
    }
  };

  const removeLanguage = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      language_spoken: prevData.language_spoken.filter((_, i) => i !== index),
    }));
  };

  const addProfessionBackground = () => {
    if (newProfessionBackground.trim() !== '') {
      setFormData((prevData) => ({
        ...prevData,
        profession_background: [...prevData.profession_background, newProfessionBackground.trim()],
      }));
      setNewProfessionBackground('');
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


  return (
    <div className="p-5 md:p-10 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <form onSubmit={handleSubmit} className="max-w-4xl  h-[500px] overflow-scroll  mx-auto bg-white shadow-md rounded-lg ">
      <div className="p-6 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
        <img
          src={formData.image}
          alt="Doctor's profile"
          className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
        />
        <div className="text-center lg:text-left">
          <label className="block text-xl font-semibold">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 border p-2 rounded"
            />
          </label>
          <label className="block mt-3 text-gray-600">
            Experience:
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

      <div className="px-6 py-4 border-t">
        <h3 className="text-xl font-bold text-primary-orange">About</h3>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          className="w-full mt-2 border p-2 rounded"
        />
      </div>

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
        <h3 className="text-xl font-bold text-primary-orange">Availability</h3>
        <div className="flex space-x-2">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => toggleAvailability(day)}
              className={`px-4 py-2 rounded ${formData.availability.includes(day) ? 'bg-primary-orange text-white' : 'bg-gray-300 text-black'}`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      <div className="py-8 px-4">
        <div>
          <h1 className="text-2xl text-primary-orange text-center mb-4 font-semibold">Testimonials</h1>
        </div>
        {/* <TestimonialComponent /> */}
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

export default AddDoctorModal;




