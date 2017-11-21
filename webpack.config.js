const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    stats: "errors-only",
    open: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Pooch Patrol',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/templates/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'main.css',
    }),
  ],
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
  config.devtool = ""; // No sourcemap for production

  // Add more configuration for production here like
  // Uglify plugin
  // Offline plugin
  // Etc,
}

module.exports = config;
