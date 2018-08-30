const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  webpack(config, options) {
    const { dev, isServer } = options
  /*  const extractCSSPlugin = new ExtractTextPlugin({
      filename: 'static/style.css',
      disable: dev
    })
    config.module.rules.push({
      test: /\.css$/,
      use: cssLoaderConfig(extractCSSPlugin, {
        cssModules,
        dev,
        isServer
      })
    })*/
    return config
  }

})