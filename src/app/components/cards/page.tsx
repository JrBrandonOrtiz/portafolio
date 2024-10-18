import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    image: string;
    link: string;
}

const ProjectCard = ({ title, image, link }: ProjectCardProps) => {
    return (
        <div className="project-card">
            <Image src={image} alt={title} width={300} height={200} />
            <h3>{title}</h3>
            <a href={link}>View Project</a>
        </div>
    );
};

export default ProjectCard;