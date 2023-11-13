import webpack from 'webpack';
import WebpackBar from 'webpackbar';
import Dotenv from 'dotenv-webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {IBuildOptions} from './types/types';

export function buildPlugins(options: IBuildOptions) {
    const plugins = [
        new HTMLWebpackPlugin({
            template: options.paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.isDevelopment),
        }),
        new webpack.EnvironmentPlugin({...process.env}),
        new Dotenv({path: `../.env.${options.envFileName}`}),
    ];

    if (options.isDevelopment) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new WebpackBar({color: 'green'}));
    }

    return plugins;
}
