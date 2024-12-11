/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    webpack: (config) => {
      config.optimization.minimize = false;
      return config;
    },
    images: {
    domains: ['mindfultms1.s3.us-east-1.amazonaws.com',
      'ik.imagekit.io',
      "mindfultms1.s3.amazonaws.com"
    ],
  },
  };
  
  export default nextConfig;
  