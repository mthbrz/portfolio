import { BASE_URL } from "../services/config.js";

export function getImageUrl(projet) {
  if (!projet.image || projet.image.length === 0) return null;

  const imageData = projet.image[0];

  return `${BASE_URL}${
    imageData.formats?.medium?.url || imageData.url
  }`;
}
