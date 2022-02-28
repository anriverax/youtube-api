const getBaseConifg = require('./base.eslint');
const parser = require('@typescript-eslint/parser');

module.exports = function getTsConfig() {
  const config = getBaseConifg();

  config.parser = '@typescript-eslint/parser';
  config.parserOptions = {
    ...config.parserOptions,
    tsconfigRootDir: __dirname,
    project: ['../tsconfig.eslint.json'],
    ecmaFeatures: {
      jsx: true
    }
  };
  config.plugins = [...config.plugins, '@typescript-eslint'];
  config.extends = [
    ...config.extends,
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ];
  config.rules = {
    ...config.rules,
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': ['error'],
    '@typescript-eslintstrict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: true },
        overrides: {
          interface: {
            multiline: { delimiter: 'semi', requireLast: true }
          }
        }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase']
      }
    ],
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: false }],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off', //'warn'
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/init-declarations': ['error', 'always'],
    '@typescript-eslint/no-invalid-this': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/require-await': 'off'
  };

  config.settings = {
    ...config.settings,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  };

  return config;
};
