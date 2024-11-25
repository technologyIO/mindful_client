"use client"
import React, { useState } from 'react'
const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        dateOfBirth: '',
        gender: '',
        location: '',
        clinic: '',
        doctor: '',
        appointmentDate: '',
        appointmentTime: '',
        mode: '',
        consent: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };
  return (
    <>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary-orange mb-4 border-b">
                        Request An Appointment
                    </h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-500 mb-2">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="border p-2 rounded w-full"
                                onChange={handleInputChange}
                                value={formData.firstName}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-500 mb-2">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="border p-2 rounded w-full"
                                onChange={handleInputChange}
                                value={formData.lastName}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-500 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="border p-2 rounded w-full"
                                onChange={handleInputChange}
                                value={formData.email}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-500 mb-2">Phone No.</label>
                            <input
                                type="tel"
                                name="phoneNo"
                                className="border p-2 rounded w-full"
                                onChange={handleInputChange}
                                value={formData.phoneNo}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-500 mb-2">Date of Birth</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                placeholder="Date of Birth"
                                className="border p-2 rounded w-full"
                                onChange={handleInputChange}
                                value={formData.dateOfBirth || '1990-01-01'}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-500 mb-2">Select Gender</label>
                            <select
                                name="gender"
                                className="border p-2 rounded w-full"
                                onChange={handleInputChange}
                                value={formData.gender}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-500 mb-2">Select Location</label>
                            <select
                                name="location"
                                className="border p-2 rounded w-full"
                                onChange={handleInputChange}
                                value={formData.location}
                            >
                                <option value="mysore">Mysore</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-500 mb-2">Select Clinic</label>
                            <select
                                name="clinic"
                                className="border p-2 rounded w-full"
                                onChange={handleInputChange}
                                value={formData.clinic}
                            >
                                <option value="apollo">Apollo Clinic Mysore</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-500 mb-2">Select Doctor</label>
                            <select
                                name="doctor"
                                className="border p-2 rounded w-full"
                                onChange={handleInputChange}
                                value={formData.doctor}
                            >
                                <option value="">Select Doctor</option>
                                <option value="naveen">NAVEEN S</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-500 mb-2">Select Appointment Date</label>
                            <input
                                type="date"
                                name="appointmentDate"
                                className="border p-2 rounded w-full"
                                onChange={handleInputChange}
                                value={new Date(Date.now() + 86400000).toISOString().substr(0, 10)}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-500 mb-2">Select Time</label>
                            <select
                                name="appointmentTime"
                                className="border p-2 rounded w-full"
                                onChange={handleInputChange}
                                value={formData.appointmentTime}
                            >
                                <option value="16:50-16:55">16:50-16:55</option>
                                <option value="14:50-14:55">14:50-14:55</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-500 mb-2">Select Mode</label>
                            <select
                                name="mode"
                                className="border p-2 rounded w-full"
                                onChange={handleInputChange}
                                value={formData.mode}
                            >
                                <option value="inPerson">In-Person</option>
                                <option value="video">Video Consultation</option>
                            </select>
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="consent"
                                    className="mr-2"
                                    onChange={handleInputChange}
                                    checked={formData.consent}
                                />
                                <span>I Agree Patient Information Consent</span>
                            </label>
                        </div>
                        <div className="col-span-1 md:col-span-2 flex justify-end gap-4">
                            <button
                                type="button"
                                className="bg-gray-300 text-black px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-primary-orange text-white px-4 py-2 rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
    </>
  )
}

export default AppointmentForm