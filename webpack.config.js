const path = require('path');

const ManifestPlugin = require('webpack-manifest-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/App.tsx'
    },

    output: {
        filename: "[name].bundle.js",
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, './build'),
    },

    plugins: [
        new ManifestPlugin({
            fileName: 'manifest.json'
        }),
        new DynamicCdnWebpackPlugin()
    ]
}