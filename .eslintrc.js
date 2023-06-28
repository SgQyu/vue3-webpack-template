module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-strongly-recommended",
    "eslint:recommended",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  plugins: ["html", "vue"],
  rules: {
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "always",
        multiline: "always",
      },
    ],
    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "below",
        multiline: "below",
      },
    ],
  },
};
