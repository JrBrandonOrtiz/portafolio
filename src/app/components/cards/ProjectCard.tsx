import Image from 'next/image';


interface ProjectCardProps {
    title: string;
    image: string;
    link: string;
}

const ProjectCard = ({ title, image, link }: ProjectCardProps) => {
    return (
        <div className="project-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Image 
                    src={image} 
                    alt={title} 
                    width={300} 
                    height={200} 
                    className="project-image" 
                    priority 
                />
                <h3 className="project-title">{title}</h3>
            </a>
        </div>
    );
};

export default ProjectCard;
