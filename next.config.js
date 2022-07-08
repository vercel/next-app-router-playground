/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    },
    appDir: true,
    runtime: "nodejs",
    serverComponents: true,
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
}

module.exports = nextConfig
