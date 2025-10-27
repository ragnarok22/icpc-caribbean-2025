import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React Rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Not needed in React 19+
      "react/prop-types": "off", // Using TypeScript for prop validation

      // Accessibility Rules
      ...jsxA11yPlugin.configs.recommended.rules,

      // TypeScript Rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",

      // General Rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    // Astro-specific overrides
    files: ["**/*.astro"],
    rules: {
      // Disable rules that may conflict with Astro
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    ignores: [
      "dist/**",
      ".astro/**",
      "node_modules/**",
      ".vercel/**",
      "*.config.{js,mjs,cjs}",
    ],
  },
  // Disable ESLint rules that conflict with Prettier (must be last)
  eslintConfigPrettier,
);
