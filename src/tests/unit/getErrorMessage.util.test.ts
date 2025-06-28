import { getErrorMessage } from "@/utils";

describe("getErrorMessage()", () => {
	it("returns message from Error instance", () => {
		const err = new Error("Something went wrong");
		expect(getErrorMessage(err)).toBe("Something went wrong");
	});

	it("stringifies non-Error input", () => {
		expect(getErrorMessage("plain error")).toBe("plain error");
		expect(getErrorMessage(404)).toBe("An error occurred");
		expect(getErrorMessage(null)).toBe("An error occurred");
	});
});
