import fs from "node:fs";
import path from "node:path";

const dbPath = path.join(__dirname, "../../../data/db.json");

export function backupDB(): any {
	const raw = fs.readFileSync(dbPath, "utf-8");
	return JSON.parse(raw);
}

export function restoreDB(snapshot: any) {
	fs.writeFileSync(dbPath, JSON.stringify(snapshot, null, 2));
}
