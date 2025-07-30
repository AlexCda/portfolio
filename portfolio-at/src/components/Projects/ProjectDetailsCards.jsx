import { useContext } from 'react';
import SecondHeader from '../Header/SecondHeader';
import ProjectDetailsCard from './ProjectDetailsCard';
import { ProjectContext } from '../../contexts/ProjectContext';

const ProjectDetailsCards = () => {

    const { projects } = useContext(ProjectContext);

    return (
        <section id="projects" className="project-details-cards mt-5">
            {
                projects.map((project, index) => (
                    <div key={project.alt}>
                        {/* Ne pas afficher le composant secondHeader poiur le 1er élémeny */}
                        {index !== 0 && <SecondHeader key={project.title}/>}
                        <ProjectDetailsCard
                            key={index}
                            index={index + 1}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            alt={project.alt}
                            id={project.link}
                            date={project.date}
                            techs={project.technologies}
                            features={project.features}
                            link={project.link}
                            screenshots={project.screenshots}
                            url={project.url}
                        />

                    </div>

                ))
            }
        </section>
    );
};

export default ProjectDetailsCards;