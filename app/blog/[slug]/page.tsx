import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { JSX } from "react";
import { remark } from "remark";
import html from "remark-html";

type Params = Promise<{ date: string; slug: string; title: string }>;

const BlogPost = async ({
	params
}: {
	params: Params;
}): Promise<JSX.Element> => {
	const { date, slug, title } = await params;

	if (!slug) {
		return notFound();
	}

	const post = await getPostBySlug(slug);

	if (!post) {
		return notFound();
	}

	const processedContent = await remark().use(html).process(post.content);
	const contentHTML = processedContent.toString();

	return (
		<main className="p-8">
			<h1 className="text-3xl font-bold">{title}</h1>
			<p className="text-gray-500">{date}</p>
			<div
				className="mt-4 prose"
				dangerouslySetInnerHTML={{ __html: contentHTML }}
			/>
		</main>
	);
};

export default BlogPost;
