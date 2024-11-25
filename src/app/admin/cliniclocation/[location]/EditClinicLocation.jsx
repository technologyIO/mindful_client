import React, { useState } from 'react';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const EditClinicLocation = ({ data, saveData }) => {
    const [images, setImages] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [formData, setFormData] = useState({
        addressTitle: data?.addressTitle || '',
        city: data?.city || '',
        address: data?.address || '',
        googleMapLink: data?.googleMapLink || '',
        call: data?.call || '',
        slug: data?.slug || ''
    });

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const imageSrc = URL.createObjectURL(file);
        const imageAlt = file.name;

        const newImage = {
            src: imageSrc,
            alt: imageAlt,
            className: '', 
            tag: 'None', 
        };

        setImages((prevImages) => [...prevImages, newImage]);
    };

    const handleImageTypeChange = (index, type) => {
        setImages((prevImages) =>
            prevImages.map((img, imgIndex) =>
                imgIndex === index
                    ? {
                        ...img,
                        className: type === 'primary' ? 'col-span-2' : 'col-span-2 row-span-2',
                        tag: type.charAt(0).toUpperCase() + type.slice(1), 
                    }
                    : img
            )
        );
    };

    const handleRemoveImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, imgIndex) => imgIndex !== index));
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
        console.log('Images Array:', images);
        // Further processing like API call can be done here
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <div className="p-6">
        <div className='flex justify-end '>
            <div onClick={()=>saveData(formData)} className='text-xl cursor-pointer hover:bg-green-400 hover:shadow-lg select-none font-semibold bg-green-500 text-white p-2 rounded-xl'>Save</div>
        </div>
            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                aria-label="Home Page Sections"
            >
                <Tab className="font-semibold text-md" label="Content" />
                <Tab className="font-semibold text-md" label="Images" />
            </Tabs>
            <div className="px-10">
                <TabPanel value={selectedTab} index={0}>
                    <div className="flex flex-col ">
                        <div className="mb-4">
                            <label className="text-lg font-semibold">Heading</label>
                            <input
                                name="addressTitle"
                                value={formData.addressTitle}
                                onChange={handleInputChange}
                                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-lg font-semibold">City</label>
                            <input
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-lg font-semibold">Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-lg font-semibold">Google Map Link</label>
                            <input
                                name="googleMapLink"
                                value={formData.googleMapLink}
                                onChange={handleInputChange}
                                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-lg font-semibold">Contact Number</label>
                            <input
                                name="call"
                                value={formData.call}
                                onChange={handleInputChange}
                                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-lg font-semibold">Slug</label>
                            <input
                                name="slug"
                                value={formData.slug}
                                onChange={handleInputChange}
                                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                            />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={selectedTab} index={1}>
                    <div className="flex flex-col items-start">
                        <div className="flex flex-col mb-6">
                            <label className="text-lg font-semibold">Upload Images</label>
                            <input
                                type="file"
                                className="border-2 w-full rounded-xl p-2 text-xl border-gray-400 outline-none"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                        </div>
                        {images.length > 0 && (
                            <div className="mt-6">
                                {images.map((image, index) => (
                                    <div key={index} className="mb-4">
                                        <img src={image.src} alt={image.alt} className={image.className} width={100} />
                                        <div className="mt-2">
                                            <label className="mr-4">Set as:</label>
                                            <button
                                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                                onClick={() => handleImageTypeChange(index, 'primary')}
                                            >
                                                Primary
                                            </button>
                                            <button
                                                className="bg-green-500 text-white px-4 py-2 rounded"
                                                onClick={() => handleImageTypeChange(index, 'secondary')}
                                            >
                                                Secondary
                                            </button>
                                        </div>
                                        <div className="mt-2">
                                            <span className="font-bold">Tag:</span> {image.tag}
                                        </div>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
                                            onClick={() => handleRemoveImage(index)}
                                        >
                                            Remove Image
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                        <button
                            className="bg-purple-600 text-white px-4 py-2 mt-4 rounded"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </TabPanel>
            </div>
        </div>
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
            {value === index && <div className='p-6'>{children}</div>}
        </div>
    );
}

export default EditClinicLocation;
