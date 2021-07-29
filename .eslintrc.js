module.exports = {
  // "files": ["src/**/*.js"],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@web-bee-ru/eslint-plugin/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    '@web-bee-ru',
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },


};

// @web-bee-ru/eslint-plugin
