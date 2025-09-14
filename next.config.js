/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com"],
  },
};

module.exports = withPlausibleProxy({
  customDomain: "https://plausible.tsukie.com",
})(nextConfig);
