import Navbar from "@/components/Navbar";
import { getPostBySlug } from "@/lib/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JSX } from "react";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkRehype from "remark-rehype";

type Params = Promise<{ date: string; slug: string; title: string }>;

export const generateMetadata = async ({
	params
}: {
	params: Params;
}): Promise<Metadata> => {
	const { slug } = await params;

	const post = await getPostBySlug(slug);

	if (!post) {
		return { title: "Blog | Modamo" };
	}

	return {
		title: `${post.title} | Modamo`,
		description: post.content.slice(0, 150) + "..."
	};
};

const BlogPost = async ({
	params
}: {
	params: Params;
}): Promise<JSX.Element> => {
	const { slug } = await params;

	if (!slug) {
		return notFound();
	}

	const post = await getPostBySlug(slug);

	if (!post) {
		return notFound();
	}

	const processedContent = await remark()
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeRaw)
		.use(rehypeStringify)
		.process(post.content);
	const contentHTML = processedContent.toString();

	return (
		<main className="bg-gradient-to-br flex flex-col from-rose-600 min-h-screen relative to-purple-600 via-fuchsia-600 w-full">
			<Navbar />
			<div className="bg-white/50 flex flex-col rounded-lg min-h-full text-white p-4 m-4">
				<h1 className="text-3xl font-bold">{post.title}</h1>
				<div
					className="mt-4 prose-lg prose-a:underline prose-li:list-disc text-white"
					dangerouslySetInnerHTML={{ __html: contentHTML }}
				/>
			</div>
		</main>
	);
};

export default BlogPost;
