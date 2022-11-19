const {
  VanillaExtractPlugin
} = require('@vanilla-extract/webpack-plugin');

module.exports = async ({ config, mode }) => {
  config.plugins.push(new VanillaExtractPlugin());

  return config;
};