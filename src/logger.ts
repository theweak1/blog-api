import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

import config from "./config";

const logLevels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	debug: 4,
};

const transports: winston.transport[] = [];

if (config.env === "production") {
	transports.push(
		new DailyRotateFile({
			filename: "logs/application-%DATE%.log",
			datePattern: "YYYY-MM-DD",
			zippedArchive: true,
			maxSize: "20m",
			maxFiles: "14d",
			format: winston.format.combine(
				winston.format.errors({ stack: true }),
				winston.format.timestamp(),
				winston.format.json(),
			),
		}),
	);
} else {
	transports.push(
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize(),
				winston.format.timestamp({ format: "YYYY-MM-DD hh:mm:ss.SSS A" }),
				winston.format.printf(
					({ timestamp, level, message, stack }) =>
						`${timestamp} ${level}: ${message}${stack ? `\n${stack}` : ""}`,
				),
			),
		}),
	);
}

const logger = winston.createLogger({
	levels: logLevels,
	level: config.logLevel,
	transports,
});

export default logger;
