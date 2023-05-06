// Smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    for (const link of links) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      });
    }
  });
  