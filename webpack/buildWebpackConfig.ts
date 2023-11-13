import { Configuration } from 'webpack';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import { IBuildOptions } from './types/types';

export function buildWebpackConfig(options: IBuildOptions): Configuration {
    const {
        paths,
        mode,
        isDevelopment,
    } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            publicPath: '/',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        watchOptions: {
            ignored: /ckeditor/,
        },
        resolve: buildResolvers(options),
        devtool: isDevelopment
            ? 'inline-source-map'
            : undefined,
        devServer: isDevelopment
            ? buildDevServer(options)
            : undefined,
    } as Configuration;
}
