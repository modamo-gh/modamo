import { ProjectCardProps } from "@/types/ProjectCardProps";
import { motion } from "framer-motion";

const ProjectModal: React.FC<{
	project: ProjectCardProps;
	onClick: () => void;
}> = ({ project, onClick }) => {
	return (
		<div className="fixed rounded-lg top-1/2 left-1/2 h-[80vh] w-[80vw] bg-cyan-500 -translate-x-1/2 -translate-y-1/2" onClick={onClick}></div>
	);
};

export default ProjectModal;
