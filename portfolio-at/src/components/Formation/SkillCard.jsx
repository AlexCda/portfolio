import React from "react";

const SkillCard = ({ skill }) => {
    return (
        <div className="relative flex items-start mb-8">
            <div className="ml-6 bg-white p-4 rounded-lg shadow-md border border-gray-100 flex-1">
                <h3 className="text-lg font-bold text-gray-800">{skill.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                    {skill.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillCard;