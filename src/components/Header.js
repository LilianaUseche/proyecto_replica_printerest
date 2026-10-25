export function createHeader(onSearch, onLogoClick) {
  const headerElement = document.createElement('header');
  headerElement.className = 'main-header';
  
  headerElement.innerHTML = `
    <div class="header-left">
      <a href="#" id="logo" class="logo-container" title="Pinterest">
        <svg height="24" viewBox="0 0 24 24" width="24" fill="#e60023">
          <path d="M0 12c0 5.123 3.211 9.49 7.708 11.191-.107-.941-.205-2.385.04-3.413.222-.935 1.428-6.044 1.428-6.044s-.364-.729-.364-1.805c0-1.693.983-2.956 2.207-2.956 1.041 0 1.544.782 1.544 1.719 0 1.048-.668 2.613-1.012 4.065-.288 1.218.61 2.21 1.81 2.21 2.172 0 3.844-2.291 3.844-5.592 0-2.923-2.101-4.966-5.105-4.966-3.483 0-5.526 2.611-5.526 5.308 0 1.052.404 2.181.91 2.793.1.121.114.227.085.35-.09.379-.293 1.199-.334 1.363-.053.225-.172.271-.399.163-1.491-.693-2.425-2.875-2.425-4.629 0-3.768 2.738-7.232 7.892-7.232 4.146 0 7.369 2.954 7.369 6.906 0 4.122-2.601 7.442-6.212 7.442-1.213 0-2.353-.63-2.744-1.375l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12z"/>
        </svg>
      </a>
      <button class="nav-btn active">Inicio</button>
      <button class="nav-btn">Explorar</button>
      <button class="nav-btn">Crear</button>
    </div>

    <div class="header-center">
      <form id="search-form" class="search-form">
        <svg class="search-icon" aria-hidden="true" height="16" viewBox="0 0 24 24" width="16"><path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.71 4.29l-5.02-5.02C18.53 14.11 19 12.11 19 10c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.11 0 4.11-.47 5.76-1.31l5.02 5.02c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41z"/></svg>
        <input type="text" id="search-input" placeholder="Buscar" autocomplete="off" />
      </form>
    </div>

    <div class="header-right">
      <button class="icon-btn" title="Notificaciones">
        <svg aria-label="Notificaciones" class="gUZ B9n rBN" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M15.14 2c-3.13 0-5.67 2.54-5.67 5.67v1.16c0 .5-.2 1-.55 1.35l-2.12 2.12c-.78.78-1.22 1.84-1.22 2.95V17h16v-3.75c0-1.11-.44-2.17-1.22-2.95l-2.12-2.12c-.35-.35-.55-.85-.55-1.35V7.67C10.81 4.54 8.27 2 5.14 2zM12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"></path></svg>
      </button>
      <button class="icon-btn" title="Mensajes">
        <svg aria-label="Mensajes" class="gUZ B9n rBN" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.04L2 22l4.96-1.37C8.42 21.5 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.54 0-2.97-.42-4.21-1.15l-.3-.18-3.11.86.86-3.11-.18-.3C3.42 14.97 3 13.54 3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9z"></path></svg>
      </button>
      <div class="profile-avatar" title="Perfil">
        <span>LU</span>
      </div>
    </div>
  `;

  // Asignar eventos
  const logo = headerElement.querySelector('#logo');
  const form = headerElement.querySelector('#search-form');
  const input = headerElement.querySelector('#search-input');

  logo.addEventListener('click', (e) => {
    e.preventDefault();
    onLogoClick();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (query) {
      onSearch(query);
      input.value = '';
    }
  });

  return headerElement;
}