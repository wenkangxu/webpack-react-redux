const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map', //source-map 
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    // inline: false,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        bypass: function(req, res, proxyOptions) { // 浏览器地址栏访问 XXX/api时返回index.html
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          }
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  }
}