const ProjectDetailsCard = ({ title, description, image, alt, index, link, date, techs, features, screenshots, url }) => {
    console.log(techs);
    return (
        <>
            <div className="flex flex-col  px-10 md:p-10 ">
                <div id={link} className="px-5 md:px-10">
                    <h2 className="uppercase font-bold text-4xl md:text-6xl">Projet-{index}</h2>
                    <span className="text-xl md:text-2xl">{date}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 my-5 gap-5">

                    {/* Capture de projet */}
                    <div className="flex justify-center">
                        <div className="grid grid-row-auto gap-2">
                            {screenshots && screenshots.length > 0 ?
                                (screenshots.map((screenshot, index) => (
                                    <img key={index} src={screenshot} alt={alt} className="rounded-md w-full max-w-lg md:hover:scale-100" />
                                ))
                                ) : <p>Aucun aperçu disponible</p>}

                        </div>
                    </div>

                    {/* Descritpion du projet*/}
                    <div className="flex flex-col px-5 md:px-10">
                        <h2 className="meow text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-bold mb-0 sm:mb-4">{title}</h2>
                        <hr className="mt-0 my-4 border-t-2 border-black-300 w-full sm:mx-auto" />
                        <p className="uppercase text-base text-center sm:text-lg md:text-xl md:text-left">{description}</p>
                        {url && (
                            <div className="text-center mt-4">
                                <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 uppercase underline">
                                    Voir le projet
                                </a>
                            </div>
                        )}

                        {/* Technolo utilisées*/}
                        <div className="flex flex-wrap gap-3 justify-center pt-5 ">
                            {techs.map((tech, index) => (
                                <img key={index} src={tech} className="w-10 h-10 sm:w-12 sm:h-12" />
                            ))}
                        </div>

                        {/* Features développées */}
                        <div className="mt-8 text-center sm:text-left md:text-left">
                            <h4 className="text-xl sm:text-2xl font-semibold">Fonctionnalités</h4>
                            <ul className="list-inside md:list-disc sm:text-2xl lg:text-6xl">
                                {features.map((feature, index) => (
                                    <li key={index} className="text-base sm:text-xl ">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsCard;
