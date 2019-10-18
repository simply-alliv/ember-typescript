module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['ember', 'prettier'],
  extends: [
    'eslint:recommended', // uses eslint's common linting rules
    'plugin:ember/recommended', // uses ember-specific linting rules
    'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
    'plugin:prettier/recommended' // enables eslint-plugin-prettier and eslint-config-prettier
  ],
  env: {
    browser: true
  },
  rules: {},
  overrides: [
    // node files
    {
      files: [
        '.ember-cli.js',
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      excludedFiles: ['app/**'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign(
        {},
        require('eslint-plugin-node').configs.recommended.rules,
        {
          // add your custom rules and overrides for node files here

          // this can be removed once the following is fixed
          // https://github.com/mysticatea/eslint-plugin-node/issues/77
          'node/no-unpublished-require': 'off'
        }
      ),
      extends: ['plugin:node/recommended']
    }
  ]
};
