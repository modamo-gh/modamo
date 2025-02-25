import Navbar from "@/components/Navbar";

const Portfolio = () => {
	return (
		<main className="bg-gradient-to-br from-rose-600 h-screen relative to-purple-600 via-fuchsia-600 w-screen">
			<Navbar />
			<div className="bg-cyan-500 grid grid-cols-3 gap-4 p-4 flex-1 h-96">
				<div className="bg-white h-40 w-full"></div>
				<div className="bg-white h-40 w-full"></div>
				<div className="bg-white h-40 w-full"></div>
			</div>
		</main>
	);
};

export default Portfolio;
