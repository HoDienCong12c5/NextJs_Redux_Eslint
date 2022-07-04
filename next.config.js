/** @type {import('next').NextConfig} */
import 'dotenv/config'
const { useBabelRc, override } = require('customize-cra')
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true
}
module.exports = override(
  useBabelRc()
)
module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/profile': { page: 'Screen/ProfileScreen' }
    }
  }
}
module.exports = nextConfig
