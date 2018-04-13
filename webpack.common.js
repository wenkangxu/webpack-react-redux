/*
 * @Author: XuWenKang
 * @Description: webpack 公共配置文件
 * @Date: 2018-04-10 10:26:21
 * @Last Modified by: XuWenKang
 * @Last Modified time: 2018-04-13 16:24:12
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: './src/app.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'production'
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name]-common.css?hash=[hash:8]",
      chunkFilename: "static/css/[id]-common.css?hash=[hash:8]"
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, //图片小于8192字节就转成base64编码
              name: 'static/images/[name].[ext]?hash=[hash:8]'
            }
          }
        ]
      },
      {
        test: /\.(less|css)?$/,
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader //将node_modules文件夹css单独打包出去
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, //将从node_modules里引入的包分开打包成vendors.bundle.js
          name: 'vendors',
          priority: -20,
          chunks: "all"
        }
      }
    }
  },
  performance: {
    hints: false // webpack 打包出来的单个文件超过250k会报警，暂时没找到解决方案，先给他关了
  }
}