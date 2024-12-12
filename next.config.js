/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config) => {
    config.cache = {
      type: 'filesystem',
      allowCollectingMemory: true,
    };
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
  };
    return config;
  },
};

module.exports = nextConfig;
