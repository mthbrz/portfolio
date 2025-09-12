import { BASE_URL } from "./config.js";

export async function fetchProjets() {
  try {
    const url = (BASE_URL);

    const response = await fetch(url);
    const raw = await response.json();

    return raw.data;

  } catch (error) {
    console.error("Erreur fetchProjets:", error);
    return [];
  }
}

