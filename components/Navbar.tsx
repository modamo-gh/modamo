import Link from "next/link";

const Navbar = () => {
	return (
		<div className="flex justify-end p-4 w-full">
			<Link href="/portfolio">
				<p className="text-lg">Portfolio</p>
			</Link>
		</div>
	);
};

export default Navbar;
