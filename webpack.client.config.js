const path = require('path');

module.exports = {
    mode: 'development',
    //plugins: [ new require('webpack-bundle-analyzer').BundleAnalyzerPlugin() ],
    entry: {
        client: ['@babel/polyfill', './src/client/index.js'],
    },
    resolve: {
        modules: [path.resolve(__dirname, './src/client'), 'node_modules'],
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/bundles')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react', '@babel/env', 'minify'],
                        plugins: [
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-syntax-dynamic-import',
                        ]
                    }
                }
            }
        ]
    }
};
