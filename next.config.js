/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/software-development': { page: '/software-development' },
      '/website-development': { page: '/website-development' },
      '/gis-App-development': { page: '/gis-App-development' },
      '/app-development': { page: '/app-development' },
    }
  },
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
