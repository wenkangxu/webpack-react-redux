const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    // babelPolyfill: 'babel-polyfill',
    app: './src/app.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'production'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
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
        test: /\.(less|css)?$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
                modules: true
            }
          }
        ]
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
  }
}