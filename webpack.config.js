const path = require('path');

const assetsPath = path.resolve(__dirname, 'dist/assets');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: assetsPath,
        filename: 'js/index.js'
    },
    devtool: "#eval-source-map",
    plugins: [
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
                loader: 'css-loader?importLoaders=1!postcss-loader'
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};
