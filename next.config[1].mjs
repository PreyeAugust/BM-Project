/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

const withVideos = require('next-videos')

module.exports = withVideos()