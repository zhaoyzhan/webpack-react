const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        main: path.join(__dirname, "../src/index.js"),
        common: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, "../build"),
        filename: 'static/js/[name].[hash:8].bundle.js',
        chunkFilename: 'static/js/[name]-[id].[hash:8].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.less', '.sass', '.scss'],
    },
    performance: {
        hints: false
    },
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            exclude: /(node_modules)/,
            loader: require.resolve('babel-loader')
        }, {
            test: /\.css$/,
            // use: [MiniCssExtractPlugin.loader, {
            //     loader: require.resolve('css-loader'),
            // }],
            use: ["style-loader", "css-loader"] //开发模式
        }, {
            test: /\.(sass|scss)$/,
            // use: [
            //     MiniCssExtractPlugin.loader, {
            //         loader: require.resolve("css-loader"),
            //     }, {
            //         loader: require.resolve("sass-loader"),
            //     }
            // ], //生产模式
            use: ["style-loader", "css-loader", "sass-loader"] //开发模式
        }, {
            test: /\.html$/,
            use: [{
                loader: require.resolve('html-loader'),
                options: {
                    minimize: true
                }
            }]
        }, {
            test: /\.(ico)$/,
            use: "raw-loader",
        }, {
            test: /\.(svg|ico)$/,
            use: [{
                loader: require.resolve('file-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            }],

        }, {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
            },
        }, ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "../public/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[hash:8].css",
            chunkFilename: "static/css/[id].css"
        })
    ]
}