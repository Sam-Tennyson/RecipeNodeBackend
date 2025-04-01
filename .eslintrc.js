module.exports = {
  env: {
    browser: true,
    node: true, // Ensure Node.js global variables are recognized
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-undef": "off", // Disable no-undef globally
  },
};
