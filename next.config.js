/** @type {import('next').NextConfig} */
const config = {
  images: {
    // Replace the string with an object containing the "host" key
    remotePatterns: [{ 
      hostname: 'cloud.sooqsquare.com',
      protocol: 'https' // Optional: specify the protocol if necessary
    },{
      hostname: 'cloud.elsewedy-automation.com',
      protocol: 'https' 
    }],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = config;
