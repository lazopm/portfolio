const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/client/index.js'],
    mode: 'development',
    resolve: {
        modules: [path.resolve(__dirname, './src/client'), 'node_modules'],
    },
    output: {
        filename: 'client.bundle.js'
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
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ]
    }
};
