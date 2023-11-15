import webpack from 'webpack';
import path from 'path';

import { buildWebpackConfig } from './webpack/buildWebpackConfig';
import { IBuildEnv, IBuildPaths, TBuildMode } from './webpack/types/types';

export default (env: IBuildEnv) => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };

    const mode: TBuildMode = env.mode || 'development';
    const envFileName: TBuildMode = env.envFileName || 'development';
    const PORT: number = env.port || 3000;
    const isDevelopment: boolean = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDevelopment,
        port: PORT,
        envFileName
    }) as webpack.Configuration;
};
