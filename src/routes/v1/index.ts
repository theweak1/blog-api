import type { Router } from "express";

import express from "express";

import blogs from "./blogs.route";

const v1: Router = express.Router();

v1.use("/blogs", blogs);

export default v1;
