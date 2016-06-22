'use strict';

const webpack = require( 'webpack')
const path = require('path')
const merge = require( 'webpack-merge')
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
          presets: ['es2015', 'react' ]
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style','css','sass']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=assets/[name].[ext]'
      }

    ]
  },
}

switch (TARGET) {
  case 'bundle':
    module.exports =  merge(common, {
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
    });
    break;
  case 'build':
  case 'start':
    module.exports =  merge(common, {
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"'
        }),
        new webpack.ProvidePlugin({
          $: "jquery",
          _: "lodash"
        })
      ]
    });
}