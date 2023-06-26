module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    // vue의 코드 검사 규칙
    // 'plugin:vue/vue3-essential', // Lv 1
    'plugin:vue/vue3-strongly-recommended', // Lv 2
    // 'plugin:vue/vue3-recommended', // Lv 3

    // js의 코드 검사 규칙
    'eslint:recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOption: {
    parser: 'babel-eslint'
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "always",
      "multiline": "always"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}