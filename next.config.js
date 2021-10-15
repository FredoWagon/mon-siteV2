const path = require('path')



module.exports = {

  experimental: {
    scrollRestoration: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  target: "serverless"
}

//images: {
//     loader: 'cloudinary',
//     path: 'https://res.cloudinary.com/dbzdlk98a/image/upload/',
//   },