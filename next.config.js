const path = require('path')

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});


module.exports = {
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dbzdlk98a/image/upload/',
  },
  experimental: {
    scrollRestoration: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  target: "serverless"
}
