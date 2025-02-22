// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
  // Navegação móvel
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');
  
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Rolagem suave para links âncora
  document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Carregamento preguiçoso de imagens
  const imagens = document.querySelectorAll('img[data-src]');
  const observadorImagem = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  imagens.forEach(img => observadorImagem.observe(img));

  // Animação ao rolar
  const animarAoRolar = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
      }
    });
  });

  document.querySelectorAll('.curso').forEach(el => {
    animarAoRolar.observe(el);
  });
});