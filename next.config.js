/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cloudflare-ipfs.com"],
  },
  output: "export",
};

module.exports = nextConfig;
