import type { Router } from "express";

import express from "express";

import {
	deleteABlog,
	getBlog,
	listAllBlogs,
	newBlog,
	updateABlog,
} from "@/controllers/blog.controller";

const blogs: Router = express.Router();

blogs.get("/", listAllBlogs);
blogs.get("/:id", getBlog);
blogs.post("/", newBlog);
blogs.put("/:id", updateABlog);
blogs.delete("/:id", deleteABlog);
export default blogs;
