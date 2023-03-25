const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { withModuleFederation } = require('@nrwl/react/module-federation');

const baseConfig = require('./module-federation.config');

const prodConfig = {
  ...baseConfig,
  remotes: [
    ['sidebar', 'https://mfe-sidebar.netlify.app/'],
    ['meetings', 'https://mfe-meetings.netlify.app/'],
    ['tasks', 'https://mfe-tasks.netlify.app/'],
    ['weatherreport', 'https://mfe-weatherreport.netlify.app/'],
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig)
);
