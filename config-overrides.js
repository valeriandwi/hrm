const webpack = require('webpack');
const path = require('path');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify'),
    url: require.resolve('url'),
    constants: require.resolve('constants-browserify'),
  });
  config.resolve.fallback = fallback;

  // Creating alias path
  const alias = config.resolve.alias || {};
  Object.assign(alias, {
    '@': path.resolve(__dirname, './src/'),
    '@Api': path.resolve(__dirname, './src/api/'),
    '@Components': path.resolve(__dirname, './src/components/'),
    '@Constants': path.resolve(__dirname, './src/constants/'),
    '@Contexts': path.resolve(__dirname, './src/contexts/'),
    '@Features': path.resolve(__dirname, './src/features/'),
    '@Hooks': path.resolve(__dirname, './src/hooks/'),
    '@Icons': path.resolve(__dirname, './src/icons/'),
    '@Layouts': path.resolve(__dirname, './src/layouts/'),
    '@Localization': path.resolve(__dirname, './src/localization/'),
    '@Pages': path.resolve(__dirname, './src/pages/'),
    '@Styles': path.resolve(__dirname, './src/styles/'),
    '@Utils': path.resolve(__dirname, './src/utils/'),
  });
  config.resolve.alias = alias;

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);
  return config;
};
