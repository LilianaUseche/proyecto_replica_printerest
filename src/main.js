import './style.css';
import { getInitialPhotos, searchPhotos } from './services/unsplashApi.js';
import { createHeader } from './components/Header.js';
import { createImageGrid } from './components/ImageGrid.js';

const appContainer = document.querySelector('#app');

// FUNCIÓN PRINCIPAL PARA RENDERIZAR LA APP
async function renderApp(photos) {
  // LIMPIAR EL CONTENEDOR PRINCIPAL ANTES DE RENDERIZAR NUEVAMENTE
  appContainer.innerHTML = '';

  // CREAR Y AÑADIR EL HEADER
  const header = createHeader(
    async (query) => {
      // LLAMADA A LA API PARA BUSCAR FOTOS
      const results = await searchPhotos(query);
      updateGrid(results);
    },
    async () => {
      // LLAMADA A LA API PARA OBTENER FOTOS INICIALES
      const initialPhotos = await getInitialPhotos();
      updateGrid(initialPhotos);
    }
  );

  appContainer.appendChild(header);

  // CREAR Y AÑADIR EL GRID DE IMÁGENES
  const grid = createImageGrid(photos);
  appContainer.appendChild(grid);
}

// FUNCIÓN PARA ACTUALIZAR EL GRID DE IMÁGENES
function updateGrid(photos) {
  const existingGrid = appContainer.querySelector('.image-grid');
  const newGrid = createImageGrid(photos);
  
  if (existingGrid) {
    appContainer.replaceChild(newGrid, existingGrid);
  } else {
    appContainer.appendChild(newGrid);
  }
}

// INICIALIZAR LA APP CUANDO EL DOM ESTÉ LISTO
document.addEventListener('DOMContentLoaded', async () => {
  const initialPhotos = await getInitialPhotos();
  renderApp(initialPhotos);
});