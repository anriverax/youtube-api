module.exports = function getBaseConifg() {
  return {
    root: true,
    env: {
      browser: true,
      node: true,
      es2021: true,
      es6: true
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        globalReturn: false
      }
    },
    plugins: ['prettier'],
    extends: [
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'prettier',
      'plugin:prettier/recommended'
    ],
    rules: {
      eqeqeq: ['error', 'always'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'import/no-unresolved': [
        2,
        {
          commonjs: true,
          amd: true
        }
      ],
      'object-curly-spacing': 'off',
      'import/named': 2,
      'import/namespace': 'off',
      'require-await': 'off',
      'import/default': 2,
      'import/export': 2,
      'import/no-useless-path-segments': 'error',
      'import/no-named-as-default': 'error',
      'import/no-unused-modules': 'off',
      'import/no-named-as-default-member': 'off',
      'import/first': 'error',
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: '@/**',
              group: 'parent',
              position: 'before'
            }
          ]
        }
      ],
      'import/prefer-default-export': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never'
        }
      ],
      'no-undef': 'error',
      'space-in-parens': ['error', 'never'],
      'semi-spacing': 'error',
      'no-async-promise-executor': 'warn',
      'template-curly-spacing': 'error',
      'array-callback-return': 'error',
      'consistent-return': 'off',
      'prefer-promise-reject-errors': 'warn',
      'line-comment-position': [
        'error',
        {
          position: 'above'
        }
      ],
      'no-self-compare': 'error',
      'no-empty': 'error',
      'no-eq-null': 'error',
      'keyword-spacing': [
        'error',
        {
          before: true
        }
      ],
      'prefer-template': 'error',
      'prefer-object-spread': 'warn',
      'key-spacing': [
        'error',
        {
          beforeColon: false
        }
      ],
      'lines-around-comment': [
        'error',
        {
          beforeBlockComment: true
        }
      ],
      'no-empty-function': 'error',
      'no-invalid-this': 'error',
      'no-shadow': 'error',
      //'linebreak-style': ['error', 'unix'],
      'no-unused-vars': 'error',
      'no-use-before-define': 'error',
      'no-console': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'no-template-curly-in-string': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-constant-condition': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-imports': 'error',
      'valid-typeof': 'error',
      'no-var': 'error',
      'spaced-comment': ['error', 'always'],
      'no-useless-concat': 'error',
      'prefer-destructuring': [
        'error',
        {
          array: true,
          object: true
        },
        {
          enforceForRenamedProperties: false
        }
      ],
      radix: 'off',
      camelcase: 'error',
      'no-else-return': [
        'warn',
        {
          allowElseIf: false
        }
      ],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': 'off',
      'no-unused-expressions': 'warn',
      'no-unneeded-ternary': 'warn',
      'no-throw-literal': 'error',
      'no-restricted-syntax': 'warn',
      'no-return-assign': 'warn',
      'no-plusplus': 'error',
      'block-scoped-var': 'error',
      'no-underscore-dangle': 'error',
      'default-case': 'error',
      'default-param-last': ['error'],
      'no-inline-comments': 'error',
      'no-new-wrappers': 'error',
      'comma-style': ['error', 'last'],
      'array-bracket-newline': [
        'error',
        {
          multiline: true
        }
      ],
      'array-element-newline': ['error', 'consistent'],
      'no-lonely-if': 'error',
      'computed-property-spacing': [
        'error',
        'never',
        {
          enforceForClassMembers: true
        }
      ],
      'init-declarations': ['error', 'always'],
      'brace-style': 'error',
      'no-param-reassign': [
        'error',
        {
          props: false
        }
      ],
      'comma-dangle': ['error', 'never'],
      'block-spacing': 'error',
      'multiline-ternary': ['error', 'always-multiline'],
      'no-mixed-spaces-and-tabs': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': 'error',
      'no-trailing-spaces': 'error',
      'nonblock-statement-body-position': ['error', 'beside'],
      'object-curly-newline': [
        'error',
        {
          consistent: true
        }
      ],
      'max-len': [
        'error',
        {
          code: 120,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreStrings: true,
          ignoreUrls: true,
          ignorePattern: 'd="([\\s\\S]*?)"'
        }
      ],
      'array-bracket-spacing': ['error', 'never'],
      'new-cap': [
        'error',
        {
          newIsCap: true
        }
      ],
      'arrow-spacing': 'error'
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    }
  };
};
