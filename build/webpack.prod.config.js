const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(scss|css)/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public/js'),
          to: path.resolve(__dirname, '../dist/public/js'),
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    })
  ],
})