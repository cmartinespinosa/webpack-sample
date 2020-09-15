const path = require('path');
const webpack = require("webpack");
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', //development or production
    entry: {
      app: './src/js/index.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        // new HtmlWebpackPlugin({  
        //     filename: 'index.html',
        //     template: 'src/index.html',
        //     hash: true
        // }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new MiniCSSExtractPlugin({
            filename: "./styles.css",
        })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { 
              test: /\.scss$/, 
              loader: [
                MiniCSSExtractPlugin.loader,
                "css-loader",
                'sass-loader'
              ]
            }
        ]
    },
};
