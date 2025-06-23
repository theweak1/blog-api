import type { Router } from "express";

import express from "express";

import {
	createABlog,
	deleteABlog,
	getABlog,
	listAllBlogs,
} from "./blogs.controller";

const blogs: Router = express.Router();

blogs.get("/", listAllBlogs);
blogs.get("/:id", getABlog);
blogs.post("/", createABlog);
blogs.delete("/:id", deleteABlog);

export default blogs;
