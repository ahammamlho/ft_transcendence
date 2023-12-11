/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/HomePage",
        permanent: true,
      },
    ];
  },

  images: {
    domains: ["cdn.intra.42.fr", "localhost"],
  },
};

module.exports = nextConfig;
