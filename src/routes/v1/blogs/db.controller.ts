import { faker } from "@faker-js/faker";
import fs from "node:fs";
import path from "node:path";

const dbPath = path.join(__dirname, "../../../../db.json");

function readDB() {
	const data = fs.readFileSync(dbPath, "utf-8");
	return JSON.parse(data);
}

function writeDB(data: object) {
	fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

type Blog = {
	id: string;
	post: {
		title: string;
		body: string;
	};
};

// === CRUD Methods ===

export function listBlogs(): Blog[] {
	const db = readDB();
	return db.blogs || [];
}

export function getBlog(id: string): Blog | undefined {
	const blogs = listBlogs();
	return blogs.find((blog) => blog.id === id);
}

export function addBlog(post: { title: string; body: string }): Blog {
	const db = readDB();
	const blogs = db.blogs || [];

	const newBlog: Blog = {
		id: faker.string.uuid(),
		post,
	};

	blogs.push(newBlog);
	db.blogs = blogs;
	writeDB(db);

	return newBlog;
}

export function removeBlog(id: string): boolean {
	const db = readDB();
	const blogs = db.blogs || [];

	const filtered = blogs.filter((blog: Blog) => blog.id !== id);
	if (filtered.length === blogs.length) {
		return false;
	}

	db.blogs = filtered;
	writeDB(db);
	return true;
}
