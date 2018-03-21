const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: './src/app.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'production'
    })
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    // publicPath: __dirname + './'
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
      }
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
    hints: false
  }
}