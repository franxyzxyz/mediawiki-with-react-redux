'use strict';

const webpack = require( 'webpack')
const path = require('path')
const NpmInstallPlugin = require('npm-install-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'src/app'),
  build: path.join(__dirname, 'src/build')
}

process.env.BABEL = TARGET;

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style','css','sass']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=src/app/fonts/[name].[ext]'
      }

    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: PATHS.build,
    progress: true,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      _: "lodash"
    })
  ]

}

module.exports = common