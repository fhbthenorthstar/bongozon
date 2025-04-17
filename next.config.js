/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: ["via.placeholder.com"],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = withContentlayer({ ...nextConfig });
