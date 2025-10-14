// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  { ignores: ['node_modules/**', 'dist/**', '.vercel/**'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        alert: 'readonly'
      }
    },
    plugins: { react, 'react-hooks': reactHooks, 'jsx-a11y': jsxA11y },
    rules: {
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }]
    },
    settings: { react: { version: 'detect' } }
  }
];
