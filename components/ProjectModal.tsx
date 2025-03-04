import { ProjectCardProps } from "@/types/ProjectCardProps";
import Image from "next/image";
import { FaX } from "react-icons/fa6";

const ProjectModal: React.FC<{
	project: ProjectCardProps;
	onClick: () => void;
}> = ({ project, onClick }) => {
	return (
		<div className="bg-fuchsia-700/90 border border-white fixed flex flex-col h-[80vh] gap-4 items-center left-1/2 p-8 rounded-lg top-1/2 w-[80vw] -translate-x-1/2 -translate-y-1/2">
			<div className="flex-[4] relative w-full">
				<Image
					alt={""}
					className="object-top object-cover rounded-lg"
					fill
					src={project.imageSource}
				/>
				<div className="absolute flex items-center justify-between p-2 text-3xl w-full">
					<div className="flex w-full">
						<h1 className="bg-purple-800/90 rounded-lg text-center p-2 w-fit">
							{project.title}
						</h1>
					</div>
					<div
						className="bg-purple-800/90 cursor-pointer hover:scale-110 p-2 rounded-lg transition"
						onClick={onClick}
					>
						<FaX />
					</div>
				</div>
			</div>
			<div className="bg-purple-800/90 flex flex-col flex-1 justify-between p-4 rounded-lg text-lg w-full">
				<div className="flex flex-row ">
					<p className="flex-1">Description:</p>
					<p className="flex-[4]">{project.description}</p>
				</div>
				<div className="flex flex-row">
					<p className="flex-1">Tech Stack:</p>
					<p className="flex-[4]">{project.stack.join(", ")}</p>
				</div>
				<div className="flex flex-row">
					<p className="flex-1">Github Repo:</p>
					<a
						className="flex-[4] hover:underline text-rose-100 hover:text-rose-300 transition"
						href={project.links[0]}
						rel="noopener noreferrer"
						target="_blank"
					>
						{project.links[0]}
					</a>
				</div>
				<div className="flex flex-row">
					<p className="flex-1">Live Site: </p>
					<a
						className="flex-[4] hover:underline text-rose-100 hover:text-rose-300 transition"
						href={project.links[1]}
						rel="noopener noreferrer"
						target="_blank"
					>
						{project.links[1]}
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;
