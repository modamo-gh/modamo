import { ProjectCardProps } from "@/types/ProjectCardProps";
import Image from "next/image";

const ProjectCard: React.FC<ProjectCardProps> = ({
	description,
	imageSource,
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
			<div className="flex flex-col flex-1 justify-between">
				<h3>{title}</h3>
				<p className="italic">{description}</p>
				<div className="flex flex-row justify-around">
					{stack.map((tech, index) => (
						<p
							className={`bg-opacity-50 p-2 rounded-md ${
								badgeColors[index % badgeColors.length]
							}`}
						>
							{tech}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
