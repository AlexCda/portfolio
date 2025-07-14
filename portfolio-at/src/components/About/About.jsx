import photoAl from "../../assets/images/photo_al.png"

const About = () => {
    return (
        <section id="about" className="grid grid-cols-1 md:grid-cols-2 my-10 p-10">
            <div className="flex p-10 mx-10 justify-center items-center ">
                <img
                    src={photoAl}
                    alt="photo romy"
                    className="w-full max-w-[400px] h-auto rounded-bl-[100px] rounded-tr-[100px] "
                />
            </div>

            <div className="p-10 flex flex-col justify-center items-start border-black-300">
                <h1 className="font-[fauces] uppercase text-2xl md:text-5xl lg:text-7xl text-center lg:text-left">
                    à Propos
                </h1>
                <h2 className="meow text-5xl md:text-6xl lg:text-9xl font-extrabold text-center lg:text-left">Alexandre Teixeira</h2>
                <hr className="my-2 lg:my-4 border-t-2 border-black-300 w-full mx-auto border-yellow-500" />
                <p className="text-center text-base md:text-lg lg:text-xl lg:text-left uppercase">
                    Je suis Alexandre Teixeira, développeur, en pleine reconversion professionnelle ! Après avoir exploré d'autres horizons, je me suis enfin lancée dans l'univers du code! Passionnée par la lecture, l'écriture et les petites choses simples de la vie, j'apporte cette même touche de douceur et de créativité dans mes projets. Chaque jour est une nouvelle aventure d'apprentissage, et je suis enthousiaste à l'idée de créer des applications qui ont du sens. Si vous souhaitez travailler ensemble ou si vous avez juste envie de discuter de code, je suis là pour ça ! Let's get in touch !
                </p>
                <br />
                <p className="uppercase text-base md:text-lg lg:text-xl text-center font-semibold">PS: Je suis actuellement à le recherche d'un premier poste!</p>
            </div>
        </section>
    );
}

export default About;