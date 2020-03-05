// var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = {
//     mode: 'production',
//     entry: './src/components/Dropdown.jsx',
//     output: {
//         path: path.resolve('lib'),
//         filename: 'Dropdown.js',
//         libraryTarget: 'commonjs2'
//     },
//     plugins:[
//         new ExtractTextPlugin({
//             filename: 'dropdown.css',
//         }),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /(node_modules)/,
//                 use: 'babel-loader'
//             }, {
//                 test: /\.*css$/,
//                 use : ExtractTextPlugin.extract({
//                     fallback : 'style-loader',
//                     use : [
//                         'css-loader',
//                         'sass-loader'
//                     ]
//                 }),
//                },
//         ]
//     }
// }

const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    entry: ['./src/components/Dropdown.jsx', './src/assets/styles/dropdown.css'],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                //use: ['style-loader', 'css-loader', 'sass-loader']
                use: [MiniCssPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CleanPlugin('dist'),
        new HtmlPlugin(),
        new MiniCssPlugin(),
    ]
}

