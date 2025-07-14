import React, { useEffect, useState } from "react";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import SkillCard from "./SkillCard";

const CVTimeline = () => {
  const [education, setEducation] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data/cvData.json")
      .then(response => response.json())
      .then(data => {
        setEducation(data.education);
        setExperiences(data.experiences);
        setSkills(data.skills);
      });
  }, []);

  return (
    <>
      <section id="cv" className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:m-10 py-10 gap-8">
        {/* Experiences pro */}
        <div className="mb-6">
          <h2 className="meow text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-center lg:text-left whitespace-nowrap">Experiences professionnelles</h2>
          <hr className="border-1 border-amber-500 mt-2" />
          <div className="ml-4 my-6">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>

        {/* Formation */}
        <div className="mb-6">
          <h2 className="meow text-5xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-center lg:text-left">Formation</h2>
          <hr className="border-1 border-amber-500 mt-2" />
          <div className="ml-4 my-6">
            {education.map((edu, index) => (
              <EducationCard key={index} education={edu} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills par thématique */}
      <div className="max-w-4xl mx-auto p-4 lg:p-6 bg-gray-50 rounded-xl">
        <div className="mb-12">
          <h2 className="meow text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-700 border-b-2 pb-2">Compétences</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CVTimeline;
