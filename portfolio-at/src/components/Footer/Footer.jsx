import React from 'react';
import github from '../../assets/socials/github.svg';
import linkedin from '../../assets/socials/linkedin.svg';

const Footer = () => {
    return (
        <>
            <hr className="border-1 my-4 border-amber-500" />
            <footer className="flex flex-col items-center justify-center py-5">
                <div className="flex flex-col sm:flex-row gap-4 w-full items-center justify-center">
                    {/* <p className="text-center sm:text-left">Retrouvez-moi sur: </p> */}
                    <div className="flex gap-4">
                        <a href="https://github.com/AlexCda/">
                            <img
                                src={github}
                                alt="Logo Github"
                                className="w-10 h-10 sm:w-12 sm:h-12  hover:scale-110"
                            />
                        </a>
                        <a href='https://www.linkedin.com/in/alexandre-teixeira-0a4b63197'>
                            <img
                                src={linkedin}
                                alt="Logo Linkedin"
                                className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110"
                            />
                        </a>


                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
