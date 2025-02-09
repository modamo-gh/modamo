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
		<main className="bg-fuchsia-700 flex items-center justify-center relative h-screen w-screen">
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
				<motion.img
					alt="Profile picture for Bryan May"
					animate={{ opacity: 1, scale: 1 }}
					className="h-80 rounded-full object-cover object-top w-80"
					initial={{ opacity: 0, scale: 0 }}
					src="/images/profile.JPEG"
					style={{backgroundSize: "contain"}}
					transition={{ duration: 1 }}
				/>
			)}
		</main>
	);
};

export default Home;
