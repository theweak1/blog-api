export default {
	preset: "ts-jest",
	testEnvironment: "node",
	roots: ["./src/tests"],
	transform: {
		"^.+\\.ts?$": "ts-jest",
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
	moduleFileExtensions: ["ts", "js", "json", "node"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	compilerOptions: {
		isolatedModules: true,
	},
	collectCoverage: false,
	coverageDirectory: "coverage",
	collectCoverageFrom: [
		"src/**/*.{ts,js}",
		"!**/node_modules/**",
		"!src/tests/**",
	],
	coverageThreshold: {
		global: {
			branches: 75,
			functions: 75,
			lines: 75,
			statements: 75,
		},
	},
};
