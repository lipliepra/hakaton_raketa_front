export type TBuildMode =
    'production'
    | 'development';

export interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface IBuildOptions {
    mode: TBuildMode;
    paths: IBuildPaths;
    isDevelopment: boolean;
    port: number;
    envFileName: TBuildMode;
    hot?: boolean;
}

export interface IBuildEnv {
    mode: TBuildMode;
    port: number;
    envFileName: TBuildMode;
}
