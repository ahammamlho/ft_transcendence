/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  env: {
    SECRET: 'LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx6gtsg',
    NEXTAUTH_URL_INTERNAL: 'http://localhost:3000',
  },
};

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/api/auth/signin',
//         destination: '/',
//         permanent: true,
//       },
//     ];
//   },
// };
