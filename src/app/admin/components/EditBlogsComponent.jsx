"use client"
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button, TextField, IconButton, MenuItem, Select } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';

const EditBlogsComponent = ({ blog, setBlog, isEdit }) => {
    const [expanded, setExpanded] = useState(false);
    const handleInputChange = (e, index, type, accordionIndex = null) => {
        const { name, value } = e.target;

        if (type === 'sections') {
            const updatedSections = [...blog.sections];

            if (accordionIndex !== null) {
                updatedSections[index].sections[accordionIndex][name] = value;
            } else {
                updatedSections[index][name] = value;
            }

            setBlog({ ...blog, sections: updatedSections });
        } else {
            setBlog({ ...blog, [name]: value });
        }
    };

    const handleAddSection = () => {
        setBlog({
            ...blog,
            sections: [...(blog?.sections || []), { type: 'content', content: '', order: (blog?.sections?.length || 0) + 1 }],
        });
    };

    const handleRemoveSection = (index) => {
        const updatedSections = blog?.sections?.filter((_, i) => i !== index);
        setBlog({ ...blog, sections: updatedSections });
    };

    const handleAddAccordionSection = (index) => {
        const updatedSections = [...(blog?.sections || [])];
        updatedSections[index].sections = [
            ...(updatedSections[index]?.sections || []),
            { type: 'content', content: '', order: (updatedSections[index]?.sections?.length || 0) + 1 },
        ];
        setBlog({ ...blog, sections: updatedSections });
    };

    const handleRemoveAccordionSection = (index, accordionIndex) => {
        const updatedSections = [...(blog?.sections || [])];
        updatedSections[index].sections = updatedSections[index]?.sections?.filter((_, i) => i !== accordionIndex);
        setBlog({ ...blog, sections: updatedSections });
    };

    const moveSection = (index, direction) => {
        const updatedSections = [...(blog?.sections || [])];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;

        if (targetIndex < 0 || targetIndex >= updatedSections.length) return;

        const temp = updatedSections[targetIndex];
        updatedSections[targetIndex] = updatedSections[index];
        updatedSections[index] = temp;

        updatedSections[targetIndex].order = targetIndex + 1;
        updatedSections[index].order = index + 1;

        setBlog({ ...blog, sections: updatedSections });
    };

    if (!blog) {
        return <div>Loading...</div>; // Add a loading state or a spinner here
    }
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <form className="space-y-4 p-4 bg-purple-100 shadow-md rounded-lg">
            <div className=''>
                <label className="block text-gray-700">Title</label>
                <TextField
                    fullWidth
                    name="title"
                    value={blog?.title || ''}
                    onChange={(e) => handleInputChange(e)}
                    variant="outlined"
                    className='bg-white'
                />
            </div>

            <div>
                <label className="block text-gray-700">Main Image URL</label>
                <TextField
                    fullWidth
                    name="mainImage"
                    value={blog?.mainImage || ''}
                    onChange={(e) => handleInputChange(e)}
                    variant="outlined"
                    className='bg-white'
                />
            </div>

            <div className="space-y-4">
                {blog?.sections?.map((section, index) => (
                    <Accordion key={index} expanded={expanded === `panel${index}`}
                        onChange={handleAccordionChange(`panel${index}`)}>
                        <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        >
                            <div className="flex justify-between items-center w-full">
                                <div className="text-lg font-medium capitalize">{section?.type} {index + 1}</div>
                                <div className="space-x-2">
                                    <button className="py-2 px-3 rounded-xl shadow-lg bg-green-500 text-white font-semibold" onClick={(e) => { e.preventDefault(); moveSection(index, 'up') }}
                                    >
                                        Up
                                    </button>
                                    <button className="py-2 px-3 rounded-xl shadow-lg bg-orange-500 text-white font-semibold" onClick={(e) => { e.preventDefault(); moveSection(index, 'down') }}
                                    >
                                        Down
                                    </button>
                                    <button className="py-2 px-3 rounded-xl shadow-lg bg-red-500 text-white font-semibold" onClick={(e) => { e.preventDefault(); handleRemoveSection(index) }}
                                    >
                                        {/* <DeleteIcon /> */}
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </AccordionSummary>

                        <AccordionDetails>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-700">Section Type</label>
                                    <Select
                                        name="type"
                                        value={section.type}
                                        onChange={(e) => handleInputChange(e, index, 'sections')}
                                        fullWidth
                                    >
                                        <MenuItem value="header">Header</MenuItem>
                                        <MenuItem value="content">Content</MenuItem>
                                        <MenuItem value="image">Image</MenuItem>
                                        <MenuItem value="button">Button</MenuItem>
                                        <MenuItem value="accordion">Accordion</MenuItem>
                                        <MenuItem value="space">Space</MenuItem>

                                    </Select>
                                </div>
                                <ContentManage section={section} handleInputChange={handleInputChange} handleAddAccordionSection={handleAddAccordionSection} index={index} />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>

            <Button
                // startIcon={<AddIcon />}
                variant="contained"
                color="primary"
                onClick={handleAddSection}
            >
                Add Section
            </Button>
        </form>
    );
}

const ContentManage = ({ section, handleInputChange, handleAddAccordionSection,index }) => {
    return (
        <>
            {section.type === 'header' && (
                <div>
                    <label className="block text-gray-700">Header</label>
                    <TextField
                        name="header"
                        value={section.header || ''}
                        onChange={(e) => handleInputChange(e, index, 'sections')}
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                    />
                </div>
            )}

            {section.type === 'content' && (
                <div>
                    <label className="block text-gray-700">Content</label>
                    <TextField
                        name="content"
                        value={section.content || ''}
                        onChange={(e) => handleInputChange(e, index, 'sections')}
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                    />
                </div>
            )}

            {section.type === 'image' && (
                <div>
                    <label className="block text-gray-700">Image URL</label>
                    <TextField
                        name="content"
                        value={section.content || ''}
                        onChange={(e) => handleInputChange(e, index, 'sections')}
                        fullWidth
                        variant="outlined"
                    />
                </div>
            )}

            {section.type === 'button' && (
                <div className="space-y-2">
                    <div>
                        <label className="block text-gray-700">Button Text</label>
                        <TextField
                            name="text"
                            value={section.text || ''}
                            onChange={(e) => handleInputChange(e, index, 'sections')}
                            fullWidth
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Link</label>
                        <TextField
                            name="link"
                            value={section.link || ''}
                            onChange={(e) => handleInputChange(e, index, 'sections')}
                            fullWidth
                            variant="outlined"
                        />
                    </div>
                </div>
            )}

            {section.type === 'accordion' && (
                <div>
                    <div className="space-y-2">
                        <div>
                            <label className="block text-gray-700">Accordion Title</label>
                            <TextField
                                name="title"
                                value={section.title || ''}
                                onChange={(e) => handleInputChange(e, index, 'sections')}
                                fullWidth
                                variant="outlined"
                            />
                        </div>
                    </div>
                    {section?.sections?.map((accSection, accIndex) => (
                        <Accordion key={accIndex} expanded>
                            <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            >
                                <div>Accordion Section {accIndex + 1}</div>
                            </AccordionSummary>

                            <AccordionDetails>
                                <div className="space-y-2">
                                    <div>
                                        <label className="block text-gray-700">Type</label>
                                        <Select
                                            name="type"
                                            value={accSection.type}
                                            onChange={(e) => handleInputChange(e, index, 'sections', accIndex)}
                                            fullWidth
                                        >
                                            <MenuItem value="header">Header</MenuItem>
                                            <MenuItem value="content">Content</MenuItem>
                                            <MenuItem value="image">Image</MenuItem>
                                            <MenuItem value="space">Space</MenuItem>
                                        </Select>
                                    </div>
                                    
                                    {accSection.type === 'header' && (
                                        <div>
                                            <label className="block text-gray-700">Header</label>
                                            <TextField
                                                name="header"
                                                value={accSection.header || ''}
                                                onChange={(e) => handleInputChange(e, index, 'sections', accIndex)}
                                                multiline
                                                rows={4}
                                                fullWidth
                                                variant="outlined"
                                            />
                                        </div>
                                    )}
                                    {accSection.type === 'content' && (
                                        <div>
                                            <label className="block text-gray-700">Content</label>
                                            <TextField
                                                name="content"
                                                value={accSection.content || ''}
                                                onChange={(e) => handleInputChange(e, index, 'sections', accIndex)}
                                                multiline
                                                rows={4}
                                                fullWidth
                                                variant="outlined"
                                            />
                                        </div>
                                    )}

                                    {accSection.type === 'image' && (
                                        <div>
                                            <label className="block text-gray-700">Image URL</label>
                                            <TextField
                                                name="content"
                                                value={accSection.content || ''}
                                                onChange={(e) => handleInputChange(e, index, 'sections', accIndex)}
                                                fullWidth
                                                variant="outlined"
                                            />
                                        </div>
                                    )}


                                    <button className="py-2 px-3 rounded-xl shadow-lg bg-red-500 text-white font-semibold" onClick={(e) => { e.preventDefault(); handleRemoveAccordionSection(index, accIndex) }}
                                    >
                                        {/* <DeleteIcon /> */}
                                        Remove
                                    </button>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))}

                    <Button
                        // startIcon={<AddIcon />}
                        variant="contained"
                        color="primary"
                        onClick={() => handleAddAccordionSection(index)}
                    >
                        Add Accordion Section
                    </Button>
                </div>
            )}
        </>
    )
}

export default EditBlogsComponent;
