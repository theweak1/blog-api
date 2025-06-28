import { format } from "winston";

const printfFormat = format.printf(
	({ timestamp, level, message, stack }) =>
		`${timestamp} ${level}: ${message}${stack ? `\n${stack}` : ""}`,
);

describe("custom winston format", () => {
	it("formats message without stack", () => {
		const info = {
			timestamp: "2024-06-28T00:00:00Z",
			level: "info",
			message: "Hello",
		};

		const output = printfFormat.transform(info, {});
		const formatted =
			output && typeof output === "object"
				? output[Symbol.for("message")]
				: undefined;

		expect(formatted).toBe("2024-06-28T00:00:00Z info: Hello");
	});

	it("formats message with stack", () => {
		const info = {
			timestamp: "2024-06-28T00:00:00Z",
			level: "error",
			message: "Boom",
			stack: "Error: Boom\n    at main.js:1:1",
		};

		const output = printfFormat.transform(info, {});
		const formatted =
			output && typeof output === "object"
				? output[Symbol.for("message")]
				: undefined;

		expect(formatted).toBe(
			"2024-06-28T00:00:00Z error: Boom\nError: Boom\n    at main.js:1:1",
		);
	});
});
