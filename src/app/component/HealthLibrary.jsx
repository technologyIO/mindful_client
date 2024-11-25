import Link from 'next/link';
import React from 'react';

const HealthLibrary = () => {

  const blogs = [
    {
      id: 1,
      title: 'TMS Treatment',
      description: 'A TMS Treatment guide to understanding mental health and wellbeing.',
      slug: 'tmsPage',
    },
  
    // Add more blogs as needed
  ];

  // Function to handle redirection


  return (
    <div className=" mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Health Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            href={`/pages/${blog.slug}`}
            key={blog.id}
            className=" shadow-md bg-primary-div rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl text-primary-orange font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HealthLibrary;
