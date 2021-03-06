const merge = require('webpack-merge');
const common = require('./webpack.common.conf.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: '../dist',
    hot: true,
  },
});
