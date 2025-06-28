import request from "supertest";

import { createServer } from "@/server";

const app = createServer();

describe("health Controller (Integration)", () => {
	it("gET /health should return status 'ok'", async () => {
		const res = await request(app).get("/health");
		expect(res.status).toBe(200);
		expect(res.body.status).toBe("ok");
	});
});
