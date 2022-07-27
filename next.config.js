/** @type {import('next').NextConfig} */
require('dotenv').config()
const webpack = require('webpack')
const { useBabelRc, override } = require('customize-cra')
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  webpack (config) {
    // Returns environment variables as an object
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
      return acc
    }, {})

    // Fixes npm packages that depend on `fs` module
    // config.node = {
    //   fs: 'empty',
    //   net: 'empty',
    //   tls: 'empty'
    // }

    /** Allows you to create global constants which can be configured
     * at compile time, which in our case is our environment variables
     */
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]'
      }
    })
    config.plugins.push(new webpack.DefinePlugin(env))

    return config
  },
  env: {
    GREETING: 'Hello World'
  }

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
const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()
module.exports = nextConfig
