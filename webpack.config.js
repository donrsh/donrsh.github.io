var ExtractTextPlugin = require("extract-text-webpack-plugin");

// postcss
var autoprefixer = require('autoprefixer');
var rucksack = require('rucksack-css');

module.exports = {
  entry:{
    bundle: './index.jsx',
    styles: './dev/include_styles.js'
  },
  output:{
    path: 'build',
    filename: '[name].js',
  },
  module: {
    loaders: [
   	  { test: /\.jsx?$/, 
        exclude: /(node_modules|bower_components)/, 
        loader: 'babel', 
        query: {
          presets: ['react', 'es2015', 'stage-2']
        } 
      },
      { test: /\.css$/, 
        loader: 'style-loader!css-loader!postcss-loader' 
      },
      // { test: /\.(scss|sass)$/,
      //   loader: 'style-loader!css-loader!postcss-loader!sass-loader' 
      // },
      { test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")  
      },      
      { test: /\.(png|jpg)$/, 
        loader: 'url-loader?limit=8192'
      } 
    ],
  },
  postcss: [ 
    autoprefixer({ browsers: ['last 2 versions']}),
    // rucksack({ fallbacks: true}),
  ],
  resolveLoader: { 
    alias: { "url-loader": require.resolve("url-loader") }
  },
  plugins: [
        new ExtractTextPlugin("[name].css")
  ],
  devServer: {
    host: 'localhost',
    port: 8000,
    noInfo: true,
    // hot: true
  }
};