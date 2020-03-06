// var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var MiniCssExtractPlugin = require("mini-css-extract-plugin");
// module.exports = {
//     mode: 'production',
//     entry: './src/components/Dropdown.jsx',
//     output: {
//         path: path.resolve('lib'),
//         filename: 'Dropdown.js',
//         libraryTarget: 'commonjs2'
//     },
//     plugins: [
//         new MiniCssExtractPlugin({
//             filename: 'main.css',
//         })
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /(node_modules)/,
//                 use: 'babel-loader'
//             }, {
//                 test: /\.css$/,
//                 use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
//             }
//         ]
//     }
// }

// webpack v4
const path = require('path');
// update 23.12.2018
const nodeExternals = require("webpack-node-externals"); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
module.exports = {
    mode: 'production',
    entry: { main: './src/components/Dropdown.jsx' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'Dropdown.js',
    },
    target: "node",
    externals: [nodeExternals()], module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader']
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin('dist', {}),
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './dist/index.html',
            filename: 'index.html'
        }),
        new WebpackMd5Hash()
    ]
};