const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');

module.exports = withSass(withTypescript({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    camelCase: true,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack: (config) => {
    const originalEntry = config.entry;
    config.entry = () => originalEntry()
      .then((entry) => ({
        ...entry,
        'appStyles': './content/styles/styles.scss',
      }));

    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    );

    return config;
  },
}));
