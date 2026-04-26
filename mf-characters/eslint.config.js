import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import { globalIgnores } from "eslint/config";

export default [
  globalIgnores([
    "dist",
    "node_modules",
    "webpack.config.js",
    "postcss.config.js",
    "tailwind.config.js",
  ]),

  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react: reactPlugin,
      import: importPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      "import/no-unresolved": "error",
      "react/jsx-no-undef": "error",
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
        webpack: {
          config: "./webpack.config.js",
        },
      },
    },
  },
];
