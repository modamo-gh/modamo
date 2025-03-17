import Link from "next/link";

const Navbar = () => {
	return (
		<div className="justify-end flex w-full">
			<div className="flex gap-4 justify-between px-4 pt-4 w-fit">
				<Link href="/blog">
					<p className="text-2xl">Blog</p>
				</Link>
				<Link href="/portfolio">
					<p className="text-2xl">Portfolio</p>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
