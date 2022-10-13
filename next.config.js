/** @type {import('next').NextConfig} */
require("dotenv").config();
const webpack = require("webpack");
const { useBabelRc, override } = require("customize-cra");
const path = require("path");
const withTM = require("next-transpile-modules")(["three"]);
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  webpack(config) {
    // Returns environment variables as an object
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

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
      loader: "file-loader",
      options: {
        name: "[path][name].[ext]",
      },
    });
    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  },
  env: {
    GREETING: "Hello World",
  },
};
module.exports = override(useBabelRc());

module.exports = withTM({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(glb|gltf|fbx|glsl|vs|fs|vert|frag|OBJ|COLLADA)$/,
      use: {
        loader: "file-loader",
      },
    });
  },
});
module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/profile": { page: "Screen/ProfileScreen" },
    };
  },
};
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
module.exports = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};
// const nextjsDistDir = join("src", require("./src/next.config.js").distDir);
// const nextjsServer = next({
//   dev: isDev,
//   conf: {
//     distDir: nextjsDistDir,
//     images: {
//       domains: ['firebasestorage.googleapis.com'],
//     }
//   }
// });
module.exports = nextConfig;
