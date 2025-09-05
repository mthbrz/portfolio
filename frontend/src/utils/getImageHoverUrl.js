import { BASE_URL } from "../services/config.js";
  
  export function getImageHoverUrl(projet) {
  const imageHoverData = projet.ImageHover;

  if (!imageHoverData) return null; 

  return `${BASE_URL}${
    imageHoverData.formats?.medium?.url || imageHoverData.url
  }`;
}
