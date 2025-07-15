import { useLocation } from 'react-router-dom';
import ProjectDetailsCards from '../../components/Projects/ProjectDetailsCards';
import React, { useEffect } from 'react';

const ProjectPage = () => {

  const location = useLocation();

  /**
   * Fait défiler la page jusqu'à l'élément dont l'ID correspond à l'ancrage dans l'URL.
   *
   * @param {Object} location - L'objet de l'emplacement
   */
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div>
      <ProjectDetailsCards />
    </div>
  );
}

export default ProjectPage;