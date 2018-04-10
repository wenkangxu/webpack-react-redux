/*
 * @Author: XuWenKang
 * @Description: webpack Production环境配置文件
 * @Date: 2018-04-10 10:26:29
 * @Last Modified by:   XuWenKang
 * @Last Modified time: 2018-04-10 10:26:29
 */
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  plugins: [
    // new webpack.DefinePlugin({ webpack4.0 设置mode后已不需要手动设置环境变量
    //     'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css?hash=[hash:8]",
      chunkFilename: "static/css/[id].css?hash=[hash:8]"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(less|css)?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader //将src文件夹css单独打包出去
          },
          {
            loader: 'css-loader',
            options: {
                modules: true,
                minimize: true
            }
          }
        ]
      }
    ]
  },
})