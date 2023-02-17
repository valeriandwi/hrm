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
    '@api': path.resolve(__dirname, './src/api/'),
    '@components': path.resolve(__dirname, './src/components/'),
    '@constants': path.resolve(__dirname, './src/constants/'),
    '@contexts': path.resolve(__dirname, './src/contexts/'),
    '@features': path.resolve(__dirname, './src/features/'),
    '@hooks': path.resolve(__dirname, './src/hooks/'),
    '@icons': path.resolve(__dirname, './src/icons/'),
    '@layouts': path.resolve(__dirname, './src/layouts/'),
    '@localization': path.resolve(__dirname, './src/localization/'),
    '@pages': path.resolve(__dirname, './src/pages/'),
    '@styles': path.resolve(__dirname, './src/styles/'),
    '@utils': path.resolve(__dirname, './src/utils/'),
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
