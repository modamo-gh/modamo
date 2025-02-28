import { ProjectCardProps } from "@/types/ProjectCardProps";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard: React.FC<ProjectCardProps> = ({
	description,
	imageSource,
	links,
	key,
	stack,
	title
}) => {
	const badgeColors = ["bg-rose-600", "bg-fuchsia-600", "bg-purple-600"];

	return (
		<div
			key={key}
			className="bg-white/50 flex flex-col gap-2 backdrop-blur-lg rounded-lg h-96 text-white p-4"
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
					{links.map((link, index) =>
						link.includes("github") ? (
							<a
								aria-label="GitHub Repository"
								href={link}
								key={index}
								rel="noopener noreferrer"
								target="_blank"
							>
								<FaGithub className="text-2xl" />
							</a>
						) : (
							<a
								aria-label="Live Project"
								href={link}
								key={index}
								rel="noopener noreferrer"
								target="_blank"
							>
								<FaLink className="text-2xl" />
							</a>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
