const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const TARGET = './docs';
const production = process.env.NODE_ENV === 'debug' ? false : true;

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  devtool: production ? 'hidden-source-map' : 'eval-cheap-source-map',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, TARGET),
    filename: 'covid-19-explorer.[contenthash].js',
  },
  mode: production ? 'production' : 'development',
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader' }],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyPlugin([{ from: 'assets', to: '' }]),
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
};
