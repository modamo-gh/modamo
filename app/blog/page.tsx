import Navbar from "@/components/Navbar";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

const BlogPage = () => {
	const posts = getAllPosts();

	return (
		<main className="bg-gradient-to-br flex flex-col from-rose-600 h-screen relative to-purple-600 via-fuchsia-600 w-screen">
			<Navbar />
			<div className="bg-white/50 flex flex-col rounded-lg h-full text-white p-4 m-4">
				<ul>
					{posts.map((post) => (
						<li key={post.slug} className="mb-2 text-2xl">
							<Link
								href={`/blog/${post.slug}`}
								className="hover:underline"
							>
								{post.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
};

export default BlogPage;
