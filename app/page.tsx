"use client";

import { motion } from "motion/react";

const Home = () => {
	return (
		<main className="bg-fuchsia-700 relative h-screen w-screen">
			<div className="absolute clip-triangle-top inset-0"></div>
			<div className="absolute clip-triangle-right inset-0"></div>
			<div className="absolute clip-triangle-bottom inset-0"></div>
			<div className="absolute clip-triangle-left inset-0"></div>
		</main>
	);
};

export default Home;
