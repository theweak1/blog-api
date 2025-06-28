import request from "supertest";

import { createServer } from "@/server";

import { backupDB, restoreDB } from "../helpers/dbTestUtils";

const app = createServer();

describe("blog Controller (Integration)", () => {
	let initialDB: any;
	let createdBlog: Blog;

	beforeAll(() => {
		initialDB = backupDB();
	});

	afterAll(() => {
		restoreDB(initialDB);
	});

	it("gET /v1/blogs should return a list of blogs", async () => {
		const res = await request(app).get("/v1/blogs");
		expect(res.status).toBe(200);
		expect(Array.isArray(res.body)).toBe(true);
	});

	it("post /v1/blogs should create a blog", async () => {
		const res = await request(app).post("/v1/blogs").send({
			title: "Test title",
			body: "Test content",
		});
		expect(res.status).toBe(201);
		expect(res.body).toHaveProperty("id");
		createdBlog = res.body;
	});

	it("post /v1/blogs without body, should return error", async () => {
		const res = await request(app).post("/v1/blogs").send({
			title: "Test title",
		});
		expect(res.status).toBe(400);
		expect(res.body.error.code).toBe("ERR_VALID");
	});

	it("get /v1/blogs/:id should fetch a specific blog", async () => {
		const res = await request(app).get(`/v1/blogs/${createdBlog.id}`);
		expect(res.status).toBe(200);
		expect(res.body.id).toBe(createdBlog.id);
	});

	it("delete /v1/blogs/:id should delete the blog", async () => {
		const res = await request(app).delete(`/v1/blogs/${createdBlog.id}`);
		expect(res.status).toBe(204);

		const check = await request(app).get(`/v1/blogs/${createdBlog.id}`);
		expect(check.status).toBe(404);
	});

	it("delete /v1/blogs/:id invalid id, should return error", async () => {
		const res = await request(app).delete(`/v1/blogs/${createdBlog.id}`);
		expect(res.status).toBe(500);
		expect(res.body.error.code).toBe("ERR_SVR");
	});
});
