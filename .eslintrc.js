module.exports = {
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
            'useJSXTextNode': true,
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'project': './tsconfig.json',
    },
    'extends': [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
//        "prettier",
//        "plugin:prettier/recommended"
    ],
    'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint',
    ],
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true,
        'jest': true,
    },
    'rules': {
        'linebreak-style': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        'react/jsx-filename-extension': [
            1,
            {
                'extensions': [
                    '.js',
                    '.ts',
                    'tsx',
                ],
            },
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        '@typescript-eslint/indent': [
            'error',
            4,
        ],
        'jsx-quotes': [
            'error',
            'prefer-single',
        ],
//        "prettier/prettier": [
//            "error",
//            {
//                "endOfLine": "auto"
//            }
//        ]
    },
};