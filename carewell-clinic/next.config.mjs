/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/index.html',
        },
        {
          source: '/about',
          destination: '/about.html',
        },
        {
          source: '/doctors',
          destination: '/doctors.html',
        },
        {
          source: '/services',
          destination: '/services.html',
        },
        {
          source: '/contact',
          destination: '/contact.html',
        },
        {
          source: '/privacy',
          destination: '/privacy.html',
        },
        {
          source: '/terms',
          destination: '/terms.html',
        },
        {
          source: '/accessibility',
          destination: '/accessibility.html',
        },
        {
          source: '/patient-rights',
          destination: '/patient-rights.html',
        },
      ],
    };
  },
};

export default nextConfig;

