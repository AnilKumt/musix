import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    // Ignore ESLint errors during build
    languageOptions: {
      parserOptions: {},
    },
    // This is the key option for Next.js builds
    settings: {
      next: {
        eslint: {
          ignoreDuringBuilds: true,
        },
      },
    },
  },
];

export default eslintConfig;
