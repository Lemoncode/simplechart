const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");

module.exports = withSass(withTypescript({
  cssLoaderOptions: {
    camelCase: true,
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  cssModules: true,
  webpack: (config) => {
    const originalEntry = config.entry;
    config.entry = () => originalEntry()
      .then((entry) => ({
        ...entry,
        "appStyles": "./content/styles/styles.scss",
      }));

    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env),
    );

    return config;
  },
}));
