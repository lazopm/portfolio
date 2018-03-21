const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('./webpack.client.config.js');

config.mode = 'production';
config.plugins = [
    new BundleAnalyzerPlugin()
];

module.exports = config; 
