const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname);
const BUILD_DIR = path.resolve(__dirname, 'dist');

const config = {
    entry: APP_DIR + '/index.js',

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: APP_DIR,
    },

    module: {
        loaders: [
            {
                test: /\.js?/,
                loader: 'babel-loader'
            }, {
                test: /\.css?/,
                loader: ['style-loader', 'css-loader'],
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },

    resolve: {
        modules: ['node_modules', 'src/']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: APP_DIR + '/index.html',
            inject: 'body',
        })
    ]
}

module.exports = config;
