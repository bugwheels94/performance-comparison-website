module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  "ignorePatterns": ["node_modules/"],
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-underscore-dangle": ["error", { "allow": ["_id"] }],
    "no-tabs": ["error", { allowIndentationTabs: true }],
		"no-nested-ternary": "off",
		"operator-linebreak": "off",
		"indent": [1, "tab"],
    "react/jsx-indent": [1, "tab"],
    "react/jsx-indent-props": [1, "tab"],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "invalidHref", "preferButton" ]
    }]
    },
};
