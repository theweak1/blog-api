import type { NextFunction, Request, Response } from "express";

import CustomError from "@/errors/customError";
import EntityNotFoundError from "@/errors/entityNotFound";
import {
	addBlog,
	getSpecificBlog,
	listBlogs,
	removeBlog,
} from "@/services/blog.service";

export function listAllBlogs(req: Request, res: Response) {
	const blogs = listBlogs();
	res.status(200).json(blogs);
}

export function getBlog(req: Request, res: Response) {
	const blogId = req.params.id;
	const blog = getSpecificBlog(blogId);
	if (!blog) {
		throw new EntityNotFoundError({
			message: "Blog not found",
			statusCode: 404,
			code: "ERR_NF",
		});
	}
	res.status(200).json(blog);
}

export function newBlog(req: Request, res: Response) {
	const { title, body } = req.body;
	if (!title || !body) {
		throw new CustomError({
			message: "Title and body are required.",
			statusCode: 400,
			code: "ERR_VALID",
		});
	}
	const newBlog = addBlog(title, body);
	res.status(201).json(newBlog);
}

export function deleteABlog(req: Request, res: Response, next: NextFunction) {
	const blogId = req.params.id;
	try {
		removeBlog(blogId);

		res.status(204).send();
	} catch (err) {
		next(err);
	}
}
