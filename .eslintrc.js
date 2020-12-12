/* eslint-disable no-undef */

module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    '@lacussoft/standard',
  ],
  globals: {
    alert: true,
    console: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'camelcase': ['error', { allow: ['backdrop_path', 'file_path', 'include_adult', 'release_date', 'vote_average'] }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': ['error', { ImportDeclaration: { multiline: true, minProperties: 6 } }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-bracket-location': 'error',
    'react/prop-types': 'off',
  },
}
