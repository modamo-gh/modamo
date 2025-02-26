import Navbar from "@/components/Navbar";

const Portfolio = () => {
	return (
		<main className="bg-gradient-to-br flex flex-col from-rose-600 h-screen relative to-purple-600 via-fuchsia-600 w-screen">
			<Navbar />
			<div className="bg-cyan-500 grid grid-cols-3 gap-4 p-4 flex-1 overflow-y-auto overflow-x-hidden">
				{Array.from({ length: 12 }).map((_, index) => (
					<div key={index} className="bg-white h-80"></div>
				))}
			</div>
		</main>
	);
};

export default Portfolio;
