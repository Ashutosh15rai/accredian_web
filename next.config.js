/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image domains
  },
  env: {
    CUSTOM_KEY: 'value', // Replace with your custom environment variables
  },
};

module.exports = nextConfig;