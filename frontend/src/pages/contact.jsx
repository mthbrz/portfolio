import "../components/css/input.css"
import React from "react";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

  export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7a0c7028-3e9e-4885-8122-b11131be56fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Merci pour votre message !");
      event.target.reset();
    } else {
      console.log("Désolé.e, il y a eu une erreur", data);
      setResult(data.message);
    }
  };


return (
  <>
    <div className="min-h-screen flex flex-col items-center justify-start pt-16
                    bg-purple-50 dark:bg-slate-950 
                    text-slate-950 dark:text-purple-50
                    transition-colors duration-500 px-4">
      
      <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-300 text-center mb-12">
        Contact
      </h1>
      <h2 className="text-3xl mb-1 text-center">Un projet ? Une demande ? Un café ?</h2>
      <h2 className="text-3xl mb-8 text-center">Vous pouvez me laisser un message, je me ferai un plaisir d'y répondre !</h2>

      <form 
        onSubmit={onSubmit} 
        className="flex flex-col gap-6 w-full max-w-xl bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-lg dark:shadow-md dark:shadow-purple-200"
      >
        <div className="flex flex-col text-slate-950 dark:text-purple-50 text-3xl">
          <label htmlFor="name" className="mb-2 font-medium">Nom :</label>
          <input 
            type="text" 
            name="name"
            id="name" 
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-gray-50 dark:bg-slate-800 text-slate-950 dark:text-purple-50
                       focus:outline-none focus:ring-2 focus:ring-purple-500
                       focus:shadow-lg focus:translate-y-[-2px]
                       transition-all duration-300"
          />
        </div>

        <div className="flex flex-col text-slate-950 dark:text-purple-50 text-3xl">
          <label htmlFor="email" className="mb-2 font-medium">Email :</label>
          <input 
            type="email" 
            name="email"
            id="email" 
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-gray-50 dark:bg-slate-800 text-slate-950 dark:text-purple-50
                       focus:outline-none focus:ring-2 focus:ring-purple-500
                       focus:shadow-lg focus:translate-y-[-2px]
                       transition-all duration-300"
          />
        </div>

        <div className="flex flex-col text-slate-950 dark:text-purple-50 text-3xl">
          <label htmlFor="message" className="mb-2 font-medium">Message :</label>
          <textarea 
            id="message"
            name="message"
            required 
            rows={6}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-gray-50 dark:bg-slate-800 text-slate-950 dark:text-purple-50
                       focus:outline-none focus:ring-2 focus:ring-purple-500
                       focus:shadow-lg focus:translate-y-[-2px]
                       transition-all duration-300 resize-none"
          ></textarea>
        </div>

        <button 
          type="submit"
          name="submit"
          className="mt-2 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                     text-purple-50 dark:text-slate-950 text-3xl rounded-xl shadow-lg 
                     bg-gradient-to-r from-purple-300 to-purple-800
                     dark:bg-gradient-to-r dark:from-purple-600 dark:to-purple-200
                     hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Envoyer
        </button>

        {result && <span className="text-center mt-2 text-purple-600 dark:text-purple-300">{result}</span>}
      </form>

          <div className="flex flex-col items-center md:items-start mdw-1/2 mt-10 text-3xl">
            <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">
              Vous pouvez aussi me contacter ici :
            </h2>
            <div className="flex gap-8 md:flex-col">
              <ul className="md:flex gap-10 mb-10">
              <li className="group flex items-center gap-3 transition-colors duration-300 mb-5">
                <FaLinkedin className="text-purple-800 dark:text-purple-300" />
                <a
                  href="https://www.linkedin.com/in/mathilde-bruzat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative decoration-transparent group-hover:decoration-inherit
                             after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                             after:bg-gradient-to-r after:from-purple-300 after:to-purple-800
                             group-hover:after:w-full after:transition-all after:duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li className="group flex items-center gap-3 transition-colors duration-300 mb-5">
                <FaGithub className="text-3xl text-purple-800 dark:text-purple-300" />
                <a
                  href="https://github.com/mthbrz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative decoration-transparent group-hover:decoration-inherit
                             after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                             after:bg-gradient-to-r after:from-purple-300 after:to-purple-800
                             group-hover:after:w-full after:transition-all after:duration-300"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-3 mb-5">
                <FaPhone className="text-3xl text-purple-800 dark:text-purple-300" />
                <span >06 17 78 01 16</span>
              </li>
            </ul>
            </div>
          </div>
    </div>
  </>
);
  }