/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['to-string-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      Services: path.resolve(__dirname, 'src/services'),
      Store: path.resolve(__dirname, 'src/store'),
      Views: path.resolve(__dirname, 'src/views'),
      Components: path.resolve(__dirname, 'src/components'),
      Styles: path.resolve(__dirname, 'src/styles'),
      Utils: path.resolve(__dirname, 'src/utils'),
      Assets: path.resolve(__dirname, 'src/assets'),
    },
  },
};
