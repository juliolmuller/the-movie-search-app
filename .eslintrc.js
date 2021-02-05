/* eslint-env node */
module.exports = {
  root: true,
  env: {
    'es6': true,
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:jsx-control-statements/recommended',
    '@lacussoft',
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
    'import',
    'react',
    'react-hooks',
    'react-native',
    'jsx-control-statements',
  ],
  rules: {
    'camelcase': ['error', { allow: ['backdrop_path', 'episode_count', 'file_path', 'first_air_date', 'include_adult', 'known_for_department', 'place_of_birth', 'profile_path', 'release_date', 'vote_average'] }],
    'no-confusing-arrow': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': ['error', { ImportDeclaration: { multiline: true, minProperties: 8 } }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-bracket-location': 'error',
    'react/prop-types': 'off',
  },
}
