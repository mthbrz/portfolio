import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { MdWavingHand } from "react-icons/md";
import { FaHandPointRight, FaHandPointLeft } from "react-icons/fa6";

function Home() {
  return (
    <div className="h-full pt-20
        bg-purple-50 dark:bg-slate-950
        text-slate-950 dark:text-purple-50
        transition-colors duration-500">
      
      <main className="flex-grow text-3xl flex flex-col items-center justify-center gap-4">
        
        <div className="flex justify-center items-center gap-5">
          <h1>Salut, moi c'est <span className="text-purple-800 dark:text-purple-300">Mathilde</span></h1>
          <MdWavingHand className="text-3xl text-purple-800 dark:text-purple-300 transition-colors duration-500" />
        </div>

        <p>Je suis développeuse web.</p>
        <p>Je cherche une alternance pour la rentrée, ça vous dit ?</p>

        <p>
          On pourrait travailler ensemble pour créer des expériences utilisateur plus{" "}
          <span className="text-purple-800 dark:text-purple-300 transition-colors duration-500 inline-block text-left min-w-[12ch]">
            <TypeAnimation
              sequence={[
                "éthiques", 2500,
                "responsables", 2500,
                "innovantes", 2500,
                "accessibles", 2500,
                "cools", 2500,
                "humaines", 2500,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={190}
              deletionSpeed={170}
            />
          </span>
        </p>

        <Link to="/contact" className="hover:text-purple-800 hover:dark:text-purple-300 hover:-translate-x-4" aria-label="Aller à la page de contact">
          <div className="flex justify-center items-center gap-5">
            On en discute ?
            <FaHandPointLeft className="text-3xl text-purple-800 dark:text-purple-300 transition-colors duration-500" />
          </div>
        </Link>

        <Link to="/projects" className="hover:text-purple-800 hover:dark:text-purple-300 hover:translate-x-4" aria-label="Aller à la page des projets">
          <div className="flex justify-center items-center gap-5">
            Découvrez mes projets
            <FaHandPointRight className="text-3xl text-purple-800 dark:text-purple-300 transition-colors duration-500" />
          </div>
        </Link>
      </main>
    </div>
  );
}

export default Home;
