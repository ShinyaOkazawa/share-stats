const path = require('path');
const Dotenv = require('dotenv-webpack');
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  devtool: false,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts'
    ]
  },
  plugins: [
    new Dotenv(),
    new GasPlugin()
  ]
};