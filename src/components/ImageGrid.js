import { createImageCard } from './ImageCard.js';

export function createImageGrid(photos) {
  const grid = document.createElement('div');
  grid.className = 'image-grid';

  photos.forEach((photo) => {
    const card = createImageCard(photo);
    grid.appendChild(card);
  });

  return grid;
}