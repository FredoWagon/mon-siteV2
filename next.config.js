const path = require('path')

module.exports = {
  reactStrictMode: true,
}
module.exports = {
  target: "serverless",
}


// Configuration sass-scss
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
}
module.exports = {
  experimental: {
    scrollRestoration: true
  }
}