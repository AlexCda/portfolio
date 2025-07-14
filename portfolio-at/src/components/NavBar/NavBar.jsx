import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import burger from '../../assets/pictos/burger.svg';

const Navbar = () => {

    /***** HOOK *****/
    const [scrolled, setScrolled] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [isOpen, setIsOpen] = useState(false); // Gère l'état du menu burger

    // Fonction de gestion du scroll
    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 300) {
            // On attend 300ms avant de changer d'état
            if (!timeoutId) {
                const id = setTimeout(() => {
                    setScrolled(true);
                }, 300);
                setTimeoutId(id);
            }

            //fermer le menu burger si scrolle
            if(isOpen) {
                setIsOpen(false);
            }
        } else {
            // Si on revient en haut, on revient à l'état inital
            if (timeoutId) {
                clearTimeout(timeoutId);
                setTimeoutId(null);
            }
            setScrolled(false);
        }
    };

    /***** EFFECT *****/

    // toggle du menu burger
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    //fermer le menu une fois un lien cliqué
    const closeMenu = () => {
        setIsOpen(false);
    }

    // Effet de gestion du scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId, isOpen]);

    /***** RENDERING *****/

    return (
        <>
            <div className='flex items-center justify-center'>
                {/* Icone burger */}
                <button
                    className="lg:hidden p-3 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <img src={burger} alt="icone menu burger" width="40" height="40" />
                </button>
            </div>

            {/* Navbar */}
            <nav
                className={`navbar sticky top-0 text-bold 
                            ${scrolled ? ' md:bg-amber-300 py-2 opacity-80 z-50' : ''} 
                            ${isOpen ? ' bg-white bg-opacity-70' : 'bg-transparent'}`
                }
            >
                <div className="navbar-container py-5">
                    <ul className={`nav-menu gap-2 flex flex-col lg:flex-row lg:justify-evenly items-center text-xl ${isOpen ? 'block' : 'hidden'} lg:flex`}>
                        <li className="nav-item hover:scale-110 active:text-blue-300 border-b-2 border-amber-500 md:border-none">
                            <Link to="/" className="nav-links" onClick={closeMenu}>
                                Accueil
                            </Link>
                        </li>
                        <li className="text-xl hidden md:block">|</li>
                        <li className="nav-item hover:scale-110 active:text-blue-300 border-b-2 border-amber-500 md:border-none">
                            <a href="/#about" className="nav-links" onClick={closeMenu}>
                                A propos
                            </a>
                        </li>
                        <li className="text-xl hidden md:block">|</li>
                        <li className="nav-item hover:scale-110 active:text-blue-300 border-b-2 border-amber-500 md:border-none">
                            <Link to="/formation" className="nav-links" onClick={closeMenu}>
                                Formation
                            </Link>
                        </li>
                        <li className="md:text-xl hidden md:block">|</li>
                        <li className="nav-item hover:scale-110 active:text-blue-300 border-b-2 border-amber-500 md:border-none">
                            <Link to="/projects" className="nav-links" onClick={closeMenu}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="text-xl hidden md:block">|</li>
                        <li className="nav-item hover:scale-110 active:text-blue-300 border-b-2 border-amber-500 md:border-none">
                            <Link to="/contact" className="nav-links" onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
