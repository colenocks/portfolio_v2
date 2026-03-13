import nextPlugin from "eslint-plugin-next";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      next: {
        rootDir: ["./"],
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      next: nextPlugin,
      "jsx-a11y": jsxA11yPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  }
);
