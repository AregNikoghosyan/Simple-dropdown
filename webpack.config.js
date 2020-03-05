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
//             filename: 'dropdown.scss',
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
//                 })
//                },
//         ]
//     }
// }

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');
const path = require('path');
const libraryName= pkg.name;
module.exports = {
    entry: path.join(__dirname, "./src/components/Dropdown.jsx"),
    output: {
        path: path.join(__dirname, './build'),
        filename: 'Dropdown.js',
        library: libraryName,
        libraryTarget: 'umd',
        publicPath: '/build/',
        umdNamedDefine: true
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'dropdown.scss',
        }),
    ],
    node: {
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
    },
    module: {
        rules : [
            {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options:{
                        fallback: "file-loader",
                        name: "[name][md5:hash].[ext]",
                        outputPath: 'assets/',
                        publicPath: '/assets/'
                    }
                }    
            ]
        },
        {
            test: /\.*css$/,
            use : ExtractTextPlugin.extract({
                fallback : 'style-loader',
                use : [
                    'css-loader',
                    'sass-loader'
                ]
            })
        },
        {
            test: /\.(js|jsx)$/,
            use: ["babel-loader"],
            include: path.resolve(__dirname, "src"),
            exclude: /node_modules/,
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: ["file-loader"],
        },
        {
            test: /\.(pdf|doc|zip)$/,
            use: ["file-loader"],
        }]
    },
    resolve: { 
        alias: { 
            'react': path.resolve(__dirname, './node_modules/react') ,
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            'assets': path.resolve(__dirname, 'assets')
        } 
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
};