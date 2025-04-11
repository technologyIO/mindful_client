// AboutComponent.js
"use client"
import React, { useState } from 'react';

const AboutComponent = ({ aboutText }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewTextLength = 150; // Adjust the length as needed

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="px-6 py-4 border-t">
      <h3 className="text-2xl md:text-3xl  font-bold text-primary-orange">About</h3>
      <p
        className="mt-2 text-gray-700"
        style={{ whiteSpace: 'pre-line' }} // Preserves new lines and spaces
      >
        {isExpanded ? aboutText : `${aboutText.substring(0, previewTextLength)}...`}
      </p>
      {aboutText.length > previewTextLength && (
        <button
          onClick={toggleExpanded}
          className="mt-2 text-primary-orange font-medium focus:outline-none"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default AboutComponent;
