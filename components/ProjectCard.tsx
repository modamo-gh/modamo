import { ProjectCardProps } from "@/types/ProjectCardProps";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

const ProjectCard: React.FC<ProjectCardProps> = ({
	description,
	imageSource,
	links,
	onClick,
	stack,
	title
}) => {
	const badgeColors = ["bg-rose-600", "bg-fuchsia-600", "bg-purple-600"];

	const getLinkWithIcon = (link: string, index: number) => {
		if (link.includes("github")) {
			return (
				<a
					aria-label="GitHub Repository"
					href={link}
					key={index}
					rel="noopener noreferrer"
					target="_blank"
				>
					<FaGithub className="text-2xl" />
				</a>
			);
		} else if (link.includes("apple")) {
			return (
				<a
					aria-label="App Store Link"
					href={link}
					key={index}
					rel="noopener noreferrer"
					target="_blank"
				>
					<FaApple className="text-2xl" />
				</a>
			);
		} else {
			return (
				<a
					aria-label="Live Project"
					href={link}
					key={index}
					rel="noopener noreferrer"
					target="_blank"
				>
					<FaLink className="text-2xl" />
				</a>
			);
		}
	};

	return (
		<div
			className="bg-white/50 cursor-pointer flex flex-col gap-2 backdrop-blur-lg rounded-lg h-96 text-white p-4 hover:scale-105"
			onClick={onClick}
		>
			<div className="relative w-full h-64">
				<Image
					alt={""}
					className="object-cover rounded-lg"
					fill
					src={imageSource}
				/>
			</div>
			<div className="flex flex-col flex-1 gap-2 justify-between">
				<h3>{title}</h3>
				<p className="italic">{description}</p>
				<div className="flex flex-row justify-around">
					{stack.map((tech, index) => (
						<p
							className={`bg-opacity-50 p-2 rounded-md ${
								badgeColors[index % badgeColors.length]
							}`}
							key={index}
						>
							{tech}
						</p>
					))}
				</div>
				<div className="flex flex-row justify-around">
					{links.map((link, index) => getLinkWithIcon(link, index))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
