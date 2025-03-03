"use client";

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { ProjectCardProps } from "@/types/ProjectCardProps";
import { useState } from "react";

const projects = [
	{
		description:
			"A web app that helps Helldivers 2 player compare weapon stats against enemy armor values",
		imageSource: "/images/diverprep.png",
		links: [
			"https://github.com/modamo-gh/diverPrep",
			"https://diverprep.modamo.xyz/"
		],
		stack: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL"],
		title: "DiverPrep"
	},
	{
		description: "Project description",
		imageSource: "/images/diverprep.png",
		links: [],
		stack: [],
		title: "abc"
	},
	{
		description: "Project description",
		imageSource: "/images/diverprep.png",
		links: [],
		stack: [],
		title: "xyz"
	}
];

const Portfolio = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<ProjectCardProps>();

	return (
		<main className="bg-gradient-to-br flex flex-col from-rose-600 h-screen relative to-purple-600 via-fuchsia-600 w-screen">
			<Navbar />
			<div className="grid grid-cols-3 gap-4 p-4 flex-1 overflow-y-auto overflow-x-hidden">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						onClick={() => {
							setSelectedProject(projects[index]);
							setIsOpen(true);
						}}
						{...project}
					/>
				))}
			</div>
			{isOpen && (
				<ProjectModal
					project={selectedProject}
					onClick={() => setIsOpen(false)}
				/>
			)}
		</main>
	);
};

export default Portfolio;
