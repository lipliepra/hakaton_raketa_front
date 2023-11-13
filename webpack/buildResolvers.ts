import webpack from 'webpack';

import { IBuildOptions } from './types/types';

export function buildResolvers(options: IBuildOptions): webpack.Configuration {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    } as webpack.Configuration;
}
