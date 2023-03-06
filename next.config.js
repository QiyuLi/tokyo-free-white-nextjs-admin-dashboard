/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const { version } = require('./version.json');

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    version
  },
  async redirects() {
    return [
      {
        source: '/dashboards',
        destination: '/dashboards/crypto',
        permanent: true
      }
    ];
  }
};

module.exports = withImages(nextConfig);
