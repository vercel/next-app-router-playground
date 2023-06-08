/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  basePath: '/app',
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
