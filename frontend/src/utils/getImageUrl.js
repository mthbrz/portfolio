// import { BASE_URL } from "../services/config.js";

// export function getImageUrl(projet) {
//   const imageData = projet?.attributes?.image?.data?.attributes;
//   if (!imageData) return null;

//   return `${BASE_URL}${imageData.formats?.medium?.url || imageData.url}`;
// }

function getImageUrl(image) {
  if (!image || !image.url) return "";

  let url = image.url;

  // Corrige l'oubli du ":" dans "https//"
  if (url.startsWith("https//")) {
    url = url.replace("https//", "https://");
  }

  if (url.startsWith("http")) {
    return url; // Cloudinary ou autre
  }

  return `${import.meta.env.VITE_BACKEND_URL}${url}`;
}

export { getImageUrl };