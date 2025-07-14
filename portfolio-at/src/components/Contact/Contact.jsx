import React from 'react';
import contact from '../../assets/images/contact.jpg';
import email from "../../assets/socials/email.png";
import localisateur from "../../assets/socials/localisateur.png"
import linkedin from "../../assets/socials/linkedin.svg"
import github from "../../assets/socials/github.svg"

const Contact = () => {
    return (
        <section id="contact" className="flex items-center justify-center my-10">
            <div className="bg-yellow-500 shadow-lg rounded-lg p-8 text-center w-full mx-36">
                <hr className="border-1 mb-4" />
                <div className="flex items-center justify-center mb-4">
                    <h2 className="font-[poppins] text-6xl lg:text-6xl">C</h2>
                    <span className="meow text-5xl lg:text-6xl">O</span>
                    <h2 className="font-[poppins] text-5xl lg:text-6xl">NTACT</h2>
                </div>
                <hr className="border-1 mb-4" />
                <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                        <img src={contact} alt="lune et nuages" className="w-sm p-10 hover:saturate-150" />
                    </div>
                    <div className="flex flex-col justify-center ">
                        <div className="flex flex-inline py-2">
                            <img src={email} alt="picto email" width="40"  />
                            <p className="uppercase lg:text-3xl">teixeiraalexandre@proton.me</p>
                        </div>
                        <div className="flex flex-inline py-2">
                            <img src={localisateur} alt="picto localisation" width="40"  />
                            <p className="uppercase lg:text-3xl" >Strasbourg, Bas-Rhin</p>
                        </div>
                        <div className="py-4">
                            <p className="meow text-center md:text-right md:text-5xl lg:text-6xl">A bientôt !</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Contact;