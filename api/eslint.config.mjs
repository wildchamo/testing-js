/* eslint-disable import/no-extraneous-dependencies */
import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";
import importPlugin from "eslint-plugin-import";
import bestPractices from "eslint-config-airbnb-base/rules/best-practices";
import errors from "eslint-config-airbnb-base/rules/errors";
import node from "eslint-config-airbnb-base/rules/node";
import style from "eslint-config-airbnb-base/rules/style";
import variables from "eslint-config-airbnb-base/rules/variables";
import es6 from "eslint-config-airbnb-base/rules/es6";
import imports from "eslint-config-airbnb-base/rules/imports";
import strict from "eslint-config-airbnb-base/rules/strict";

export default [
  {
    name: "eslint-recommended-configuration",
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    name: "jest-recommended-configuration",
    files: ["**/*.test.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
  {
    name: "airbnb-plugin-configuration",
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...bestPractices.rules,
      ...errors.rules,
      ...node.rules,
      ...style.rules,
      ...variables.rules,
      ...es6.rules,
      ...imports.rules,
      ...strict.rules,
      quotes: "off",
    },
  },
  pluginJs.configs.recommended,
];
