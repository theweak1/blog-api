import cors from "cors";
import express from "express";

import health from "./health/health.index";
import errorHandler from "./middleware/errorHandler";
import morganMiddleware from "./middleware/morganMiddleware";

export function createServer() {
	const app = express();
	app
		.disable("x-powered-by")
		.use(morganMiddleware)
		.use(express.urlencoded({ extended: true }))
		.use(express.json())
		.use(cors());

	app.use(health);
	app.use(errorHandler);
	return app;
}
