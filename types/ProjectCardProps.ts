export type ProjectCardProps = {
	description: string;
	imageSource: string;
	links: string[];
	key?: number;
	onClick?: () => void;
	stack: string[];
	title: string;
};
