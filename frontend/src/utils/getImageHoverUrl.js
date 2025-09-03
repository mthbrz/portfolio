import { BASE_URL } from "../config";
  
  export function getImageHoverUrl(projet) {
  const imageHoverData = projet.ImageHover;

  if (!imageHoverData) return null; 

  return `${BASE_URL}${
    imageHoverData.formats?.medium?.url || imageHoverData.url
  }`;
}
