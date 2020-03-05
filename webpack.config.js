var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/components/Dropdown.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'Dropdown.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}