export function createImageCard(photo) {
  const card = document.createElement('div');
  card.className = 'image-card';

  card.innerHTML = `
    <img src="${photo.urls.regular}" alt="${photo.alt_description || 'Pinterest Image'}" />
    <div class="user-info">
      <img class="user-avatar" src="${photo.user.profile_image.medium}" alt="${photo.user.name}" />
      <span class="user-name">${photo.user.name}</span>
    </div>
  `;

  return card;
}