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
        // filename: "[name].js",
        // filename: "[name]-bundle.js",
        // chunkFilename: "[name]-chunk.js",
        filename: 'static/js/[name].[chunkhash:8].bundle.js',
        chunkFilename: 'static/js/[name]-[id].[chunkhash:8].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.less', 'sass', 'scss'],
    },
    performance: {
        hints: false
    },
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, {
                loader: 'css-loader',
                // options: {
                //     name: 'static/css/[name].[hash:8].[ext]',
                // }
            }],
        }, {
            test: /\.(scss|sass)$/,
            use: [
                MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                    // options: {
                    //     name: 'static/css/[name].[hash:8].[ext]',
                    // }
                }, {
                    loader: "sass-loader", // compiles Sass to CSS
                    // options: {
                    //     name: 'static/css/[name].[hash:8].[ext]',
                    // }
                }
            ]

        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }]
        }, {
            test: /\.(ico)$/,
            use: "raw-loader",
        }, {
            test: /\.(svg|png|ico)$/,
            use: 'file-loader',
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
            filename: "static/css/[name].css",
            chunkFilename: "static/css/[id].css"
        })
    ]
}