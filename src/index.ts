import config from "./config";
import { createServer } from "./server";

const server = createServer();

server.listen(config.port, () => {
	console.info(`api running on ${config.port}`);
});
