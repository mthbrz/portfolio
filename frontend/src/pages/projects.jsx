import { useEffect, useState } from "react";
import { fetchProjets } from "../services/api";
import { getImageUrl } from "../utils/getImageUrl.js"; 
import { getImageHoverUrl } from "../utils/getImageHoverUrl.js";
import { getFirstUrl } from "../utils/getUrl.js";
import { FaRegPlayCircle, FaLink } from "react-icons/fa";


function Projets() {
  const [projets, setProjets] = useState([]);
  const [selectedTech, setSelectedTech] = useState("Tous");

  const allTechnos = Array.from(
    new Set(
      projets.flatMap(projet => 
        projet.Techno ? projet.Techno.split(",").map(t => t.trim()) : [] 
      )
    )
  );

  const filteredProjets = selectedTech === "Tous" 
    ? projets : projets.filter(projet =>
    projet.Techno && 
    projet.Techno.split(",").map(t => t.trim()).includes(selectedTech)
  );

  useEffect(() => {
    async function getData() {
      const data = await fetchProjets();
      setProjets(data);
    }
    getData();
  }, []);

  return (
    <div className="py-16 px-8
      bg-purple-50 dark:bg-slate-950
      text-slate-950 dark:text-purple-50
      transition-colors duration-500">
      
      <h1 className="text-4xl font-extrabold text-purple-800 dark:text-purple-300 text-center mb-12">
        Mes Projets
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button 
                aria-label="Afficher tous les projets"
                onClick={() => setSelectedTech("Tous")}
                className={`px-4 py-2 cursor-pointer rounded-lg text-sm font-medium transition-colors
                  ${selectedTech === "Tous" ? 
                    "bg-purple-800 text-white" : "bg-gray-200 text-gray-800"}
                `}
        >
          Tous
        </button>

        {allTechnos.map((tech) => (
          <button aria-label={`Afficher les projets utilisant ${tech}`}
                  key={tech} onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 cursor-pointer rounded-lg text-sm font-medium transition-colors
                    ${selectedTech === tech ? "bg-purple-800 text-white" : "bg-gray-200 text-gray-800"}
                  `}
          >
            {tech}  
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjets.map((projet) => (
          <div 
            key={projet.id} 
            className="w-full max-w-xl bg-white dark:bg-slate-800 
              rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-purple-500/30 
              transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col"
          >
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
              {projet.titre}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {Array.isArray(projet.description) 
                ? projet.description[0]?.children?.[0]?.text 
                : projet.description}
            </p>

            <div className="relative group w-full h-[250px] rounded-xl overflow-hidden mb-4">
              {getImageUrl(projet) ? (
                <img
                  src={getImageUrl(projet)}
                  alt={projet.titre}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  loading="lazy"
                />
              ) : (
                <p className="text-sm text-gray-400">Pas d’image</p>
              )}

              {getImageHoverUrl(projet) && (
                <img
                  src={getImageHoverUrl(projet)}
                  alt={projet.titre}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  loading="lazy"
                />
              )}
            </div>

            {projet.Techno && (
              <div className="flex flex-wrap gap-2 mb-4">
                {projet.Techno.split(",").map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-purple-900 dark:bg-purple-50 
                      text-purple-50 dark:text-purple-900 
                      text-sm rounded-full"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            )}

            <div className="flex gap-4 mt-auto">
              {getFirstUrl(projet.url) && (
                <a 
                  href={getFirstUrl(projet.url)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-600
                    text-purple-800 dark:text-purple-100
                    hover:bg-purple-200 dark:hover:bg-purple-500 
                    rounded-lg text-sm font-medium transition-colors
                    flex justify-center items-center gap-2"                >
                  <FaLink />
                  GitHub
                </a>
              )}
              {getFirstUrl(projet.demo) && (
                <a 
                  href={getFirstUrl(projet.demo)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-purple-700 dark:bg-purple-100
                    text-purple-100 dark:text-purple-800
                    hover:bg-purple-500 dark:hover:bg-purple-300 
                    rounded-lg text-sm font-medium transition-colors
                    flex justify-center items-center gap-2"
                >

                  <FaRegPlayCircle />
                   Démo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projets;
