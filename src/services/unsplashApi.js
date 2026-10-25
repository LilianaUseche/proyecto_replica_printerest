//CONEXIÓN A UNSPLASH API
const ACCESS_KEY = 'nmhGpzriIprIDNnrzs_Es8rLuSR-5FD-sbr4cd-oUzc';
const BASE_URL = 'https://api.unsplash.com';

// OBTENER IMÁGENES AL CARGAR LA PÁGINA O HACER CLIC EN EL LOGO
export async function getInitialPhotos() {
  try {
    const response = await fetch(`${BASE_URL}/photos?per_page=30&client_id=${ACCESS_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener las fotos iniciales:', error);
    return [];
  }
}

// BUSCAR IMÁGENES SEGÚN LA CONSULTA
export async function searchPhotos(query) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/photos?query=${encodeURIComponent(query)}&per_page=30&client_id=${ACCESS_KEY}`
    );
    const data = await response.json();
    // LA API DE UNSPLASH DEVUELVE LOS RESULTADOS
    return data.results || [];
  } catch (error) {
    console.error('Error al buscar fotos:', error);
    return [];
  }
}