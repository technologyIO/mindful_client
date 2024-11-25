import { Container, TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const EditServices = ({ data }) => {
  console.log('service', data);
  const [serviceData, setServiceData] = useState(data);

  // Function to handle input change for service fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  // Function to handle avail array input changes
  const handleAvailChange = (e, availId) => {
    const { name, value } = e.target;
    const updatedAvail = serviceData.avail.map(avail =>
      avail.id === availId ? { ...avail, [name]: value } : avail
    );
    setServiceData({ ...serviceData, avail: updatedAvail });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Service:', serviceData);
    // Here, you can send the updated data to the backend or perform any other action
  };

  return (
    <>
      <Container maxWidth="lg">
        <h1 className='text-3xl font-semibold capitalize text-center mb-5'>Edit {serviceData?.title}</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            name="title"
            value={serviceData?.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Slug"
            name="slug"
            value={serviceData?.slug}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="para"
            value={serviceData?.para}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />

          <h3 className="text-xl font-semibold mt-4 mb-2">Available Services</h3>
          {serviceData?.avail.map(avail => (
            <TextField
              key={avail.id}
              label={`Available Service ${avail.id}`}
              name="title"
              value={avail.title}
              onChange={(e) => handleAvailChange(e, avail.id)}
              fullWidth
              margin="normal"
            />
          ))}

          <Button variant="contained" color="primary" type="submit" className="mt-4">
            Save Changes
          </Button>
        </form>
      </Container>
    </>
  );
};

export default EditServices;
