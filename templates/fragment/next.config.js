const {
  withModuleFederation,
  MergeRuntime,
} = require('@module-federation/nextjs-mf');
const path = require('path');

module.exports = {
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      name: "#FUN_FRAGMENT_NAME",
      library: {
        type: config.output.libraryTarget,
        name: "#FUN_FRAGMENT_NAME",
      },
      filename: "static/runtime/remoteEntry.js",
      // This is where we configure the remotes we want to consume.
      // We will be using this in App 2.
      remotes: {},
      // as the name suggests, this is what we are going to expose
      exposes: {
        "./#FUN_FRAGMENT_NAME": "./components/#FUN_FRAGMENT_NAME",
        "./add": "./utils/add",
      },
      // over here we can put a list of modules we would like to share
      shared: [],
    };

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = "http://localhost:#FUN_PORT/_next/";
    }

    return config;
  },
};
