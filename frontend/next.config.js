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
    domains: ["cdn.intra.42.fr", "localhost", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;

// http://localhost:3000/(https:///a/ACg8ocK7dGmj28CzKrwS13hFPtiiZKIe3fKJGAo9F7iwArOijas=s96-c)