const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/'
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: "Output Management",
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] },
        ],
    },
};
