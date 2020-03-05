var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/components/Dropdown.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'Dropdown.js',
        libraryTarget: 'commonjs2'
    },
    plugins:[
        new ExtractTextPlugin({
            filename: 'dropdown.scss',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }, {
                test: /\.*scss$/,
                use : ExtractTextPlugin.extract({
                    fallback : 'style-loader',
                    use : [
                        'css-loader',
                        'sass-loader'
                    ]
                })
               },
        ]
    }
}

