/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  webpack: (config) => {
    config.optimization.minimize = true;
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
        hostname: 'avatar.iran.liara.run',
      },
      
       {
        protocol: 'https',
        hostname: 'mindfultms2.s3.us-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'mindfultms1.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'mindfultms.in',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/pages/tmspage',
        destination: '/pages/rtms',
        permanent: false,  // or true, depending on SEO needs
      },
      {
        source: '/pages/tms',
        destination: '/pages/rtms',
        permanent: false,  // or true, depending on SEO needs
      },
    ];
  },
};

export default nextConfig;
