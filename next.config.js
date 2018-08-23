const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withSass(withTypescript({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    camelCase: true,
    localIdentName: '[local]___[hash:base64:5]',
  },
}));
