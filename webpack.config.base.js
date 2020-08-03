/* eslint-disable */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const OUTPUT_PATH = path.resolve(__dirname, "public-html");

module.exports = ({plugins = [], devBackendPort = 8085, devBackendUrl = "http://localhost:"}) => ({
  "entry": [
    "babel-polyfill",
    "./src/index.js"
  ],
  "output": {
    "path": OUTPUT_PATH,
    "filename": "bundle.[hash].js"
  },
  "resolve": {
    "extensions": [
      ".webpack.js",
      ".web.js",
      ".js"
    ],
    "modules": [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  },
  "module": {
    "rules": [
      {
        "test": /\.(scss|css)$/,
        "use": ExtractTextPlugin.extract({
          "fallback": 'style-loader',
          "use": ['css-loader', 'sass-loader']
        })
      },
      {
        "test": /\.js$/,
        "use": "babel-loader",
        "exclude": /node_modules/
      },
      {
        "test": /\.(ttf|eot|woff|woff2|otf)$/,
        "use": {
          "loader": "file-loader",
          "options": {
            "name": "fonts/[name].[ext]"
          }
        }
      },
      {
        "test": /\.(pdf)$/,
        "use": {
          "loader": "file-loader",
          "options": {
            "name": "resources/[name].[ext]"
          }
        }
      },
      {
        "test": /\.(jpg|png|gif|svg|ico)$/,
        "use": [
          {
            "loader": "url-loader",
            "options": {
              "limit": 8192,
              "name": "img/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  "plugins": [
    new HtmlWebpackPlugin({"template": "./src/index.html"}),
    // Moment.js bundles large locale files by default. This is a practical
    // solution that requires the user to opt into importing specific locales.
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyWebpackPlugin([
      {
        from: '**/node_modules/workbox-sw/build/workbox-sw.js',
        to: 'workbox-sw.js'
      },
      {
        from: "./src/manifest.json",
        to: path.join(OUTPUT_PATH, "manifest.json")
      }/*,
      {
        from: "./src/img/reporting-512.png",
        to: path.join(OUTPUT_PATH, "reporting-512.png")
      },
      {
        from: "./src/img/reporting-192.png",
        to: path.join(OUTPUT_PATH, "reporting-192.png")
      }*/
    ]),
      new WorkboxPlugin.GenerateSW({
        "swDest": 'sw.js',
        "clientsClaim": true,
        "skipWaiting": true,
        navigationPreload: true,
        "importWorkboxFrom": 'local',
        runtimeCaching: [{
          urlPattern: ({event}) => event.request.mode === 'navigate',
          handler: 'CacheFirst',
          }
        ]
    }),
    ...plugins
  ],
  "devServer": {
    "port": 9000,
    "hot": true,
    "contentBase": "./",
    "proxy": {
      "/api": {
        target: devBackendUrl + devBackendPort,
        secure: false,
        changeOrigin: true
      }
    }
  },
  devtool: "source-map"
});
