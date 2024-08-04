import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [{
  ignores: [
    '**/node_modules',
    '**/dist',
    '**/coverage',
    '**/requirements',
    '**/.vscode',
    '**/.husky',
    '**/jest.config.ts',
    '**/jest-unit-config.ts',
    '**/jest-integration-config.ts',
    '**/tsconfig.json',
    '!**/src',
    '!**/tests'
  ]
}, ...compat.extends('standard-with-typescript'), {
  languageOptions: {
    ecmaVersion: 5,
    sourceType: 'script',

    parserOptions: {
      project: './tsconfig.json'
    }
  },

  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'import/export': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        filter: {
          regex: '^(__filename|__dirname)$',
          match: false
        }
      }
    ]
  }
}]
