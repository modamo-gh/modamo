"use client";

import { motion } from "motion/react";

const Home = () => {
	return (
		<main className="bg-fuchsia-700 relative h-screen w-screen">
			<div className="absolute bg-red-500 clip-triangle-top inset-0">
				<p></p>
			</div>
			<div className="absolute bg-yellow-500 clip-triangle-right inset-0">
				<p></p>
			</div>
			<div className="absolute bg-green-500 clip-triangle-bottom inset-0">
				<p></p>
			</div>
			<div className="absolute bg-blue-500 clip-triangle-left inset-0">
				<p></p>
			</div>
		</main>
	);
};

export default Home;
