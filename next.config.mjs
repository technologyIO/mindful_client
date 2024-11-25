/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false,
    webpack: (config) => {
      config.optimization.minimize = false;
      return config;
    },
    images: {
    domains: ['mindfultms1.s3.us-east-1.amazonaws.com'],
  },
  };
  
  export default nextConfig;
  