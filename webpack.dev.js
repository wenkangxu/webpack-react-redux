const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // inline: false,
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          {
            loader: 'style-loader' //开发环境css加载到行内
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module ReplaceMent'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
})