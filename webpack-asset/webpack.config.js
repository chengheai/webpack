const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractLESS = new ExtractTextPlugin('[name]-two.css');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),

  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: extractLESS.extract([ 'css-loader', 'less-loader' ])
      },
      {
        test: /\.js$/, exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name:'images/[name]-[hash:8].[ext]',
          },
        }]
      }
    ]
  },
  mode: 'production',
  plugins: [
    extractLESS,
    new htmlWebpackPlugin()
  ],
}