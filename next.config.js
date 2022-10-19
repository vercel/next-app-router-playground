/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
    // Recommended for new `<Link>` and `<Image>` behavior:
    newNextLinkBehavior: true,
  },
};

module.exports = nextConfig;
