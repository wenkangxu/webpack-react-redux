const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    // new webpack.DefinePlugin({ webpack4.0 设置mode后已不需要手动设置环境变量
    //     'process.env.NODE_ENV': JSON.stringify('production')
    // })
  ],
})
