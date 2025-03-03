import { ProjectCardProps } from "@/types/ProjectCardProps";
import Image from "next/image";

const ProjectModal: React.FC<{
	project: ProjectCardProps;
	onClick: () => void;
}> = ({ project, onClick }) => {
	return (
		<div className="fixed rounded-lg top-1/2 left-1/2 h-[80vh] w-[80vw] bg-red-500 -translate-x-1/2 -translate-y-1/2 flex flex-col" onClick={onClick}>
			<h1>{project.title}</h1>
			<div className="flex-[4] relative w-full h-64">
				<Image
					alt={""}
					className="object-contain rounded-lg"
					fill
					src={project.imageSource}
				/>
			</div>
			<div className="flex-1 bg-teal-500">
			</div>
		</div>
	);
};

export default ProjectModal;
