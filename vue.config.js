const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/_vars.scss'),
        path.resolve(__dirname, './src/styles/_mixins.scss'),
      ],
    },
  },
}
