import { BASE_URL } from "../services/config.js";

export function getImageUrl(projet) {
  const imageData = projet?.attributes?.image?.data?.attributes;
  if (!imageData) return null;

  return `${BASE_URL}${imageData.formats?.medium?.url || imageData.url}`;
}
