// app/component/TestimonialServerWrapper.jsx
import TestimonialComponentSlideV2Client from './TestimonialComponentSlideV2Client';

export default async function TestimonialServerWrapper({ 
  location, 
  doctor, 
  doctorArray 
}) {
  let testimonials = [];
  
  try {
    let apiUrl = '';
    let requestData = {};

    if (doctor) {
      apiUrl = `${process.env.NEXT_PUBLIC_API_URL}testimonials/doctor/${doctor._id}`;
      const response = await fetch(apiUrl, { cache: 'no-store' });
      testimonials = await response.json();
    } else if (doctorArray && doctorArray.length > 0) {
      apiUrl = `${process.env.NEXT_PUBLIC_API_URL}testimonials/getAllTestimonials/DoctorArray`;
      requestData = { doctorIds: doctorArray.map(doc => doc._id) };
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
        cache: 'no-store'
      });
      testimonials = await response.json();
    } else {
      apiUrl = `${process.env.NEXT_PUBLIC_API_URL}testimonials/search/testimonials/by-location?location=${location || ""}`;
      const response = await fetch(apiUrl, { cache: 'no-store' });
      testimonials = await response.json();
    }
  } catch (error) {
    console.error("Error fetching testimonials:", error);
  }

  return (
    <TestimonialComponentSlideV2Client 
      testimonials={testimonials}
      location={location}
      doctor={doctor}
      doctorArray={doctorArray}
    />
  );
}
