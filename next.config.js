/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  redirects: async () => [
    {
      source: '/software-development.html',
      destination: '/software-development',
      permanent: true, // This makes the redirect permanent
    },
    {
      source: '/web-scraping.html',
      destination: '/software-development',
      permanent: true, // This makes the redirect permanent
    },
    {
      source: '/gis-application-development.html',
      destination: '/gis-app-development',
      permanent: true, // This makes the redirect permanent
    },
    {
      source: '/mobile-application-development.html',
      destination: '/mobile-web',
      permanent: true, // This makes the redirect permanent
    },
    {
      source: '/web-application-development.html',
      destination: '/website-development',
      permanent: true, // This makes the redirect permanent
    },
    {
      source: '/desktop-application-development.html',
      destination: '/software-development',
      permanent: true, // This makes the redirect permanent
    },
  ],
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
