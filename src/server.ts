import cors from "cors";
import express from "express";

import errorHandler from "@/middleware/errorHandler";
import morganMiddleware from "@/middleware/morganMiddleware";
import health from "@/routes/health/health.index";
import v1 from "@/routes/v1";

export function createServer() {
	const app = express();
	app
		.disable("x-powered-by")
		.use(morganMiddleware)
		.use(express.urlencoded({ extended: true }))
		.use(express.json())
		.use(cors());

	app.use(health);
	app.use("/v1", v1);
	app.use(errorHandler);
	return app;
}
