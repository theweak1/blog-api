import type { Router } from "express";

import express from "express";

import { getHealth } from "./health.controller";

const health: Router = express.Router();

health.use("/health", getHealth);

export default health;
