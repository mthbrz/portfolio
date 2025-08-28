  export function getImageHoverUrl(projet) {
  const imageHoverData = projet.ImageHover;

  if (!imageHoverData) return null; 

  return `http://localhost:1337${
    imageHoverData.formats?.medium?.url || imageHoverData.url
  }`;
}
