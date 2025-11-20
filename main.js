// Lightbox Gallery
const lightbox = GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  loop: true,
  zoomable: true,
});

// Smooth scroll offset for navbar
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.offsetTop - 70;
      window.scrollTo({top, behavior: 'smooth'});
    }
  });
});
