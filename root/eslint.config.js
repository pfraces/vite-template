import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import globals from 'globals';

export default [
  js.configs.recommended,
  { ignores: ['dist'] },
  {
    files: ['**/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest'
      }
    },
    plugins: {
      import: importPlugin
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: 'jsconfig.json'
        }
      },
      'import/parsers': {
        espree: ['.js']
      }
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      'no-console': 'error',
      curly: 'error',
      'import/extensions': ['error', 'ignorePackages']
    }
  },
  {
    files: ['**/*.js'],
    ignores: ['src/**'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      'no-relative-import-paths': noRelativeImportPaths
    },
    rules: {
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        {
          allowSameFolder: true,
          rootDir: 'src',
          prefix: '@'
        }
      ]
    }
  }
];
