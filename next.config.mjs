/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The 'remotePatterns' key was missing.
    // It should be an array of objects.
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};
export default nextConfig;