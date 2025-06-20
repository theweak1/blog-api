import type { Request, Response } from "express";

import config from "../config";

export function getHealth(req: Request, res: Response) {
	res.json({
		status: "ok",
		env: config.env,
		uptime: process.uptime(),
		timestamp: new Date().toISOString(),
	});
}
