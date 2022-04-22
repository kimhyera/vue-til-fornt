module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  "@typescript-eslint/explicit-module-boundary-types": 'off',


  "prettier/prettier": ['error', {
      // 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
      // https://prettier.io/docs/en/options.html

    singleQuote: true,
    semi: true,
    useTabs: true,
    endOfLine: "auto",
    tabWidth: 4,
    printWidth: 80,
  }]
  },
};