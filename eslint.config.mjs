import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Purchased theme assets are copied verbatim and are not application source.
    "public/assets/**",
  ]),
  {
    rules: {
      // These local stylesheets are the licensed theme's canonical CSS bundle.
      "@next/next/no-css-tags": "off",
    },
  },
]);

export default eslintConfig;
