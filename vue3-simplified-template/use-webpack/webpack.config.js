const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const webpack = require('webpack');
module.exports = (env, argv) => {
    const mode = argv.mode || 'development';
    return {
        entry: './src/main.js',
        mode:mode,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            publicPath: '/',
            clean: true,
            assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
            chunkFilename: 'chunks/[id].[contenthash].js',
        },
        module:{
            rules:[
                // 处理css
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                // 处理vue sfc
                {
                    test: /\.vue$/,
                    use: ['vue-loader'],
                },
                // 处理图片
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/[name].[contenthash][ext][query]',
                    },
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(mode),
                'process.env.BASE_API': JSON.stringify('/api/dev')
            })
        ],
        resolve: {
            alias: {
              '@': path.resolve(__dirname, 'src'),
            },
            extensions: ['.js', '.vue', '.json'],
        },
    }
}