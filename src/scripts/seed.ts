import { faker } from "@faker-js/faker";

import { addBlog } from "@/services/blog.service";

function capitalize(word: string) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

async function main() {
	const blogCount = 5;

	for (let i = 0; i < blogCount; i++) {
		const title = capitalize(faker.word.noun());
		const body = faker.lorem.paragraphs(3);
		addBlog(title, body);
	}
}

main()
	.then(() => {
		console.info("✅ Blogs seeded successfully.");
	})
	.catch((err) => {
		console.error("❌ Failed to seed blogs:", err);
		process.exit(1);
	});
