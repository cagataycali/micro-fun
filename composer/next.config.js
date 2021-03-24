const {
  withModuleFederation,
  MergeRuntime,
} = require('@module-federation/nextjs-mf');
const path = require('path');
const generate = require('./generate')

module.exports = {
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const remotes = generate(options);
    console.log(remotes, 'REMOTES');
    const mfConf = {
      name: "composer",
      library: { type: config.output.libraryTarget, name: "composer" },
      filename: "static/runtime/remoteEntry.js",
      // this is where we define what and where we're going to consume our modules.
      // note that this is only for local development and is relative to where the remote
      // app is in you folder structure.
      remotes,
      exposes: {},
      shared: [],
    };

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = 'http://localhost:8000/_next/';
    }

    return config;
  },
};
