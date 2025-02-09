"use client";

import { motion } from "motion/react";
import { useState } from "react";

const containerVariants = {
	collapse: {
		transition: {
			duration: 1
		}
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 1
		}
	}
};

const itemVariants = {
	collapse: {
		opacity: 1,
		scale: 0,
		transition: { duration: 1 },
		x: 0,
		y: 0
	},
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 1
		}
	}
};

const Home = () => {
	const [collapse, setCollapse] = useState(false);

	return (
		<main className="bg-gradient-to-br from-rose-600 h-screen relative to-purple-600 via-fuchsia-600 w-screen">
			<motion.div
				animate={collapse ? "collapse" : "show"}
				id="segments"
				initial="hidden"
				onAnimationComplete={() => {
					setCollapse(true);
				}}
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

			{collapse && (
				<div className="flex flex-col h-full items-center justify-center w-full">
					<motion.img
						alt="Profile picture for Bryan May"
						animate={{ opacity: 1, scale: 1 }}
						className="h-80 w-80 rounded-full object-cover object-top ring-4 ring-white shadow-lg shadow-black/30"
						initial={{ opacity: 0, scale: 0 }}
						src="/images/profile.JPEG"
						transition={{ duration: 1 }}
					/>
					<motion.p
						className="font-semibold m-4 text-center text-lg text-white"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						{`Hi!👋🏾 I'm Bryan May, a developer from Baltimore. I spend
						my time building things, solving puzzles, and
						occasionally getting stuck on a climbing wall or in a
						great game.`}
					</motion.p>
				</div>
			)}
		</main>
	);
};

export default Home;
