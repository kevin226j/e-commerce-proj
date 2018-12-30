const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
        entry: {
            app: ['./app/App.tsx'],
            vendor: ['react', 'react-dom']
        },
        output : {
            path: path.resolve(__dirname, '..','dist','public'),
            filename: 'js/[name].bundle.js'
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: 'ts-loader'
                },
                {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'}
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'app','index.html')}),
            new webpack.HotModuleReplacementPlugin()
        ]
    }