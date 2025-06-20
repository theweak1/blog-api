import antfu from "@antfu/eslint-config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default antfu(
	{
		type: "app",
		typescript: true,
		formatters: true,
		stylistic: {
			// indentStyle: "tab", // Ensure tabs are used instead of spaces
			indentWidth: 2, // Optional: only affects display width of tabs
			semi: true,
			quotes: "double",
		},
		ignores: [".pnpm-store/*", "node_modules", "**/*.json"],
	},
	{
		rules: {
			"ts/no-redeclare": "off",
			"ts/consistent-type-definitions": ["error", "type"],
			"no-console": ["warn", { allow: ["info", "error"] }],
			"antfu/no-top-level-await": ["off"],
			"node/prefer-global/process": ["off"],
			"perfectionist/sort-imports": [
				"error",
				{
					tsconfigRootDir: ".",
				},
			],
			"unicorn/filename-case": [
				"error",
				{
					case: "camelCase",
					ignore: ["README.md"],
				},
			],
			"prettier/prettier": [
				"error",
				{
					useTabs: true,
					endOfLine: "auto",
				},
			],
		},
	},
	eslintPluginPrettierRecommended,
);
