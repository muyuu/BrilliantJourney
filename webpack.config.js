const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsPath = path.resolve(__dirname, 'dist/assets');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: assetsPath,
        filename: 'js/index.js'
    },
    devtool: "#eval-source-map",
    plugins: [
        new ExtractTextPlugin('/css/style.css'),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.p?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            }
                        },
                        'postcss-loader',
                    ],
                }),
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};
