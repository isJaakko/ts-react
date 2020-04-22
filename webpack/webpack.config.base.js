const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader'
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../static/index.html')
        }),
    ],
};

module.exports = baseConfig;