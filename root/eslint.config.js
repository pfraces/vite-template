import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  { ignores: ['dist'] },
  {
    files: ['**/*.js'],
    ignores: ['src/**'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      'no-console': 'error'
    }
  },
  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }
];
