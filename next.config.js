/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config) => {
    config.cache = {
      type: 'filesystem',
      allowCollectingMemory: true,
    };
    return config;
  },
};

module.exports = nextConfig;
