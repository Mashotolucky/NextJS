/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.net = false;
    }
    return config;
  },
}

// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.node = { net: 'empty' };
//     }
//     return config;
//   }
// }