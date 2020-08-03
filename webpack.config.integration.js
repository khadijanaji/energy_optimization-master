/* eslint-disable */

const config = require("./webpack.config.base");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = config({
  plugins: [
    new ExtractTextPlugin({
      disable: true
    })
  ],

  devBackendPort: "",
  devBackendUrl: "https://localhost:9051/"
});
