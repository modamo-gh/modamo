import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content/posts");

export const getAllPosts = () => {
	const filenames = fs.readdirSync(postsDirectory);

	return filenames.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const fileContents = fs.readFileSync(filePath, "utf8");
		const { data } = matter(fileContents);

		return {
			slug: filename.replace(".md", ""),
			...data
		};
	});
};

export const getPostBySlug = async (slug: string) => {
	const filePath = path.join(postsDirectory, `${slug}.md`);
	const fileContents = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(fileContents);

	return {
		slug,
		...data,
		content
	};
};
