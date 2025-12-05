// This is a SERVER component (no "use client")
import axios from "axios";
import TestimonialComponentV2 from "./TestimonialComponentV2";

async function fetchTestimonials({ location, doctor, doctorArray }) {
    let apiUrl = '';
    let requestData = {};

    if (doctor) {
        apiUrl = `${process.env.NEXT_PUBLIC_API_URL}testimonials/doctor/${doctor?._id}`;
    } else if (doctorArray && doctorArray.length > 0) {
        apiUrl = `${process.env.NEXT_PUBLIC_API_URL}testimonials/getAllTestimonials/DoctorArray`;
        requestData = { doctorIds: doctorArray.map(doc => doc._id) };
    } else {
        apiUrl = `${process.env.NEXT_PUBLIC_API_URL}testimonials/search/testimonials/by-location?location=${location || ""}`;
    }

    try {
        let response;
        if (doctor) {
            response = await axios.get(apiUrl);
        } else if (doctorArray && doctorArray.length > 0) {
            response = await axios.post(apiUrl, requestData);
        } else {
            response = await axios.get(apiUrl);
        }

        const allTestimonials = response.data || [];
        const filteredTestimonials = allTestimonials.filter(testimonial => 
            testimonial.treatment?.toLowerCase().includes('rtms')
        );
        
        return filteredTestimonials;
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        return [];
    }
}

export default async function TestimonialServerWrapper({ 
    location, 
    condition,
    mobileView,
    smallDevice,
    doctor,
    doctorArray 
}) {
    // Fetch testimonials on the SERVER
    const serverTestimonials = await fetchTestimonials({ location, doctor, doctorArray });

    return (
        <>
            {/* SEO-friendly server-rendered content */}
            <div className="sr-only" aria-hidden="true">
                <h2>Patient Testimonials and Reviews</h2>
                {serverTestimonials.map((testimonial, index) => (
                    <div key={index} itemScope itemType="https://schema.org/Review">
                        <div itemProp="author" itemScope itemType="https://schema.org/Person">
                            <span itemProp="name">{testimonial.patientName}</span>
                        </div>
                        <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                            <meta itemProp="ratingValue" content={testimonial.rating || "5"} />
                            <meta itemProp="bestRating" content="5" />
                        </div>
                        <p itemProp="reviewBody">{testimonial.fullTestimonial}</p>
                        <meta itemProp="datePublished" content={testimonial.createdAt} />
                    </div>
                ))}
            </div>

            {/* Interactive client component */}
            <TestimonialComponentV2 
                location={location}
                condition={condition}
                mobileView={mobileView}
                smallDevice={smallDevice}
                doctor={doctor}
                doctorArray={doctorArray}
                initialTestimonials={serverTestimonials}
            />
        </>
    );
}
