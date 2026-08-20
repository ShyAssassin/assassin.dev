import path from "node:path";
import globals from "globals";
import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig, includeIgnoreFile } from "eslint/config";

const gitignorePath = path.resolve(import.meta.dirname, ".gitignore");

export default defineConfig(
    ts.configs.recommended,
    svelte.configs.prettier,
    svelte.configs.recommended,
    stylistic.configs.recommended,
    includeIgnoreFile(gitignorePath),
    {
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
        rules: {
            // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
            // see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
            "no-undef": "off",

            "@stylistic/indent": ["error", 4],
            "@stylistic/semi": ["warn", "always"],

            "@stylistic/quotes": ["warn", "double", {
                avoidEscape: true,
                allowTemplateLiterals: "avoidEscape",
            }],

            "@typescript-eslint/no-unused-vars": ["warn", {
                varsIgnorePattern: "^_",
                argsIgnorePattern: "^_",
            }],
        },
    },
    {
        files: ["**/*.svelte", "**/*.svelte.ts"],
        languageOptions: {
            parserOptions: {
                parser: ts.parser,
                projectService: true,
                extraFileExtensions: [".svelte"],
            },
        },
    },
    {
        // Override or add rule settings here, such as:
        // "svelte/button-has-type": "error"
        rules: {},
    },
);
