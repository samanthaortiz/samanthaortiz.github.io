'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, 'client/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicpath: '/'
  },
  eslint: {
    configFile: '.eslintrc',
    'failOnWarning': 'false',
    failOnError: 'false'
  },
  module: {
    preLoaders: [
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
      ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      }
    ]
  }
}