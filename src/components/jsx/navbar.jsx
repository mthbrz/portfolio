import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { LuSun, LuMoon } from "react-icons/lu";
import { TbLetterM, TbLetterB } from "react-icons/tb";


function Navbar() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link to={to} className="relative flex flex-col items-center px-2 hover:-translate-y-2">
        <span className="transition-transform duration-300">{children}</span>
        <span
          className={`absolute md:-bottom-5 -bottom-3 left-0 md:h-3 h-1 rounded-full 
                      bg-gradient-to-r from-purple-300 to-purple-800
                      dark:bg-gradient-to-r dark:from-purple-600 dark:to-purple-200
                      transition-all duration-300 ${isActive ? "w-full" : "w-0"}`}
        />
      </Link>
    );
  };

  return (
    <nav className="flex md:gap-10 lg:gap-20 mx-auto items-center justify-center p-2 md:p-4 md:text-4xl text-2xl
                    bg-purple-50 dark:bg-slate-950 
                    text-slate-950 dark:text-purple-50
                    transition-colors duration-500">
      
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/projects">Projets</NavLink>

      <Link to="/" className="flex items-center" aria-label="Retour à la page d'accueil">
        <TbLetterM className="text-purple-800 dark:text-purple-300 transition-colors duration-500 text-bold md:size-12 size-8"/>
        <TbLetterB className="text-purple-800 dark:text-purple-300 transition-colors duration-500 text-bold md:size-12 size-8"/>
      </Link>

      <NavLink to="/contact">Contact</NavLink>

        <div className="bg-purple-100 dark:bg-slate-800 p-1 md:p-2 rounded-xl">
          <button
            aria-label="Activer le thème clair"
            onClick={() => setTheme("light")}
            className="p-3 hover:bg-purple-200 dark:hover:bg-slate-700 rounded-lg"
          >
            <LuSun className="text-purple-800 dark:text-purple-300 transition-colors duration-500" />
          </button>
          <button
            aria-label="Activer le thème sombre"
            onClick={() => setTheme("dark")}
            className="p-3 hover:bg-purple-200 dark:hover:bg-slate-700 rounded-lg"
          >
            <LuMoon className="text-purple-800 dark:text-purple-300 transition-colors duration-500"/>
          </button>
        </div>
        
    </nav>
  );
}

export default Navbar;
