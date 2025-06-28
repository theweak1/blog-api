import {
	addBlog,
	getSpecificBlog,
	listBlogs,
	removeBlog,
} from "@/services/blog.service";

describe("blog service", () => {
	let createdBlog: Blog;
	let initialCount: number;

	beforeAll(() => {
		initialCount = listBlogs().length;
	});

	it("list all blogs", () => {
		const allBlogs = listBlogs();
		expect(Array.isArray(allBlogs)).toBe(true);
	});

	it("creates a blog", () => {
		const title = "Blog from test";
		const body = "Test body content";
		createdBlog = addBlog(title, body);
		const blogs = listBlogs();
		expect(blogs.length).toBeGreaterThan(initialCount);
		expect(blogs.some((b) => b.id === createdBlog.id)).toBe(true);
	});

	it("gets a specific blog", () => {
		const found = getSpecificBlog(createdBlog.id);
		expect(found).toBeDefined();
		expect(found?.id).toBe(createdBlog.id);
		expect(found?.title).toBe(createdBlog.title);
	});
	it("deletes a blog", () => {
		const deleted = removeBlog(createdBlog.id);
		const blogsAfterDelete = listBlogs();

		expect(deleted).toBe(true);
		expect(blogsAfterDelete.some((b) => b.id === createdBlog.id)).toBe(false);
	});
});
