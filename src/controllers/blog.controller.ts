import type { Request, Response } from "express";

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
	res.status(200).json(blog);
}

export function newBlog(req: Request, res: Response) {
	const { title, body } = req.body;
	const newBlog = addBlog(title, body);
	res.status(201).json(newBlog);
}

export function deleteABlog(req: Request, res: Response) {
	const blogId = req.params.id;
	removeBlog(blogId);

	res.status(204).send();
}
