module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'spellcheck'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors'
  ],
  root: true,
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'import/order': [2, {
      'groups': [
        'builtin', 'external', 'parent', 'sibling', 'index'
      ],
      'newlines-between': 'always',
      'pathGroupsExcludedImportTypes': ['builtin'],
    }],
    'spellcheck/spell-checker': ['error', {
      skipWords: [
        'dotenv',
        'mongodb',
        'srv',
        'len',
        'dto',
        'virtuals',
        'localhost',
        'enum',
        'ig',
        'lte',
        'cond',
        'ua',
        'uri'
      ]
    }],
    'no-extra-semi': 'error',
    'no-irregular-whitespace': 'error',
    'no-unexpected-multiline': 'error',
    'semi': ['error', 'always'],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'rest-spread-spacing': 'error',
    'template-curly-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'block-spacing': 'error',
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'space-in-parens': ['error', 'never'],
    'no-console': 'error',
    'no-return-await': 'off',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    '@typescript-eslint/type-annotation-spacing': ['error', {
      after: true,
    }],
    'eol-last': ['error', 'always'],
    'no-trailing-spaces': ['error'],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 0,
    }],
    'padding-line-between-statements': ['error',
      {
        blankLine: 'always', prev: '*', next: 'return',
      },
      {
        blankLine: 'always', prev: 'block-like', next: '*',
      },
    ],
    'max-len': ['error', 120],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    }],
    'quotes': ['error', 'single'],
    'max-lines': ['error', 200],
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'no-prototype-builtins': 'off',
    'require-await': 'error'
  },
};
