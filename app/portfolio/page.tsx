"use client";

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { ProjectCardProps } from "@/types/ProjectCardProps";
import { useState } from "react";

const projects = [
	{
		description:
			"A web app that helps Helldivers 2 players compare weapon stats against enemy armor values",
		imageSource: "/images/diverprep.png",
		links: [
			"https://github.com/modamo-gh/diverPrep",
			"https://diverprep.modamo.xyz/"
		],
		stack: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL"],
		title: "DiverPrep"
	},
	{
		description:
			"A mobile app that helps track events, discover new shows, and receive reminders of events",
		imageSource: "/images/spacedout.png",
		links: [
			"https://github.com/modamo-gh/spacedOut",
			"https://apps.apple.com/us/app/spaced%C3%B8ut/id6742281431"
		],
		stack: ["React Native", "Node.js", "Express", "PostgreSQL"],
		title: "S P A C E D O U T"
	},
	{
		description:
			"A Baltimore event aggregator",
		imageSource: "/images/bmoreToday.png",
		links: [
			"https://github.com/modamo-gh/bmoreToday",
			"https://bmoretoday.modamo.xyz/"
		],
		stack: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL"],
		title: "Bmore Today"
	}
];

const Portfolio = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<ProjectCardProps>();

	return (
		<main className="bg-gradient-to-br flex flex-col from-rose-600 h-screen relative to-purple-600 via-fuchsia-600 w-screen">
			<Navbar />
			<div className="grid grid-cols-3 gap-4 px-4 pt-4 flex-1 overflow-y-auto overflow-x-hidden">
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
			{isOpen && selectedProject && (
				<ProjectModal
					project={selectedProject}
					onClick={() => setIsOpen(false)}
				/>
			)}
		</main>
	);
};

export default Portfolio;
