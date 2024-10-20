import ProjectCard from '@/app/components/cards/ProjectCard'; 
import './projects.css';

const ProjectsPage = () => {
    const projects = [
        {
            title: 'Proyecto 1',
            image: '/images/proyecto1.jpg', 
            link: 'https://enlaceproyecto1.com',
        },
        {
            title: 'Proyecto 2',
            image: '/images/proyecto2.jpg', 
            link: 'https://enlaceproyecto2.com',
        },
        {
            title: 'Proyecto 3',
            image: '/images/proyecto3.jpg', 
            link: 'https://enlaceproyecto3.com',
        },
        {
            title: 'Proyecto 4',
            image: '/images/proyecto4.jpg', 
            link: 'https://enlaceproyecto4.com',
        },
        {
            title: 'Proyecto 5',
            image: '/images/proyecto5.jpg', 
            link: 'https://enlaceproyecto5.com',
        },
        {
            title: 'Proyecto 6',
            image: '/images/proyecto6.jpg', 
            link: 'https://enlaceproyecto6.com',
        },
    ];

    return (
        <div id="projects" className="container">
            <h1>Mis Proyectos</h1>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
