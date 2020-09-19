/** @format */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            },
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../static/index.html'),
        }),
    ],
};

module.exports = baseConfig;
