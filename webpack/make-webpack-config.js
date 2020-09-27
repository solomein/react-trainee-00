const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const settings = require('./settings')
const Dotenv = require('dotenv-webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function getFilesLoaders(limit, path = '') {
  return {
    loader: 'url-loader',
    options: {
      limit,
      name: `${path}[name].[ext]?[hash:base64:6]`
    }
  }
}

module.exports = function ({ outputPath, envFile, isProduction }) {
  let config = {
    mode: isProduction ? 'production' : 'development',
    entry: {
      main: path.resolve(settings.paths.contentBase, 'entry.js')
    },
    devtool: '',
    output: {
      path: outputPath,
      filename: '[name].bundle.js?[hash:8]',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    resolve: {
      modules: [settings.paths.contentBase, 'node_modules'],
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                'babel-plugin-styled-components',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread'
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
              }
            }
          ]
        },
        {
          test: /\.png$/,
          use: getFilesLoaders(100000),
          exclude: /(static)/
        },
        {
          test: /\.(png)$/,
          use: getFilesLoaders(1, 'static/'),
          include: /(static)/
        }
      ]
    },
    optimization: {
      mangleWasmImports: true,
      mergeDuplicateChunks: true,
      minimize: true,
      nodeEnv: 'production',
      splitChunks: {
        name: false
      }
    },
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, envFile)
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(settings.paths.contentBase, 'index-template.ejs'),
        hash: isProduction,
        title: isProduction ? 'Front' : '[DEV] Front',
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true
            }
          : false
      })
    ]
  }

  if (!isProduction) {
    config.devtool = 'source-map'
    config.module.rules.push({
      loader: 'source-map-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'pre'
    })
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
    config.devServer = {
      contentBase: outputPath,
      publicPath: '/',
      stats: {
        colors: true,
        hash: false,
        version: false,
        timings: true,
        assets: true,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: false,
        publicPath: false
      }
    }
    config.optimization = {
      mangleWasmImports: true,
      mergeDuplicateChunks: true,
      minimize: false,
      nodeEnv: 'development'
    }
  }

  return config
}
