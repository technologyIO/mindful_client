/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mindfultms1.s3.us-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'mindfultms1.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
