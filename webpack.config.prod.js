/* eslint-disable */

const config = require("./webpack.config.base");
const webpack = require("webpack");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = config({
  "plugins": [
    new UglifyWebpackPlugin(),
    new ExtractTextPlugin("[name].[hash].css"),
    new webpack.DefinePlugin({"process.env.NODE_ENV": JSON.stringify("production")})
  ]
});
