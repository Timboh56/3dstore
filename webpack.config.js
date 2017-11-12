const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    IndexHtmlPlugin = require('indexhtml-webpack-plugin');
    var cssExtractPlugin = new ExtractTextPlugin('styles/[contenthash:16].css');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
  hash: true
});
const ExtractTextPluginConfig = new ExtractTextPlugin({ // define where to save the file
   filename: 'dist/main.bundle.css',
   allChunks: true,
 });

module.exports = {
  entry: [
    "./src/index.js",
    "./src/styles/App.scss",
    'jquery',
  ],
  output: {
    path: path.resolve('dist'),
    publicPath:'assets/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      {
        test: /\.scss$/,
        loaders: ["style-loader","css-loader","sass-loader"]
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist")
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig
  ]
}
