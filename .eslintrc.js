const fs = require('fs');

const rulesDirPlugin = require('eslint-plugin-rulesdir');

const prettierConfig = require('./.prettierrc.json');

rulesDirPlugin.RULES_DIR = 'eslint/rules';

const dirsInSrc = fs
  .readdirSync('./app', {
    withFileTypes: true,
  })
  .filter((folderOrFile) => folderOrFile.isDirectory())
  .map((folder) => folder.name);

module.exports = {
  settings: {
    'import/internal-regex': `^(${dirsInSrc.join('|')})+(.)*`,
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'prettier',
    'react',
    'import',
    'rulesdir',
  ],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'lines-between-class-members': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'implicit-arrow-linebreak': 'off',
    'newline-before-return': 'error',
    'object-curly-newline': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    indent: 'off',
    'operator-linebreak': 'off',
    'function-paren-newline': 'off',
    'max-len': 'off',
    'comma-dangle': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-confusing-arrow': 'off',

    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'type',
          'object',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-default-export': 'error',
    'import/no-unresolved': 0,
    'import/prefer-default-export': 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/extensions': ['error', 'never'],
    'unused-imports/no-unused-imports': 'error',

    'react/react-in-jsx-scope': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/require-default-props': 'off',
    'react/style-prop-object': 'off',
    'react/jsx-curly-newline': 'off',
    'react/prop-types': 0,
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],

    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': ['error'],

    'rulesdir/invalid-query-variable-name': 'error',
    'linebreak-style': 'off',
  },
  ignorePatterns: ['babel.config.js', 'build'],
};
