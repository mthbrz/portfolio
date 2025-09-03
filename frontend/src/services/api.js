// const API_URL = "https://portfolio-backend-5uce.onrender.com"; 
const API_URL = import.meta.env.VITE_API_URL;


export async function fetchProjets() {
  try {
    const response = await fetch(`${API_URL}/api/projets?populate=*`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des projets");
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Erreur API fetchProjets:", error);
    return [];
  }
}

