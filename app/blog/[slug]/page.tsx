import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const processedContent = await remark().use(html).process(post.content);
	const contentHTML = processedContent.toString();

	return (
		<main className="p-8">
			<h1 className="text-3xl font-bold">{post.title}</h1>
			<p className="text-gray-500">{post.date}</p>
			<div
				className="mt-4 prose"
				dangerouslySetInnerHTML={{ __html: contentHTML }}
			/>
		</main>
	);
};

export default BlogPost;
