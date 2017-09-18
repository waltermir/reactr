const path = require('path'); 
const webpack=require('webpack'); 
const HtmlWebPackPlugin=require('html-webpack-plugin'); 
const ExtractTextPlugin=require('extract-text-webpack-plugin') 
module.exports={ 
  resolve: {  extensions: [".js", ".jsx",".css"] }, 
  entry:[path.resolve(__dirname, "./src/index.jsx")], 
  output:{ filename:"app.js", path:path.resolve(__dirname, "build"), publicPath:"" }, 
  module:{ 
    rules:[ 
      { 
        test:/(.js|jsx)$/, 
        exclude: [ path.resolve(__dirname, "node_modules") ], 
        loader: "babel-loader", 
        options: { 
                    presets: ["es2015","latest","react"] 
                 } 
      }, 
      { test: /\.css$/, 
        use: [ 
                { loader: "style-loader" }, 
                { loader: 'css-loader', 
                options: { modules: true, importLoaders:1, localIdentName: '[name]__[local]__[hash:base64:5]' } }
              ] 
      }
    ] 
  }, 
  devServer:{ 
              host:'0.0.0.0', 
              port:8080, 
              inline:true 
            }, 
  plugins:[ new HtmlWebPackPlugin({template:path.resolve(__dirname, "./src/assets/index.html")}), 
            new ExtractTextPlugin({ filename: 'styles.css', allChunks: true, }) 
            ] }