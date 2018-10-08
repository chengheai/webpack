const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractLESS = new ExtractTextPlugin('css/[name]-two.css');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: extractLESS.extract([ 'css-loader', 'less-loader' ])
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    extractLESS,
    new htmlWebpackPlugin()
  ],
}