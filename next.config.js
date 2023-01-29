/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  // swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['172.16.11.116'],
  }
}

module.exports = nextConfig
