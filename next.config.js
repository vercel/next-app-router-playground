/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', //https://nextjs.org/docs/advanced-features/output-file-tracing
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
};

module.exports = nextConfig;
