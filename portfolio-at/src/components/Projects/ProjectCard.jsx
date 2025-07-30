import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, alt, link, maxLength }) => {

    /**
     * Tronque le texte donné à la longueur maximale spécifiée et ajoute une ellipse et un lien "En savoir plus" si le texte dépasse la longueur maximale.
     *
     * @param {string} text - Le texte à tronquer.
     * @param {number} maxLength - La longueur maximale du texte avant la troncature.
     * @returns {JSX.Element} Le texte tronqué avec une ellipse et un lien "En savoir plus" si nécessaire.
     */

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return (
                <span>
                    {text.substring(0, maxLength)}...
                    <span className='text-blue-500'>
                        <Link to={`/projects#${link}`}>En savoir plus</Link>
                    </span>
                </span>
            );
        };
    };

    return (
            <div className="p-4">
                <h3 className="description-lg font-semibold">{title}</h3>
                <Link to={`/projects#${link}`}>
                    <img src={image}
                        className='w-full h-auto object-cover rounded-md hover:saturate-200'
                        alt={alt}
                    />
                </Link>
                <p className="text-base md:text-lg mt-2">{truncateText(description, maxLength)}</p>
            </div>
    );
};
export default ProjectCard;

