module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    "jest/globals": true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020, // Node.js 12の場合は2019、他のバージョンのNode.jsを利用している場合は場合は適宜変更する
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json"],
  },
  plugins: ["@typescript-eslint", "tailwindcss"],
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
  },
  ignorePatterns: [
    ".eslintrc.js",
    "tailwind.config.js",
    "next.config.js",
    "next-env.d.ts",
    "postcss.config.js",
  ],
  plugins: ["jest"],
};
