/** @type {import('next').NextConfig} */
const { useBabelRc, override } = require('customize-cra')
const nextConfig = {
  reactStrictMode: true
}
module.exports = override(
  useBabelRc()
)
module.exports = nextConfig
