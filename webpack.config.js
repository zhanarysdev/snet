const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = [
    {
    entry: './index.js',
    output: {
        path: __dirname + '/',
        filename: './dist/server.bundle.js',
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    target: 'node',
    externals: [nodeExternals()]
    //If you want to minify your files uncomment this
    // ,
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false,
    //         },
    //         output: {
    //             comments: false,
    //         },
    //     }),
    // ]
    },
    {
        entry: './client/index.js',
        output: {
            path: __dirname + '/',
            filename: './dist/client.bundle.js',
        },
        module: {
            rules: [{
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }]
        }
        //If you want to minify your files uncomment this
        // ,
        // plugins: [
        //     new webpack.optimize.UglifyJsPlugin({
        //         compress: {
        //             warnings: false,
        //         },
        //         output: {
        //             comments: false,
        //         },
        //     }),
        // ]
    }
]