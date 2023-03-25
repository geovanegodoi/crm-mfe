const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { withModuleFederation } = require('@nrwl/react/module-federation');

const baseConfig = require('./module-federation.config');

const config = {
  ...baseConfig,
  remotes: [
    ['sidebar', 'http://localhost:4201/'],
    ['meetings', 'http://localhost:4202/'],
    ['tasks', 'http://localhost:4203/'],
    ['weatherreport', 'http://localhost:4204/'],
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config)
);
