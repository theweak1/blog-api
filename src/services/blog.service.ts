import { faker } from "@faker-js/faker";
import fs from "node:fs";
import path from "node:path";

import CustomError from "@/errors/customError";
import EntityNotFoundError from "@/errors/entityNotFound";

const dbPath = path.join(__dirname, "../../data/db.json");

function readDB() {
	const data = fs.readFileSync(dbPath, "utf-8");
	return JSON.parse(data);
}

function writeDB(data: object) {
	fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

type Blog = {
	id: string;

	title: string;
	body: string;
};

// === CRUD Methods ===

export function listBlogs(): Blog[] {
	const db = readDB();
	return db.blogs || [];
}

export function getSpecificBlog(id: string): Blog | undefined {
	const blogs = listBlogs();
	const blog = blogs.find((blog) => blog.id === id);
	if (!blog) {
		throw new EntityNotFoundError({
			message: "Blog not found",
			statusCode: 404,
			code: "ERR_NF",
		});
	}
	return blog;
}

export function addBlog(title: string, body: string): Blog {
	const db = readDB();
	const blogs = db.blogs || [];

	const newBlog: Blog = {
		id: faker.string.uuid(),
		title,
		body,
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
		throw new CustomError({
			message: "Blog could not be deleted",
			statusCode: 500,
			code: "ERR_SRV",
		});
	}

	db.blogs = filtered;
	writeDB(db);
	return true;
}
