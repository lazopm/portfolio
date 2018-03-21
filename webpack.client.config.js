const path = require('path');

module.exports = {
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
    entry: {
        client: ['@babel/polyfill', './src/client/index.js'],
    },
    mode: 'development',
    resolve: {
        modules: [path.resolve(__dirname, './src/client'), 'node_modules'],
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/client')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react', '@babel/env'],
                        plugins: [
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                }
            }
        ]
    }
};
