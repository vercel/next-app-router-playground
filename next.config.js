/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
    runtime: 'nodejs',
    serverComponents: true,
    // Recommended for new `<Link>` and `<Image>` behavior:
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    },
    // Recommended, will be the default in the next major version:
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
};

module.exports = nextConfig;
