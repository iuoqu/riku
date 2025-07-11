/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // This will prevent image optimization issues on Vercel
    remotePatterns: [],
  },
}

module.exports = nextConfig 