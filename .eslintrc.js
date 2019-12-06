module.exports = {
  env: { browser: true, es6: true },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
  rules: {
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }]
  }
};
