"use client";

import { motion } from "motion/react";

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 1
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 1
		}
	}
};

const Home = () => {
	return (
		<main className="bg-fuchsia-700 relative h-screen w-screen">
			<motion.div
				animate="show"
				initial="hidden"
				variants={containerVariants}
			>
				<motion.div
					className="absolute clip-triangle-top inset-0"
					variants={itemVariants}
				></motion.div>
				<motion.div
					className="absolute clip-triangle-right inset-0"
					variants={itemVariants}
				></motion.div>
				<motion.div
					className="absolute clip-triangle-bottom inset-0"
					variants={itemVariants}
				></motion.div>
				<motion.div
					className="absolute clip-triangle-left inset-0"
					variants={itemVariants}
				></motion.div>
			</motion.div>
		</main>
	);
};

export default Home;
