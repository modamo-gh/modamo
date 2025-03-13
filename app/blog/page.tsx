import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

const BlogPage = () => {
	const posts = getAllPosts();

	return (
		<main className="p-8">
			<h1 className="text-3xl font-bold m4-4">Blog</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.slug} className="mb-2">
						<Link
							href={`/blog/${post.slug}`}
							className="text-blue-500 hover:underline"
						>
							{post.title} - {post.date}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
};

export default BlogPage;
