import React, { useRef, useEffect, useState } from "react";

const TextEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const [customColor, setCustomColor] = useState("#000000");

  // Function to wrap selected text with a tag and apply Tailwind class
  const applyStyle = (tag, className) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();

    if (selectedText) {
      const wrapper = document.createElement(tag); // Create the desired tag
      wrapper.className = className; // Apply Tailwind class
      wrapper.textContent = selectedText; // Set the selected text as content
      range.deleteContents(); // Remove the selected text
      range.insertNode(wrapper); // Insert the wrapped text
      selection.removeAllRanges(); // Clear the selection
    }
  };

  // Apply inline styles like bold, italic, underline
  const applyInlineStyle = (style) => {
    document.execCommand(style, false, null);
  };

  // Apply text color based on className (Tailwind CSS)
  const applyTextColor = (className) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();

    if (selectedText) {
      const wrapper = document.createElement("span");
      wrapper.className = className; // Apply the Tailwind text color class
      wrapper.textContent = selectedText;
      range.deleteContents();
      range.insertNode(wrapper);
      selection.removeAllRanges();
    }
  };

  // Apply custom color
  const applyCustomColor = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();

    if (selectedText) {
      const wrapper = document.createElement("span");
      wrapper.style.color = customColor; // Apply custom color via inline style
      wrapper.textContent = selectedText;
      range.deleteContents();
      range.insertNode(wrapper);
      selection.removeAllRanges();
    }
  };

  // Handle text alignment
  const applyAlignment = (alignment) => {
    document.execCommand("justify" + alignment);
  };

  // Handle input (edit) events
  const handleInput = () => {
    const content = editorRef.current.innerHTML;
    onChange(content); // Trigger parent state update
  };

  // Ensure that on every render, the editor contains the updated value
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  return (
    <div className="p-4 bg-gray-100 ">
      {/* Style Controls */}
      <div className="mb-4 flex space-x-4">
        {/* Heading and Text Style Dropdown */}
        <div className="relative">
          <select
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onChange={(e) => {
              const selected = e.target.value;
              if (selected === "H1") applyStyle("h1", "text-3xl md:text-4xl lg:text-5xl");
              else if (selected === "H2") applyStyle("h2", "text-2xl md:text-3xl lg:text-4xl");
              else if (selected === "H3") applyStyle("h3", "text-xl md:text-2xl lg:text-3xl");
              else if (selected === "H4") applyStyle("h4", "text-lg md:text-xl lg:text-2xl");
              else if (selected === "Normal") applyStyle("p", "text-sm md:text-base");
              else if (selected === "Small") applyStyle("p", "text-xs md:text-sm");
            }}
          >
            <option value="">Text Style</option>
            <option value="H1">H1</option>
            <option value="H2">H2</option>
            <option value="H3">H3</option>
            <option value="H4">H4</option>
            <option value="Normal">Normal Text</option>
            <option value="Small">Small Text</option>
          </select>
        </div>

        {/* Inline Style Dropdown */}
        <div className="relative">
          <select
            className="bg-green-500 text-white px-4 py-2 rounded"
            onChange={(e) => {
              const selected = e.target.value;
              if (selected === "Bold") applyInlineStyle("bold");
              else if (selected === "Italic") applyInlineStyle("italic");
              else if (selected === "Underline") applyInlineStyle("underline");
            }}
          >
            <option value="">Inline Style</option>
            <option value="Bold">Bold</option>
            <option value="Italic">Italic</option>
            <option value="Underline">Underline</option>
          </select>
        </div>

        {/* Alignment Dropdown */}
        <div className="relative">
          <select
            className="bg-purple-500 text-white px-4 py-2 rounded"
            onChange={(e) => {
              const selected = e.target.value;
              if (selected === "Left") applyAlignment("Left");
              else if (selected === "Center") applyAlignment("Center");
              else if (selected === "Right") applyAlignment("Right");
            }}
          >
            <option value="">Alignment</option>
            <option value="Left">Left</option>
            <option value="Center">Center</option>
            <option value="Right">Right</option>
          </select>
        </div>

        {/* Text Color Dropdown */}
        <div className="relative">
          <select
            className="bg-red-500 text-white px-4 py-2 rounded"
            onChange={(e) => {
              const selected = e.target.value;
              if (selected === "Red") applyTextColor("text-red-500");
              else if (selected === "Green") applyTextColor("text-green-500");
            }}
          >
            <option value="">Text Color</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
          </select>
        </div>

        {/* Custom Color Picker */}
        <div className="flex items-center">
          <input
            type="color"
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
            className="border border-gray-300 px-2 py-1 rounded mr-2"
          />
          <button
            onClick={applyCustomColor}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            Apply Custom Color
          </button>
        </div>
      </div>

      {/* Editable Text Area */}
      <div
        ref={editorRef}
        contentEditable
        className="p-4 border border-gray-300 min-h-[150px] bg-white"
        onInput={handleInput}
      ></div>
    </div>
  );
};

export default TextEditor;