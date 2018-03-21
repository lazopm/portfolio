const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/server/index.js',
    target: 'node',
    mode: 'development',
    output: {
        filename: 'server.bundle.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, './src/client'), 'node_modules'],
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/react',
                            ['@babel/env', {
                                'targets': {
                                    'node': 'current'
                                }
                            }]
                        ],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ]
    }
};
