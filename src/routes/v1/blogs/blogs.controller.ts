import type { Request, Response } from "express";

import EntityNotFoundError from "../../../errors/entityNotFound";
import { addBlog, getBlog, listBlogs, removeBlog } from "./db.controller";

export function listAllBlogs(req: Request, res: Response) {
	const blogs = listBlogs();
	res.json(blogs);
}

export function getABlog(req: Request, res: Response) {
	const blogId = req.params.id;
	const blog = getBlog(blogId);
	if (!blog) {
		throw new EntityNotFoundError({
			message: "Blog not found",
			statusCode: 404,
			code: "ERR_NF",
		});
	}
	res.status(200).json(blog);
}

export function createABlog(req: Request, res: Response) {
	const blogContent = { title: req.body.title, body: req.body.body };
	const newBlog = addBlog(blogContent);

	res.status(201).json(newBlog);
}

export function deleteABlog(req: Request, res: Response) {
	const blogId = req.params.id;
	const deleted = removeBlog(blogId);

	if (!deleted) {
		throw new EntityNotFoundError({
			message: "Blog not found",
			statusCode: 404,
			code: "ERR_NF",
		});
	}

	res.status(204).send(); // ✅ No content
}
