

import { createContext, useEffect, useState } from "react";
export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {

    // ---------------------------- HOOK ----------------------------------------

    const [projectData, setProjectData] = useState([]);
    const projects = projectData.projects || [];

    // ---------------------------- EFFECT --------------------------------------

    useEffect(() => {
        fetch("/data/projectData.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (projectData) {
                setProjectData(projectData);
            });
    }, []);

    return (
        <ProjectContext.Provider
            value={{ projects }}
        >
            {children}
        </ProjectContext.Provider>
    );

};