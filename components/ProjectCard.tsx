import { ProjectCardProps } from "@/types/ProjectCardProps";
import Image from "next/image";

const ProjectCard: React.FC<ProjectCardProps> = ({
    description,
	imageSource,
	key,
	title
}) => {
	return (
		<div
			key={key}
			className="bg-white/50 flex flex-col gap-2 backdrop-blur-lg rounded-lg h-80 text-white p-4"
		>
			<div className="relative w-full h-64">
				<Image
					alt={""}
					className="object-cover rounded-lg"
					fill
					src={imageSource}
				/>
			</div>
			<div className="flex-1">
				<h3>{title}</h3>
                <p className="italic">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
