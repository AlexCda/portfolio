import React from 'react';
import cielE from '../../assets/images/cielE.jpg';

const Hero = () => {
    return (
        <>
            <section id='home'>
    <div className="hero-container relative px-10 py-10 h-100vh">
        <img src={cielE} alt="ciel étoilé"
            className='w-full h-150 object-cover' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-20 max-w-2xl mx-auto'>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-[poppins] text-gray-300">I am a developer</h1>
            </div>
        </div>
    </div>
</section>
        </>

    );
};

export default Hero;