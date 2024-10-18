import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    image: string; // Propiedad para la imagen
    link: string;
}

const ProjectCard = ({ title, image, link }: ProjectCardProps) => {
    return (
        <div className="project-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Image 
                    src={image} // Asegúrate de que la ruta comience con /
                    alt={title} 
                    className="project-image" 
                    width={300} // Ajusta el ancho según lo necesites
                    height={200} // Ajusta la altura según lo necesites
                />
                <h2>{title}</h2>
            </a>
        </div>
    );
};

export default ProjectCard;
