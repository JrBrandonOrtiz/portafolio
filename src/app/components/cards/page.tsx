interface ProjectCardProps {
    title: string;
    image: string; // Agrega una propiedad para la imagen
    link: string;
}

const ProjectCard = ({ title, image, link }: ProjectCardProps) => {
    return (
        <div className="project-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} className="project-image" />
                <h2>{title}</h2>
            </a>
        </div>
    );
};

export default ProjectCard;
