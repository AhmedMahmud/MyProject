var path = require('path');
var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = {
  entry: [
    'babel-polyfill',
    './src/components/index',
  ],
  output: {
      filename: 'public/app.js'
  },
  //devtool: 'source-map',

  plugins: [
    new LiveReloadPlugin
  ],

 module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"],
        }
      }
    ]
  },
  debug: true
};