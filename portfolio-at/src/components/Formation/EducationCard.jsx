import React from "react";

const EducationCard = ({ education }) => {
    return (
        <div key={education.id} className="relative flex flex-col lg:flex-row lg:items-start mb-8">


            {/* Contenu combiné (image + carte) */}
            <div className="ml-0 lg:ml-6 flex-1 grid grid-cols-1 lg:grid-cols-3 gap-0 pb-5">


                {/* Carte avec contenu (2/3 de l'espace) */}
                <div className="lg:col-span-2 bg-white p-4 rounded-l-lg shadow-md border border-gray-100 h-full">
                    <h3 className="text-lg font-bold text-gray-800 ">{education.title}</h3>
                    <h4 className="text-md font-semibold text-gray-600">{education.school}</h4>
                    <p className="mt-2 text-gray-600">{education.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {education.skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Image (1/3 de l'espace) */}
                <div className="h-full flex items-center justify-center">
                    <img
                        src={education.image}
                        alt=""
                        className="w-full h-full object-cover rounded-r-lg"
                    />
                </div>
            </div>

            {/* Timeline avec dates */}
            <div className="relative flex flex-col lg:flex-row justify-center items-center w-full lg:w-auto">
                {/* Date de début */}
                <div className="text-base text-center lg:text-right lg:w-24 lg:text-lg font-medium">
                    {education.startDate}
                </div>

                {/* Timeline avec point */}
                <div className="relative flex-none mx-2 lg:mx-4 flex ">
                    <div className="absolute left-1/2 transform -translate-x-1/2 lg:h-150 h-full w-0.5 bg-black "></div>
                    <div className="relative h-4 w-4 lg:h-6 lg:w-6 rounded-full bg-amber-500 z-10"></div>
                </div>

                {/* Date de fin */}
                <div className="text-base text-center lg:text-left lg:w-24 lg:text-lg font-medium">
                    {education.endDate}
                </div>
            </div>
        </div>
    );
};

export default EducationCard;