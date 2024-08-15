import globals from "globals";

export default [
  { languageOptions: { globals: globals.browser } },

  {
    ignores: ["dist/", "webpack.config.js"],
  },
  {
    rules: {
      "no-console": "warn",
    },
  },
];
