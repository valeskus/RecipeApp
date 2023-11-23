module.exports = {
  root: true,
  extends: [
    'airbnb-typescript',
    'plugin:import/errors',
    '@react-native',
  ],
  plugins: [
    'eslint-plugin-react',
    'react',
    'react-native',
    'react-hooks',
    'spellcheck'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {}
    }
  },
  rules: {
    'react-hooks/exhaustive-deps': 0,
    'prettier/prettier': 0,
    'spellcheck/spell-checker': ['error', {
      skipWords: [
        'redux',
        'pressable',
        'len',
        'Rect',
        'resize',
        'uri',
        'axios',
        'tsx',
        'dotenv',
        'kcal',
        'lte',
        'gte',
        'ua',
        'en',
        'ooops',
        'Nunito',
        'lottie',
        'Extrabold',
        'Semibold'
      ]
    }],
    'import/no-unresolved': ['error', { ignore: ['@env'] }],
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
    'react/self-closing-comp': ['error', {
      'component': true,
    }],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens',
      assignment: 'parens',
      return: 'parens',
      arrow: 'parens',
      condition: 'parens',
      logical: 'parens',
      prop: 'parens',
    }],
    'no-console': 'error',
    'no-return-await': 'off',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    '@typescript-eslint/type-annotation-spacing': ['error', {
      after: true,
    }],
    'jsx-quotes': ['error', 'prefer-double'],
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
    'react/jsx-fragments': ['off', 'element'],
    'react/destructuring-assignment': ['off', 'never'],
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
    'max-lines': ['error', 200],
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'import/order': [2, {
      'groups': [
        'builtin', 'external', 'parent', 'sibling', 'index'
      ],
      'newlines-between': 'always',
      'pathGroups': [
        {
          'pattern': '@UI/**',
          'group': 'external',
          'position': 'after'
        },
        {
          'pattern': '@stores/**',
          'group': 'external',
          'position': 'after'
        },
        {
          'pattern': '@api/**',
          'group': 'external',
          'position': 'after'
        },
        {
          'pattern': '@components/**',
          'group': 'external',
          'position': 'after'
        },
        {
          'pattern': '@managers/**',
          'group': 'external',
          'position': 'after'
        }
      ],
      'pathGroupsExcludedImportTypes': ['builtin'],
    }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-indent': ['error', 2, { indentLogicalExpressions: true, checkAttributes: true }],
    'arrow-body-style': 'off',
    'react/prop-types': 'off',
    'react/display-name': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': ['error', { ignore: ['testID'] }],
    'no-prototype-builtins': 'off',
    'react-native/no-single-element-style-arrays': 'error',
    'require-await': 'error',
  },
  overrides: [
    {
      files: ['*Reducer.ts'],
      rules: {
        '@typescript-eslint/default-param-last': 'off'
      },
    },
  ]
};
