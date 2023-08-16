/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ik.imagekit.io', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
