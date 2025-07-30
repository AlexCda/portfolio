
import ProjectCard from './ProjectCard';
import { ProjectContext } from '../../contexts/ProjectContext';
import { useContext } from 'react';

const ProjectCards = () => {

    const { projects } = useContext(ProjectContext);

    // ---------------------------- RENDERING -----------------------------------

    return (
        <>

            <div className="flex items-center mt-7 px-10">
                <span className="flex-grow border-t-2 border-gray-300"></span>
                <h2 className="meow text-center text-4xl lg:text-6xl mx-4 sm:text-3xl md:text-6xl whitespace-nowrap">Un aperçu de mes projets ...</h2>
                <span className="flex-grow border-t-2 border-gray-300"></span>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-11 mt-10">

                {/* itération des cartes pour chacun des projets */}
                {
                    projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            alt={project.alt}
                            maxLength={140}
                            link={project.link}
                        />
                    ))
                }

            </div>
        </>

    );
};

export default ProjectCards;